import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
import { getAllSpaPageSlugs, getAllCities } from '@/lib/spa-locations';

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
    '/about-us/',
    '/free-digital-signage/',
    '/amazon-signage-stick-cms/',
    '/amazon-signage-stick/',
    '/how-to-setup-amazon-signage-stick/',
    '/pizza-menuboard/',
    '/cafe-menuboard/',
    '/burger-menuboard/',
    '/cannabis-dispensary-menu/',
    '/qsr-menuboard/',
    '/spa-digital-signage/',
    '/terms-and-conditions/',
    '/privacy-policy/',
    '/gdpr/',
    '/blog/',
    '/pricing/',
    '/solutions/',
    '/solutions/food-hospitality/',
    '/solutions/retail/',
    '/solutions/corporate-finance/',
    '/solutions/education-public/',
    '/solutions/cannabis/',
  ];

  const staticPageRoutes = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1.0 : 0.9,
  }));

  // Generate routes for all individual spa pages (e.g., /spa-digital-signage/day-spa-in-barcelona)
  const spaPageSlugs = getAllSpaPageSlugs();
  const spaLocationRoutes = spaPageSlugs.map(({ slug }) => ({
    url: `${SITE_URL}/spa-digital-signage/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generate routes for all city landing pages (e.g., /spa-digital-signage/barcelona)
  const cities = getAllCities();
  const cityLandingPageRoutes = cities.map(city => ({
    url: `${SITE_URL}/spa-digital-signage/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPageRoutes, ...blogPostRoutes, ...spaLocationRoutes, ...cityLandingPageRoutes];
}
