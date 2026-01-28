import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modivi.group'
  
  const routes = [
    '',
    '/business',
    '/about',
    '/our-work',
    '/solutions',
    '/contact',
    '/terms',
    '/privacy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/business' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' || route === '/business' ? 1.0 : 0.8,
  }))
}
