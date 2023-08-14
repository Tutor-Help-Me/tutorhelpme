'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

// import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow" style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, backgroundColor: '#f8fafc'}}>

        {/* <PageIllustration /> */}

        {children}

      </main>

      <Footer />
    </>
  )
}
