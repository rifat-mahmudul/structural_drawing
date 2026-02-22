'use client'

import { useState } from 'react'

export default function UpsellSection() {
  const [checked, setChecked] = useState(false)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="max-w-lg mx-auto bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-400 rounded-3xl p-8 md:p-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">
            Optional Add-on
          </p>

          <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-2">
            Session PDF Notes মাত্র{' '}
            <span className="text-orange-500">৪৯ টাকা</span>
          </h3>

          <p className="text-4xl font-black text-orange-500 my-5">৪৯ টাকা মাত্র!</p>

          <ul className="text-left space-y-3 mb-7">
            {[
              '300% deeper understanding — আরও গভীরভাবে বুঝতে পারবে',
              '10x better note taking — সব কিছু organized ভাবে পাবে',
              '100x better revision — যেকোনো সময় revise করতে পারবে',
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-gray-700 font-semibold text-sm">
                <span className="flex-shrink-0">🚀</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <label
            className={`flex items-center gap-3 bg-white p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
              checked ? 'border-orange-400 bg-orange-50' : 'border-amber-300'
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="w-5 h-5 accent-orange-500 cursor-pointer"
            />
            <span className="text-gray-800 font-semibold text-sm">
              ✅ Yes, I want PDF notes for ৪৯ টাকা
            </span>
          </label>
        </div>
      </div>
    </section>
  )
}
