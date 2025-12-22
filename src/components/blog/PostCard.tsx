import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Post } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}/`} aria-label={post.frontmatter.title}>
        <Image
          src={post.frontmatter.cardImage || post.frontmatter.image}
          alt={post.frontmatter.title}
          width={400}
          height={250}
          className="w-full object-cover aspect-video"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-headline text-xl font-bold leading-snug">
          <Link href={`/blog/${post.slug}/`} className="hover:text-primary transition-colors">{post.frontmatter.title}</Link>
        </h2>
        <p className="mt-3 text-muted-foreground line-clamp-3 flex-grow">
          {post.frontmatter.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <time
            dateTime={post.frontmatter.date}
            className="text-sm text-muted-foreground"
          >
            {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
          </time>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/blog/${post.slug}/`}>
              Read more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
