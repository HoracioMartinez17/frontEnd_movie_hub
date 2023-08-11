import {Outlet} from 'react-router-dom'
import Footer from '../footer/Footer'
import { Header } from '../header/Header'




export const PrivateLayout = () => {
  return (
     <>
     <Header/>
    <Outlet/>
     <Footer/>
    </>
  )
}
