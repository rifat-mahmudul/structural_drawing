const topics = [
  { icon: '📐', text: 'Structural drawing কী, কেন দরকার – সম্পূর্ণ clear idea দেওয়া হবে' },
  { icon: '📖', text: 'Drawing কীভাবে পড়তে হয় – level by level understanding' },
  { icon: '🏗️', text: 'RCC detailing concept – Beam, Column, Slab সহজ ভাষায়' },
  { icon: '🗺️', text: 'Civil engineer হিসেবে কোন skills আগে দরকার – complete roadmap' },
  { icon: '💼', text: 'Real project mindset তৈরি করার শুরু – practical approach' },
  { icon: '🎯', text: 'Site-level drawing reading – real field এ কীভাবে কাজ হয়' },
]

export default function WhatThisClass() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          এই <span className="text-[#16a34a]">Class-এ</span> কী হবে?
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {topics.map((item) => (
            <div
              key={item.icon}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
