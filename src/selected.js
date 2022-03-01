import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
export default function Selected() {
    const location=useLocation();
    const [product,setProduct]=useState("")
    
    useEffect(async ()=>{
        var data=await fetch("https://api.chucknorris.io/jokes/random?category="+location.state);
        
        var parseddata=await data.json();
            setProduct(parseddata.value);
           
    },[location.state])

    const newjoke=async ()=>{

        var data1=await fetch("https://api.chucknorris.io/jokes/categories");
        
        var parseddata1=await data1.json();
        
        const newitem = parseddata1[Math.floor(Math.random() * parseddata1.length)];
        console.log(newitem)
        var newdata=await fetch("https://api.chucknorris.io/jokes/random?category="+newitem);
        var latest=await newdata.json();
        setProduct(latest.value)
    }
  return (
    <div>
        <h3>Selected category: {location.state}</h3>
      <div className='container bg-info d-flex justify-content-center align-items-center' style={{height:"20vh"}}>{product}</div>
      <button className='btn btn-primary mt-3' onClick={newjoke}>New Joke</button>
    </div>
  )
}
