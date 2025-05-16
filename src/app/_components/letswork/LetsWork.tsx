'use client'

import useLetsWork from './hooks/useLetsWork'

export default function LetsWork() {
  const { headingPart1, headingPart2, subtext, buttonLabel } = useLetsWork()

  return (
    <div className='justify-center items-center flex py-16 p-[120px] p-16'>
      <div className="hidden md:block flex w-[1200px] flex-col items-center  gap-9 p-[80px_120px] rounded-[20px] bg-[rgba(15,23,42,0.4)]">
      <div className="flex justify-center items-center gap-6 pb-6">
        <h2 className="text-white text-7xl font-semibold">{headingPart1}</h2>
        <p className="text-[#94A3B8] text-[13px] font-[400] leading-[21.034px] font-[Plus Jakarta Sans] max-w-[480px]">
          {subtext}
        </p>
      </div>
      <div className='flex justify-center items-center gap-6'>
      <button className="bg-orange-400 hover:bg-orange-500 transition-all px-4 py-2 text-sm font-semibold text-black rounded-md">
        {buttonLabel}
      </button>
      <h2 className="text-white text-7xl font-bold">{headingPart2}</h2>
      </div>

      </div>


      {/* Mobile version */}
      <div className="block md:hidden w-full max-w-[1200px] flex flex-col items-center gap-6 px-6 sm:px-10 md:px-20 py-16 rounded-[20px] bg-[rgba(15,23,42,0.4)] backdrop-blur-md text-center">
        
        {/* Heading */}
      <h2 className="text-white text-center text-[31px] font-[600] leading-[43px] font-[Plus Jakarta Sans]">
        {headingPart1} {headingPart2}
      </h2>

        {/* Subtext */}
        <p className="text-center text-[#94A3B8] text-[10px] font-[400] leading-[16px] font-[Plus Jakarta Sans]">
          {subtext}
        </p>

        {/* Button */}
        <button className="bg-[#FF9900] px-6 py-3 text-sm sm:text-base font-semibold text-black rounded-md">
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
