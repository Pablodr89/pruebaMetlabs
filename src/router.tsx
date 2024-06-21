import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import { lazy } from 'react'
const Home = lazy(() => import('./views/Home'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={
            <Home />
          } index />
          <Route path='/descubrir' />
          <Route path='/favoritos' />
          <Route path='/subir_obra' />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

