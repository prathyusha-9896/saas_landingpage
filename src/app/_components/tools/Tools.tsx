'use client'

import useTools from './hooks/useTools'
import Image from 'next/image'

export default function Tools() {
  const { heading, subheading, tools } = useTools()

  return (
    <section className="bg-[#02050E] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        <p className="text-gray-400 mt-2 text-sm">{subheading}</p>
      </div>

<div className="relative overflow-hidden px-6 md:px-20 lg:px-56">
  {/* Left & Right Gradient Overlays */}
  <div className="pointer-events-none absolute top-0 left-[15%] h-full w-[344px] z-20 bg-gradient-to-r from-[#02050E] to-transparent" />
  <div className="pointer-events-none absolute top-0 right-[15%] h-full w-[344px] z-20 bg-gradient-to-l from-[#02050E] to-transparent" />

  {/* Scrolling Tool Rows */}
  <div className="space-y-3 relative z-10">
    {tools.map((row, rowIndex) => (
      <div key={rowIndex} className="overflow-hidden w-full">
        <div
          className={`flex gap-3 whitespace-nowrap ${
            rowIndex === 1 ? 'animate-scrollRight' : 'animate-scrollLeft'
          }`}
        >
          {[...row, ...row].map((src, idx) => (
            <div
              key={idx}
              className="w-36 h-36 flex items-center justify-center bg-[#0F172A66] rounded-lg shadow-lg p-3 shrink-0"
            >
              <Image
                src={src}
                alt="tool"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  )
}
