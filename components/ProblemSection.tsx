export default function ProblemSection() {
  const problems = [
    'RCC drawing দেখলে ভয় লাগে?',
    'Site drawing কীভাবে পড়তে হয় বুঝো না?',
    'Software জানো, কিন্তু foundation weak?',
    'Job interview-এ drawing নিয়ে confident feel করো না?',
  ]

  const solutions = [
    'Structural drawing read করতে পারবে',
    'Basic RCC detailing বুঝতে পারবে',
    'Confidence নিয়ে next step নিতে পারবে',
    'নিজের weak point সহজেই identify করতে পারবে',
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="section-title">
          পড়াশোনা আছে, কিন্তু{' '}
          <span className="text-[#16a34a]">Structural Drawing</span> বুঝতে কষ্ট হয়?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div>
            <ul className="space-y-4 mb-8">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="flex-shrink-0 mt-0.5">❌</span>
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#1e3a5f] text-white rounded-2xl p-5 text-center font-semibold text-base leading-relaxed">
              🏗️ এই class তোমাকে zero থেকে foundation clear করে দেবে।
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="text-[#16a34a] font-bold text-lg mb-5">
              এই Class-এর পর তুমি পারবে:
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="flex-shrink-0 mt-0.5">✅</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
