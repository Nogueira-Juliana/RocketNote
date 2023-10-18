import { Routes, Route } from 'react-router-dom'

import { SignUp } from '../pages/SignUp'
import { Signin } from '../pages/Signin'



export function AuthRoutes() {
  return(
    <Routes>
      <Route path='/ReactNote' element={<Signin/>} />
      <Route path='/ReactNote/register' element={<SignUp/>} />
    </Routes>
  )
}