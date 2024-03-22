// import React from 'react'

import { Person, Person2, Person2Outlined, Person3, Search } from "@mui/icons-material";
import { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate =useNavigate();
  const handleNavbar=()=>{
    navigate('/user/dahsboard');
  }
  const [profile,setProfile]=useState(false);
 
  return (
    <div className="h-16 ">
        <div className="bg-blue-800 flex items-center w-full justify-center">
        <div className="flex p-2 justify-center">
            {/* <img src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1710578439/logo-color_hdahni.png" classNa"></img> */}
        </div>
       <div><p className="text-lg font-semibold text-white font-poppins tracking-normal ">RechargeMe</p></div>
        <div className="h-16 w-full flex items-center justify-center space-x-16 p-2">
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>navigate('/home')}>Home</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer " onClick={()=>('/')}>True 5G</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>('/')}>RmNFibre</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>('/')}>AirFibre</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>navigate('/support')}>Support</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>navigate('/recharge')}>Recharge</p>
        </div>
        <div className="flex  p-2 gap-4 justify-center">
            <div className="h-10 w-10  rounded-3xl bg-light-white cursor-pointer"><Search className="text-white mt-2 ml-2"></Search></div>
            <div className="h-10 w-10  rounded-3xl bg-light-white cursor-pointer"  ><FcBusinessman className="h-10 w-10  rounded-3xl bg-light-white cursor-pointer" onClick={()=>setProfile(!profile)} /></div>
        </div>
        </div>
        {profile?(<div className=" absolute top-20 right-10 h-24 w-40 justify-center bg-white border-2 space-y-2 z-10 p-3 rounded">
          <div className="cursor-pointer border-none" onClick={()=>(navigate('/admindashboard'))}><div className="flex space-x-1"><Person2 className="h-10 w-10 rounded-2xl text-gray-900"/><p className="font-thick ">Admin Profile</p></div></div>
          <hr/>
          <div className="cursor-pointer" onClick={()=>navigate('/user/dashboard')}><div className="flex space-x-1"><Person2 className="h-10 w-10 rounded-2xl text-gray-900"/><p className="font-thick ">User Profile</p></div></div>
          
        </div>):(<div></div>)}
    </div>
  )
}

export default Navbar