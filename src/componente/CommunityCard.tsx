import React from 'react'
import Image from 'next/image'

export default function CommunityCard({src,alt,text,title}:any) {
  return (
    
        <div className=' flex flex-col items-center text-center'>
         
         <Image className='my-5' src={src} alt={alt} width={200} height={200}></Image>
         <h3 className= 'text-amber-600 mb-8 cursor-pointer'>{title}</h3>
         <p className='text-black font-normal max-w-15px ' style={{ maxWidth: '260px' }}>{text}</p>

        </div>
    
  )
}
