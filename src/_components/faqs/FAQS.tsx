'use client'

import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
interface FAQProps {
  faqs: {
    question: string
    answer: string
  }[]
}

export default function FAQS({ faqs }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <h2 className="text-white text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg text-white transition-colors duration-300 ${activeIndex === index ? 'bg-[#0f172a66]' : 'bg-transparent'}`}
          >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left px-6 py-5 text-white font-[600] text-[14px] leading-[22px] md:text-[20px] md:leading-[32px] font-[Plus Jakarta Sans]"
          >
            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal md:overflow-visible md:text-clip block leading-[22px] md:leading-[32px] text-white font-[600] text-[14px] md:text-[20px] font-[Plus Jakarta Sans]">
              {item.question}
            </span>
            <IoIosArrowUp
              className={`ml-2 shrink-0 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
            />
          </button>

            {activeIndex === index && (
              <div className="px-6 pb-5 text-[#94A3B8] text-[13px] font-[400] leading-[20px] md:leading-[21.034px] font-[Plus Jakarta Sans]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
