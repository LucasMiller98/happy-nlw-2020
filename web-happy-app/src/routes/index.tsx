import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateOrphanage } from '../pages/createOrphanage/CreateOrphanage'
import { Orphanage } from '../pages/orphanage/Orphanage'
import { Landing } from '../pages/Landing'
import { OrphanagesMap } from '../pages/OrphanagesMap'

export function AllRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/app' element={ <OrphanagesMap /> } />
        <Route path='/orphanage/create' element={ <CreateOrphanage /> } />
        <Route path='/orphanages/:id' element={ <Orphanage /> } />
      </Routes>
    </BrowserRouter>
  )
}