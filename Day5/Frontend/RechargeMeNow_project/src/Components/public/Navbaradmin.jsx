import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbaradmin() {
    const navigate=useNavigate();
  return (
    <div className='w-[98.9vw] bg-blue-800'>
         <div className="h-16 w-full flex items-center justify-center space-x-16 p-2">
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>navigate('/home')}>Home</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer " onClick={()=>('/')}>Prepaid Plans</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>('/')}>Postpaid plans</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>('/')}>Addons</p>
            {/* <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>navigate('/support')}>Support</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer" onClick={()=>navigate('/recharge')}>Recharge</p> */}
        </div>
    </div>
  )
}

export default Navbaradmin