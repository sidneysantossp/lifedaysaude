'use client'

import { useEffect } from 'react'

interface HealthArticleSchema {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  image: string
  url: string
  medicalSpecialty: string
  about: string[]
  mentions?: string[]
}

interface HealthOrganizationSchema {
  name: string
  url: string
  logo: string
  description: string
  address?: string
  telephone?: string
  sameAs: string[]
}

interface FAQSchema {
  questions: Array<{
    question: string
    answer: string
  }>
}

interface MedicalWebPageSchema {
  name: string
  description: string
  url: string
  lastReviewed: string
  reviewedBy: string
  mainContentOfPage: {
    about: string[]
    audience: string
    medicalAudience: string
  }
}

export default function HealthSchema({
  articleSchema,
  organizationSchema,
  faqSchema,
  medicalWebPageSchema
}: {
  articleSchema?: HealthArticleSchema
  organizationSchema?: HealthOrganizationSchema
  faqSchema?: FAQSchema
  medicalWebPageSchema?: MedicalWebPageSchema
}) {
  useEffect(() => {
    const schemas = []

    // Article Schema para conteúdo de saúde
    if (articleSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": ["Article", "MedicalArticle"],
        "headline": articleSchema.title,
        "description": articleSchema.description,
        "author": {
          "@type": "Person",
          "name": articleSchema.author,
          "url": `https://saude-bem-estar.com/autor/${articleSchema.author.toLowerCase().replace(/\s+/g, '-')}`
        },
        "publisher": {
          "@type": "Organization",
          "name": "Saúde & Bem-Estar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://saude-bem-estar.com/logo.png"
          }
        },
        "datePublished": articleSchema.datePublished,
        "dateModified": articleSchema.dateModified,
        "image": {
          "@type": "ImageObject",
          "url": articleSchema.image,
          "width": 1440,
          "height": 720
        },
        "url": articleSchema.url,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": articleSchema.url
        },
        "medicalSpecialty": articleSchema.medicalSpecialty,
        "about": articleSchema.about.map(topic => ({
          "@type": "Thing",
          "name": topic
        })),
        "mentions": articleSchema.mentions?.map(mention => ({
          "@type": "Thing",
          "name": mention
        })),
        "articleSection": "Saúde e Bem-Estar",
        "wordCount": 1500,
        "isAccessibleForFree": true,
        "isPartOf": {
          "@type": ["CreativeWorkSeries", "Website"],
          "name": "Blog Saúde & Bem-Estar",
          "url": "https://saude-bem-estar.com"
        }
      })
    }

    // Organization Schema para autoridade médica
    if (organizationSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": ["Organization", "MedicalOrganization"],
        "name": organizationSchema.name,
        "url": organizationSchema.url,
        "logo": {
          "@type": "ImageObject",
          "url": organizationSchema.logo,
          "width": 512,
          "height": 512
        },
        "description": organizationSchema.description,
        "address": organizationSchema.address ? {
          "@type": "PostalAddress",
          "addressCountry": "BR"
        } : undefined,
        "telephone": organizationSchema.telephone,
        "sameAs": organizationSchema.sameAs,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": organizationSchema.telephone,
          "contactType": "customer service",
          "availableLanguage": ["Portuguese"]
        },
        "areaServed": {
          "@type": "Country",
          "name": "Brazil"
        },
        "knowsAbout": [
          "Medicina",
          "Nutrição",
          "Bem-estar",
          "Suplementação",
          "Saúde Integrativa"
        ],
        "award": ["Plataforma de Conteúdo Médico Verificado 2024"],
        "brand": {
          "@type": "Brand",
          "name": "Saúde & Bem-Estar",
          "slogan": "Sua jornada para uma vida mais saudável"
        }
      })
    }

    // FAQ Schema para perguntas médicas
    if (faqSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.questions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      })
    }

    // MedicalWebPage Schema para páginas médicas
    if (medicalWebPageSchema) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": ["WebPage", "MedicalWebPage"],
        "name": medicalWebPageSchema.name,
        "description": medicalWebPageSchema.description,
        "url": medicalWebPageSchema.url,
        "lastReviewed": medicalWebPageSchema.lastReviewed,
        "reviewedBy": {
          "@type": "Person",
          "name": medicalWebPageSchema.reviewedBy,
          "url": `https://saude-bem-estar.com/autor/${medicalWebPageSchema.reviewedBy.toLowerCase().replace(/\s+/g, '-')}`
        },
        "mainContentOfPage": {
          "@type": "MedicalWebPageElement",
          "about": medicalWebPageSchema.mainContentOfPage.about.map(topic => ({
            "@type": "Thing",
            "name": topic
          })),
          "audience": {
            "@type": "Audience",
            "audienceType": medicalWebPageSchema.mainContentOfPage.audience
          },
          "medicalAudience": medicalWebPageSchema.mainContentOfPage.medicalAudience
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Saúde"
          },
          {
            "@type": "Thing", 
            "name": "Bem-Estar"
          }
        ],
        "specialty": "Medicina Geral",
        "audience": {
          "@type": "Audience",
          "audienceType": "Pacientes e interessados em saúde"
        }
      })
    }

    // Adicionar todos os schemas ao head
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `health-schema-${index}`
      script.textContent = JSON.stringify(schema, null, 2)
      document.head.appendChild(script)
    })

    // Cleanup ao desmontar
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`health-schema-${index}`)
        if (script) {
          script.remove()
        }
      })
    }
  }, [articleSchema, organizationSchema, faqSchema, medicalWebPageSchema])

  return null
}