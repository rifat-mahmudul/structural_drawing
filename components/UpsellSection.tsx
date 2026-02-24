"use client";

import { useState } from "react";

export default function UpsellSection() {
  const [checked, setChecked] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="max-w-lg mx-auto bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-400 rounded-3xl p-8 md:p-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">
            Optional Add-on
          </p>

          <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-2">
            Session PDF Notes মাত্র{" "}
            <span className="text-orange-500">৪৯ টাকা</span>
          </h3>

          <p className="text-4xl font-black text-orange-500 my-5">
            ৪৯ টাকা মাত্র!
          </p>

          <ul className="text-left space-y-3 mb-7">
            {[
              "300% deeper understanding — আরও গভীরভাবে বুঝতে পারবে",
              "10x better note taking — সব কিছু organized ভাবে পাবে",
              "100x better revision — যেকোনো সময় revise করতে পারবে",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-gray-700 font-semibold text-sm"
              >
                <span className="flex-shrink-0">🚀</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <label
            className={`flex items-center gap-3 bg-white p-4 rounded-2xl border-2 cursor-pointer transition-colors mb-6 ${
              checked ? "border-orange-400 bg-orange-50" : "border-amber-300"
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="w-5 h-5 accent-orange-500 cursor-pointer"
            />
            <span className="text-gray-800 font-semibold text-sm">
              ✅ Yes, I want PDF notes for ৪৯ টাকা
            </span>
          </label>

          {checked && (
            <div className="bg-white p-5 rounded-2xl border-2 border-orange-300">
              <h4 className="font-extrabold text-[#1e3a5f] mb-3">
                📲 Send Money Options:
              </h4>

              <div className="flex flex-col gap-3 mb-4">
                {/* Bkash */}
                <div className="flex items-center justify-between bg-gradient-to-r from-pink-50 to-pink-100 p-3 rounded-xl border border-pink-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">💳</span>
                    <span className="font-bold text-[#1e3a5f]">Bkash</span>
                  </div>
                  <span className="font-mono font-bold text-orange-600 text-lg">
                    01753224744
                  </span>
                </div>

                {/* Nagad */}
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📱</span>
                    <span className="font-bold text-[#1e3a5f]">Nagad</span>
                  </div>
                  <span className="font-mono font-bold text-orange-600 text-lg">
                    01753224744
                  </span>
                </div>

                {/* Rocket */}
                <div className="flex items-center justify-between bg-gradient-to-r from-red-50 to-red-100 p-3 rounded-xl border border-red-200">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <span className="font-bold text-[#1e3a5f]">Rocket</span>
                  </div>
                  <span className="font-mono font-bold text-orange-600 text-lg">
                    01753224744
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-xl text-left text-sm">
                <p className="font-bold text-[#1e3a5f] mb-1">
                  📌 Instructions:
                </p>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>Send ৪৯ টাকা to any number above</li>
                  <li>Screenshot the transaction receipt</li>
                  <li>Send screenshot to us after checkout</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
