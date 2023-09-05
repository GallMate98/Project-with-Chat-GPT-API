import React from 'react'

export default function Header() {
  return (
  <header className='bg-header bg-cover  h-[calc(100vh-92.25px)]'  >
    <section className='px-32 h-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
    <section className='p-4 px-8 container mx-auto flex flex-col gab-6 justify-center'>
        <h1 className='text-5xl text-black font-semibold mt-80 mb-3'>
            A chef in every meal.
        </h1>
        <p className='text-2xl text-black max-w-md mb-10 font-medium'> 
            Get the best recipes and be you are <br/> home personal chef.
        </p>
        <div className='flex w-2/3 rounded'>
            <input type='text'  placeholder="What ingredients do you have?" className=' outline-none px-2 w-full border-2 border-amber-600'/>
            <button className='py-3 px-8 bg-amber-600 border-amber-600 text-white font-semibold whitespace-nowrap'>Create recipes</button>
        </div>
        </section>
    </section>
  </header>
  )
}
