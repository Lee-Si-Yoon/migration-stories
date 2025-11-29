/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.migrationstoriesproject.net/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [
    '/server-sitemap.xml', // Exclude dynamic sitemap
    '/22/video', // Exclude video list pages (only include specific videos)
    '/23/video',
    '/22/about', // Exclude base about pages (only include language-specific)
    '/23/about',
    '/22/program', // Exclude base program page (only include specific programs)
    '/23/program',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add dynamic sitemap if needed in the future
      // `${process.env.SITE_URL || 'https://migrationstories.kr'}/server-sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Home page gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }
    // Year landing pages
    else if (path === '/22' || path === '/23') {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Main exhibition pages (wander, credit)
    else if (path.includes('/wander') || path.includes('/credit')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // About pages with languages
    else if (path.includes('/about/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    // Video pages
    else if (path.includes('/video/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    // Program pages (2023 only)
    else if (path.includes('/program/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
