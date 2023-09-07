'use client'

import React, { useState } from 'react'

export default function page() {

    const [fetchedAlready, setFetchedAlready] = useState(false);
    const [data, setData] = useState({data: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('')

    const handleClick = async () => {
        if(!fetchedAlready){
            setIsLoading(true);

            try{
                const response = await fetch('/api/openai', {
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

                setData(result);
            } catch (err:any){
                setErr(err.message);
            } finally{
                setIsLoading(false);
            }
            setFetchedAlready(true);
        }else{
            alert("You can't fetch more than once.")
        }
    }

  return (
    <div className='pt-[100px]'>
        {err && <h2>{err}</h2>}
        <button onClick={handleClick}>Fetch data</button>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && <h2 className='text-3xl'>{data.text}</h2>}
    </div>
  )
}