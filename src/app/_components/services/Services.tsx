'use client'

import useServices from './hooks/useServices'
import Image from 'next/image'
export default function Services() {
  const { heading, services } = useServices()

  return (
    <section className="bg-black text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <h3 className={`text-xl font-semibold mb-2 ${service.color}`}>
              {service.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">{service.description}</p>

            <div className="flex flex-wrap gap-3 mt-auto">
              {service.tools.map((tool, i) => (
                <div
                  key={i}
                  className="bg-white px-3 py-1 rounded shadow-sm flex items-center"
                >
                  <Image width={100} height={100}
                    src={tool.logo}
                    alt={tool.name}
                    className="h-5 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
