'use client'

import useSaas from './hooks/useSaas'
import Image from 'next/image'

export default function Saas() {
  const { heading, subheading, cta, pillars } = useSaas()

  return (
    <section className="bg-black text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl">{heading}</h2>
        </div>
        <p className="text-gray-400 mt-2 max-w-2xl text-sm">{subheading}</p>
        <a
          href={cta.link}
          className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-medium px-5 py-3 rounded shadow w-fit text-sm"
        >
          {cta.text} →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col items-start text-left">
            <Image width={100} height={100}
              src={pillar.icon}
              alt={pillar.title}
              className="w-7 h-7 mb-3"
            />
            <h3 className={`font-semibold mb-2 ${pillar.color}`}>
              {pillar.title}
            </h3>
            <p className="text-gray-400 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
