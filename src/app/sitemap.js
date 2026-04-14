export default function sitemap() {
  // Replace this with your client's actual live domain
  const baseUrl = 'https://www.rosaryglobal.com';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // The homepage is the highest priority (1.0)
    },
    {
      url: `${baseUrl}/fleet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // Important, but slightly less than the homepage
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Daily because new reviews get added!
      priority: 0.9, 
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Contact info rarely changes
      priority: 0.8, // Standard priority for essential company pages
    },
  ];
}
