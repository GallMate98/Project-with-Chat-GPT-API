import React from 'react'
import Recipe from './CommunityCard'
import CommunityCard from './CommunityCard';


const latestPath = '/community/';
export default function Community() {
  return (
    <section className='bg-slate-300 pb-10 pt-5'> 
        <div className='flex flex-col mx-auto p-4'>
          <h2 className='text-black text-center py-5 text-3xl'>Enter the Community</h2>
          <div className='flex flex-row justify-between gap-2 mx-40'>
            <CommunityCard src={`${latestPath}community_1.png`} alt="croissant" title="Find recipes" text="Explore the recipes selected by our stuff uploaded by our community"/>
            <CommunityCard src={`${latestPath}community_2.png`} alt="cooked" title="Review recipes" text="Evalute and comment on the dishes proposed by others"/>
            <CommunityCard src={`${latestPath}community_3.png`} alt="cake"title="Add recipes" text="Pass on your know-how by proposing your recipes"/>
        </div>
     </div>
    </section>
  )
}