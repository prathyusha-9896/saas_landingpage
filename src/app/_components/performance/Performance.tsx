'use client'

import usePerformance from './hooks/usePerformance'
import Image from 'next/image'
export default function Performance() {
  const { title, subtitle, pillars } = usePerformance()

  return (
    <section className="bg-black text-white px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        <p className="text-[#94A3B8] md:text-[#FFFFFFCC] md:text-[16px] md:leading-7 text-[14px] leading-[22px] font-normal mt-2">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-16 px-0 gap-6 max-w-6xl mx-auto">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-[#0D1321] rounded-xl p-9"
          >
            <Image
            src={pillar.icon}
            alt={pillar.title}
            width={48}
            height={48}
            className={`mb-7 ${pillar.textcolor}`}
            />
            <h3 className={`text-lg  font-semibold mb-4 ${pillar.textcolor}` }>
              {pillar.title}
            </h3>
            <p className="text-gray-400 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
