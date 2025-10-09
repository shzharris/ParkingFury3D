const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.parkingfury3d.win';

const staticRoutes = [
  {
    loc: `${SITE_URL}/`,
    changefreq: 'daily',
    priority: '1.0',
  },
  {
    loc: `${SITE_URL}/privacy`,
    changefreq: 'monthly',
    priority: '0.5',
  },
];

export function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
    .map(
      (route) => `  <url>
    <loc>${route.loc}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>\n`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}


