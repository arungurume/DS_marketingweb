import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogPostRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    '/',
    '/about-us-ds/',
    '/free-digital-signage/',
    '/amazon-signage-stick-cms/',
    '/amazon-signage-stick/',
    '/how-to-setup-amazon-signage-stick/',
    '/pizza-menuboard/',
    '/cafe-menuboard/',
    '/burger-menuboard/',
    '/cannabis-dispensary-menu/',
    '/qsr-menuboard/',
    '/terms-and-conditions/',
    '/privacy-policy/',
    '/gdpr/',
    '/blog/',
    '/pricing/',
  ];

  const staticPageRoutes = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1.0 : 0.9,
  }));

  return [...staticPageRoutes, ...blogPostRoutes];
}
