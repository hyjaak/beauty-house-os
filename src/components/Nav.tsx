import React from 'react'
import { brands } from '../config/brands'

export default function Nav(){
  return (
    <nav className="w-full text-white px-6 py-4 flex items-center justify-between" style={{backgroundColor: brands.black}}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold" style={{background: `linear-gradient(135deg, ${brands.taida}, ${brands.lace})`}}>👑</div>
        <div className="leading-tight">
          <div className="font-bold">BEAUTY HOUSE</div>
          <div className="text-xs text-gray-300">TWO WORLDS. ONE EXPERIENCE.</div>
        </div>
      </div>

      <ul className="hidden md:flex gap-8 text-sm text-gray-200">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>Join Inner Circle</li>
      </ul>

      <div>
        <button className="font-semibold px-4 py-2 rounded-full" style={{backgroundColor: brands.lace, color: brands.black}}>BOOK NOW</button>
      </div>
    </nav>
  )
}
