import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, EyeOff, Calendar, Clock, User, FileText, Tag, TrendingUp, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const metadata: Metadata = {
  title: 'Editar Conteúdo - Painel Admin - if',
  description: 'Editar conteúdo existente no painel administrativo',
}

// Mock data - será substituído por dados reais
const postData = {
  id: '1',
  title: 'Os 10 Melhores Suplementos para Energia e Vitalidade',
  slug: 'melhores-suplementos-energia',
  excerpt: 'Descubra quais suplementos realmente funcionam para aumentar sua energia e disposição diária.',
  content: `# Os 10 Melhores Suplementos para Energia e Vitalidade

## Introdução

A falta de energia é um dos problemas mais comuns que afetam pessoas de todas as idades. Seja para enfrentar longas jornadas de trabalho, estudos ou simplesmente ter mais disposição para as atividades diárias, encontrar soluções eficazes é fundamental.

## 1. Coenzima Q10 (CoQ10)

A Coenzima Q10 é um poderoso antioxidante que desempenha um papel crucial na produção de energia celular.

### Benefícios:
- Aumenta a produção de energia mitocondrial
- Melhora a função cardiovascular
- Possui propriedades antioxidantes

### Dosagem recomendada: 100-200mg por dia

## 2. Magnésio

O magnésio é essencial para mais de 300 reações bioquímicas no corpo, incluindo a produção de energia.

### Benefícios:
- Reduz fadiga e cansaço
- Melhora a qualidade do sono
- Essencial para função muscular

### Dosagem recomendada: 300-400mg por dia

## 3. Vitaminas do Complexo B

As vitaminas B são cruciais para converter alimentos em energia.

### Benefícios:
- Metabolismo energético eficiente
- Suporte ao sistema nervoso
- Redução do estresse

### Dosagem recomendada: Complexo B completo

## Conclusão

A combinação desses suplementos pode proporcionar um aumento significativo nos níveis de energia e vitalidade.`,
  coverImage: '/artigo-energia-natural.jpg',
  published: true,
  featured: true,
  authorId: '1',
  categoryId: '1',
  tags: ['energia', 'suplementos', 'vitaminas', 'disposição'],
  metaTitle: 'Os 10 Melhores Suplementos para Energia e Vitalidade | if',
  metaDescription: 'Descubra quais suplementos realmente funcionam para aumentar sua energia e disposição diária.',
  metaKeywords: 'suplementos energia, vitaminas disposição, coenzima q10, magnésio, complexo b',
  readTime: 8,
  viewCount: 2341,
  createdAt: '2024-01-15',
  updatedAt: '2024-01-15'
}

const authors = [
  { id: '1', name: 'Dra. Ana Silva', avatar: '/author-avatar.jpg' },
  { id: '2', name: 'Dr. Carlos Mendes', avatar: '/author-avatar.jpg' },
  { id: '3', name: 'Dra. Maria Costa', avatar: '/author-avatar.jpg' },
  { id: '4', name: 'Dr. Roberto Oliveira', avatar: '/author-avatar.jpg' }
]

const categories = [
  { id: '1', name: 'Energia', color: 'bg-yellow-500' },
  { id: '2', name: 'Imunidade', color: 'bg-green-500' },
  { id: '3', name: 'Longevidade', color: 'bg-blue-500' },
  { id: '4', name: 'Menopausa', color: 'bg-purple-500' },
  { id: '5', name: 'Sono & Bem Estar', color: 'bg-indigo-500' },
  { id: '6', name: 'Ossos & Músculos', color: 'bg-red-500' },
  { id: '7', name: 'Vitaminas & Minerais', color: 'bg-orange-500' },
  { id: '8', name: 'Cabelo, Pele, Unha', color: 'bg-pink-500' }
]

export default function AdminEditPost() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/posts">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Editar Conteúdo</h1>
          <p className="text-muted-foreground">Editar artigo existente</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Formulário Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input 
                  id="title" 
                  defaultValue={postData.title}
                  placeholder="Título do artigo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input 
                  id="slug" 
                  defaultValue={postData.slug}
                  placeholder="url-do-artigo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerto</Label>
                <Textarea 
                  id="excerpt" 
                  defaultValue={postData.excerpt}
                  placeholder="Breve descrição do artigo..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverImage">Imagem de Capa</Label>
                <Input 
                  id="coverImage" 
                  defaultValue={postData.coverImage}
                  placeholder="/caminho/da/imagem.jpg"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="author">Autor *</Label>
                  <Select defaultValue={postData.authorId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um autor" />
                    </SelectTrigger>
                    <SelectContent>
                      {authors.map((author) => (
                        <SelectItem key={author.id} value={author.id}>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={author.avatar} alt={author.name} />
                              <AvatarFallback>
                                {author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span>{author.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria *</Label>
                  <Select defaultValue={postData.categoryId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          <div className="flex items-center gap-2">
                            <div className={`h-3 w-3 rounded-full ${category.color}`}></div>
                            <span>{category.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input 
                  id="tags" 
                  defaultValue={postData.tags.join(', ')}
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="readTime">Tempo de Leitura (minutos)</Label>
                <Input 
                  id="readTime" 
                  type="number"
                  defaultValue={postData.readTime.toString()}
                  placeholder="8"
                />
              </div>
            </CardContent>
          </Card>

          {/* Conteúdo do Artigo */}
          <Card>
            <CardHeader>
              <CardTitle>Conteúdo do Artigo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="content">Conteúdo *</Label>
                <Textarea 
                  id="content" 
                  defaultValue={postData.content}
                  placeholder="Escreva o conteúdo do artigo..."
                  rows={20}
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>

          {/* Metadados SEO */}
          <Card>
            <CardHeader>
              <CardTitle>Metadados SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Título SEO</Label>
                <Input 
                  id="metaTitle" 
                  defaultValue={postData.metaTitle}
                  placeholder="Título para motores de busca"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Descrição SEO</Label>
                <Textarea 
                  id="metaDescription" 
                  defaultValue={postData.metaDescription}
                  placeholder="Descrição para motores de busca..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Palavras-chave SEO</Label>
                <Input 
                  id="metaKeywords" 
                  defaultValue={postData.metaKeywords}
                  placeholder="palavra1, palavra2, palavra3"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Configurações */}
          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="published">Publicado</Label>
                  <p className="text-sm text-muted-foreground">
                    Artigo visível publicamente
                  </p>
                </div>
                <Switch id="published" defaultChecked={postData.published} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="featured">Em Destaque</Label>
                  <p className="text-sm text-muted-foreground">
                    Exibir na página inicial
                  </p>
                </div>
                <Switch id="featured" defaultChecked={postData.featured} />
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-lg font-bold">{postData.title}</div>
                  <div className="text-sm text-muted-foreground">{postData.excerpt}</div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Badge className={categories.find(c => c.id === postData.categoryId)?.color || 'bg-gray-500'}>
                    {categories.find(c => c.id === postData.categoryId)?.name}
                  </Badge>
                  <Badge variant="outline">{postData.readTime} min</Badge>
                  {postData.featured && (
                    <Badge variant="default">Destaque</Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {authors.find(a => a.id === postData.authorId)?.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(postData.createdAt).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {postData.viewCount} visualizações
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {postData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas */}
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Visualizações</span>
                <span className="font-medium">{postData.viewCount.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Comentários</span>
                <span className="font-medium">23</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Criado em</span>
                <span className="font-medium">{new Date(postData.createdAt).toLocaleDateString('pt-BR')}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Atualizado em</span>
                <span className="font-medium">{new Date(postData.updatedAt).toLocaleDateString('pt-BR')}</span>
              </div>
            </CardContent>
          </Card>

          {/* Ações Rápidas */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href={`/post/${postData.slug}`} target="_blank">
                  <Eye className="mr-2 h-4 w-4" />
                  Visualizar no Site
                </Link>
              </Button>
              
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href={`/admin/posts/${postData.id}/duplicate`}>
                  <FileText className="mr-2 h-4 w-4" />
                  Duplicar Post
                </Link>
              </Button>
              
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                Ver Comentários
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" asChild>
          <Link href="/admin/posts">Cancelar</Link>
        </Button>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  )
}