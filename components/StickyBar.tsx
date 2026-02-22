'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-[#0f2240] border-t border-[#1e3a5f] z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-5 py-3 flex items-center justify-center gap-4 flex-wrap">
        <span className="text-white font-semibold text-sm hidden sm:block">
          🔥 FREE Class — Limited Time Offer!
        </span>
        <Link
          href="#registration"
          className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm py-2.5 px-7 rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-md"
        >
          Join Free Now →
        </Link>
      </div>
    </div>
  )
}
