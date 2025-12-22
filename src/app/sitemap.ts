import { MetadataRoute } from 'next';
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
    '/pizza-menuboard/',
    '/cafe-menuboard/',
    '/burger-menuboard/',
    '/cannabis-dispensary-menu/',
    '/qsr-menuboard/',
    '/terms-and-conditions/',
    '/privacy-policy/',
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
