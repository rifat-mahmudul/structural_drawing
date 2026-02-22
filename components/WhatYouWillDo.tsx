const activities = [
  { icon: '🔍', text: 'Simple drawing parts identify করা' },
  { icon: '📋', text: 'Layout, section, note বোঝা' },
  { icon: '📄', text: 'Basic structural sheet পড়া' },
  { icon: '✏️', text: 'ছোট intro task সম্পন্ন করা' },
  { icon: '🧭', text: 'নিজের weak point identify করা' },
]

export default function WhatYouWillDo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          এই Class-এ <span className="text-[#16a34a]">আপনি কি করবেন?</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {activities.map((item) => (
            <div
              key={item.text}
              className="bg-white border border-gray-200 rounded-3xl p-7 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-gray-700 text-sm font-medium leading-snug">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <span className="bg-green-50 border-2 border-[#16a34a] text-[#15803d] font-bold text-base px-8 py-3.5 rounded-full">
            🎯 Concept clear করাই এই class-এর লক্ষ্য।
          </span>
        </div>
      </div>
    </section>
  )
}
