import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/componente/Navbar'
import Footer from '@/componente/Footer'


export const metadata: Metadata = {
  title: 'youChef',
  description: 'youChef is a greatest app',
}

export default function UserLayout({children}:any)
 {
  return (
    <html lang="en">
      <body className="">
      <Navbar/>
        {children}
        <Footer/>
      </body>
    
    </html>
  )
}
