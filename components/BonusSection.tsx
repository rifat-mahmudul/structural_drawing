const bonuses = [
  {
    icon: '📝',
    title: 'Free Notes & Checklist',
    desc: 'Class-এর সাথে professional notes পাবে revision-এর জন্য',
  },
  {
    icon: '📐',
    title: 'Sample Drawings',
    desc: 'Real project-এর sample drawings দেখার সুযোগ পাবে',
  },
  {
    icon: '🎁',
    title: 'Next Course Discount',
    desc: 'পরবর্তী paid course-এ special discount পাবে',
  },
]

export default function BonusSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          Bonus You Will <span className="text-[#16a34a]">Get</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-5xl mb-4">{b.icon}</div>
              <h4 className="font-bold text-[#1e3a5f] text-base mb-2">{b.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Guarantee badge */}
        <div className="max-w-xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-[#16a34a] rounded-3xl p-6 text-center">
          <p className="font-bold text-[#15803d] text-lg mb-1">
            🛡️ No risk. Just join, learn, upgrade.
          </p>
          
        </div>
      </div>
    </section>
  )
}
