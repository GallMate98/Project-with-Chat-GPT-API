import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full bg-white h-30'>
        <section className='container mx-auto w-full'>
         <div className='flex  text-black items-center mr-16 justify-center w-full'>
            <Image className='w-32 mr-auto text' src="/logo.png" alt='imagine logo' width={300} height={300}/>
            <div className='flex flex-row gap-8 pl-20 text-center w-3/4 font-medium'>
                <Link href="">About us</Link>
                <Link href="">FAQ</Link>
                <Link href="">Contact</Link>
                <Link href="">Legal discloser</Link>
                <Link href="">Privacy policy</Link>
            </div>
         </div>
         <div className='items-center text-black text-center'>
            <p>Copyright &#169; 2023 you chef. All rights reserved!</p>
         </div>
        </section>
    </footer>
  )
}
