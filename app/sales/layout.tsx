import NavBar from '@/components/NavBar'
import SalesPage from './page'

const SalesLayout = () => {
  return (
    <div className='flex gap-5'>
        <NavBar />
        <SalesPage />
    </div>
  )
}

export default SalesLayout