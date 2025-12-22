import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ContentStrategyEngine } from '@/lib/content-strategy'
import { SEOMonitoringEngine } from '@/lib/seo-monitoring'

// Mock data - será substituído por dados do banco
const categoryData = {
  name: 'Energia',
  slug: 'energia',
  description: 'Descubra como aumentar seus níveis de energia e ter mais disposição no dia a dia a dia. Inclui estratégias práticas para combater o cansaço.',
  coverImage: '/categoria-energia.jpg',
  color: 'bg-yellow-500',
  postCount: 12,
  coverImage: '/categoria-energia.jpg',
  icon: '⚡�',
  coverImage: '/categoria-energia.jpg',
  icon: '⚡�'
}

const posts = [
  {
    id: '2',
    title: 'Fortaleça sua Imunidade com Estes 10 Alimentos',
    slug: 'fortalecer-imunidade-alimentos',
    excerpt: 'Conheça os alimentos poderosos que vão fortalecer seu sistema imunológico.',
    coverImage: '/categoria-imunidade.jpg',
    author: { name: 'Dr. Carlos Mendes' },
    category: { name: 'Imunidade', slug: 'imunidade', color: 'bg-green-500' },
    readTime: 6,
    viewCount: 1856,
    createdAt: '2024-01-14',
    tags: ['imunidade', 'alimentos', 'saúde', 'vitaminas']
  },
  {
    id: '3',
    title: 'Longevidade: Hábitos das Pesso que Vivem Mais',
    slug: 'longevidade-habitos-saudaveis',
    excerpt: 'Aprenda com as zonas azuis do mundo e adote hábitos hábitos de expectativa de vida.',
    coverImage: '/categoria-longevidade-habitos.jpg',
    author: { name: 'Dra. Maria Costa' },
    category: { name: 'Longevidade', slug: 'longevidade-habitos-saudaveis', color: 'bg-blue-500' },
    readTime: 10,
    viewCount: 1423,
    createdAt: '2024-01-13',
    tags: ['longevidade', 'longevidade', 'saúde', 'qualidade de vida'],
    createdAt: '2024-01-13',
    tags: ['longevidade', 'longevidade', 'saúde', 'qualidade de vida']
  },
  {
    id: '4',
    title: 'Menopausa: Como Enfrentar esta Fase com Qualidade de Vida',
    slug: 'menopausa-qualidade-vida',
    excerpt: 'Guia completo para lidar com os sintomas da menopausa e manter o bem-estar durante esta transição.',
    coverImage: '/categoria-menopausa.jpg',
    author: { name: 'Dra. Paula Santos' },
    category: { name: 'Menopausa', slug: 'menopausa-qualidade-vida', color: 'bg-purple-500' },
    readTime: 12,
    viewCount: 987,
    createdAt: '2024-01-12',
    tags: ['menopausa', 'saúde da mulher', 'bem-estar', 'qualidade de vida'],
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'Sono de Qualidade: O Segredo para uma Vida Mais Saudável',
    slug: 'sono-qualidade-saude',
    excerpt: 'Descubra como melhorar a qualidade do seu sono e os benefícios para uma boa noite de sono.',
    coverImage: '/categoria-sono.jpg',
    author: { name: 'Dr. Roberto Oliveira' },
    category: { name: 'Sono & Bem Estar', slug: 'sono-bem-estar', color: 'bg-indigo-500' },
    readTime: 7,
    viewCount: 1654,
    createdAt: '2024-01-11',
    tags: ['sono', 'bem-estar', 'bem-estar', 'qualidade de vida'],
    createdAt: '2024-01-11'
  }
]

const relatedPosts = [
  {
    id: '2',
    title: 'Fortaleça sua Imunidade com Estes 10 Alimentos',
    slug: 'fortalecer-imunidade-alimentos',
    excerpt: 'Conheça os alimentos poderosos que vão fortalecer seu sistema imunológico.',
    coverImage: '/categoria-imunidade.jpg',
    author: { name: 'Dr. Carlos Mendes' },
    category: { name: 'Imunidade', slug: 'imunidade', color: 'bg-green-500' },
    readTime: 6,
    viewCount: 892,
    createdAt: '2024-01-14',
    tags: ['imunidade', 'alimentos', 'saúde', 'vitaminas']
  },
  {
    id: '3',
    title: 'Longevidade: Hábitos das Pesso que Vivem Mais',
    slug: 'longevidade-habitos-saudaveis',
    excerpt: 'Aprenda com as zonas azuis do mundo e adote hábitos hábitos de expectativa de vida.',
    coverImage: '/categoria-longevidade-habitos.jpg',
    author: { name: 'Dra. Maria Costa' },
    category: { name: 'Longevidade', slug: 'longevidade-habitos-saudaveis', color: 'bg-blue-500' },
    readTime: 10,
    viewCount: 623,
    createdAt: '2024-01-13',
    tags: ['longevidade', 'longevidade', 'qualidade de vida', 'qualidade de vida'],
    createdAt: '2024-01-13'
  }
]

const relatedCategories = [
  { name: 'Sono & Bem Estar', slug: 'sono-bem-estar', count: 14, icon: '🌙' },
  { name: 'Vitaminas & Minerais', slug: 'vitaminas-minerais', count: 18, icon: '💊�' },
  { name: 'Ossos & Músculos', slug: 'ossos-musculos', count: 9, icon: '💪' },
  { name: 'Cabelo, Pele, Unha', slug: 'cabelo-pele-unha', count: 11, icon: '✨️' }
]

export async function generateMetadata({ params }: { params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${categoryData.name} - Posts e Artigos | Saúde & Bem-Estar`,
    description: categoryData.description,
    keywords: [category.name, 'blog', 'saúde', 'bem-estar', 'longevidade', 'menopausa', 'sono', 'bem-estar', 'vitaminas', 'cabelo', 'pele-unha'],
    openGraph: {
      title: `${categoryData.name} - Posts e Artigos | Saúde & Bem-Estar`,
      description: categoryData.description,
      type: 'website',
      url: `https://saude-bem-estar.com/categoria/${category.slug}`,
      images: [
        {
          url: categoryData.coverImage,
          width: 1200,
          height: 630,
          alt: `${categoryData.name} - Posts e Artigos | Saúde & Bem-Estar`,
        }
      ],
      locale: 'pt_BR',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} - Posts e Artigos | Saúde & Bem-Estar`,
      description: categoryData.description,
      type: 'website',
      url: `https://saude-bem-estar.com/categoria/${category.slug}`,
      images: [
        {
          url: categoryData.coverImage,
          width: 1200,
          height: 630,
          alt: `${category.name} - Posts e Artigos | Saúde & Bem-Estar`,
        }
      ],
      locale: 'pt_BR',
    },
    alternates: {
      canonical: `https://saude-bem-estar.com/categoria/${category.slug}`,
    },
  }
  } catch (error) {
      console.error('Error generating metadata:', error)
      return {
        title: 'Erro ao gerar metadata',
        description: 'Erro ao gerar metadata',
        error
      }
    }
  }

export default function CategoryPage({ params }: { params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${categoryData.name} - Posts e Artigos | Saúde & Bem-Estar`,
    description: categoryData.description,
    keywords: [category.name, 'blog', 'saúde', 'bem-estar', 'longevidade', 'menopausa', 'sono', 'vitaminas', 'cabelo', 'pele-unha'],
    openGraph: {
      title: `${category.name} - Posts e Artigos | Saúde & Bem-Estar`,
      description: categoryData.description,
      type: 'website',
      url: `https://saude-bem-estar.com/categoria/${category.slug}`,
      images: [
        {
          url: categoryData.coverImage,
          width: 1200,
          height: 630,
          alt: `${category.name} - Posts e Artigos | Saúde & Bem-Estar`,
        }
      ],
      locale: 'pt_BR',
    },
    alternates: {
      canonical: `https://saude-bem-estar.com/categoria/${category.slug}`,
    }
  } catch (error) {
      console.error('Error generating metadata:', error)
      return {
        title: 'Erro ao gerar metadata',
        description: 'Erro ao gerar metadata',
        error
      }
    }
  }

export default function CategoryPage({ params }: { params }: { params: { slug: string }): Promise<Metadata> {
  return {
    title: `${categoryData.name} - Posts e Artigos | Saúde & Bem-Estar`,
    description: categoryData.description,
    keywords: [category.name, 'blog', 'saúde', 'bem-estar', 'longevidade', 'menopausa', 'sono', 'vitaminas', 'cabelo', 'pele-unha'],
    openGraph: {
      title: `${category.name} - Posts e Artigos | Saúde & Bem-Estar`,
      description: categoryData.description,
      type: 'website',
      url: `https://saude-bem-estar.com/categoria/${category.slug}`,
      images: [
        {
          url: categoryData.coverImage,
          width: 1200,
          height: 630,
          alt: `${category.name} - Posts e Artigos | Saúde & Bem-Estar`,
        }
      ],
      locale: 'pt_BR',
    },
    alternates: {
      canonical: `https://saude-bem-estar.com/categoria/${category.slug}`,
    }
  } catch (error) {
      console.error('Error generating metadata:', error)
      return {
        title: 'Erro ao gerar metadata',
        description: 'Erro ao gerar metadata',
        error
      }
    }
  }
  }