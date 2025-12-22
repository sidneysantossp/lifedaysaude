'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Category {
  id: string
  name: string
  slug: string
  image: string
  count: number
  color: string
}

interface InfiniteCarouselProps {
  categories: Category[]
  autoPlay?: boolean
  speed?: number
}

export default function InfiniteCarousel({ 
  categories, 
  autoPlay = true, 
  speed = 3000 
}: InfiniteCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicar categorias para criar loop infinito
  const duplicatedCategories = [...categories, ...categories]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const checkScroll = () => {
      setCanScrollLeft(scrollContainer.scrollLeft > 0)
      setCanScrollRight(
        scrollContainer.scrollLeft < 
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      )
    }

    scrollContainer.addEventListener('scroll', checkScroll)
    checkScroll()

    return () => scrollContainer.removeEventListener('scroll', checkScroll)
  }, [])

  useEffect(() => {
    if (!autoPlay || isPaused) return

    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const intervalId = setInterval(scroll, 50)

    return () => clearInterval(intervalId)
  }, [autoPlay, isPaused])

  const scroll = (direction: 'left' | 'right') => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollAmount = 300
    if (direction === 'left') {
      scrollContainer.scrollLeft -= scrollAmount
    } else {
      scrollContainer.scrollLeft += scrollAmount
    }
  }

  return (
    <div className="relative w-full bg-white py-8">
      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Explore Nossas Categorias</h2>
      </div>

      {/* Container Principal */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Setas de Navegação */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 rounded-full w-12 h-12 ${
            !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100 shadow-md'
          }`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 rounded-full w-12 h-12 ${
            !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100 shadow-md'
          }`}
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </Button>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex gap-6 py-4 px-12">
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="flex flex-col items-center flex-shrink-0 group"
              >
                <Link href={`/categoria/${category.slug}`}>
                  <div className="relative w-36 h-36 md:w-44 md:h-44 mb-4 transition-all duration-300 group-hover:scale-105">
                    {/* Círculo com sombra suave e elegante */}
                    <div className="absolute inset-0 rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay sutil no hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge de contagem no hover */}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold text-gray-800">
                        {category.count}
                      </span>
                    </div>
                  </div>
                  
                  {/* Texto da categoria */}
                  <div className="text-center">
                    <h3 className="text-black font-bold text-sm md:text-base mb-1 group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm font-medium">
                      {category.count} produtos
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}