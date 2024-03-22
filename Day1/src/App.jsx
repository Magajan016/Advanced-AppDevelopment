
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./Components/public/Loader";
import WebLayout from "./layout/WebLayout";
import UserLayout from "./layout/UserLayout";

const UserDashboard = lazy(() => import('./Components/User/Dashboard/UserDashboard'));
const Home = lazy(() => import('./Pages/User/Home'));
const UserLogin =lazy(()=> import('./Pages/User/UserLogin'));
const Recharge =lazy(()=> import('./Pages/User/Recharge'));
const Support =lazy(()=> import('./Pages/User/Support'));


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<WebLayout/>}>
              <Route exact path="/" element={<UserLogin/>}></Route>
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
            </Route>
            <Route element={<UserLayout/>}>
              <Route  path="/home" element={<Home/>}></Route>
              <Route exact path="/support" element={<Support/>}></Route>
              <Route  path="/recharge" element={<Recharge/>}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
