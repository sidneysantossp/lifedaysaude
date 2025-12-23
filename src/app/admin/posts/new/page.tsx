import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, FileText } from 'lucide-react'
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
  title: 'Novo Conteúdo - Painel Admin - if',
  description: 'Criar novo conteúdo no painel administrativo',
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

export default function AdminNewPost() {
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
          <h1 className="text-3xl font-bold">Novo Conteúdo</h1>
          <p className="text-muted-foreground">Criar novo artigo</p>
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
                  placeholder="Título do artigo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input 
                  id="slug" 
                  placeholder="url-do-artigo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerto</Label>
                <Textarea 
                  id="excerpt" 
                  placeholder="Breve descrição do artigo..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverImage">Imagem de Capa</Label>
                <Input 
                  id="coverImage" 
                  placeholder="/caminho/da/imagem.jpg"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="author">Autor *</Label>
                  <Select>
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
                  <Select>
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
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="readTime">Tempo de Leitura (minutos)</Label>
                <Input 
                  id="readTime" 
                  type="number"
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
                  placeholder="Título para motores de busca"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Descrição SEO</Label>
                <Textarea 
                  id="metaDescription" 
                  placeholder="Descrição para motores de busca..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Palavras-chave SEO</Label>
                <Input 
                  id="metaKeywords" 
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
                <Switch id="published" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="featured">Em Destaque</Label>
                  <p className="text-sm text-muted-foreground">
                    Exibir na página inicial
                  </p>
                </div>
                <Switch id="featured" />
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
                  <div className="text-lg font-bold">Título do Artigo</div>
                  <div className="text-sm text-muted-foreground">Breve descrição do artigo...</div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary">Categoria</Badge>
                  <Badge variant="outline">0 min</Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    Nome do Autor
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    0 visualizações
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    Tag 1
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Tag 2
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Tag 3
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dicas */}
          <Card>
            <CardHeader>
              <CardTitle>Dicas de Escrita</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <h4 className="font-medium mb-2">📝 Estrutura Recomendada</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Título claro e atrativo</li>
                  <li>• Introdução envolvente</li>
                  <li>• Desenvolvimento com subtítulos</li>
                  <li>• Conclusão com call-to-action</li>
                </ul>
              </div>

              <div className="text-sm">
                <h4 className="font-medium mb-2">🔍 SEO Best Practices</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Use palavras-chave naturais</li>
                  <li>• Meta descrição até 160 caracteres</li>
                  <li>• Título SEO até 60 caracteres</li>
                  <li>• Use tags relevantes</li>
                </ul>
              </div>

              <div className="text-sm">
                <h4 className="font-medium mb-2">⏱️ Tempo de Leitura</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 200-300 palavras = 1 minuto</li>
                  <li>• Frases curtas e diretas</li>
                  <li>• Use subtítulos para quebrar texto</li>
                  <li>• Evite jargões excessivos</li>
                </ul>
              </div>
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
          Criar Conteúdo
        </Button>
      </div>
    </div>
  )
}