'use client'

import { useEffect } from 'react'

interface VoiceSearchData {
  title: string
  description: string
  questions: string[]
  answers: string[]
  instructions: string[]
  faqData: Array<{
    question: string
    answer: string
  }>
}

export default function VoiceSearchOptimization({
  title,
  description,
  questions,
  answers,
  instructions,
  faqData
}: VoiceSearchData) {
  useEffect(() => {
    // Schema para busca por voz e zero clique
    const voiceSearchSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": typeof window !== 'undefined' ? window.location.href : '',
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "name": title,
          "description": description,
          "inLanguage": "pt-BR",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://saude-bem-estar.com/#website",
            "name": "Saúde & Bem-Estar",
            "url": "https://saude-bem-estar.com",
            "description": "Plataforma líder em conteúdo de saúde e bem-estar"
          },
          "about": {
            "@type": "Thing",
            "name": "Saúde",
            "description": "Informações sobre saúde e bem-estar"
          },
          "mentions": questions.map(q => ({
            "@type": "Thing",
            "name": q
          })),
          "mainEntity": {
            "@type": "Question",
            "name": questions[0],
            "acceptedAnswer": {
              "@type": "Answer",
              "text": answers[0]
            }
          }
        },
        // FAQ Schema para zero clique
        {
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        },
        // HowTo Schema para instruções passo a passo
        {
          "@type": "HowTo",
          "name": `Como ${title.toLowerCase()}`,
          "description": description,
          "image": typeof window !== 'undefined' ? `${window.location.origin}/artigo-energia-natural.jpg` : '/artigo-energia-natural.jpg',
          "totalTime": "PT15M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "BRL",
            "value": "0"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Água"
            },
            {
              "@type": "HowToSupply", 
              "name": "Alimentos nutritivos"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Material de exercício"
            }
          ],
          "step": instructions.map((instruction, index) => ({
            "@type": "HowToStep",
            "name": `Passo ${index + 1}`,
            "text": instruction,
            "image": typeof window !== 'undefined' ? `${window.location.origin}/artigo-energia-natural.jpg` : '/artigo-energia-natural.jpg',
            "url": typeof window !== 'undefined' ? `${window.location.href}#passo-${index + 1}` : '#passo-1'
          }))
        }
      ]
    }

    // Adicionar schema ao head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'voice-search-schema'
    script.textContent = JSON.stringify(voiceSearchSchema, null, 2)
    document.head.appendChild(script)

    // Adicionar metadados para busca por voz
    const existingMeta = document.querySelector('meta[name="voice-search"]')
    if (!existingMeta) {
      const meta = document.createElement('meta')
      meta.name = 'voice-search'
      meta.content = questions.join('; ')
      document.head.appendChild(meta)
    }

    // Adicionar instruções estruturadas no conteúdo
    const addStructuredInstructions = () => {
      const content = document.querySelector('.prose')
      if (content) {
        instructions.forEach((instruction, index) => {
          const stepElement = document.createElement('div')
          stepElement.id = `passo-${index + 1}`
          stepElement.className = 'step-instruction mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500'
          stepElement.innerHTML = `
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                ${index + 1}
              </span>
              <div>
                <h4 class="font-semibold text-blue-900 mb-1">Passo ${index + 1}</h4>
                <p class="text-blue-800">${instruction}</p>
              </div>
            </div>
          `
          content.appendChild(stepElement)
        })
      }
    }

    // Adicionar seção de Perguntas e Respostas Rápidas
    const addQuickFAQ = () => {
      const existingFAQ = document.querySelector('.quick-voice-faq')
      if (!existingFAQ && faqData.length > 0) {
        const faqSection = document.createElement('section')
        faqSection.className = 'quick-voice-faq mb-8'
        faqSection.innerHTML = `
          <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
              <span class="text-2xl">🎤</span>
              Perguntas Comuns (Busca por Voz)
            </h3>
            <div class="space-y-3">
              ${faqData.slice(0, 3).map(faq => `
                <div class="bg-white rounded-lg p-4 shadow-sm">
                  <p class="font-medium text-gray-900 mb-2">"${faq.question}"</p>
                  <p class="text-gray-600 text-sm">${faq.answer}</p>
                </div>
              `).join('')}
            </div>
            <p class="text-sm text-gray-500 mt-4 text-center">
              💡 Dica: Use comandos como "Ok Google", "Hey Siri" ou "Alexa" para fazer estas perguntas
            </p>
          </div>
        `
        
        const mainContent = document.querySelector('main')
        if (mainContent) {
          mainContent.insertBefore(faqSection, mainContent.firstChild)
        }
      }
    }

    // Adicionar dados estruturados para zero clique
    const addZeroClickData = () => {
      const zeroClickSection = document.createElement('div')
      zeroClickSection.className = 'zero-click-data hidden'
      zeroClickSection.innerHTML = `
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            ${questions.map((q, index) => `
              {
                "@type": "Question",
                "position": ${index + 1},
                "name": "${q}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "${answers[index] || 'Consulte nosso guia completo para mais informações.'}"
                }
              }
            `).join(',')}
          ]
        }
        </script>
      `
      document.body.appendChild(zeroClickSection)
    }

    // Executar otimizações
    setTimeout(() => {
      addStructuredInstructions()
      addQuickFAQ()
      addZeroClickData()
    }, 100)

    // Cleanup
    return () => {
      const script = document.getElementById('voice-search-schema')
      if (script) script.remove()
      
      const meta = document.querySelector('meta[name="voice-search"]')
      if (meta) meta.remove()
      
      const zeroClick = document.querySelector('.zero-click-data')
      if (zeroClick) zeroClick.remove()
    }
  }, [title, description, questions, answers, instructions, faqData])

  return null
}