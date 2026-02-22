export default function MentorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          তোমার <span className="text-[#16a34a]">Mentor</span>
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Photo placeholder */}
          <div className="w-36 h-36 flex-shrink-0 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#16a34a] flex items-center justify-center text-6xl border-4 border-white shadow-xl">
            👨‍💼
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-1">মোঃ আবূ সাইদ</h3>
            <p className="text-[#16a34a] font-semibold text-base mb-3">
              Structural Detailer Specialist
            </p>
            <span className="inline-block bg-[#1e3a5f] text-white px-5 py-1.5 rounded-full text-sm font-bold mb-4">
              ⭐ ৯+ বছরের অভিজ্ঞতা
            </span>
            <p className="text-gray-600 text-sm leading-relaxed">
              মোঃ আবূ সাইদ একজন অভিজ্ঞ Structural Detailer Specialist যিনি ৯+ বছর ধরে
              Bangladesh-এর বিভিন্ন large-scale construction project-এ কাজ করেছেন।
              তিনি হাজারো Civil Engineering students-দের practical drawing reading এবং
              structural detailing শেখাতে সাহায্য করেছেন। তাঁর লক্ষ্য: প্রতিটি student
              যেন real field-এ confident ভাবে কাজ করতে পারে।
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
