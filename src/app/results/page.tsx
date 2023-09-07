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
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [finalContent, setFinalContent]=useState([]);

  const searchParams = useSearchParams();
  const category= searchParams?.get('selectedCategory');
  const ingredients = searchParams?.get('ingredients');

  async function fetchData (){
          setIsLoading(true);

          try{
              //const response = await fetch(`/api/openai?ingredients=${ingredients}?selectedCategory=${category}`, {
                const response = await fetch(`/api/mate`, {
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

        // console.log(ingredients);
        // console.log(category);
  } 

  useEffect(()=>{
    fetchData();

  },[]);

  useEffect(()=>{
    var content:any=[];
    console.log(data);
    if(data && data !== undefined)
    {
     let arr = JSON.parse(data);
     for(let i=0;i<arr.length;i++)
     {
      content.push(<FullRecipe category={category} key={i} title={arr[i].name} time={arr[i].preparationTime} list={arr[i].ingredients} description={arr[i].preparationDetails}/>)
     }

     setFinalContent(content);
    }

  },[data]);

  const imagesPath = '/breakfast/';
  return (
    <section className='w-screen h-full   bg-cover bg-slate-200 pb-5 pt-5 z-10 flex flex-col'>
        <h1 className='text-4xl  mt-20 pb-4 text-black font-semibold justify-start ml-40 mb-2'>Founded recipes in the {category} category</h1>
        {isLoading &&  <img className='items-center' src={"https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"} alt="loading gift" width={300} height={300}/>}
        {!isLoading &&  <div className='flex flex-col gap-2 items-center justify-center w-screen mt-0'>
           {finalContent}
         </div> }    
    </section>
  );
}
