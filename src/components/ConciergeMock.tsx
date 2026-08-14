import React from 'react'

export default function ConciergeMock(){
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg text-white">
      <div className="font-bold mb-3">The Beauty Concierge</div>
      <div className="space-y-3">
        <div className="text-sm text-gray-300">Hi Queen! How can I assist you today?</div>
        <div className="p-3 bg-pink-700 rounded text-white self-start">I need a full set Friday around 5pm</div>
        <div className="p-3 bg-gray-800 rounded text-gray-200 self-end">I found these times for you: 5:00 PM, 5:30 PM, 6:00 PM</div>
        <div className="p-3 bg-green-700 rounded text-white">Perfect! Your appointment is $160 with a $50 deposit. Shall I reserve it for you?</div>
      </div>
      <div className="text-xs text-gray-400 mt-4">{/* TODO: wire to real chat in later phase */}</div>
    </div>
  )
}
