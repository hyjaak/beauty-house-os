import React from 'react'

import { brands } from '../config/brands'

const Card = ({title, price, popular}:{title:string, price:string, popular?:boolean})=> (
  <div className={`p-6 rounded-lg ${popular? '':'bg-gray-900 text-white'}`} style={popular ? {backgroundColor: brands.lace, color: brands.black} : undefined}>
    <div className="font-bold text-lg">{title}</div>
    <div className="text-2xl font-extrabold my-3">{price}</div>
    <ul className="text-sm space-y-1 mb-4">
      <li>Early Booking Access</li>
      <li>Priority Waitlist</li>
      <li>Exclusive Offers</li>
    </ul>
    <button className="w-full py-2 rounded" style={popular ? {backgroundColor: brands.black, color: brands.lace} : {backgroundColor: brands.lace, color: brands.black}}>JOIN NOW</button>
  </div>
)

export default function VIPTiers(){
  return (
    <section className="w-full bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center font-bold text-2xl mb-6">THE INNER CIRCLE — VIP MEMBERSHIP</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Royalty" price="$29/mo" />
          <Card title="Queen" price="$59/mo" popular />
          <Card title="Empress" price="$99/mo" />
        </div>
      </div>
    </section>
  )
}
