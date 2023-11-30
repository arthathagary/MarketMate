import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'
import { RxCross2 } from "react-icons/rx";


const NavBar = () => {

    const menus = [
        {
            label:"Dashboard",
            href:"/dashboard"
        },
        {
            label:"Sales",
            href:"/sales"
        },
        {
            label:"Products",
            href:"/products"
        },
        {
            label:"Billing",
            href:"/billings"
        },
        {
            label:"Items",
            href:"/items"
        },
        {
            label:"Settings",
            href:"/settings"
        },
        {
            label:"Login",
            href:"/login"
        }
    ]


  return (
   <nav className='w-60  h-screen flex flex-col justify-between'>
   
    <div>

    <div className='mb-8 flex justify-between items-center'>Logo<span><RxCross2 /></span></div>
    
    {menus.map((menu,index)=><Button key={index} className='w-full mb-4 bg-inherit text-inherit rounded-none justify-start '><Link href={menu.href}>{menu.label}</Link></Button>)}
    </div>
    <footer className='pb-3'>
    &copy; Copyright 2023
    </footer>
   </nav>
  )
}

export default NavBar