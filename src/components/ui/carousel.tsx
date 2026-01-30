import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from 'lib/utils'

type CarouselProps = {
  className?: string
  children: React.ReactNode
  showDots?: boolean
}

export function Carousel({ className, children, showDots = true }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pages, setPages] = useState(1)
  const [current, setCurrent] = useState(0)

  const updateMetrics = () => {
    const el = containerRef.current
    if (!el) return
    const pageCount = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth))
    setPages(pageCount)
    setCurrent(Math.round(el.scrollLeft / el.clientWidth))
  }

  useLayoutEffect(() => {
    updateMetrics()
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      setCurrent(Math.round(el.scrollLeft / el.clientWidth))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => updateMetrics()
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollByPage = (dir: -1 | 1) => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  const goToPage = (index: number) => {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className={cn('relative', className)}>
      {/* Track */}
      <div
        ref={containerRef}
        className={cn(
          'flex gap-6 items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4',
          '[-ms-overflow-style:none] [scrollbar-width:none]',
          '[&::-webkit-scrollbar]:hidden'
        )}
        aria-label="Carrossel de projetos"
      >
        {/* Each child should define its own min-width to snap */}
        {React.Children.map(children, (child) => (
          <div className="snap-center">
            {child}
          </div>
        ))}
      </div>

      {/* Controls */}
      {pages > 1 && (
        <div className="pointer-events-none">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollByPage(-1)}
            className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollByPage(1)}
            className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Dots */}
      {showDots && pages > 1 && (
        <div className="mt-2 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para página ${i + 1}`}
              onClick={() => goToPage(i)}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-colors',
                i === current ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
