import React from 'react'
import Nav from '../components/Nav'
import SplitHero from '../components/SplitHero'
import MobileStrip from '../components/MobileStrip'
import TrustRow from '../components/TrustRow'
import ConciergeMock from '../components/ConciergeMock'
import BookingFlow from '../components/BookingFlow'
import OwnerDashboardMock from '../components/OwnerDashboardMock'
import VIPTiers from '../components/VIPTiers'
import FooterBadges from '../components/FooterBadges'
import { brands } from '../config/brands'

export default function Page(){
  return (
    <main className="text-white min-h-screen" style={{backgroundColor: brands.black}}>
      <Nav />
      <SplitHero />
      <MobileStrip />
      <TrustRow />

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <ConciergeMock />
        </div>
        <div>
          <BookingFlow />
        </div>
        <div>
          <OwnerDashboardMock />
        </div>
      </section>

      <VIPTiers />
      <FooterBadges />
    </main>
  )
}
