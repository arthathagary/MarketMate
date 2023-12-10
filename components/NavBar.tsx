"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { RxCross2} from "react-icons/rx"
import { ModeToggle } from './ui/toggle-mode'

interface NavBarProps {
    onDataFromChild: (data: boolean) => void;
  }

const NavBar = ({onDataFromChild}:NavBarProps) => {
    const [isVisible, setIsVisible] = useState(true);

    const menus = [
        {
            label:"Dashboard",
            href:"/dashboard"
        },
        {
            label:"Sales",
            href:"/sales"
        },
        // {
        //     label:"Products",
        //     href:"/products"
        // },
        {
            label:"Billing",
            href:"/billings"
        },
        {
            label:"Items",
            href:"/items"
        },
        // {
        //     label:"Settings",
        //     href:"/settings"
        // },
        {
            label:"Logout",
            href:"/login"
        }
    ]
    const toggleVisibility = () => {
        setIsVisible(prevVisibility => {
          const newVisibility = !prevVisibility;
          console.log(newVisibility);
          onDataFromChild(newVisibility);
          return newVisibility;
        });
      };

      


  return (
   <nav className='w-80  h-screen flex flex-col justify-between'>
   
    <div>

    <div className='mb-8 flex justify-between items-center ml-3 pt-6'>Logo<span onClick={toggleVisibility}><RxCross2 className='w-5 h-5'/></span></div>
    
    {menus.map((menu,index)=><Link key={index}  href={menu.href}><Button className='w-full mb-4 bg-inherit text-inherit rounded-none justify-start '>{menu.label}</Button></Link>)}
    <div className='ml-3'>
    <ModeToggle />
    </div>
    </div>
    {/* <footer className='pb-3 ml-3'>
    &copy; Copyright 2023
    </footer> */}
   </nav>
  )
}

export default NavBar