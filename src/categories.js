import React, { useEffect, useState } from 'react'
import Selected from './selected';
import { Link } from 'react-router-dom';
export default function Categories() {

     const [categories,setCategories]=useState([])
    
    
    useEffect( async ()=>{
        var data=await fetch("https://api.chucknorris.io/jokes/categories");
        var parseddata=await data.json();
            setCategories(parseddata);
            console.log(parseddata);
    },[])
  return (<>
    <div>
      <h1 className='text-start m-1 px-3'>Chuck Norris</h1>
        {
            categories.map((item)=>{
                return <>  <Link to="/selected" className="btn btn-outline-primary px-3 m-1" state={item}>{item}</Link></>
            })
        }

    </div>

    
    </>
  )

}
