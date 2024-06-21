import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {

  return (
    <>
      <Header />

      <main className='px-16 pt-2'>
        <Outlet />
      </main>
    </>
  )
}
