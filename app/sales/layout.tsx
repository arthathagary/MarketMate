"use client"
import React, { useState } from 'react'
import Dashboard from './page'
import NavBar from '@/components/NavBar'
import { RxHamburgerMenu} from "react-icons/rx"


const SalesLayout = () => {
  const [shouldRenderNavBar, setShouldRenderNavBar] = useState(true);
  const handleChildData = (dataFromChild: boolean) => {
    setShouldRenderNavBar(dataFromChild);
    // Handle the data from the child component as needed
    console.log('Data from NavBar:', dataFromChild);   
  };

  const handleClick = ()=>{
    setShouldRenderNavBar(!shouldRenderNavBar);
  }
  return (
    <div className='flex gap-5'>
    {shouldRenderNavBar ? (
        <NavBar onDataFromChild={handleChildData} />
      ) : (
        <div onClick={handleClick} className='pt-6 ml-4'><RxHamburgerMenu className='w-5 h-5' /></div>
      )}
    <Dashboard />
    </div>
  )
}

export default SalesLayout