'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ModalElements from './ModalElements';
import { useIngredientsContext } from './IngredientsContext';
import Link from 'next/link';

export default function Modal() {

   const [modalClass, setModalClass] = useState('hidden');
   const [selectedVal, setSelectedVal] = useState('');
   const {ingredients,modalOpen, setModalOpen}:any = useIngredientsContext();


   const imagesPath = '/categorys_element/';


   useEffect(()=>{
    if(modalOpen) {
        openModal();

    }
    else{
        closeModal();
    }
    
   },
   [modalOpen])

    const closeModal = () => {

        setModalClass('hidden');
    }

    const openModal= () =>{
        setModalClass('fixed');
    }

   function handleClick(val:any) {
     setSelectedVal(val);
   }

   
   
  return (
    <div className={`${modalClass} left-0 top-0 h-screen w-screen z-20`}>
        <div onClick={()=>{setModalOpen(false) }} className=' absolute left-0 top-0 w-screen h-screen bg-black opacity-20  '>

        </div>
        <div className=' bg-white relative mt-[5%] container z-30 mx-auto  p-8 '>
           <p onClick={()=>{setModalOpen(false)}} className='font-bold cursor-pointer absolute right-6 top-4 text-black'>X</p>
           <div className='flex flex-col items-center'>
            <h1 className='text-4xl w-full text-center pb-8 text-black'>Select your category</h1>
            <form className='flex flex-wrap gap-4 justify-center'> 
                <ModalElements src={`${imagesPath}breakfast.jpg`} func={handleClick} text="Breakfast" val="breakfast" selectedVal={selectedVal} />
                <ModalElements src={`${imagesPath}soups.jpg`} text="Soups" func={handleClick} selectedVal={selectedVal} val="soups"  />
                <ModalElements src={`${imagesPath}dinner.jpg`} text="Dinner"func={handleClick} selectedVal={selectedVal} val="dinner"  />
                <ModalElements src={`${imagesPath}desserts.jpg`} text="Desserts" func={handleClick} selectedVal={selectedVal} val="desserts"  />
                <ModalElements src={`${imagesPath}salads.jpg`} text="Salads"func={handleClick} selectedVal={selectedVal} val="salads" />
                <ModalElements src={`${imagesPath}quick.jpg`} text="Quick and Esay" func={handleClick} selectedVal={selectedVal} val="quick_and_easy"/>
                <ModalElements src={`${imagesPath}vegetarian.jpg`} text="Vegetarian" func={handleClick} selectedVal={selectedVal}val="vegetarian"/>
                <ModalElements src={`${imagesPath}lunchbox.jpg`} text="Lunch" func={handleClick} selectedVal={selectedVal} val="Lunch" />
             </form>
             <Link href={{
                    pathname: "/results",
                    query: { 
                        ingredients: ingredients,
                        selectedCategory: selectedVal
                    }
                }} className='mt-8 bg-main text-white bg-amber-600 rounded px-8 py-2 text-lg'>Create recipe</Link>
           </div>
        </div>
    </div>
  )
}
