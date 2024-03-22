import { NavigateBeforeRounded, Person2Outlined, Person2TwoTone, Settings } from '@mui/icons-material'
import React, { useState } from 'react'
import { FaSimCard } from "react-icons/fa6";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { FcRightUp2 } from "react-icons/fc";
import { TfiWorld } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import './UserDashboard.css'
function UserDashboard() {
    const [details, setDetails] = useState({
        "name": "Pramoth Magajan K",
        "number": "9363339028",
        "type": "Prepaid Mobile",
        "mobile_type": " Samsung GalaxyF12",
        "data": "2.4 GB",
        "total_data": "2.5 GB",
        "plan": "Rs.2999",
        "end_date": "6th Jan,2025"
    })
    return (
        <div>
            <div className='flex space-x-10 mt-10 justify-center font-sans'>
                <div className='space-y-7 w-72 h-[30rem]'>
                    <div><p className='font-bold font-lg'>Primary Account</p></div>
                    <div className='flex space-x-9 p-2 border rounded-xl justify-center ml-2 bg-blue-100 border-blue-400 border-2'>
                        <div className='flex space-x-5 '> <div className='flex justify-center h-full '><FaSimCard className='h-12 w-12 text-blue-800 mt-2' /></div>
                            <div><p className='font-bold font-md font-poppins'>{details.number}</p>
                                <p className='font-sm text-sm font-sans text-gray-700'>{details.name}</p>
                                <p className='text-sm font-sans text-gray-700'>{details.type}</p></div></div>
                        <div><RiRadioButtonFill className='h-6 w-6 text-blue-800 mt-6' /></div>
                    </div>
                    <hr className='ml-2 h-8' />
                    <div className='flex flex-col justify-center ml-2'>
                        <FaUserFriends className='text-center w-full h-6 w-6 mb-4 text-gray-700' />
                        <p className='text-center text-gray-500 font-md font-semibold font-gray-700'>Add friends & family</p>
                        <div className='flex flex-col'><p className='text-center text-gray-700 font-lg'>Link numbers of your friends and</p><p className='text-center text-gray-700 font-lg'>family, to recharge, pay bills, check </p><p className='text-center text-gray-700 font-lg'>available data balance and much</p><p className='text-center text-gray-700 font-lg' >more</p></div>
                    </div>
                    <div></div>
                    <div className='border p-3 rounded-3xl hover:border-blue-700 cursor-pointer ml-2 mt-3'>
                        <p className='text-center font-bold text-blue-800 '>Link new account</p>
                    </div>
                </div>
                <div>
                    <div className='space-y-5  overflow-y-hidden h-[50rem] mb-10'>
                        <div className='space-y-5 h-full overflow-y-scroll scrollbar-hide'>
                            <div className='p-4 w-[450px] rounded-2xl shadow-xl border flex flex-col justify-center '>
                                <div className='flex space-x-10 justify-between'><p className='font-sans text-xl font-semibold tracking-normal'>{details.name}</p><div className='h-10 w-10 bg-blue-50 rounded-3xl cursor-pointer'><Settings className='ml-2 mt-2 text-blue-900 ' /></div></div>
                                <div className='text-gray-600 space-y-2'><p className='font-semibold text-xs font-sans'>{details.type}</p><p className='text-gray-950 font-bold'>{details.number}</p><p className='text-xs'>Last used on{details.mobile_type}</p></div>
                            </div>
                            <div>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col justify-center '>
                                    <p className='text-md font-semibold'>Data</p>
                                    <p className='space-x-3  text-gray-700 font-semibold'><span className='font-black text-2xl text-black'>{details.data}</span > left of {details.total_data}</p>
                                    <div className="flex w-full h-2 bg-gray-200 rounded-full"><div className='w-[350px] flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500'></div></div>
                                    <p className='text-xs text-end text-gray-600 tracking-wide'>Renews in 24 hours</p>
                                    <div className='flex justify-between'><div className='w-[200px] h-12 rounded-3xl border bg-blue-700 hover:bg-blue-900 cursor-pointer'><p className='text-center mt-2 text-lg text-white font-semibold'>Check Usage</p></div>
                                        <div className='w-[200px] h-12 rounded-3xl border text-blue-700 hover:border-blue-900 cursor-pointer'><p className='text-center mt-2 text-lg font-semibold'>Add data</p></div></div>
                                </div>
                                <p className='text-gray-600 text-sm text-center mt-1'>Balance gets updated within 60 minutes of usage</p></div>
                            <div>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col justify-center '>
                                    <p className='text-md font-semibold'>Plan</p>
                                    <p className='text-2xl font-black'>{details.plan}</p>
                                    <div className='flex justify-between text-gray-700'><p className='text-sm font-semibold'>Expires on</p><p className='text-sm font-semibold'>{details.end_date}</p></div>
                                    <div><p className='text-xs text-blue-800 font-semibold'>view plan</p></div>
                                    <hr />
                                    {/* <div className='flex justify-between'>
                                    <div className='w-[200px] h-12 rounded-3xl border bg-blue-700 hover:bg-blue-900 cursor-pointer'><p className='text-center mt-2 text-lg text-white font-semibold'>Recharge</p></div>
                                    <div className='w-[200px] h-12 rounded-3xl border text-blue-700 hover:border-blue-900 cursor-pointer'><p className='text-center mt-2 text-lg font-semibold'>View Plan</p></div>
                                </div> */}
                                    <div className='space-y-2'>
                                        <p className='text-balck font-bold text-md font-sans tracking-wide'>Recommeneded plan</p>
                                        <div className='overflow-x-auto  flex space-x-4 scrollbar-hide'>
                                            <div className='bg-light_blue p-2 rounded-xl h-48 w-[15rem]'>
                                                <div className='flex justify-between p-2'><p className='font-black text-xl'>₹2999</p><div className='h-8 w-24 border rounded bg-blue_light text-center  text-white text-xs font-semibold'><p className='mt-2'>FEATURED</p></div></div>
                                                <div className='flex justify-between p-2'><p className=' text-sm text-gray-600'>Data</p><div><p className='font-semibold text-sm'>2.5 GB/day</p></div></div>
                                                <div className='flex justify-between p-2'><p className=' text-sm text-gray-600'>Validity</p><div><p className='font-semibold text-sm'>365 days</p></div></div>
                                                <div className='flex justify-center ml-4 text-white w-[200px] h-12 rounded-3xl border text-blue-700 hover:border-blue-900 bg-blue-800 cursor-pointer'><p className='text-center mt-2 text-lg font-semibold'>Recharge</p></div>
                                            </div>
                                            <div className='bg-light_blue p-2 rounded-xl h-48 w-[15rem]'>
                                                <div className='flex justify-between p-2'><p className='font-black text-xl'>₹2999</p><div className='h-8 w-24 border rounded bg-blue_light text-center  text-white text-xs font-semibold'><p className='mt-2'>SONYLIV</p></div></div>
                                                <div className='flex justify-between p-2'><p className=' text-sm text-gray-600'>Data</p><div><p className='font-semibold text-sm'>2.5 GB/day</p></div></div>
                                                <div className='flex justify-between p-2'><p className=' text-sm text-gray-600'>Validity</p><div><p className='font-semibold text-sm'>365 days</p></div></div>
                                                <div className='flex justify-center ml-4 text-white w-[200px] h-12 rounded-3xl border text-blue-700 hover:border-blue-900 bg-blue-800 cursor-pointer'><p className='text-center mt-2 text-lg font-semibold'>Recharge</p></div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center ml-4 text-white w-[390px] h-12 rounded-3xl border text-blue-700 hover:border-blue-800 border-gray-300  cursor-pointer'><p className='mt-2 text-md text-blue-900 font-semibold'>View all</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4 w-[450px] rounded-2xl shadow-2xl border flex justify-between cursor-pointer'>
                                <div className='flex space-x-4'><div className='h-8 w-8 border rounded-3xl bg-blue-800'><svg className='text-white h-6 w-6 justify-center ml-[3.5px] mt-[3px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10-4.478 0-8.268-2.943-9.542-7H6a1 1 0 100-2H2.05a10.118 10.118 0 010-2H14a1 1 0 100-2H2.458c.22-.703.517-1.373.88-2H11a1 1 0 100-2H4.859A9.97 9.97 0 0112 2c5.523 0 10 4.477 10 10z" fill="currentColor"></path></svg></div>
                                    <p className='text-md font-semibold'>Setup Auto RmNPay</p></div>
                                <div>
                                    <svg className='h-6 w-6 mt-1 text-sm hover:text-blue-800 cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17a1.002 1.002 0 01-1.006-1 1 1 0 01.296-.71l3.3-3.29-3.3-3.29a1.004 1.004 0 011.42-1.42l4 4a.997.997 0 01.219 1.095.999.999 0 01-.22.325l-4 4A1 1 0 0110 17z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-2xl font-black font-helvatica '>True 5G</p>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col'>
                                    <div className='flex space-x-10'>
                                        <div className='flex flex-col space-y-2'><div className='h-12  w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='h-7 w-7 text-blue-800 mt-[8px] ml-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a7.82 7.82 0 00-8 7.6c0 5.08 5.91 11.14 6.59 11.81a2 2 0 002.82 0C14.09 20.74 20 14.68 20 9.6A7.82 7.82 0 0012 2zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"></path></svg></div><div className=''><p className='text-xs text gray-600 font-lg'>5G Coverage </p><p className='text-xs text gray-600 font-lg text-center'>Check</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='h-7 w-7 text-blue-800 mt-[8px] ml-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H9a3 3 0 00-3 3v14a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3zm-3 18a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" fill="currentColor"></path></svg></div><div><p className='text-xs text-gray-600 font-lg text-center'>5G Device </p><p className='text-xs text-gray-600 font-lg text-center'>Check</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='h-7 w-7 text-blue-800 mt-[8px] ml-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zM6 16a1 1 0 110-2 1 1 0 010 2zm5-1a1 1 0 01-2 0v-2a1 1 0 112 0v2zm4 0a1 1 0 01-2 0v-4a1 1 0 012 0v4zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v6z" fill="currentColor"></path></svg></div><div><p className='text-xs text-gray-600 font-lg text-center'>Know more</p><p className='text-xs text-gray-600 font-lg text-center'>about True 5G</p></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-2xl font-black font-helvatica '>Recharges & payments</p>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col'>
                                    <div className='flex space-x-10'>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='h-7 w-7 text-blue-800 mt-[8px] ml-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zM6 16a1 1 0 110-2 1 1 0 010 2zm5-1a1 1 0 01-2 0v-2a1 1 0 112 0v2zm4 0a1 1 0 01-2 0v-4a1 1 0 012 0v4zm4 0a1 1 0 01-2 0V9a1 1 0 012 0v6z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>4G data</p><p className='text-sm text-gray-600 font-lg text-center'>vouchers</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12  w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='h-7 w-7 text-blue-800 mt-[8px] ml-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7h1v1a1 1 0 102 0V7h1a1 1 0 100-2h-1V4a1 1 0 00-2 0v1h-1a1 1 0 100 2z" fill="currentColor"></path><path d="M14 6c.003-.336.037-.67.1-1H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3v-6a5 5 0 01-5.24.47 4.89 4.89 0 01-2-1.84A5 5 0 0114 6zM8 8a1.5 1.5 0 011.47 1.79A1.49 1.49 0 018.29 11a1.49 1.49 0 01-.86-.08 1.55 1.55 0 01-.68-.56A1.5 1.5 0 018 8zm2 8H6a1 1 0 01-1-1 3 3 0 016 0 1 1 0 01-1 1z" fill="currentColor"></path></svg></div><div className=''><p className='text-sm text-gray-600 font-lg'>Recharge for a </p><p className='text-sm text-gray-600 font-lg text-center'>friend</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10-4.478 0-8.268-2.943-9.542-7H6a1 1 0 100-2H2.05a10.118 10.118 0 010-2H14a1 1 0 100-2H2.458c.22-.703.517-1.373.88-2H11a1 1 0 100-2H4.859A9.97 9.97 0 0112 2c5.523 0 10 4.477 10 10z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>RmN</p><p className='text-sm text-gray-600 font-lg text-center'>Autopay</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6V2H7.5A2.5 2.5 0 005 4.5v15A2.5 2.5 0 007.5 22h10a2.5 2.5 0 002.5-2.5V9h-4a3 3 0 01-3-3zm3 1h4a2 2 0 00-.59-1.41l-3-3A2 2 0 0015 2v4a1 1 0 001 1z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Statement</p></div></div>
                                    </div>
                                    <div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zM8 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm2 8H6a1 1 0 01-1-1 3 3 0 016 0 1 1 0 01-1 1zm8-6h-.18a3 3 0 01-.93 3.33l1.56.78A1 1 0 0118 16a.93.93 0 01-.45-.11l-4-2A1 1 0 0114 12h1a1 1 0 000-2h-2a1 1 0 110-2h5a1 1 0 110 2z" fill="currentColor"></path></svg></div><div className='text-gray-600'><p className='text-sm text-gray-600 font-lg '>Pay bill for a</p><p className='text-sm text-gray-600 font-lg'>friend</p></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-2xl font-black font-helvatica '>Transactions</p>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col'>
                                    <div className='flex space-x-14'>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12a5 5 0 100 10 5 5 0 000-10zm1.5 6a1 1 0 01-1 1h-2a1 1 0 010-2h1v-1.5a1 1 0 012 0V18zM19 5H5a3 3 0 00-3 3v8a3 3 0 003 3h5.29a6.909 6.909 0 01-.29-2 7.241 7.241 0 01.18-1.56.35.35 0 01-.13 0l-4-2a1 1 0 01.45-1.94h1a1 1 0 000-2h-2a1 1 0 010-2h5a1 1 0 110 2h-.18a3 3 0 01-.93 3.33l1.51.75A6.998 6.998 0 0122 12.11V8a3 3 0 00-3-3z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Recharge</p><p className='text-sm text-gray-600 font-lg text-center'>History</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12  w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12a5 5 0 100 10 5 5 0 000-10zm1.5 6a1 1 0 01-1 1h-2a1 1 0 010-2h1v-1.5a1 1 0 012 0V18zM19 5H5a3 3 0 00-3 3v8a3 3 0 003 3h5.29a6.909 6.909 0 01-.29-2 7.241 7.241 0 01.18-1.56.35.35 0 01-.13 0l-4-2a1 1 0 01.45-1.94h1a1 1 0 000-2h-2a1 1 0 010-2h5a1 1 0 110 2h-.18a3 3 0 01-.93 3.33l1.51.75A6.998 6.998 0 0122 12.11V8a3 3 0 00-3-3z" fill="currentColor"></path></svg></div><div className=''><p className='text-sm text-gray-600 font-lg'>My plans</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12a5 5 0 100 10 5 5 0 000-10zm1.5 6a1 1 0 01-1 1h-2a1 1 0 010-2h1v-1.5a1 1 0 012 0V18zM8 18a1 1 0 010-2h2.08a7 7 0 011.18-3H8a1 1 0 010-2h5.41A7 7 0 0117 10a6.88 6.88 0 013 .69V5a3 3 0 00-3-3H7a3 3 0 00-3 3v14a3 3 0 003 3h5.11a7 7 0 01-2-4H8zM8 6h3a1 1 0 110 2H8a1 1 0 010-2z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Invoice</p><p className='text-sm text-gray-600 font-lg text-center'>History</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5a1 1 0 000-2 2.5 2.5 0 000 5 1 1 0 000-2 .5.5 0 010-1zm-4.24 3.33a1 1 0 000 1.41A5.93 5.93 0 0012 18a6 6 0 100-12 5.93 5.93 0 00-4.24 1.76 1 1 0 001.41 1.41 4 4 0 110 5.66 1 1 0 00-1.41 0zM12 2a1 1 0 100 2 8 8 0 11-8 8 1 1 0 10-2 0A10 10 0 1012 2z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Usage</p><p className='text-sm text-gray-600 font-lg text-center'>details</p></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-2xl font-black font-helvatica '>Help & support</p>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col'>
                                    <div className='flex space-x-10'>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 15a3 3 0 003-3V7a3 3 0 00-3-3H5a3 3 0 00-3 3v5a3 3 0 003 3v1a1 1 0 00.55.89A.91.91 0 006 17a1 1 0 00.6-.2L9 15h5zM6 6.5h7a1 1 0 110 2H6a1 1 0 010-2zm2 6H6a1 1 0 010-2h2a1 1 0 010 2zM19 8h-.09v4A4.91 4.91 0 0114 16.91H9.78L8 18.24a3 3 0 002 .76h5l2.4 1.8a1 1 0 00.6.2.91.91 0 00.45-.11A1 1 0 0019 20v-1a3 3 0 003-3v-5a3 3 0 00-3-3z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Live chat</p><p className='text-sm text-gray-600 font-lg text-center'></p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12  w-12 border rounded-3xl bg-blue-50 ml-5'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 4.5a1 1 0 012 0v6a1 1 0 01-2 0v-6zm1 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"></path></svg></div><div className=''><p className='text-sm text-gray-600 font-lg'>Troubleshoot</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-5'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a3 3 0 00-3 3v8a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3zm-4.45 7.83l-3 2A1 1 0 0110 14v-4a1 1 0 01.53-.88 1 1 0 011 .05l3 2a1 1 0 010 1.66h.02z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>How to videos</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 m'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2a9.49 9.49 0 00-8.59 13.54l-.56 3.39a1.49 1.49 0 001.72 1.72l3.39-.56A9.5 9.5 0 1012.5 2zm0 15.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.77-5.36c-.66.42-.77.54-.77.86a1 1 0 11-2 0 2.93 2.93 0 011.69-2.55c.65-.41.81-.56.81-.95a1.5 1.5 0 10-3 0 1 1 0 11-2 0 3.5 3.5 0 117 0 2.999 2.999 0 01-1.73 2.64z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>FAQ</p></div></div>
                                    </div>
                                    <div className='flex space-x-10'>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 17H9a1 1 0 000 2h11a1 1 0 000-2zm0-6H9a1 1 0 000 2h11a1 1 0 000-2zM9 7h11a1 1 0 100-2H9a1 1 0 000 2zM4.5 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="currentColor"></path></svg></div><div className='text-gray-600'><p className='text-sm text-gray-600 font-lg '>Helpful tips</p><p className='text-sm text-gray-600 font-lg'></p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h4a2 2 0 00-.59-1.41l-3-3A2 2 0 0015 2v4a1 1 0 001 1zm-2.12 1.12A3 3 0 0113 6V2H6.5A2.49 2.49 0 004 4.5v15A2.49 2.49 0 006.5 22h11a2.49 2.49 0 002.5-2.5V9h-4a3 3 0 01-2.12-.88zM8 18.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8 9.5h-4a1 1 0 110-2h4a1 1 0 010 2zm1-6a1 1 0 01-1 1h-4a1 1 0 110-2h4a1 1 0 011 1z" fill="currentColor"></path></svg></div><div className='text-gray-600'><p className='text-sm text-gray-600 font-lg '>Track service</p><p className='text-sm text-gray-600 font-lg'></p><p className='text-sm text-gray-600 font-lg text-center'>request</p></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <p className='text-2xl font-black font-helvatica '>Account Settings</p>
                                <div className='p-4 w-[450px] rounded-2xl shadow-xl border space-y-3 flex flex-col'>
                                    <div className='flex space-x-8'>
                                        <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6a4 4 0 11-8 0 4 4 0 018 0zm4 10.5c0 3.038-3.582 5.5-8 5.5s-8-2.462-8-5.5S7.582 11 12 11s8 2.462 8 5.5z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>My Profile</p></div></div>
                                        <div className='flex flex-col space-y-2'><div className='h-12  w-12 border rounded-3xl bg-blue-50 ml-5'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8H6a3 3 0 00-3 3v8a3 3 0 003 3h6a3 3 0 003-3v-8a3 3 0 00-3-3zm-4.06 3.44a1.5 1.5 0 012.45.49c.111.273.139.572.08.86A1.49 1.49 0 019.29 14a1.49 1.49 0 01-.86-.08 1.5 1.5 0 01-.49-2.45v-.03zm3.77 7.27A1 1 0 0111 19H7a1 1 0 01-1-1 3 3 0 016 0 1 1 0 01-.29.71zM18 2h-6a3 3 0 00-3 3v1h3a5 5 0 015 5v5h1a3 3 0 003-3V5a3 3 0 00-3-3z" fill="currentColor"></path></svg></div><div className=''><p className='text-sm text-gray-600 font-lg'>Linked Accounts</p></div></div>
                                        {/* <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12a5 5 0 100 10 5 5 0 000-10zm1.5 6a1 1 0 01-1 1h-2a1 1 0 010-2h1v-1.5a1 1 0 012 0V18zM8 18a1 1 0 010-2h2.08a7 7 0 011.18-3H8a1 1 0 010-2h5.41A7 7 0 0117 10a6.88 6.88 0 013 .69V5a3 3 0 00-3-3H7a3 3 0 00-3 3v14a3 3 0 003 3h5.11a7 7 0 01-2-4H8zM8 6h3a1 1 0 110 2H8a1 1 0 010-2z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Invoice</p><p className='text-sm text-gray-600 font-lg text-center'>History</p></div></div> */}
                                        {/* <div className='flex flex-col space-y-2'><div className='h-12 w-12 border rounded-3xl bg-blue-50 ml-3'><svg className='text-blue-800 h-7 w-7 justify-center ml-[8px] mt-[9px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5a1 1 0 000-2 2.5 2.5 0 000 5 1 1 0 000-2 .5.5 0 010-1zm-4.24 3.33a1 1 0 000 1.41A5.93 5.93 0 0012 18a6 6 0 100-12 5.93 5.93 0 00-4.24 1.76 1 1 0 001.41 1.41 4 4 0 110 5.66 1 1 0 00-1.41 0zM12 2a1 1 0 100 2 8 8 0 11-8 8 1 1 0 10-2 0A10 10 0 1012 2z" fill="currentColor"></path></svg></div><div><p className='text-sm text-gray-600 font-lg text-center'>Usage</p><p className='text-sm text-gray-600 font-lg text-center'>details</p></div></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[30rem]'>
                    <div className='border h-[170px] w-[390px] rounded-2xl bg-blue-50 p-2 space-y-3'>
                        <div className='flex justify-between'><div className='bg-orange-400 h-8 rounded w-[185px] mt-1 flex p-1 space-x-1'><p className='text-center text-xs mt-1 text-white font-semibold '>SWITCH TO RmNPLUS!</p><FcRightUp2 className='mt-0.5' /></div><RxCross2 className='h-6 w-6 cursor-pointer' /></div>
                        <div className=''>
                            <div className='flex font-semibold text-md space-x-2'><p>Enjoy seamless data </p><TfiWorld className='text-blue-600 mt-1' /><p>,OTT subscriptions</p></div>
                            <div className='flex space-x-2'><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710654878/hgxzkkgiaqdekhxpcpz8.png' className='h-8 w-8'></img><p className='mt-2 font-semibold text-md'>and more!</p></div>
                        </div>
                        <div className='h-9 w-[120px] border rounded-3xl bg-blue-700 hover:bg-blue-900 cursor-pointer'><p className='text-white text-center font-semibold font-xl mt-1'>Start Now</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard