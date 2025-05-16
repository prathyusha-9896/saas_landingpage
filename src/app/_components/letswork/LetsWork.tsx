'use client'

import useLetsWork from './hooks/useLetsWork'

export default function LetsWork() {
  const { headingPart1, headingPart2, subtext, buttonLabel } = useLetsWork()

  return (
    <div className='flex justify-center items-center w-full px-4 sm:px-6 md:px-0 py-12'>

      {/* DESKTOP version */}
      <div className="hidden md:flex relative w-[1200px] flex-col items-center gap-9 p-[80px_120px] rounded-[20px] bg-[rgba(15,23,42,0.4)] backdrop-blur-md overflow-hidden">

        {/* ORANGE GLOW (top-right) */}
        <div className="absolute top-[-150px] right-[-100px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />

        {/* BLUE GLOW (bottom-left) */}
        <div className="absolute bottom-[-150px] left-[-150px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />

        <div className="relative z-10 flex justify-center items-center gap-6">
          <h2 className="text-white text-5xl font-semibold">{headingPart1}</h2>
          <p className="text-[#94A3B8] text-[13px] font-[400] leading-[21.034px] font-[Plus Jakarta Sans] max-w-[480px]">
            {subtext}
          </p>
        </div>

        <div className="relative z-10 flex justify-center items-center gap-6">
          <button className="bg-orange-400 hover:bg-orange-500 transition-all px-4 py-2 text-sm font-semibold text-black rounded-md">
            {buttonLabel}
          </button>
          <h2 className="text-white text-5xl font-bold">{headingPart2}</h2>
        </div>
      </div>

      {/* MOBILE version */}
      <div className="block md:hidden relative w-full max-w-[1200px] flex flex-col items-center gap-6 px-6 sm:px-10 md:px-20 py-16 rounded-[20px] bg-[rgba(15,23,42,0.4)] backdrop-blur-md text-center overflow-hidden">

        {/* ORANGE GLOW (top-right) */}
        <div className="absolute top-[-150px] right-[-100px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />

        {/* BLUE GLOW (bottom-left) */}
        <div className="absolute bottom-[-150px] left-[-150px] w-[355px] h-[355px] bg-[#FF9900] rounded-full opacity-30 blur-[315px] pointer-events-none z-0" />

        <h2 className="relative z-10 text-white text-center text-[28px] font-[600] leading-[43px] ">
          {headingPart1} {headingPart2}
        </h2>

        <p className="relative z-10 text-center text-[#94A3B8] text-[10px] font-[400] leading-[16px] ">
          {subtext}
        </p>

        <button className="relative z-10 bg-[#FF9900] px-6 py-3 text-sm sm:text-base font-semibold text-black rounded-md">
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
