import React from 'react'
import Dashboard from './page'
import NavBar from './NavBar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-5'>
    <NavBar />
    <Dashboard />
    </div>
  )
}

export default DashboardLayout