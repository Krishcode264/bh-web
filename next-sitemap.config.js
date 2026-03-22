/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://web.rallyo.online',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7, // Set priority to 1.0 for homepage
      lastmod: new Date().toISOString(),
    };
  },
};