'use client'

import { FaArrowRightLong } from 'react-icons/fa6'
import useProven from './hooks/useProven'

export default function Proven() {
  const { heading, subheading, case: caseStudy } = useProven()

  return (
    <section className="bg-[#000000] text-white px-4 py-16 md:px-12 lg:px-20">
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold leading-10 tracking-[-0.62px]">{heading}</h2>
        <p className="text-[#94A3B8] mt-2 text-[13px] leading-5 font-normal">{subheading}</p>
      </div>

      <div className="bg-[#0f172a95] rounded-xl md:p-8 p-6 grid md:grid-cols-3 gap-8 text-white max-w-7xl mx-auto">
        {/* Left Column */}
        <div>
          <h3 className="text-3xl leading-10 tracking-[-0.62px] font-semibold mb-2">{caseStudy.title}</h3>
          <p className="text-[#94A3B8] text-14px leading-[22px] font-semibold mb-6">{caseStudy.description}</p>
          <a
            href={caseStudy.buttonLink}
            className="w-full flex justify-center items-center block text-center gap-3 bg-[#FF9900] text-black px-4 py-2 rounded shadow text-[13px] font-semibold leading-5 transition"
          >
            {caseStudy.buttonText} <span><FaArrowRightLong size={15} /></span>
          </a>
        </div>

        {/* Center Column */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Solution Snapshots</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            {caseStudy.solutions.map((item, idx) => (
              <li
                key={idx}
                className="transition-all text-[13px] font-normal leading-5 text-[#94A3B8] duration-200 ease-in-out border-l-2 border-transparent pl-3 hover:border-[#FF9900] hover:bg-[#FF990010] "
              >
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* Right Column */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Impact Highlight</h4>
          <div className="grid grid-cols-2 gap-2">
            {caseStudy.impacts.map((impact, idx) => (
              <div
                key={idx}
                className="bg-black p-2 rounded-md border border-zinc-700"
              >
                <div className="text-2xl font-normal leading-8 text-[#FACC15]">{impact.stat}</div>
                <div className="text-[#94A3B8] leading-4 text-[10px] mt-1">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
