import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2240] via-[#1e3a5f] to-[#1a4f8a] py-20 md:py-28">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-green-500/20 border border-green-500/40 text-green-300 px-5 py-1.5 rounded-full text-sm font-semibold mb-5 tracking-wide">
              🎓 Structural Drawing Foundation Class
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              শুরু করো Professional Structural Career-এর সঠিক পথে
            </h1>

            {/* Price box */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-7 flex flex-wrap items-center gap-3">
              <span className="text-red-300 line-through text-base font-medium">কোর্স ফি: 399 টাকা</span>
              <span className="text-white">→</span>
              <span className="text-green-400 font-extrabold text-2xl">100% FREE!</span>
              <span className="text-yellow-200 text-sm">⏰ Limited Time Only</span>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {[
                'Beginner-friendly — সম্পূর্ণ সহজ ভাষায়',
                'Diploma / BSc Students দের জন্য পারফেক্ট',
                'Intro Task + Foundation Concept',
                'Real project mindset guideline',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-green-100 text-base">
                  <span className="mt-0.5 flex-shrink-0">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col items-start gap-3">
              <Link
                href="#registration"
                className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-lg py-5 px-12 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                Free Class-এ Join করুন এখনই →
              </Link>
              <p className="text-green-300 text-sm flex items-center gap-2">
                🔒 No risk. Completely free. কোনো credit card লাগবে না।
              </p>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="hidden md:flex flex-col gap-4">
            {[
              { label: 'Class Name', value: 'Foundation for Structural Drawing & Detailing', highlight: false },
              { label: '⏱️ Duration', value: '1–2 Hours', highlight: false },
              { label: '💻 Mode', value: 'Online Live Class', highlight: false },
              { label: '💰 Fee', value: null, isFee: true, highlight: true },
            ].map((card) => (
              <div
                key={card.label}
                className={`rounded-2xl p-5 border backdrop-blur-sm ${
                  card.highlight
                    ? 'bg-green-600/20 border-green-500/40'
                    : 'bg-white/8 border-white/15'
                }`}
              >
                <p className="text-blue-300 text-xs uppercase tracking-widest mb-1 font-semibold">
                  {card.label}
                </p>
                {card.isFee ? (
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-red-300 line-through text-sm">399 TK</span>
                    <span className="text-green-400 font-extrabold text-2xl">FREE 🎉</span>
                  </div>
                ) : (
                  <p className="text-white font-semibold text-base">{card.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
