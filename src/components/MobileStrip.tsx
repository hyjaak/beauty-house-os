import React from 'react'

export default function MobileStrip(){
  return (
    <section className="w-full py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-center text-gray-200 mb-6">Mobile App Preview</h4>
        <div className="flex gap-6 justify-center">
          {[1,2,3,4].map((i)=> (
            <div key={i} className="w-40 h-80 bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-3xl p-4">
              <div className="w-full h-full bg-cover rounded-2xl" style={{backgroundImage:'linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
