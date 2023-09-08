'use client'
import React from 'react'
import Image from 'next/image'
import  {useState}  from 'react';

export default function FullRecipe({category,src,alt,time,title,description, list}:any) {
    const [isVisible, setIsVisible] = useState(false); 
    const [buttonText, setButtonText] = useState('Preparation');

    function handleVisible() {
        if(!isVisible) {
            setIsVisible(true);
            setButtonText("Close");
        
        }
        else{ 
            setIsVisible(false)
            
            setButtonText("Preparation");

        }
    }

    function getImageByCategory(category:string) {
        switch (category) {
            case 'Breakfast':
                return '/breakfast/breakfast_1.jpg';
            case 'Soups':
                return '/soups/soup_2.jpg';
            case 'Dinner':
                return '/dinner/dinner_2.jpg';
            case 'Desserts':
                return '/desserts/dessert_3.jpg';
            case 'Salads': 
                return '/salads/salad_3.jpg';
            case 'Quick and easy':
                return '/quick/quick_4.jpg';           
            case 'Vegetarian':
                return '/vegetarian/vegetarian_5.jpg';
            case 'Lunch': 
                return '/lunch/lunchbox_6.jpg';
            default:
                return'';
        }
    }

  return (
    <div className={`relative container border-2 max-w-[1100px] bg-white py-4 px-8 my-4 mb-8 ${isVisible?'bg-border-2 border-amber-600':''}`}>
        <div className='flex flex-row'>
            <div className='transform translate-x-[-80px]  translate-y-2'>
                <Image className='mr-5 my-4 rounded' src={getImageByCategory(category)} alt={alt} width={200} height={150}/>
            </div>
            <div className='mt-0 mb-2 mr-16 py-6'>
                <h2 className='text-2xl mb-6 font-bold text-black '>{title}</h2>
                    <p className='font-medium text-black mt-1 mb-2'>Preparation time: {time}</p>
                <div className='flex flex-row  justify-between font-medium text-black'>
                    <p className='text-black cursor-pointer mr-6'>Ingredients:</p>
                    <div className=' flex flex-row gap-24 text-1xl'>
                    {list && Array.isArray(list) && (
                    <>
                        <ul>
                        {list.map((item, index) => {
                            if (index<4) {
                            return <li key={index}>{item}</li>;
                            } 
                            return null; 
                        })}
                        </ul>
                        <ul>
                        {list.map((item, index) => {
                            if (index<8 && index>3) {
                            return <li key={index}>{item}</li>;
                            }
                            return null;
                        })}
                        </ul>
                        <ul>
                        {list.map((item, index) => {
                            if (index<12 && index>7)  {
                            return <li key={index}>{item}</li>;
                            }
                            return null;
                        })}
                        </ul>
                    </>
                )}
                </div>
                   
                </div>
            </div>
        </div>
        <div className={`flex flex-row gap-4 text-justify ${isVisible ? '':'hidden' }`}>
           <p className=' text-black'>Preparation:</p>
           <p className='text-black px-4 ' style={{ maxWidth: '1000px' }}>{description}</p>
        </div>
        
        <button className={`absolute justify-end right-12 mb-2  rounded transform translate-x-[-4px] translate-y-[-4px] w-40  cursor-pointer border-2 py-3 px-8  z-10  ${isVisible ? 'text-amber-700 border-amber-700 bg-white': 'bg-amber-600 border-amber-600 text-white '}`} onClick={handleVisible}>{buttonText}</button>
    </div>
  )
}
