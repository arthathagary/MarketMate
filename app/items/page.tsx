import React from 'react'
import { Button } from '@/components/ui/button'
import Datatable from '../../components/Item/DataTable'


export const page = () => {
  return (
    <div className='p-10'>
        <div>
            <div className='flex justify-between '>
                <div>
                <p>Items List</p>
                <p className=' text-xs'>Manage your Supplier </p>
                </div>
                <Button>Add Items</Button>
            </div>
        </div>
        <div className='p-2 mt-10 rounded-2xl'>
        <Datatable />
        </div>
    </div>
  )
}
export default page