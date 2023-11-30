import NavBar from '@/components/NavBar'
import React from 'react'
import { ItemsPage } from './page'

const ItemsLayout = () => {
  return (
    <div className='flex gap-5'>
    <NavBar />
    <ItemsPage />
    </div>
  )
}

export default ItemsLayout