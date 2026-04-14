export default function robots() {
  // Replace this with your client's actual live domain once you have it
  const baseUrl = 'https://www.rosaryglobal.com';

  return {
    rules: {
      userAgent: '*', // The asterisk means "all search engine bots"
      allow: '/',     // Allow them to crawl every page
      disallow: '/api/', // Keep them out of your backend routes
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Tells Google exactly where to find your map
  };
}