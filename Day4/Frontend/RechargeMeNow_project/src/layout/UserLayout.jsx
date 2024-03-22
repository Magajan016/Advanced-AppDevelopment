import Navbar from '../Components/public/Navbar'
import NavbarDown from '../Components/public/NavbarDown'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/public/Footer'


function UserLayout() {
    return (
        <div className=''>
            <div>
                <Navbar />
                <NavbarDown /></div>
            <div>
                <Outlet />
                <Footer />
            </div>
            {/* <Navbaradmin/> */}
        </div>
    )
}

export default UserLayout