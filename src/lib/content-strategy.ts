interface SeasonalContent {
  month: string
  season: 'spring' | 'summer' | 'fall' | 'winter'
  topics: Array<{
    title: string
    keywords: string[]
    contentType: 'article' | 'guide' | 'infographic' | 'video'
    priority: 'high' | 'medium' | 'low'
    targetAudience: string[]
  }>
  healthEvents: Array<{
    name: string
    date: string
    duration: string
    contentIdeas: string[]
  }>
}

interface TrendingTopic {
  topic: string
  category: string
  searchVolume: number
  growth: number
  competition: 'low' | 'medium' | 'high'
  seasonality: 'year-round' | 'seasonal'
  relatedKeywords: string[]
  contentAngles: string[]
}

export class ContentStrategyEngine {
  private seasonalCalendar: Map<string, SeasonalContent>
  private trendingTopics: TrendingTopic[]

  constructor() {
    this.seasonalCalendar = new Map()
    this.trendingTopics = []
    this.initializeSeasonalCalendar()
  }

  private initializeSeasonalCalendar() {
    // Janeiro - Verão (Hemisfério Sul)
    this.seasonalCalendar.set('janeiro', {
      month: 'Janeiro',
      season: 'summer',
      topics: [
        {
          title: 'Plano de Detox para o Verão',
          keywords: ['detox verão', 'limpeza corporal', 'emagrecimento verão'],
          contentType: 'guide',
          priority: 'high',
          targetAudience: ['mulheres 25-45', 'interessados em bem-estar']
        },
        {
          title: 'Exercícios ao Ar Livre no Calor',
          keywords: ['exercícios verão', 'atividade física calor', 'treino ao ar livre'],
          contentType: 'article',
          priority: 'high',
          targetAudience: ['praticantes de exercícios', 'público geral']
        },
        {
          title: 'Alimentos Refrescantes para Hidratação',
          keywords: ['alimentos hidratantes', 'comidas verão', 'receitas refrescantes'],
          contentType: 'infographic',
          priority: 'medium',
          targetAudience: ['interessados em nutrição', 'público geral']
        }
      ],
      healthEvents: [
        {
          name: 'Janeiro Branco - Mês de Prevenção do Câncer de Pele',
          date: '01/01',
          duration: '31 dias',
          contentIdeas: [
            'Guia completo de proteção solar',
            'Tipos de câncer de pele e prevenção',
            'Produtos de proteção solar recomendados',
            'Autoexame da pele passo a passo'
          ]
        }
      ]
    })

    // Fevereiro - Verão
    this.seasonalCalendar.set('fevereiro', {
      month: 'Fevereiro',
      season: 'summer',
      topics: [
        {
          title: 'Saúde do Coração no Verão',
          keywords: ['saúde coração verão', 'exercícios cardio calor', 'cuidados cardíacos'],
          contentType: 'article',
          priority: 'high',
          targetAudience: ['pessoas com problemas cardíacos', 'público geral']
        },
        {
          title: 'Carnaval: Como Curtir sem Culpa na Saúde',
          keywords: ['carnaval saudável', 'dicas carnaval', 'moderação festa'],
          contentType: 'guide',
          priority: 'medium',
          targetAudience: ['jovens', 'adultos jovens']
        }
      ],
      healthEvents: [
        {
          name: 'Dia Mundial do Câncer - 04/02',
          date: '04/02',
          duration: '1 dia',
          contentIdeas: [
            'Tipos de câncer mais comuns no Brasil',
            'Prevenção e detecção precoce',
            'Histórias de superação'
          ]
        }
      ]
    })

    // Março - Outono
    this.seasonalCalendar.set('marco', {
      month: 'Março',
      season: 'fall',
      topics: [
        {
          title: 'Transição para o Outono: Adapte sua Rotina',
          keywords: ['transição outono', 'mudança estação saúde', 'rotina outono'],
          contentType: 'article',
          priority: 'high',
          targetAudience: ['público geral']
        },
        {
          title: 'Alimentos da Estação para Imunidade',
          keywords: ['alimentos outono', 'frutas outono', 'imunidade estação'],
          contentType: 'guide',
          priority: 'high',
          targetAudience: ['interessados em nutrição']
        }
      ],
      healthEvents: [
        {
          name: 'Dia Mundial da Nutrição - 16/03',
          date: '16/03',
          duration: '1 dia',
          contentIdeas: [
            'Tendências da nutrição para 2024',
            'Mitos e verdades sobre dietas',
            'Como montar um prato saudável'
          ]
        }
      ]
    })

    // Abril - Outono
    this.seasonalCalendar.set('abril', {
      month: 'Abril',
      season: 'fall',
      topics: [
        {
          title: 'Saúde Mental no Outono: Como Lidar com o Clima',
          keywords: ['saúde mental outono', 'depressão sazonal', 'clima humor'],
          contentType: 'article',
          priority: 'high',
          targetAudience: ['pessoas com depressão', 'público geral']
        },
        {
          title: 'Vacinação: Calendário Outono-Inverno',
          keywords: ['vacinação outono', 'calendário vacinal', 'gripe'],
          contentType: 'guide',
          priority: 'high',
          targetAudience: ['famílias', 'idosos', 'grupos de risco']
        }
      ],
      healthEvents: [
        {
          name: 'Abril Azul - Mês de Conscientização sobre Autismo - 02/04',
          date: '02/04',
          duration: '30 dias',
          contentIdeas: [
            'Sinais de autismo em diferentes idades',
            'Como incluir pessoas com autismo',
            'Recursos para famílias',
            'Histórias de sucesso'
          ]
        }
      ]
    })

    // Maio - Inverno
    this.seasonalCalendar.set('maio', {
      month: 'Maio',
      season: 'winter',
      topics: [
        {
          title: 'Fortaleça Imunológica para o Inverno',
          keywords: ['imunidade inverno', 'fortalecer defesas', 'prevenir doenças inverno'],
          contentType: 'guide',
          priority: 'high',
          targetAudience: ['famílias', 'idosos', 'pessoas com baixa imunidade']
        },
        {
          title: 'Exercícios em Casa para o Frio',
          keywords: ['exercícios casa frio', 'treino inverno', 'atividades físicas internas'],
          contentType: 'video',
          priority: 'high',
          targetAudience: ['praticantes de exercícios', 'público geral']
        }
      ],
      healthEvents: [
        {
          name: 'Dia Mundial da Saúde - 07/04',
          date: '07/04',
          duration: '1 dia',
          contentIdeas: [
            'Tema da OMS deste ano',
            'Desafios globais de saúde',
            'Como contribuir para um mundo mais saudável'
          ]
        },
        {
          name: 'Dia Nacional de Combate ao Câncer - 08/05',
          date: '08/05',
          duration: '1 dia',
          contentIdeas: [
            'Avanços no tratamento do câncer',
            'Prevenção e estilo de vida',
            'Apoio a pacientes e familiares'
          ]
        }
      ]
    })

    // Junho - Inverno
    this.seasonalCalendar.set('junho', {
      month: 'Junho',
      season: 'winter',
      topics: [
        {
          title: 'Mês dos Idosos: Cuidados Essenciais',
          keywords: ['mês idosos', 'saúde terceira idade', 'cuidados idosos junho'],
          contentType: 'guide',
          priority: 'high',
          targetAudience: ['idosos', 'cuidadores', 'familiares']
        },
        {
          title: 'Vacinação contra Gripe: Tudo que Precisa Saber',
          keywords: ['vacina gripe', 'tipos vacina', 'onde vacinar'],
          contentType: 'article',
          priority: 'high',
          targetAudience: ['público geral']
        }
      ],
      healthEvents: [
        {
          name: 'Dia Mundial dos Doadores de Sangue - 14/06',
          date: '14/06',
          duration: '1 dia',
          contentIdeas: [
            'Importância da doação de sangue',
            'Requisitos para doar',
            'Onde e como doar'
          ]
        }
      ]
    })
  }

  // Gerar calendário de conteúdo sazonal
  generateSeasonalCalendar(months: number = 6): {
    calendar: SeasonalContent[]
    recommendations: string[]
    contentPlan: Array<{
      week: number
      month: string
      topics: string[]
      priority: string[]
    }>
  } {
    const months = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho']
    const calendar: SeasonalContent[] = []
    const contentPlan = []

    months.forEach((month, index) => {
      const monthData = this.seasonalCalendar.get(month)
      if (monthData) {
        calendar.push(monthData)
        
        // Dividir o mês em semanas
        const weeksInMonth = 4
        for (let week = 1; week <= weeksInMonth; week++) {
          contentPlan.push({
            week,
            month,
            topics: monthData.topics.slice(0, 2).map(t => t.title),
            priority: monthData.topics.slice(0, 2).map(t => t.priority)
          })
        }
      }
    })

    return {
      calendar,
      recommendations: [
        'Planeje conteúdo com 2 meses de antecedência',
        'Crie conteúdo evergreen complementar',
        'Monitore tendências de busca sazonal',
        'Aproveite eventos de saúde mensais',
        'Adapte o tom para cada estação'
      ],
      contentPlan
    }
  }

  // Identificar tópicos em alta
  async identifyTrendingTopics(): Promise<TrendingTopic[]> {
    try {
      const prompt = `
        Identifique os tópicos mais em alta em saúde e bem-estar no Brasil atualmente.

        CRITÉRIOS:
        - Tendências de busca crescentes
        - Assuntos com potencial viral
        - Tópicos sazonais relevantes
        - Preocupações atuais de saúde
        - Interesse do público geral
        - Potencial de compartilhamento

        CATEGORIAS:
        - Saúde mental e bem-estar
        - Nutrição e alimentação saudável
        - Exercícios e fitness
        - Saúde da mulher
        - Saúde do homem
        - Longevidade e envelhecimento
        - Prevenção de doenças
        - Tratamentos naturais
        - Tecnologia em saúde

        FORNEÇA:
        - 15 tópicos em alta
        - Volume de busca estimado
        - Taxa de crescimento
        - Nível de competição
        - Potencial de conteúdo
        - Ângulos de abordagem

        Retorne em formato JSON.
      `

      const zai = await ZAI.create()
      const response = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Você é um analista de tendências especializado em saúde e bem-estar no Brasil, com profundo conhecimento do comportamento de busca do público brasileiro.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })

      const trends = response.choices[0]?.message?.content
      if (!trends) {
        throw new Error('Failed to identify trending topics')
      }

      try {
        return JSON.parse(trends)
      } catch (error) {
        return this.parseTrendingTopics(trends)
      }
    } catch (error) {
      console.error('Error identifying trending topics:', error)
      throw error
    }
  }

  // Criar conteúdo viral para eventos sazonais
  createViralContentForEvent(eventName: string, eventDate: string): {
    contentIdeas: Array<{
      title: string
      type: 'article' | 'video' | 'infographic' | 'social'
      platform: string[]
      hashtags: string[]
      viralHooks: string[]
    }>
    promotionStrategy: {
      preEvent: string[]
      duringEvent: string[]
      postEvent: string[]
    }
  } {
    const viralHooks = [
      'Você não vai acreditar no #3',
      'O segredo que ninguém te conta',
      'Médicos ficaram chocados com isso',
      'Mudou minha vida em 7 dias',
      '90% das pessoas estão fazendo errado'
    ]

    return {
      contentIdeas: [
        {
          title: `${eventName}: O que você precisa saber`,
          type: 'article',
          platform: ['blog', 'instagram', 'facebook'],
          hashtags: [`#${eventName.replace(/\s+/g, '')}`, '#saúde', '#bemestar'],
          viralHooks: viralHooks.slice(0, 2)
        },
        {
          title: `${eventName}: Mitos e Verdades`,
          type: 'video',
          platform: ['youtube', 'tiktok', 'instagram reels'],
          hashtags: [`#${eventName.replace(/\s+/g, '')}`, '#mitos', '#verdades'],
          viralHooks: viralHooks.slice(2, 4)
        },
        {
          title: `Guia Completo ${eventName}`,
          type: 'infographic',
          platform: ['pinterest', 'instagram', 'facebook'],
          hashtags: [`#${eventName.replace(/\s+/g, '')}`, '#guia', '#infográfico'],
          viralHooks: viralHooks.slice(4, 6)
        }
      ],
      promotionStrategy: {
        preEvent: [
          'Criar contagem regressiva nas redes sociais',
          'Postar teasers e curiosidades',
          'Enquetes sobre o tema',
          'Colaborar com influenciadores'
        ],
        duringEvent: [
          'Cobertura ao vivo do evento',
          'Posts diários com dicas',
          'Campanhas de conscientização',
          'Sorteios e brindes'
        ],
        postEvent: [
          'Resumo do evento e principais aprendizados',
          'Depoimentos e histórias de impacto',
          'Chamadas para ação contínua',
          'Conteúdo evergreen relacionado'
        ]
      }
    }
  }

  // Estratégia de conteúdo para diferentes estações
  createSeasonalContentStrategy(season: 'spring' | 'summer' | 'fall' | 'winter'): {
    focus: string[]
    tone: string
    contentTypes: string[]
    promotionChannels: string[]
    kpis: string[]
  } {
    const strategies = {
      spring: {
        focus: ['renovação', 'desintoxicação', 'energia', 'beleza'],
        tone: 'otimista e renovador',
        contentTypes: ['guias de limpeza', 'rotinas de exercícios', 'receitas leves'],
        promotionChannels: ['instagram', 'pinterest', 'tiktok'],
        kpis: ['engajamento', 'compartilhamentos', 'visualizações']
      },
      summer: {
        focus: ['energia', 'hidratação', 'proteção solar', 'atividades ao ar livre'],
        tone: 'energético e descontraído',
        contentTypes: ['dicas de verão', 'receitas refrescantes', 'guias de proteção'],
        promotionChannels: ['instagram reels', 'tiktok', 'youtube shorts'],
        kpis: ['alcance', 'visualizações', 'interações']
      },
      fall: {
        focus: ['imunidade', 'adaptação', 'confort', 'nutrição'],
        tone: 'acolhedor e preventivo',
        contentTypes: ['fortalecimento imunológico', 'dicas de outono', 'calendários vacinais'],
        promotionChannels: ['facebook', 'instagram', 'blog'],
        kpis: ['tempo na página', 'cliques em links', 'inscrições']
      },
      winter: {
        focus: ['saúde mental', 'imunidade', 'confort', 'atividades internas'],
        tone: 'acolhedor e introspectivo',
        contentTypes: ['cuidados de inverno', 'exercícios em casa', 'saúde mental'],
        promotionChannels: ['youtube', 'blog', 'linkedin'],
        kpis: ['tempo de sessão', 'inscrições', 'compartilhamentos']
      }
    }

    return strategies[season]
  }

  private parseTrendingTopics(text: string): TrendingTopic[] {
    // Implementação simplificada
    return [
      {
        topic: 'saúde mental',
        category: 'bem-estar',
        searchVolume: 50000,
        growth: 25,
        competition: 'medium',
        seasonality: 'year-round',
        relatedKeywords: ['ansiedade', 'depressão', 'estresse'],
        contentAngles: ['prevenção', 'tratamento', 'dicas práticas']
      }
    ]
  }
}

// Classe para estratégia de conteúdo viral
export class ViralContentStrategy {
  private contentStrategy: ContentStrategyEngine

  constructor() {
    this.contentStrategy = new ContentStrategyEngine()
  }

  // Criar conteúdo viral para saúde
  async createViralHealthContent(): Promise<{
    viralIdeas: Array<{
      title: string
      hook: string
      emotion: 'surprise' | 'curiosity' | 'fear' | 'hope' | 'anger'
      shareability: number
      platforms: string[]
    }>
    contentCalendar: Array<{
      date: string
      content: string
      type: string
      promotion: string[]
    }>
  }> {
    try {
      const prompt = `
        Crie ideias de conteúdo viral para saúde e bem-estar que tenham potencial de compartilhamento massivo.

        ELEMENTOS VIRAL:
        - Surpresa e choque (informações inesperadas)
        - Curiosidade (fatos surpreendentes)
        - Medo e esperança (histórias inspiradoras)
        - Medo e raiva (mitos desmentidos)
        - Controvérsia (opiniões polêmicas baseadas em fatos)

        FORMATOS VIRAL:
        - Listas (7 coisas que..., 5 segredos para...)
        - Comparações (antes e depois)
        - Mitos vs verdades
        - Histórias de transformação
        - Desafios e testes

        TÓPICOS DE SAÚDE:
        - Hábitos "saudáveis" que na verdade não são
        - Alimentos "milagrosos" que fazem mal
        - Exercícios que estão sendo feitos errados
        - Sintomas que ignoramos perigosamente
        - Tratamentos caseiros que funcionam

        Para cada ideia:
        - Título viral (máximo 60 caracteres)
        - Hook viral (frase de impacto)
        - Emoção principal
        - Potencial de compartilhamento (1-100)
        - Plataformas ideais

        Gere 10 ideias em formato JSON.
      `

      const zai = await ZAI.create()
      const response = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Você é um especialista em marketing viral com foco em saúde e bem-estar, conhecido por criar conteúdo que gera milhões de compartilhamentos.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 2000
      })

      const ideas = response.choices[0]?.message?.content
      if (!ideas) {
        throw new Error('Failed to create viral ideas')
      }

      try {
        const viralIdeas = JSON.parse(ideas)
        
        // Criar calendário de conteúdo
        const contentCalendar = this.createContentCalendar(viralIdeas)

        return {
          viralIdeas,
          contentCalendar
        }
      } catch (error) {
        return this.parseViralContent(ideas)
      }
    } catch (error) {
      console.error('Error creating viral content:', error)
      throw error
    }
  }

  private createContentCalendar(ideas: any[]): Array<{
    date: string
    content: string
    type: string
    promotion: string[]
  }> {
    const calendar = []
    const today = new Date()
    
    // Criar calendário para os próximos 30 dias
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() + i)
      
      const idea = ideas[i % ideas.length]
      
      calendar.push({
        date: date.toISOString().split('T')[0],
        content: idea.title,
        type: 'viral',
        promotion: [
          'Postar no horário de pico (19h-21h)',
          'Usar hashtags relevantes',
          'Incluir call-to-action forte',
          'Promover nos stories'
        ]
      })
    }
    
    return calendar
  }

  private parseViralContent(text: string) {
    return {
      viralIdeas: [
        {
          title: '7 Hábitos "Saudáveis" Que Estão Destruindo Sua Saúde',
          hook: 'O número 3 vai te chocar!',
          emotion: 'surprise',
          shareability: 85,
          platforms: ['instagram', 'tiktok', 'facebook']
        }
      ],
      contentCalendar: []
    }
  }
}

export { ContentStrategyEngine, ViralContentStrategy }