const details = [
  { label: '📚 Class Name', value: 'Foundation for Structural Drawing & Detailing' },
  { label: '⏱️ Duration', value: '1–2 Hours' },
  { label: '📊 Level', value: 'Beginner' },
  { label: '💻 Mode', value: 'Online Live Class' },
  { label: '💰 Fee', value: null, isFee: true },
]

export default function ClassDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          Class <span className="text-[#16a34a]">Details</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="text-[#16a34a] text-xs uppercase tracking-widest font-bold mb-2">
                {d.label}
              </p>
              {d.isFee ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="line-through text-gray-400 text-sm">399 টাকা</span>
                  <span className="bg-[#16a34a] text-white text-sm px-3 py-0.5 rounded-full font-bold">
                    FREE
                  </span>
                </div>
              ) : (
                <p className="text-gray-800 font-semibold text-sm leading-snug">{d.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
