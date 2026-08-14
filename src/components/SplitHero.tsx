import React from 'react'
import { brands } from '../config/brands'

export default function SplitHero(){
  return (
    <section className="w-full min-h-[520px] text-white flex" style={{backgroundColor: brands.black}}>
      <div className="w-1/2 relative flex items-center justify-center p-8" style={{backgroundImage:`linear-gradient(120deg, ${brands.taida}, rgba(0,0,0,0.6))`}}>
        <div className="max-w-sm">
          <div className="font-extrabold text-4xl" style={{color: brands.taida}}>TAIDA</div>
          <div className="font-semibold" style={{color: '#e07ab0'}}>NAIL TECH</div>
          <h3 className="mt-4 text-xl font-semibold">Art. Luxury. Perfection.</h3>
          <p className="mt-3 text-gray-300">Custom nail art that's more than just nails — it's wearable art.</p>
          <button className="mt-6 text-white px-4 py-2 rounded" style={{backgroundColor: brands.taida}}>ENTER NAIL WORLD</button>
        </div>
      </div>

      <div className="w-[4px] relative flex items-center justify-center" style={{backgroundColor: brands.lace}}>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 text-center">
          <div className="text-2xl" style={{color: brands.lace}}>👑♦️</div>
          <div className="text-sm" style={{color: '#e6d39a'}}>CHOOSE YOUR WORLD</div>
        </div>
      </div>

      <div className="w-1/2 relative flex items-center justify-center p-8" style={{backgroundImage:`linear-gradient(120deg, ${brands.lace}, rgba(0,0,0,0.6))`}}>
        <div className="max-w-sm text-right">
          <div className="font-extrabold text-3xl" style={{color: brands.lace}}>THE LACE GURU</div>
          <h3 className="mt-4 text-xl font-semibold">Confidence. Beauty. Craft.</h3>
          <p className="mt-3 text-gray-300">Flawless installs. Natural looks. Unmatched expertise.</p>
          <div className="mt-6 text-right"><button className="text-black px-4 py-2 rounded" style={{backgroundColor: brands.lace}}>ENTER HAIR WORLD</button></div>
        </div>
      </div>
    </section>
  )
}
