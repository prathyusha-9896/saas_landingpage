'use client'

import useGrowth from './hooks/useGrowth'
import Image from 'next/image'
import growthImg from '../../../../public/assets/Images/Growth.svg'

export default function Growth() {
  const { GROWTH_STEPS } = useGrowth()

  return (
    <div className="bg-[#02050E] px-6 md:px-[120px] py-20 flex gap-16">
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col w-[50%] ">
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
              <div className="bg-black flex justify-center items-center gap-2 text-[#FF9900] border-[0.5px] border-[#FF9900] text-sm font-medium w-fit px-3 py-1 rounded-full tracking-[0.15rem]">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#FF9900"/>
                  </svg>
                </span>{step.stepLabel}
              </div>
              <div className="text-white text-[25px] font-[600] leading-[33px] md:leading-[37px] md:tracking-[-0.5px] font-[Plus Jakarta Sans]">
                {step.title}
              </div>
              <div className="text-white font-[400] text-[13px] leading-[20px] md:leading-[21.034px] font-[Plus Jakarta Sans]">
                {step.subtitle}
              </div>
              <p className="text-[#94A3B8] text-[13px] font-[400] leading-[20px] md:leading-[21.034px] font-[Plus Jakarta Sans]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Sticky Image */}
      <div className="w-[45%] h-fit sticky top-24 hidden md:block">
        <Image
          src={growthImg}
          alt="Growth Visual"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}
