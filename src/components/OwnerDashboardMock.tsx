import React from 'react'

export default function OwnerDashboardMock(){
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg text-white">
      <div className="font-bold mb-3">OWNER DASHBOARD</div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-gray-800 rounded">Today's Appointments<br/><span className="text-2xl font-bold">12</span></div>
        <div className="p-3 bg-gray-800 rounded">Today's Revenue<br/><span className="text-2xl font-bold">$1,840</span></div>
        <div className="p-3 bg-gray-800 rounded">Deposits Collected<br/><span className="text-2xl font-bold">$920</span></div>
        <div className="p-3 bg-gray-800 rounded">Cancellations<br/><span className="text-2xl font-bold">1</span></div>
      </div>
      <div className="p-3 bg-gray-800 rounded mb-3">Upcoming Appointments (mock list)</div>
      <div className="p-3 bg-gray-800 rounded">Revenue Chart (placeholder)</div>
      <div className="text-xs text-gray-400 mt-3">{/* TODO: wire to real dashboard data in later phase */}</div>
    </div>
  )
}
