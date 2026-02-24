import Link from "next/link";

const urgencyPoints = [
  "Limited seats only — আসন সীমিত",
  "Offer can close anytime — যেকোনো সময় বন্ধ হতে পারে",
  "Join now before it becomes paid again",
];

export default function OfferSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0f2240] to-[#0a2040]">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(22,163,74,0.15)_0%,transparent_60%)]" />

      <div className="container mx-auto px-5 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          🔥 Special Offer for{" "}
          <span className="text-green-400">Registered Person!</span>
        </h2>

        <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
          এই কোর্সের regular fee 2000 TK. এখন Limited Time এর জন্য সম্পূর্ণ{" "}
          <strong className="text-green-400">100% FREE!</strong>
        </p>

        <ul className="flex flex-col items-center gap-3 mb-12">
          {urgencyPoints.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 text-yellow-300 font-semibold text-base"
            >
              <span>⚠️</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <Link
          href="#registration"
          className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xl py-5 px-16 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-200 hover:-translate-y-0.5"
        >
          Enroll Free Now — এখনই →
        </Link>
      </div>
    </section>
  );
}
