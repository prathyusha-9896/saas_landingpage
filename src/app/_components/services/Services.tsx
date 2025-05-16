'use client'

import useServices from './hooks/useServices'
import Image from 'next/image'
export default function Services() {
  const { heading, services } = useServices()

  return (
    <section className="bg-black text-white px-6 py-16 md:p-[120px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-start hover:bg-[#0f172a8e] p-6 rounded-md">
            <h3 className={`text-[14px] md:text[16px] md:leading-7 leading-[22px] font-semibold mb-5 text-white`}>
              {service.title}
            </h3>
            <p className="text-gray-400 mb-5 text-[13px] leading-[22px] font-normal">{service.description}</p>

            <div className="flex gap-3 mt-auto">
              {service.tools.map((tool, i) => (
                <div
                  key={i}
                  className="bg-white px-3 py-1 rounded shadow-sm flex items-center"
                >
                  <Image width={92} height={35}
                    src={tool.logo}
                    alt={tool.name}
                    className=" object-contain"
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
