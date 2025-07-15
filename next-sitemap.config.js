/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio-orcin-two-87.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
  exclude: ['/admin'],
};
