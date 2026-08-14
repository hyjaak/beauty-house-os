import React from 'react'

const Step = ({title}:{title:string})=> (
  <div className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">🔹</div>
    <div className="text-sm">{title}</div>
  </div>
)

export default function BookingFlow(){
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg text-white">
      <div className="font-bold mb-4">THE BOOKING FLOW</div>
      <div className="flex justify-between mb-6">
        <Step title="Choose Service" />
        <Step title="Pick Add-ons" />
        <Step title="Select Date" />
        <Step title="Choose Time" />
        <Step title="Your Info" />
        <Step title="Pay Deposit" />
      </div>

      <div className="mt-4">
        <div className="font-semibold text-sm mb-2">AUTOMATIC SYSTEM FOR YOU</div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center"><div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">🔔</div><div className="text-xs mt-1">Reminders</div></div>
          <div className="flex flex-col items-center"><div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">⏳</div><div className="text-xs mt-1">Waitlist</div></div>
          <div className="flex flex-col items-center"><div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">↩️</div><div className="text-xs mt-1">Reschedule</div></div>
          <div className="flex flex-col items-center"><div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">🔁</div><div className="text-xs mt-1">Rebook</div></div>
          <div className="flex flex-col items-center"><div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center">🎁</div><div className="text-xs mt-1">Rewards</div></div>
        </div>
      </div>
      <div className="text-xs text-gray-400 mt-3">{/* TODO: wire to real booking data in later phase */}</div>
    </div>
  )
}
