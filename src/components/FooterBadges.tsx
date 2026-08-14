import React from 'react'

const Badge = ({label}:{label:string})=> (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">★</div>
    <div className="text-sm">{label}</div>
  </div>
)

export default function FooterBadges(){
  const items = ['Secure Payments','Deposit Protection','Flexible Options','Waitlist Power','24/7 Concierge','Beauty History','Gift Cards','Referral Rewards']
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-8 gap-4">
        {items.map(i=> <Badge key={i} label={i} />)}
      </div>
    </footer>
  )
}
