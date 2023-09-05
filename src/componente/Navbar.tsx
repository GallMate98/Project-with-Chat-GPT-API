
'use client';
import React from 'react'
import Image from 'next/image'
import Link from '../../node_modules/next/link'
import {usePathname} from 'next/navigation'


export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='bg-white w-full fixed z-10'>
        <section className='container mx-auto flex items-center justify-between p-2'>
            <Image className='w-32' src="/logo.png" alt='imagine logo' width={300} height={300}/>
            <section className='flex justify-between gap-4 text-black'>
                { pathname != '/' && ( <Link href="/">Home</Link> )}
                <Link className='hover:text-amber-600 font-normal' href="/enter-the-community">Enter the community</Link>
                <Link className='hover:text-amber-600 font-normal' href="/contact">Contact</Link>
                <section className='ml-4 flex items-center'>
                    <Link href={"https://facebook.com"} target="_blank">
                        <Image className='w-8 h-8' src="/Facebook.png" alt='imagine facebook' width={100} height={100}/>
                    </Link>
                    <Link href={"https://instagram.com"} target="_blank">
                        <Image className='w-8 h-8' src="/Instagram.png" alt='imagine facebook' width={100} height={100}/>
                    </Link>
                    <Link href={"https://twitter.com"}target="_blank">
                        <Image className='w-8 h-8' src="/Twitter.png" alt='imagine facebook' width={100} height={100}/>
                    </Link>
                </section>
            </section>
        </section>
    </nav>
  )
}
