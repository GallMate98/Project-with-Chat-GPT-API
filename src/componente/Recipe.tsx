import React from 'react'
import Image from 'next/image'

export default function Recipe({src,alt, text}:any) {
  return (
      <div className=' flex flex-col items-center text-center'>
          <Image className='my-5' src={src} alt={alt} width={200} height={200}></Image>
          <p className='text-black font-normal max-w-15px ' style={{ maxWidth: '200px' }}>{text}</p>
      </div>
  )
}
