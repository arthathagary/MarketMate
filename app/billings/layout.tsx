import NavBar from '@/components/NavBar'
import React from 'react'
import Payments from './page'

const PaymentsLayout = () => {
  return (
    <div className='flex gap-5'>
        <NavBar />
        <Payments />
    </div>
  )
}

export default PaymentsLayout