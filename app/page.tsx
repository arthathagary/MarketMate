import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/toggle-mode'
import Image from 'next/image'
import Login from './login/page'
import DataTable from '../components/Item/DataTable'
import Card from '../components/Item/add'
import Popup from '../components/Item/popup'

export default function Home() {
  return (
    <>
    {/* <Login /> */}
    {/* <DataTable/> */}
    {/* <Card/> */}
    <ModeToggle />
    <Popup/>
    </>
  )
}
