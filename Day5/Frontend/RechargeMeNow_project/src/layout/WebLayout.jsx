
import Navbar from '../Components/public/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/public/Footer'

function WebLayout() {
  return (
    <div>
        <Navbar/>
           <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout