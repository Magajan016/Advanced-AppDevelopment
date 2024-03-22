
import Dashboard from '../Pages/Admin/Dashboard'
import Footer from '../Components/public/Footer'
import Navbaradmin from '../Components/public/Navbaradmin'

function AdminLayout() {
  return (
    <div>
        <Navbaradmin/>
        <Dashboard/>
        <Footer/>
    </div>
  )
}

export default AdminLayout