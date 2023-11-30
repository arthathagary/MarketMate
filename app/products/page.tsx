import React from 'react'
import {Button} from "../../components/ui/button"
import Datatable from './Datatable'

export const ProductPage = () => {
  return (
    <div className='w-full'>
    <div>
      <Datatable/>
    </div>
    <div>
      <Button>Next</Button>
    </div>
    </div>
  )
}

export default ProductPage