import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '../ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { SelectTrigger } from '@/components/ui/select'
import {
  
    SelectContent,
    SelectItem,
   
    SelectValue,
  } from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  export function add() {
    return (
      <div className='w-full mt-20 flex justify-center items-center'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Supplier Management</CardTitle>
          <CardDescription>Add/Update Customer Items</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Items Name</Label>
                <Input id="name" placeholder="Type Items Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="type Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Stock</Label>
                <Input id="name" placeholder="Type Stock" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Amount</Label>
                <Input id="name" placeholder="Type Amount" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework"></Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Low Stock</SelectItem>
                    <SelectItem value="sveltekit">Out Of Stock</SelectItem>
                    <SelectItem value="astro">In Stock</SelectItem>
                    
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Add </Button>
        </CardFooter>
      </Card>
      </div>
    )
  }
export default add