'use client'

import useGrowth from './hooks/useGrowth'
import Image from 'next/image'
import growthImg from '../../../../public/assets/Images/Growth.svg'

export default function Growth() {
  const { GROWTH_STEPS } = useGrowth()

  return (
    <div className="bg-[#02050E] px-6 md:px-56 py-20 flex gap-16">
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Title + Subheading */}
        <div className="sticky top-0 z-10 bg-[#02050E] py-28">
          <h2 className="text-white text-4xl font-bold leading-snug mb-4">
            The Growth Execution Framework
          </h2>
          <p className="text-gray-300 text-base">
            A clear, structured process focused on what drives results.
          </p>
        </div>

        {/* Steps scroll normally with page */}
        <div className="flex flex-col space-y-12 pt-16 pb-32">
          {GROWTH_STEPS.map((step, index) => (
            <div
              key={`growth-step-${index}`}
              className="flex flex-col items-start gap-2 bg-[#01050E] rounded-2xl px-4 pt-[328px] pb-4"
            >
              <div className="bg-orange-300 text-black text-sm font-medium w-fit px-3 py-1 rounded-full uppercase tracking-[0.15rem]">
                {step.stepLabel}
              </div>
              <div className="text-white text-2xl font-semibold">
                {step.title}
              </div>
              <p className="text-gray-300 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Sticky Image */}
      <div className="w-[328px] h-fit sticky top-24 hidden md:block">
        <Image
          src={growthImg}
          alt="Growth Visual"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}
