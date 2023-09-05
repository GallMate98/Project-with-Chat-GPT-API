import React from 'react'
import Recipe from './Recipe'


const latestPath = '/latest/';
export default function LatestRecipes() {
  return (
    <section className='bg-white'> 
        <div className='flex flex-col mx-auto p-4'>
          <h2 className='text-black text-center py-5 text-3xl'>Latest recipes</h2>
          <div className='flex flex-row justify-between gap-2 mx-40'>
            <Recipe src={`${latestPath}1.jpg`} alt="croissant" text="French croissant with butter and peach jem"/>
            <Recipe src={`${latestPath}2.jpg`} alt="tomato soup"text="Creamy toamto soup"/>
            <Recipe src={`${latestPath}3.jpg`} alt="cooked"text="Grilled chicken breast with cooked rice and string-peas"/>
            <Recipe src={`${latestPath}4.jpg`} alt="cake"text="Raspberry jam and vanilia cream cake"/>
          </div>
        </div>

    </section>
  )
}
