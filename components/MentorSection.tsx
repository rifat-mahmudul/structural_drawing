export default function MentorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          আপনার <span className="text-[#16a34a]">Mentor</span>
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Photo */}
          <div className="w-40 h-40 flex-shrink-0 rounded-full border-4 border-white shadow-xl overflow-hidden">
            <img
              src="/abu_sayed.jpeg"
              alt="মোঃ আবূ সাইদ"
              className="w-40 h-48 object-cover object-center"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-1">
              মোঃ আবূ সাইদ
            </h3>
            <p className="text-[#16a34a] font-semibold text-base mb-3">
              Structural Detailer Specialist | ৯+ বছরের বাস্তব অভিজ্ঞতা
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              বাংলাদেশের বিভিন্ন large-scale construction project-এ সরাসরি কাজ
              করার অভিজ্ঞতা থেকে তিনি জানেন—একটি drawing শুধু কাগজের লাইন নয়,
              এটি পুরো project execution-এর ভাষা।
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              তিনি Civil Engineering students-দের শেখান কীভাবে structural
              drawing "দেখতে" নয়, "বোঝতে" হয়।
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              তার প্রশিক্ষণের মূল শক্তি:
            </p>

            <ul className="text-gray-600 text-sm leading-relaxed list-disc list-inside mb-4 space-y-1">
              <li>Field-oriented explanation</li>
              <li>Real project case discussion</li>
              <li>Practical mindset development</li>
              <li>Interview confidence building</li>
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              তার mission : <br />
              বাংলাদেশের Civil engineering students - দের practical drawing
              reading ও structural detailing-এ দক্ষ করে তুলা, যাতে তারা real
              field-এ confident ও industry-ready হতে পারে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
