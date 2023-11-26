import React from 'react'
import {Button} from "../../components/ui/button"
import Datatable from './Datatable'

export const page = () => {
  return (
    <div>
    <div>
      <Datatable/>
    </div>
    <div>
      <Button>Next</Button>
    </div>
    </div>
  )
}

export default page