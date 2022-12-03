import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from '../screens/Landing'
import { OrphanagesMap } from '../screens/OrphanagesMap'

export function AllRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/app' element={ <OrphanagesMap /> } />
      </Routes>
    </BrowserRouter>
  )
}