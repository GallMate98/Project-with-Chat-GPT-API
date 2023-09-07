'use client'
import Modal from '@/componente/Modal'
import Header from '@/componente/Header'
import LatestRecipes from '@/componente/LatestRecipes'
import Community from '@/componente/Community'
import Navbar from '@/componente/Navbar'
import { IngredientsContextProvider } from '@/componente/IngredientsContext'


export default function Home() {
  
 

  return (
    <IngredientsContextProvider>
    <main >
      <Header/>
      <LatestRecipes/>
      <Community/>
      <Modal/>
    </main>
    </IngredientsContextProvider>

  )
}
