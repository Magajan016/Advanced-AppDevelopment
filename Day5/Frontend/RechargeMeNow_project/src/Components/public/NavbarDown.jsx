import React from 'react'

function NavbarDown() {
  return (
    <div className='bg-blue-900'>
         <div className="h-16 w-full flex space-x-16 justify-center items-center  p-2">
            <p className="text-lg font-semibold text-white font-poppins tracking-normal  hover:border-b-2 cursor-pointer">Discover</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer ">PrePaid</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer">PostPaid</p>
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer">International Services</p>
            {/* <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer">Get Jio SIM</p> */}
            <p className="text-lg font-semibold text-white font-poppins tracking-normal hover:border-b-2 cursor-pointer">Pay Bills</p>
        </div>
    </div>
  )
}

export default NavbarDown