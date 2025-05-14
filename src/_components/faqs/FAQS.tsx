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
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-white text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f172a66] rounded-lg text-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-lg"
            >
              {item.question}
              <IoIosArrowUp
                className={`ml-2 transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-5 text-sm text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
