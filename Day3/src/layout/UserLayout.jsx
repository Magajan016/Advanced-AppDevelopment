import Navbar from '../Components/public/Navbar'
import NavbarDown from '../Components/public/NavbarDown'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/public/Footer'

function UserLayout() {
  return (
    <div className='space-y-10'>
        <div>
        <Navbar/>
        <NavbarDown/></div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout