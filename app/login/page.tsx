import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-6">
      <Label htmlFor="username">User Name</Label>
      <Input type="text" id="username" placeholder="User Name" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="Password" className='mb-3'/>
      <Button type="submit">Login</Button>
    </div>

    
    </div>
  )
}

export default Login