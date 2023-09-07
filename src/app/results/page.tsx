'use client'
import React, { use, useEffect } from 'react'
import FullRecipe from './FullRecipe'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

const ingredientList=[
    "100g ingredient_1",
    "300g ingredient_2",
    "1l ingredient_3",
    "0,5kg ingredient_4",
    "100g ingredient_1",
    "300g ingredient_2",
    "1l ingredient_3",
    "0,5kg ingredient_4",
    "100g ingredient_1",
    "300g ingredient_2",
    "1l ingredient_3",
    "0,5kg ingredient_4",
   ];

export default function page() {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const searchParams = useSearchParams();
  const category= searchParams?.get('selectedCategory');
  const ingredients = searchParams?.get('ingredients');

  async function fetchData (){
          setIsLoading(true);

          try{
              const response = await fetch(`/api/openai?ingredients=${ingredients}?selectedCategory=${category}`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization' : 'Bearer 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'
                  }
              });
              if(!response.ok){
                  throw new Error(`Error! ${response.status}`)
              }

              const result = await response.json();

              console.log(result);

              setData(result.text);
          } catch (err:any){
              setErr(err.message);
          } finally{
              setIsLoading(false);
          }

        console.log(ingredients);
        console.log(category);
  } 

  useEffect(()=>{
    fetchData();

  },[]);

  useEffect(()=>{
    console.log('hi');
    console.log(data)
    if(data && data.text)
    {
      console.log("hi");
      console.log(data.text);
    }
  },[data]);

  const imagesPath = '/breakfast/';
  return (
    <section className='w-screen h-full   bg-cover bg-slate-200 pb-5 pt-5 z-10 flex flex-col'>
        <h1 className='text-4xl  mt-20 pb-4 text-black font-semibold justify-start ml-40 mb-2'>Founded recipes in the {category} category</h1>
        {isLoading &&  <img className='items-center' src={"https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"} alt="loading gift" width={300} height={300}/>}
        {!isLoading}
         <div className='flex flex-col gap-2 items-center justify-center w-screen mt-0'>
            <FullRecipe src={`${imagesPath}breakfast_1.jpg`} alt="breakfast"title="French croissant with butter and peach jem" time="1 hours"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"list={ingredientList}/>
            <FullRecipe src={`${imagesPath}breakfast_6.jpg`} alt="breakfast"title="Fried eggs with toast bread and tomato rucola salad" time="1 hours"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"list={ingredientList}/>
            <FullRecipe src={`${imagesPath}breakfast_3.jpg`} alt="breakfast"title="Pancakes with mapple sirup and bluebarrysa" time="1 hours"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"list={ingredientList}/>
            <FullRecipe src={`${imagesPath}breakfast_2.jpg`} alt="breakfast"title="4 egg omlet with bell papper and cheese" time="1 hours"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"list={ingredientList}/>
            <FullRecipe src={`${imagesPath}breakfast_4.jpg`} alt="breakfast"title="Toast bread with avocado cream and egg omlet" time="1 hours"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"list={ingredientList}/>
            <FullRecipe src={`${imagesPath}breakfast_5.jpg`} alt="breakfast"title="Sandwich" time="1 hours"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"list={ingredientList}/>
         </div>
    </section>
  );
}
