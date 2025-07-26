/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.gitateknoloji.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://www.gitateknoloji.com/sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/api/*', '/components/*', '/home'],
  changefreq: 'weekly',
  priority: 0.7,
  // Yeni sayfalar için özel öncelikler
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/hizmetler': 0.9,
      '/cozumler': 0.9,
      '/yazilimlar': 0.8,
      '/cozum-ortaklari': 0.7,
      '/iletisim': 0.8,
      '/sss': 0.6,
      '/blog': 0.7,
      '/blog/proxmox-sanallastirma-cozumu': 0.6,
      '/blog/veeam-backup-cozumleri': 0.6,
      '/blog/zabbix-izleme-sistemi': 0.6,
      '/blog/password-reset-cozumu': 0.6,
      '/blog/xcitium-antivirus-cozumu': 0.6,
      '/blog/yapisal-kablolama-rehberi': 0.6,
      '/blog/cctv-guvenlik-sistemi': 0.6,
      '/blog/linux-sunucu-cozumleri': 0.6,
    };
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
} 