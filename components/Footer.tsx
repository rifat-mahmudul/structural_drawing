export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 pt-12 pb-16">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              🏗️ Structural Drawing Foundation
            </h3>
            <p className="text-sm leading-relaxed">
              Bangladesh-এর Civil Engineering students-দের জন্য সেরা structural
              foundation course। আমাদের লক্ষ্য প্রতিটি student-কে career-ready
              করে তোলা।
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <p>📍 Khilkhet-1229, Dhaka, Bangladesh</p>
              <p>
                💬 WhatsApp:{" "}
                <a
                  href="https://wa.me/8801540754530"
                  className="text-blue-400 hover:underline"
                >
                  +8801540754530
                </a>
              </p>
              <p>
                ✉️ Email:{" "}
                <a
                  href="mailto:civil1632@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  civil1632@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
