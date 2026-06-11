'use client'

import { useMemo, useState } from 'react'

const fallbackImage = '/placeholder.svg?height=900&width=1200'

export function ImageDetailGallery({ images, title }: { images: string[]; title: string }) {
  const galleryImages = useMemo(() => (images.length ? images : [fallbackImage]).slice(0, 8), [images])
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = galleryImages[activeIndex] || galleryImages[0] || fallbackImage

  return (
    <div className="grid gap-4 sm:grid-cols-[96px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:block sm:space-y-4 sm:overflow-visible">
        {galleryImages.slice(0, 4).map((image, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-24 w-24 shrink-0 overflow-hidden rounded-[0.7rem] border bg-[#fffaf1] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#f6595b] focus:ring-offset-2 focus:ring-offset-[#f6efe4] ${isActive ? 'border-[#f6595b]' : 'border-[#d8d0c4]'}`}
              aria-label={`Show image ${index + 1} for ${title}`}
              aria-pressed={isActive}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </button>
          )
        })}
      </div>
      <div className="order-1 overflow-hidden rounded-[0.9rem] border border-[#d8d0c4] bg-[#fffaf1] p-8 sm:order-2">
        <img src={activeImage} alt={title} className="mx-auto max-h-[760px] w-full object-contain" />
      </div>
    </div>
  )
}
