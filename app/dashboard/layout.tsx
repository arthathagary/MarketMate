"use client"
import React, { useState } from 'react'
import Dashboard from './page'
import NavBar from '@/components/NavBar'
import { RxHamburgerMenu} from "react-icons/rx"


const DashboardLayout = () => {
  const [shouldRenderNavBar, setShouldRenderNavBar] = useState(true);
  const handleChildData = (dataFromChild: boolean) => {
    setShouldRenderNavBar(dataFromChild);
    // Handle the data from the child component as needed
    console.log('Data from NavBar:', dataFromChild);
    
  };
  return (
    <div className='flex gap-5'>
    {shouldRenderNavBar ? (
        <NavBar onDataFromChild={handleChildData} />
      ) : (
        <RxHamburgerMenu />
      )}
    <Dashboard />
    </div>
  )
}

export default DashboardLayout