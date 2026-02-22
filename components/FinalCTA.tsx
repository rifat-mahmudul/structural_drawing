import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] mb-8 max-w-2xl mx-auto leading-tight">
          Don&apos;t miss this chance to build your{' '}
          <span className="text-[#16a34a]">practical skill!</span>
        </h2>

        <Link
          href="#registration"
          className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xl py-6 px-16 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-200 hover:-translate-y-0.5"
        >
          Join Free Structural Drawing Class Now →
        </Link>

        <p className="mt-5 text-red-600 font-semibold flex items-center justify-center gap-2">
          ⏰ Offer valid for limited time only — এখনই join করুন
        </p>
      </div>
    </section>
  )
}
