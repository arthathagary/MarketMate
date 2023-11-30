import NavBar from '@/components/NavBar'
import React from 'react'
import ProductPage from './page'

const ProductLayout = () => {
  return (
    <div className='flex gap-5'>
        <NavBar />
        <ProductPage />
    </div>
  )
}

export default ProductLayout