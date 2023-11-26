import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Enter Search Term" />
      <Button type="submit">Search</Button>
    </div>

  )
}

export default SearchBar