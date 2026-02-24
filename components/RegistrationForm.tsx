"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const templateParams = {
        to_email: "civil1632@gmail.com",
        from_name: form.name,
        from_email: form.email || "not-provided@email.com",
        phone: form.phone,
        name: form.name,
        email: form.email || "Not provided",
        date: new Date().toLocaleString("bn-BD", {
          timeZone: "Asia/Dhaka",
        }),
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID as string,
        EMAILJS_TEMPLATE_ID as string,
        templateParams,
        EMAILJS_PUBLIC_KEY as string,
      );

      console.log("result: ", result);

      if (result.status === 200) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "" });
      } else {
        throw new Error("ইমেইল পাঠাতে সমস্যা হয়েছে");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("দুঃখিত, ফর্ম জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-br from-[#0f2240] to-[#1e3a5f]"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          এখনই <span className="text-green-400">Register করুন</span>
        </h2>
        <p className="text-slate-300 text-center mb-10">
          সম্পূর্ণ বিনামূল্যে — কোনো credit card লাগবে না
        </p>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            {!submitted ? (
              <>
                <div className="text-center mb-7">
                  <p className="text-xs text-[#16a34a] font-bold uppercase tracking-widest mb-1">
                    ✅ সম্পূর্ণ বিনামূল্যে
                  </p>
                  <p className="text-2xl font-extrabold text-[#1e3a5f]">
                    Free Class Registration
                  </p>
                </div>

                {error && (
                  <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#16a34a] transition-colors font-[inherit]"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#16a34a] transition-colors font-[inherit]"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base outline-none focus:border-[#16a34a] transition-colors font-[inherit]"
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-lg py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-500/30 cursor-pointer ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        প্রসেসিং...
                      </span>
                    ) : (
                      "এখনই জয়েন করুন →"
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    🔒 আপনার তথ্য সম্পূর্ণ সুরক্ষিত। Spam নেই।
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-5 animate-bounce">🎉</div>
                <h3 className="text-2xl font-extrabold text-[#16a34a] mb-3">
                  রেজিস্ট্রেশন সফল হয়েছে!
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    <span className="font-semibold">ধন্যবাদ {form.name}!</span>
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    আমরা খুব শীঘ্রই আপনাকে WhatsApp গ্রুপে যুক্ত করব। সেখানে
                    ক্লাসের বিস্তারিত details এবং সময়সূচী পাঠিয়ে দেব।
                  </p>
                  <div className="bg-green-50 p-4 rounded-xl mt-4">
                    <p className="text-green-700 text-sm">
                      ⏱️ ২৪ ঘন্টার মধ্যে WhatsApp এ কনফার্মেশন মেসেজ পাবেন।
                    </p>
                  </div>
                  {/* <p className="text-gray-500 text-sm mt-4">
                    ইতিমধ্যে আমাদের কমিউনিটিতে যোগ দিতে{' '}
                    <a 
                      href="https://facebook.com/groups/your-group" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Facebook গ্রুপ
                    </a>{' '}
                    এ জয়েন করুন!
                  </p> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
