'use client'

import useLetsWork from './hooks/useLetsWork'

export default function LetsWork() {
  const { headingPart1, headingPart2, subtext, buttonLabel } = useLetsWork()

  return (
    <div className='justify-center items-center flex '>
      <div className="hidden md:block flex w-[1200px] flex-col items-center  gap-9 p-[80px_120px] rounded-[20px] bg-[rgba(15,23,42,0.4)]">
      <div className="flex justify-center items-center gap-6">
        <h2 className="text-white text-5xl font-semibold">{headingPart1}</h2>
              <p className="text-sm text-gray-300 max-w-[480px] leading-relaxed">
        {subtext}
      </p>
      </div>
      <div className='flex justify-center items-center gap-6'>
      <button className="bg-orange-400 hover:bg-orange-500 transition-all px-4 py-2 text-sm font-semibold text-black rounded-md">
        {buttonLabel}
      </button>
      <h2 className="text-white text-5xl font-bold">{headingPart2}</h2>
      </div>

      </div>
      <div className="block md:hidden w-full max-w-[1200px] flex flex-col items-center gap-6 px-6 sm:px-10 md:px-20 py-16 rounded-[20px] bg-[rgba(15,23,42,0.4)] backdrop-blur-md text-center">
        
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {headingPart1} <span className="block md:inline">{headingPart2}</span>
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-300 max-w-[520px] leading-relaxed">
          {subtext}
        </p>

        {/* Button */}
        <button className="bg-orange-400 hover:bg-orange-500 transition-all px-6 py-3 text-sm sm:text-base font-semibold text-black rounded-md">
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
