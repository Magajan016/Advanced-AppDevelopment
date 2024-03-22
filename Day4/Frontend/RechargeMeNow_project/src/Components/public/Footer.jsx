import React from 'react'
import { BiSolidLockAlt } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { PiMegaphoneBold } from "react-icons/pi";
import { HiOutlineSupport } from "react-icons/hi";
import { LiaFacebookF } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
    return (
        <div>
            <div className='mt-4 bg-gray-100'>
                <div className='flex justify-between items-center justify-evenly  h-64  w-full shadow'>
                    <div className='flex flex-col space-y-2 h-64 w-72 p-1 mt-16'>
                        <BiSolidLockAlt className='text-4xl text-blue-800 text-center  flex w-full'></BiSolidLockAlt>
                        <p className='text-center text-xl text-gray-800 font-sans font-bold'>100% secure payments</p>
                        <p className='text-center text-md text-gray-700'>Moving your card details to a much secured place</p>
                    </div>
                    <div className='flex flex-col space-y-2 h-64 w-72 p-1 mt-16'>
                        <BiSolidLike className='text-4xl text-blue-800 text-center  flex w-full' />
                        <p className='text-center text-xl text-gray-800 font-bold font-sans'>Trust pay</p>
                        <p className='text-center text-md text-gray-700'>100% Payment Protection. Easy Return Policy.</p>
                    </div>
                    <div className='flex flex-col space-y-2 h-64 w-72 p-1 mt-16'>
                        <PiMegaphoneBold className='text-4xl text-blue-800 text-center  flex w-full' />
                        <p className='text-center text-xl text-gray-800 font-bold font-sans'>Refer & Earn</p>
                        <p><p className='text-center text-md text-gray-700'>Invite a friend to sign up and earn up to ₹100.</p></p>
                    </div>
                    <div className='flex flex-col space-y-2 h-64 w-72 p-1 mt-16'>
                        <HiOutlineSupport className='text-4xl text-blue-800 text-center  flex w-full' />
                        <p className='text-center text-xl text-gray-800 font-sans font-bold'>24X7 Support</p>
                        <p className='text-center text-md text-gray-700'>We're here to help. Have a query and need help ?<span className='text-blue-600'> Click here</span> </p>
                    </div>
                </div>
                <div className='m-10'>
                    <div className='flex justify-evenly '>
                        <div className=''>
                        <svg  className='h-24 w-24 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.52 247.2" height="247.2" width="395.52"><g transform="matrix(1,0,0,1,75.54432000000001,83.36667412578304)"><svg viewBox="0 0 244.43135999999996 80.46665174843392" height="80.46665174843392" width="244.43135999999996"><g><svg viewBox="0 0 244.43135999999996 80.46665174843392" height="80.46665174843392" width="244.43135999999996"><g><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843392" width="244.43135999999996"><g><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843393" width="244.43136"><g id="textblocktransform"><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843393" width="244.43136" id="textblock"><g><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843393" width="244.43136"><g transform="matrix(1,0,0,1,0,0)"><svg width="244.43136" viewBox="1.6944445555599998 -35.34152542372881 111.91180544444 36.84152542372881" height="80.46665174843393" data-palette-color="#3905f7"><path d="M11.1-15.75L11.1-2.5 14.95-1.5Q15.1-0.55 14.7 0.25L14.7 0.25Q13.35 0.15 11.68 0.08 10 0 8.6 0L8.6 0Q7.2 0 5.18 0.08 3.15 0.15 1.75 0.25L1.75 0.25Q1.6-0.7 1.85-1.5L1.85-1.5Q2.9-1.6 3.9-1.85 4.9-2.1 5.85-2.5L5.85-2.5 5.85-32.5 2-33.5Q1.85-34.45 2.25-35.25L2.25-35.25Q3.6-35.2 5.68-35.08 7.75-34.95 9.35-35L9.35-35 14.05-35.3Q20.5-35.65 24.28-33.05 28.05-30.45 28.05-25.6L28.05-25.6Q28.05-22.2 26.3-20.08 24.55-17.95 21.2-16.8L21.2-16.8 21.2-16.6Q21.55-16.4 21.83-15.9 22.1-15.4 22.3-15L22.3-15Q24.3-10.6 25.53-7.9 26.75-5.2 27.58-3.85 28.4-2.5 29.28-2.02 30.15-1.55 31.45-1.55L31.45-1.55 32.05-1.6Q32.3-1.2 32.35-0.8 32.4-0.4 32.35 0L32.35 0Q32.1 0.35 31.4 0.5 30.7 0.65 30.03 0.7 29.35 0.75 29.05 0.75L29.05 0.75Q25.75 0.75 23.6-1.85L23.6-1.85Q22.65-3 21.83-4.85 21-6.7 19.9-9.38 18.8-12.05 16.95-15.8L16.95-15.8Q15.3-15.65 13.6-15.65L13.6-15.65Q12.95-15.65 12.33-15.68 11.7-15.7 11.1-15.75L11.1-15.75ZM23.15-25.3L23.15-25.3Q23.15-27.85 22.03-29.55 20.9-31.25 19-32.13 17.1-33 14.75-33L14.75-33Q13.9-33 13-32.85 12.1-32.7 11.1-32.45L11.1-32.45 11.1-18.05Q11.9-17.85 12.65-17.78 13.4-17.7 14.1-17.7L14.1-17.7Q18.45-17.7 20.8-19.75 23.15-21.8 23.15-25.3ZM42.35-25.05L42.2-21.65 42.25-21.6Q44.55-24 46.95-24.9 49.35-25.8 51.15-25.8L51.15-25.8Q53.6-25.8 55.3-24.73 57-23.65 57.7-21.6L57.7-21.6Q59.85-24 61.95-24.9 64.05-25.8 66.15-25.8L66.15-25.8Q69.4-25.8 71.27-23.95 73.15-22.1 73.15-18.55L73.15-18.55 73.2-2.5 76.7-1.5Q76.85-0.55 76.45 0.25L76.45 0.25Q75.1 0.15 73.6 0.08 72.1 0 70.7 0L70.7 0Q69.3 0 67.75 0.08 66.2 0.15 64.8 0.25L64.8 0.25Q64.65-0.7 64.9-1.5L64.9-1.5Q65.9-1.7 66.67-1.95 67.45-2.2 68.2-2.5L68.2-2.5 68.2-16.3Q68.2-19.7 67.15-20.95 66.1-22.2 63.8-22.2L63.8-22.2Q62.7-22.2 61.2-21.48 59.7-20.75 58.15-18.95L58.15-18.95 58.15-18.55 58.2-2.5 61.7-1.5Q61.85-0.55 61.45 0.25L61.45 0.25Q60.1 0.15 58.6 0.08 57.1 0 55.7 0L55.7 0Q54.3 0 52.75 0.08 51.2 0.15 49.8 0.25L49.8 0.25Q49.65-0.7 49.9-1.5L49.9-1.5Q50.9-1.7 51.67-1.95 52.45-2.2 53.2-2.5L53.2-2.5 53.2-16.3Q53.2-19.7 52.15-21 51.1-22.3 48.8-22.3L48.8-22.3Q47.6-22.3 45.97-21.58 44.35-20.85 42.6-19.3L42.6-19.3 42.6-2.5 45.95-1.5Q46.1-0.55 45.7 0.25L45.7 0.25Q44.35 0.15 42.92 0.08 41.5 0 40.1 0L40.1 0Q38.7 0 37.05 0.08 35.4 0.15 34 0.25L34 0.25Q33.85-0.7 34.1-1.5L34.1-1.5Q35-1.75 35.9-1.98 36.8-2.2 37.6-2.5L37.6-2.5 37.6-22 33.45-22.4Q33.3-23.4 33.7-24.15L33.7-24.15Q35.55-24.45 37.3-24.8 39.05-25.15 40.65-25.5L40.65-25.5Q41.5-25.45 42.35-25.05L42.35-25.05ZM87.45-35L88.7-32.4 104.15-12.55Q105-11.45 105.62-10.2 106.25-8.95 106.85-7.65L106.85-7.65 107-7.65Q106.95-8.85 106.82-9.95 106.7-11.05 106.7-12.45L106.7-12.45 106.65-32.5 102.8-33.5Q102.65-34.45 103.05-35.25L103.05-35.25Q104.4-35.2 105.52-35.1 106.65-35 108.05-35L108.05-35Q109.5-35 110.82-35.1 112.15-35.2 113.55-35.25L113.55-35.25Q113.7-34.3 113.45-33.5L113.45-33.5Q112.45-33.3 111.45-33.1 110.45-32.9 109.45-32.5L109.45-32.5 109.45 1Q109.25 1.1 109 1.25 108.75 1.4 108.45 1.5L108.45 1.5 88.55-23.75Q87.75-24.8 87.05-26 86.35-27.2 85.6-28.5L85.6-28.5 85.45-28.5Q85.65-27.35 85.67-26.03 85.7-24.7 85.7-23.6L85.7-23.6 85.7-2.5 89.55-1.45Q89.7-0.5 89.3 0.3L89.3 0.3Q87.95 0.2 86.7 0.1 85.45 0 84.05 0L84.05 0Q82.65 0 81.5 0.08 80.35 0.15 78.95 0.25L78.95 0.25Q78.8-0.7 79.05-1.5L79.05-1.5Q80.05-1.65 81.02-1.9 82-2.15 82.95-2.5L82.95-2.5 82.95-32.5 79.1-33.5Q78.95-34.45 79.35-35.25L79.35-35.25Q80.7-35.2 82.37-35.1 84.05-35 85.45-35L85.45-35 87.45-35Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#3905f7" class="wordmark-text-0" data-fill-palette-color="primary" id="text-0"/></svg></g></svg></g></svg></g></svg></g></svg></g></svg></g></svg></g><path d="M182.391 77.367L182.391 22.335 384.921 22.335 384.921 224.865 182.391 224.865 182.391 169.833 189.648 169.833 189.648 217.608 377.664 217.608 377.664 29.592 189.648 29.592 189.648 77.367Z" fill="#3905f7" stroke="transparent" data-fill-palette-color="tertiary"/></svg>
                         <p className='text-gray-500 text-md'>Place   : Coimbatore</p>
                         <p className='text-gray-500 text-md'>Contact : 9363339038</p>
                         <p className='text-gray-500 text-md'>Email   : magajan@gmail.com</p>
                        </div>
                        <div className='flex flex-col mt-10 h-full'>
                            <p className='text-lg text-gray-800 font-semibold ml-2'>Subscribe</p>
                            <div className='flex m-2 h-10 w-96 space-x-0 '><input className='h-10 w-72  border-l border-t border-b focus:outline-none rounded-l p-2 duration-200 focus:outline-r-none' placeholder='Your Email Address'></input><div className='h-10 p-2 w-24 rounded-r border bg-blue-800 hover:bg-blue-900 cursor-pointer'><p className='text-center text-white text-md '>Subscribe</p></div></div>
                        </div>
                        <div className='flex flex-col space-y-3 items-end font-bold text-blue-800    mt-10 '><p>Get in Touch</p>
                            <div className='flex space-x-3 items-center '>
                                <div className='h-8 w-8 rounded-3xl bg-gray-300 flex justify-center hover:text-blue-900 cursor-pointer '><LiaFacebookF className='text-white hover:text-blue-900 h-5 w-5 text-center mt-[6px]' /></div>
                                <div className='h-8 w-8 rounded-3xl bg-gray-300 flex justify-center hover:text-blue-900 cursor-pointer  '><RiTwitterXLine className='text-white hover:text-black  h-4 w-4  text-center mt-[6px]'/></div>
                                <div className='h-8 w-8 rounded-3xl bg-gray-300 flex justify-center hover:text-blue-900 cursor-pointer '><FaLinkedinIn className='text-white hover:text-blue-800 h-4 w-4 text-center mt-[6px]' /></div>
                                <div className='h-8 w-8 rounded-3xl bg-gray-300 flex justify-center hover:text-blue-900 cursor-pointer  '><FaYoutube className='text-white hover:text-red-600 h-4 w-4 text-center mt-[6px]'/></div>
                                <div className='h-8 w-8 rounded-3xl bg-gray-300 flex justify-center hover:text-blue-900 cursor-pointer'><AiFillInstagram className='text-white hover:text-pink-500 h-5 w-5 text-center mt-[6px]'/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='w-[80rem] ml-[6rem]'></hr>
                <div className='flex justify-center space-x-4 mt-5 text-gray-500'>
                    <p className='tracking-normal hover:text-gray-900 cursor-pointer text-sm'>About Us</p>
                    <p className='tracking-normal hover:text-gray-900 cursor-pointer text-sm'>Faq</p>
                    <p className='tracking-normal hover:text-gray-900 cursor-pointer text-sm'>Contact</p>
                    <p className='tracking-normal hover:text-gray-900 cursor-pointer text-sm'>Support</p>
                    <p className='tracking-normal hover:text-gray-900 cursor-pointer text-sm'>Terms of Service</p>
                    <p className='tracking-normal hover:text-gray-900 cursor-pointer text-sm'>Privacy Policy</p>
                </div>
                <div className='flex justify-center mt-3'>
                    <p className='text-gray-500'>Copyright © 2023 <span className='text-blue-700 text-sm'> RechargeMeNow</span>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer