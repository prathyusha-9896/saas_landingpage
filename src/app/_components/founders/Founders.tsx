'use client'

import useFounders from './hooks/useFounders'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Founders() {
  const { heading, subheading, testimonials } = useFounders()
  const [current, setCurrent] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Duplicate slides to simulate infinite loop
  const slides = [...testimonials, ...testimonials]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, 4000) // delay between slides
    return () => clearInterval(interval)
  }, [])


  useEffect(() => {
    if (wrapperRef.current) {
      const cardWidth = wrapperRef.current.firstElementChild?.clientWidth || 0
      wrapperRef.current.scrollTo({
        left: current * cardWidth,
        behavior: 'smooth',
      })
    }

    // Reset scroll position for infinite effect
    if (current >= testimonials.length) {
      setTimeout(() => {
        if (wrapperRef.current) {
          wrapperRef.current.scrollTo({ left: 0, behavior: 'auto' })
        }
        setCurrent(0)
      }, 3000) // after smooth scroll ends
    }
  }, [current, testimonials.length])

  return (
    <section className="bg-[#0D1321] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Column */}
        <div className="md:w-1/3 shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{heading}</h2>
          <p className="text-sm text-gray-400">{subheading}</p>
        </div>

        {/* Right Column - Slider */}
        <div className=''>
          <div
            ref={wrapperRef}
            className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden"
            style={{ scrollSnapType: 'x mandatory' }}
          >
          {slides.map((t, index) => (
              <div
                key={index}
                className={`w-[45%] md:w-[60%] shrink-0 snap-start transition-opacity duration-700 ${
                  index % testimonials.length === current % testimonials.length
                    ? 'opacity-100'
                    : index % testimonials.length === (current + 1) % testimonials.length
                    ? 'opacity-40 md:opacity-40'
                    : 'opacity-0 md:opacity-0'
                }`}
              >

            <div className="rounded-[10px] p-[1px] bg-gradient-to-r from-[#31220d] via-[#5a3a06] to-[#FF9900]">
              <div className="bg-[#111827] rounded-[10px] p-4 md:p-8 h-full flex flex-col justify-between text-white">
                <p className="text-sm md:text-[13px] text-[#94A3B8] italic mb-6">“{t.message}”</p>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.authorAvatar}
                      alt={t.authorName}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#FDBA74]">{t.authorName}</p>
                      <p className="text-xs text-gray-400">{t.authorRole}</p>
                    </div>
                  </div>
                  <Image
                    src={t.companyLogo}
                    alt="company"
                    width={80}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>

            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  )
}
