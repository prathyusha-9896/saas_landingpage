'use client'

import useAccelerate from './hooks/useAccelerate'
import { useState } from 'react'

export default function Accelerate() {
  const {
    heading,
    description,
    bullets,
    stats,
    formTitle,
    formSubtitle,
    formFields,
    cta,
  } = useAccelerate()

  const [formData, setFormData] = useState({})

  return (
    <section className="bg-black text-white flex flex-col lg:flex-row py-12 px-6 md:px-12">
      {/* Left Side */}
      <div className="flex-1 mb-12 lg:mb-0 lg:pr-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {heading.split(' ').map((word, idx) =>
            word === 'Revenue' || word === 'Expert' || word === 'Marketing' ? (
              <span key={idx} className="text-orange-400 underline underline-offset-4 decoration-2"> {word} </span>
            ) : (
              ` ${word}`
            )
          )}
        </h1>

        <p className="text-gray-300 mb-6">{description}</p>

        <ul className="space-y-2 mb-8">
          {bullets.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-orange-400 text-xl">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex-1 bg-gradient-to-br from-zinc-900 to-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{formTitle}</h2>
        <p className="text-sm text-gray-400 mb-6">{formSubtitle}</p>

        <form className="space-y-4">
          {formFields.map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm mb-1">{field.label}{field.required && '*'}</label>
              <input
                required={field.required}
                placeholder={field.placeholder}
                className="w-full p-3 rounded-md bg-zinc-800 text-white border border-zinc-700 placeholder-gray-400"
                onChange={(e) => setFormData({ ...formData, [field.label]: e.target.value })}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-4 bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 rounded-md transition"
          >
            {cta} →
          </button>
        </form>
      </div>
    </section>
  )
}
