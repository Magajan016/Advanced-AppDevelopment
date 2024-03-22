import React, { useState } from 'react'

function Recharge() {
    const [mobile, setMobile] = useState(true);
    const [fibre, setFibre] = useState(false);
    return (
        <div className='my-20'>
            <div className='flex justify-evenly w-full'>
                <div className='space-y-10  justify-center  flex'>
                    <div className='space-y-10'>
                        <div className='flex flex-col space-y-3 justify-center '>
                           <div className='flex justify-center w-full'> <div className='h-12 w-12 bg-blue-100 rounded-3xl p-1 flex '><p className='text-4xl text-blue-900 font-thin font-sans1 ml-[10px] text-center '>₹</p></div></div>
                            <div className='flex justify-center w-full'><p className='font-black text-2xl'>Recharge</p></div>
                            <div className='flex justify-center w-full'><p className='text-gray-400 '>Enter your details to find the best prepaid plans.</p></div>
                        </div>
                        <div className='space-y-16'>
                            <div className="grid grid-cols-2 justify-stretch h-12 space-evenly w-full border-2 rounded-3xl bg-gray-100 space-x-1">
                                <p className={`${mobile ? "rounded-3xl bg-blue-800 h-11 text-white flex justify-center  space-x-8 pb-2 text-xl" : "pb-2 text-xl h-11 flex justify-center hover:bg-gray-200 hover:rounded-3xl text-blue-900"} text-md text-gray-500   items-center   pt-2   w-38 text-center font-sans cursor-pointer`}
                                    onClick={() => setMobile(true, setFibre(false))}><svg className='h-7 mb-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H9a3 3 0 00-3 3v14a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3zm-3 18a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill="currentColor"></path></svg>Mobile</p>
                                <p className={`${fibre ? "rounded-3xl h-11 bg-blue-800 text-white flex justify-center  text-xl " : "flex h-11 pb-2 justify-center pb-2 text-xl hover:bg-gray-200 hover:rounded-3xl  text-blue-900"} text-md  text-gray-500 items-center  pt-2   w-38 text-center font-sans cursor-pointer`} onClick={() => setFibre(true, setMobile(false))}><svg className='h-7 mb-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.92 9.86a1 1 0 001.37-.35 4.79 4.79 0 000-5 1 1 0 00-1.72 1c.274.45.423.964.43 1.49a2.94 2.94 0 01-.43 1.49 1 1 0 00.35 1.37zM19 12h-1V5a1 1 0 00-2 0v7H5a3 3 0 00-3 3v2a3 3 0 003 3h14a3 3 0 003-3v-2a3 3 0 00-3-3zM6 17a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm3.57-7a1 1 0 00.86-1.51A2.94 2.94 0 0114 7a2.94 2.94 0 01.43-1.49 1 1 0 00-1.72-1 4.79 4.79 0 000 5 1 1 0 00.86.49z" fill="currentColor"></path></svg>RMNFibre</p>
                            </div>
                            <div className=''>
                                <input className='block px-0  w-full border-0 border-b-2 border-gray-400 focus:border-blue-800 appearance-none transparent focus:outline-none peer' placeholder='' id='floating_email' name='floating_email'></input>
                                <label htmlFor='floating_email' className='peer-focus: absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[60%]  origin-[0] peer-focus:start-70 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Mobile number</label>
                            </div>
                        </div>
                        <div className='bg-blue-800 h-12 w-full rounded-3xl pt-2'>
                            <p className='text-white font-semibold text-center text-xl'>Continue</p>
                        </div>
                        <div className='flex space-x-2'><p className='text-md text-gray-500'>Using Link ?</p><p className='text-blue-900 text-md font-semibold cursor-pointer'>Recharge here</p></div>
                    </div>
                </div>
                <div className=''>
                    {/* <div><p>Plans for your </p><p>digital life! </p><p>Find a recharge plan that suits your digital needs.</p></div> */}
                    <div><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710827561/29612263_jji76l.jpg'></img></div>
                </div>
            </div>
        </div>
    )
}

export default Recharge