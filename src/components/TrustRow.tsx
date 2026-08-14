import React from 'react'

const Item = ({title, subtitle}:{title:string, subtitle?:string})=> (
  <div className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">★</div>
    <div className="text-sm font-semibold">{title}</div>
    {subtitle && <div className="text-xs text-gray-400">{subtitle}</div>}
  </div>
)

export default function TrustRow(){
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-6 items-center">
        <div className="flex justify-around">
          <Item title="Premium Experience" />
          <Item title="Expert Artists" />
          <Item title="Easy Booking" />
          <Item title="Ohio Based" />
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold">BEAUTY HOUSE</div>
          <div className="text-sm text-gray-300">TWO WORLDS. ONE EXPERIENCE.</div>
        </div>

        <div className="flex justify-around">
          <Item title="Inner Circle" />
          <Item title="Secure Payments" />
          <Item title="Auto Reminders" />
          <Item title="Customer Love" />
        </div>
      </div>
    </section>
  )
}
