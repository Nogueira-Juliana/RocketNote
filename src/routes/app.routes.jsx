import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'


export function AppRoutes() {
  return(
    <Routes>
      <Route path='/ReactNote' element={<Home/>} />
      <Route path='/ReactNote/new' element={<New/>} />
      <Route path='/ReactNote/details' element={<Details/>} />
      <Route path='/ReactNote/profile' element={<Profile/>} />
    </Routes>
  )
}