"use client"

import { useState, useCallback } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface ImageUploadProps {
  value?: string
  onChange?: (url: string) => void
  placeholder?: string
  className?: string
}

export default function ImageUpload({ 
  value, 
  onChange, 
  placeholder = "Arraste uma imagem ou clique para selecionar",
  className 
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState(value || '')

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setPreview(result)
          onChange?.(result)
        }
        reader.readAsDataURL(file)
      }
    }
  }, [onChange])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          setPreview(result)
          onChange?.(result)
        }
        reader.readAsDataURL(file)
      }
    }
  }, [onChange])

  const handleUrlChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setPreview(url)
    onChange?.(url)
  }, [onChange])

  const handleRemoveImage = useCallback(() => {
    setPreview('')
    onChange?.('')
  }, [onChange])

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor="image-upload" className="text-sm font-medium">
        Imagem
      </Label>
      
      <Card className={cn(
        "relative overflow-hidden transition-all duration-200",
        isDragging && "ring-2 ring-primary ring-offset-2",
        preview && "border-primary"
      )}>
        <CardContent className="p-0">
          {!preview ? (
            <div
              className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
                isDragging 
                  ? "border-primary bg-primary/5" 
                  : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Upload className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {placeholder}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Arraste e solte uma imagem aqui, ou clique para selecionar
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Formatos: JPG, PNG, GIF, WebP (Máx: 5MB)
                </div>
              </div>
              
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          ) : (
            <div className="relative group">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-center h-full">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleRemoveImage}
                      className="h-8 w-8 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 right-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => document.getElementById('image-upload')?.click()}
                  className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* URL Input */}
      <div className="relative">
        <Input
          type="url"
          placeholder="Ou cole a URL da imagem..."
          value={preview}
          onChange={handleUrlChange}
          className="pr-10"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <ImageIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Image Info */}
      {preview && (
        <div className="text-xs text-muted-foreground">
          ✅ Imagem carregada com sucesso
        </div>
      )}
    </div>
  )
}