import React from 'react'
import Header from './components/Header'
import PDPContent from 'pdp/PDPContent'
import Footer from './components/Footer'

export default function PDPLayout() {
  return (
    <>
        <Header />
        <div className="h-[56px]"></div>
        <PDPContent />
        <Footer />
    </>
  )
}
