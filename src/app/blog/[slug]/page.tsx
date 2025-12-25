import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, type Post } from '@/lib/blog';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import type { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { compileMDX } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';
import { PostCard } from '@/components/blog/PostCard';
import { Badge } from '@/components/ui/badge';
import { Seo } from '@/components/shared/Seo';
import type { Article } from 'schema-dts';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }
  const { title, description, image, date, author } = post.frontmatter;
  const url = `${SITE_URL}/blog/${post.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: date,
      authors: [author],
      images: [
        {
          url: image,
          width: 1200,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const getJsonLd = (post: Post): Article => {
    const { title, description, image, date, author } = post.frontmatter;
    const url = `${SITE_URL}/blog/${post.slug}/`;

    return {
        '@type': 'Article',
        headline: title,
        description,
        image,
        datePublished: date,
        author: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`,
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const { content, frontmatter } = post;
  const { title, date, author, image, tags, description } = frontmatter;
  const components = useMDXComponents({});

  const { content: mdxContent } = await compileMDX({
    source: content,
    components,
    options: {
      parseFrontmatter: false,
    },
  });

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug) // Exclude the current post
    .slice(0, 3); // Get the 3 latest posts as related

  const jsonLd = getJsonLd(post);

  return (
    <>
      <Seo schema={{ '@context': 'https://schema.org', ...jsonLd }} />
      <article>
        {/* Hero Section */}
        <header className="relative h-[400px] sm:h-[500px] w-full">
          <Image
            src={image}
            alt={description || title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
            <div className="container max-w-4xl mx-auto">
              <h1 className="font-headline text-3xl sm:text-5xl font-bold">
                {title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span>By {author}</span>
                <span className="h-1 w-1 rounded-full bg-gray-400" />
                <time dateTime={date}>
                  {format(new Date(date), 'MMMM d, yyyy')}
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="container max-w-4xl mx-auto py-8 sm:py-16">
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            {mdxContent}
          </div>
          
          {tags && tags.length > 0 && (
             <div className="mt-8 border-t pt-8">
                <h3 className="font-headline text-lg font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>
                    ))}
                </div>
             </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-24 bg-primary/5">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold text-center text-primary">
                    Continue Reading
                </h2>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedPosts.map(relatedPost => (
                        <PostCard key={relatedPost.slug} post={relatedPost} />
                    ))}
                </div>
            </div>
        </section>
      )}
    </>
  );
}
