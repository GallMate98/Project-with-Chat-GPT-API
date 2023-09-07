import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { handleClientScriptLoad } from 'next/script'

export default function ModalElements({src,text,func,val, selectedVal}:any) {

    
  return (
    <div onClick={(e)=>{func(val)}} className={`relative group cursor-pointer ${selectedVal == val ? "border-4 border-amber-600":"border-4 border-white"}`}> 
       <Image className='w-[200px] transition-all duration-300 group-hover:brightness-[70%] aspect-square' src={src} alt='imagine modal' width={300} height={300}/>
       <p className='gruop-hover:-translate-y-2 group-hover:bg-amber-600 transition-all duration-300 absolute text-lg  text-white bottom-6 w-[80%] py-2 rounded mx-[10%] mb-[10%] bg-black/70 text-center'>{text}</p>
       <input defaultChecked={val== selectedVal} className="invisible absolute"  type="radio" value={val} name="modal_el"/>
    </div>
  )
}
