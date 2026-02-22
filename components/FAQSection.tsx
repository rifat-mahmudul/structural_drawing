'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is this for beginners? এটা কি beginners-দের জন্য?',
    a: 'Yes, 100% beginner friendly. কোনো আগের knowledge ছাড়াও এই class করা যাবে। সম্পূর্ণ সহজ ভাষায় শেখানো হবে।',
  },
  {
    q: 'Is it really free? সত্যিই কি free?',
    a: 'হ্যাঁ! Regular price 399 TK, কিন্তু এখন Limited Time-এর জন্য সম্পূর্ণ free। কোনো hidden charge নেই।',
  },
  {
    q: 'Will I get practical understanding?',
    a: 'Yes! Focus is real drawing concept এবং practical field mindset। Theoretical নয়, আসল project-based understanding দেওয়া হবে।',
  },
  {
    q: 'How to join? কীভাবে join করব?',
    a: 'নিচের Join button-এ click করুন এবং registration form fill করুন। Registration confirm হলে class-এর details WhatsApp-এ পাঠিয়ে দেওয়া হবে।',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          <span className="text-[#16a34a]">FAQ</span> — সাধারণ প্রশ্নোত্তর
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#1e3a5f] text-base hover:bg-gray-50 transition-colors duration-150"
              >
                <span>{faq.q}</span>
                <span
                  className={`text-[#16a34a] text-sm transition-transform duration-200 flex-shrink-0 ml-4 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
