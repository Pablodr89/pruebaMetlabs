import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {

  return (
    <>
      <Header />

      <main className='px-4 md:px-8 lg:px-16 pt-2'>
        <Outlet />
      </main>
    </>
  )
}
