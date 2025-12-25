import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { PostCard } from '@/components/blog/PostCard';
import { PageHeader } from '@/components/shared/PageHeader';

const pageTitle = `Blog | ${SITE_NAME}`;
const pageDescription = 'The latest news, tips, and insights on digital signage, marketing, and business growth from the DigitalSigns.ai team.';
const pageUrl = `${SITE_URL}/blog/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        title="Digital Signage Insights"
        subtitle={pageDescription}
      />
      <div className="container mt-12 sm:mt-16">
        {/* Featured Post */}
        {featuredPost && (
          <article className="mb-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Link href={`/blog/${featuredPost.slug}/`} aria-label={featuredPost.frontmatter.title}>
              <Image
                src={featuredPost.frontmatter.image}
                alt={featuredPost.frontmatter.description}
                width={1200}
                height={600}
                className="w-full rounded-xl shadow-lg aspect-video object-cover"
                priority
              />
            </Link>
            <div>
              <p className="text-sm text-primary font-semibold">Featured Article</p>
              <h1 className="font-headline mt-2 text-3xl lg:text-4xl font-bold leading-tight">
                <Link href={`/blog/${featuredPost.slug}/`} className="hover:text-primary transition-colors">{featuredPost.frontmatter.title}</Link>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {featuredPost.frontmatter.description}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                By {featuredPost.frontmatter.author} on <time dateTime={featuredPost.frontmatter.date}>
                  {format(new Date(featuredPost.frontmatter.date), 'MMMM d, yyyy')}
                </time>
              </p>
            </div>
          </article>
        )}

        {/* Other Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
