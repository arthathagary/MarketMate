import React from 'react'
import { Button } from '@/components/ui/button'
import Datatable from '../../components/Item/DataTable'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Add from '../../components/Item/add'


export const page = () => {
  return (
    <div className='p-10 mb-20'>
        <div>
            <div className='flex justify-between '>
                <div>
                <p>Items List</p>
                <p className=' text-xs'>Manage your Supplier </p>
                </div>

                <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Items </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[505px] mb-[30px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='mt-[-80px]'> 
    <Add/>
    </div>
      </DialogContent>
    </Dialog>
            </div>
        </div>
        <div className='p-2 mt-10 rounded-2xl'>
        <Datatable />
        </div>
    </div>
  )
}
export default page


export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
    
      </DialogContent>
    </Dialog>
  )
}
