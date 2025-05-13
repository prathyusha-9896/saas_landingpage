'use client'

import useHello from './hooks/useHello'
import Image from 'next/image'

export default function Hello() {
  const { name, title, description, stats, profileImage, linkedin } = useHello()

  return (
    <section className="bg-[#0D1321] text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image with LinkedIn badge */}
        <div className="relative w-full md:w-1/3 flex-shrink-0">
          <Image
            src={profileImage}
            alt={name}
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 bg-white p-1 rounded"
          >
          </a>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Hello, I’m <span className="text-orange-400">{name}</span></h1>
          <p className="text-lg text-gray-300 mb-4">{title}</p>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl">{description}</p>

          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg font-bold text-yellow-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
