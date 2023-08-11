import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { PublicLayout } from '../components/publicLayout/PublicLayout'
import { Login } from '../pages/publicPages/login/Login'
import { Register } from '../pages/publicPages/register/Register'
import { PrivateLayout } from '../components/privateLayout/PrivateLayout'
import { HomePage } from '../pages/privatesPages/HomePage'

 
 export const Routing = () => {
   return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout/>}>
        <Route index element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Route>

       <Route path="/" element={<PrivateLayout/>}>
      <Route path='/private' element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   )
 }
 