import React from 'react'

export default function SplitHero(){
  return (
    <section className="w-full min-h-[520px] bg-black text-white flex">
      <div className="w-1/2 relative flex items-center justify-center p-8" style={{backgroundImage:'linear-gradient(120deg,#2a0520,rgba(0,0,0,0.6))'}}>
        <div className="max-w-sm">
          <div className="text-pink-400 font-extrabold text-4xl">TAIDA</div>
          <div className="text-pink-300 font-semibold">NAIL TECH</div>
          <h3 className="mt-4 text-xl font-semibold">Art. Luxury. Perfection.</h3>
          <p className="mt-3 text-gray-300">Custom nail art that's more than just nails — it's wearable art.</p>
          <button className="mt-6 bg-pink-600 text-white px-4 py-2 rounded">ENTER NAIL WORLD</button>
        </div>
      </div>

      <div className="w-[4px] bg-amber-500 relative flex items-center justify-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 text-center">
          <div className="text-amber-400 text-2xl">👑♦️</div>
          <div className="text-amber-300 text-sm">CHOOSE YOUR WORLD</div>
        </div>
      </div>

      <div className="w-1/2 relative flex items-center justify-center p-8" style={{backgroundImage:'linear-gradient(120deg,#241a05,rgba(0,0,0,0.6))'}}>
        <div className="max-w-sm text-right">
          <div className="text-amber-300 font-extrabold text-3xl">THE LACE GURU</div>
          <h3 className="mt-4 text-xl font-semibold">Confidence. Beauty. Craft.</h3>
          <p className="mt-3 text-gray-300">Flawless installs. Natural looks. Unmatched expertise.</p>
          <div className="mt-6 text-right"><button className="bg-amber-500 text-black px-4 py-2 rounded">ENTER HAIR WORLD</button></div>
        </div>
      </div>
    </section>
  )
}
