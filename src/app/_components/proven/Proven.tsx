'use client'

import useProven from './hooks/useProven'

export default function Proven() {
  const { heading, subheading, case: caseStudy } = useProven()

  return (
    <section className="bg-black text-white px-6 py-16 md:px-12 lg:px-20">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        <p className="text-gray-400 mt-2 text-sm">{subheading}</p>
      </div>

      <div className="bg-[#0D1321] rounded-xl p-8 grid md:grid-cols-3 gap-8 text-white max-w-7xl mx-auto">
        {/* Left Column */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
          <p className="text-gray-400 mb-6 text-sm">{caseStudy.description}</p>
          <a
            href={caseStudy.buttonLink}
            className="bg-yellow-400 text-black font-medium px-4 py-2 rounded shadow hover:bg-yellow-300 transition"
          >
            {caseStudy.buttonText} →
          </a>
        </div>

        {/* Center Column */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Solution Snapshots</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            {caseStudy.solutions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Impact Highlight</h4>
          <div className="grid grid-cols-2 gap-4">
            {caseStudy.impacts.map((impact, idx) => (
              <div
                key={idx}
                className="bg-black text-center p-4 rounded-md border border-zinc-700"
              >
                <div className="text-2xl font-bold text-yellow-400">{impact.stat}</div>
                <div className="text-gray-400 text-xs mt-1">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
