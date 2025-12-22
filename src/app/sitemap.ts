import { MetadataRoute } from 'next'

// Mock data - será substituído por dados do banco
const posts = [
  { slug: 'aumentar-energia-naturalmente', updatedAt: '2024-01-15' },
  { slug: 'fortalecer-imunidade-alimentos', updatedAt: '2024-01-14' },
  { slug: 'longevidade-habitos-saudaveis', updatedAt: '2024-01-13' },
  { slug: 'menopausa-qualidade-vida', updatedAt: '2024-01-12' },
  { slug: 'sono-qualidade-saude', updatedAt: '2024-01-11' },
  { slug: 'ossos-musculos-saudaveis', updatedAt: '2024-01-10' },
  { slug: 'vitaminas-essenciais', updatedAt: '2024-01-09' },
  { slug: 'cabelo-pele-unha-saudaveis', updatedAt: '2024-01-08' }
]

const categories = [
  { slug: 'energia', updatedAt: '2024-01-15' },
  { slug: 'imunidade', updatedAt: '2024-01-14' },
  { slug: 'longevidade', updatedAt: '2024-01-13' },
  { slug: 'menopausa', updatedAt: '2024-01-12' },
  { slug: 'sono-bem-estar', updatedAt: '2024-01-11' },
  { slug: 'ossos-musculos', updatedAt: '2024-01-10' },
  { slug: 'vitaminas-minerais', updatedAt: '2024-01-09' },
  { slug: 'cabelo-pele-unha', updatedAt: '2024-01-08' }
]

const authors = [
  { slug: 'dra-ana-silva', updatedAt: '2024-01-15' },
  { slug: 'dr-carlos-mendes', updatedAt: '2024-01-14' },
  { slug: 'dra-maria-costa', updatedAt: '2024-01-13' },
  { slug: 'dr-roberto-oliveira', updatedAt: '2024-01-12' },
  { slug: 'dra-paula-santos', updatedAt: '2024-01-11' }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saude-bem-estar.com'

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/categorias`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/autores`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Páginas de posts
  const postPages = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Páginas de categorias
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categoria/${category.slug}`,
    lastModified: new Date(category.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Páginas de autores
  const authorPages = authors.map((author) => ({
    url: `${baseUrl}/autor/${author.slug}`,
    lastModified: new Date(author.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...postPages, ...categoryPages, ...authorPages]
}