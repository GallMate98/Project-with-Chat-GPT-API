import React from 'react'
import { useIngredientsContext } from './IngredientsContext'
import { useState } from 'react';

export default function Header() {

 const {setIngredients, setModalOpen}:any = useIngredientsContext();
 const [ing,setIng] = useState('');


 function handleChange(e:any){
  setIng(e.target.value);

 }


 function handleClick(){
  setIng('');
  setModalOpen(true);
  setIngredients(ing);
 }

 

  return (
  <header className='bg-header bg-cover  h-[calc(100vh-92.25px)]'  >
    <section className='px-32 p-2 h-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
      <section className='p-4 px-8 container mx-auto flex flex-col gab-6 justify-center h-full'>
        <h1 className='text-5xl text-black font-semibold mt-80 mb-3'>
            A chef in every meal.
        </h1>
        <p className='text-2xl text-black max-w-md mb-10 font-medium'> 
            Get the best recipes and be you are <br/> home personal chef.
        </p>
        <div className='flex w-4/5 rounded'>
            <input type='text' onChange={handleChange} value={ing} placeholder="What ingredients do you have?" className=' outline-none px-2 w-full border-2 border-amber-600 text-black'/>
            <button onClick={handleClick} className='bg-amber-600 py-3 px-8 border border-amber-600  text-white font-semibold whitespace-nowrap'>Create recipes</button>
        </div>
      </section>
    </section>
  </header>
  )
}
