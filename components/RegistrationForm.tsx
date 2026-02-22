'use client'

import { useState, FormEvent } from 'react'

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-br from-[#0f2240] to-[#1e3a5f]"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          এখনই <span className="text-green-400">Register করুন</span>
        </h2>
        <p className="text-slate-300 text-center mb-10">
          সম্পূর্ণ বিনামূল্যে — কোনো credit card লাগবে না
        </p>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            {!submitted ? (
              <>
                <div className="text-center mb-7">
                  <p className="text-xs text-[#16a34a] font-bold uppercase tracking-widest mb-1">
                    ✅ সম্পূর্ণ বিনামূল্যে
                  </p>
                  <p className="text-2xl font-extrabold text-[#1e3a5f]">Free Class Registration</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#16a34a] transition-colors font-[inherit]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#16a34a] transition-colors font-[inherit]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#16a34a] transition-colors font-[inherit]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-500/30 cursor-pointer"
                  >
                    এখনই জয়েন করুন →
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    🔒 আপনার তথ্য সম্পূর্ণ সুরক্ষিত। Spam নেই।
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-2xl font-extrabold text-[#16a34a] mb-3">
                  Registration Successful!
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  আমরা শীঘ্রই WhatsApp-এ class-এর details পাঠিয়ে দেব।
                  আমাদের সাথে থাকুন!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
