import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
  slug: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    image: string;
    cardImage: string;
    description: string;
    tags?: string[];
  };
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content,
    frontmatter: data as Post['frontmatter'],
  };
}

export function getAllPosts(): Post[] {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (new Date(post1.frontmatter.date).getTime() > new Date(post2.frontmatter.date).getTime() ? -1 : 1));
  return posts;
}
