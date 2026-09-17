import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

import { SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blog';
import { getAllSpaPageSlugs, getAllCities } from '@/lib/spa-locations';
import { appGuides } from '@/data/app-guides.data';
import { getAllTemplates, templateSlug } from '@/lib/templates';
import { alternativesData } from '@/data/alternatives.data';

const subVerticalPages = [
  '/solutions/cannabis/delivery/', '/solutions/cannabis/dispensaries/', '/solutions/cannabis/growth-facilities/', '/solutions/cannabis/processing/',
  '/solutions/corporate-finance/banks/', '/solutions/corporate-finance/clinics/', '/solutions/corporate-finance/manufacturing/', '/solutions/corporate-finance/meeting-rooms/', '/solutions/corporate-finance/offices/', '/solutions/corporate-finance/warehouses/',
  '/solutions/education-public/community-centers/', '/solutions/education-public/events-arenas/', '/solutions/education-public/government/', '/solutions/education-public/k12/', '/solutions/education-public/museums/', '/solutions/education-public/universities/',
  '/solutions/food-hospitality/bars-nightclubs/', '/solutions/food-hospitality/casual-dining/', '/solutions/food-hospitality/coffee-shops-cafes/', '/solutions/food-hospitality/fine-dining/', '/solutions/food-hospitality/food-trucks/', '/solutions/food-hospitality/pizzerias/', '/solutions/food-hospitality/qsr/',
  '/solutions/retail/auto-dealerships/', '/solutions/retail/pharmacies/', '/solutions/retail/real-estate/', '/solutions/retail/shopping-malls/', '/solutions/retail/stores/', '/solutions/retail/supermarkets/',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    '/templates/',
    '/alternatives/',
    '/solutions/',
    '/solutions/food-hospitality/',
    '/solutions/retail/',
    '/solutions/corporate-finance/',
    '/solutions/education-public/',
    '/solutions/cannabis/',
    '/guides/',
    '/guides/apps/',
    ...subVerticalPages,
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

  // Generate routes for all app guides
  const appGuideRoutes = appGuides.map((app) => ({
    url: `${SITE_URL}/guides/apps/${app.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Generate routes for every template detail page (e.g., /templates/pizza-menuboard-40)
  const templates = await getAllTemplates();
  const templateRoutes = templates.map((t) => ({
    url: `${SITE_URL}/templates/${templateSlug(t)}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Competitor "alternative to" pages (e.g., /alternatives/yodeck)
  const alternativeRoutes = alternativesData.map((c) => ({
    url: `${SITE_URL}/alternatives/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPageRoutes,
    ...blogPostRoutes,
    ...spaLocationRoutes,
    ...cityLandingPageRoutes,
    ...appGuideRoutes,
    ...templateRoutes,
    ...alternativeRoutes,
  ];
}
