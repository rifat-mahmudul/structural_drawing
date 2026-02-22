const audience = [
  { icon: '🎓', label: 'Diploma in Civil Students' },
  { icon: '🏛️', label: 'BSc in Civil Students' },
  { icon: '🌱', label: 'Fresh Graduates' },
  { icon: '🏗️', label: 'Structural field-এ যেতে চায় যারা' },
  { icon: '✏️', label: 'Drawing & Detailing-এ weak যারা' },
]

export default function WhoThisIsFor() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          এই Class <span className="text-[#16a34a]">কার জন্য?</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {audience.map((item) => (
            <div
              key={item.label}
              className="bg-white border-2 border-gray-200 rounded-3xl p-7 text-center hover:border-[#16a34a] hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-[#1e3a5f] font-semibold text-sm leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
