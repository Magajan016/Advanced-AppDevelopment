// import React from 'react';

import { useState } from "react"
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState({
        "phone_number": ""
    });
    const nav=useNavigate();
    const [otp, setOtp] = useState(true);
    const [mobile, setMobile] = useState(true);
    const [fibre, setFibre] = useState(false);
    const [containsDigit, setContainsDigits] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.id]: e.target.value });
        const number = e.target.value;
        setLogin({ ...login, [e.target.id]: number })
        const hasDigits = /\d/.test(number);
        const hasLength = number.length == 210
        setIsValidPhoneNumber(
            hasDigits && hasLength
        )
    }
    const handleGenerateOtp = () => {

    }
    return (
        <div className="">
            {/* <Navbar/>
        <NavbarDown/> */}
            <div className="h-screen w-full ">
                <div className="grid grid-cols-2 h-full w-full mt-10">
                    {/* <div><svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" version="1.1" width="2000" height="1247" viewBox="0 0 2000 1247"><g transform="matrix(1,0,0,1,-1.2121212121212466,0.504858299595071)"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 396 247" data-background-color="#ffffff" preserveAspectRatio="xMidYMid meet" height="1247" width="2000"><g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,-0.09999999999999432)"><svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52"><g><svg/></g><g><svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52"><g transform="matrix(1,0,0,1,75.54432000000001,83.36667412578304)"><svg viewBox="0 0 244.43135999999996 80.46665174843392" height="80.46665174843392" width="244.43135999999996"><g><svg viewBox="0 0 244.43135999999996 80.46665174843392" height="80.46665174843392" width="244.43135999999996"><g><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843392" width="244.43135999999996"><g><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843393" width="244.43136"><g id="textblocktransform"><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843393" width="244.43136" id="textblock"><g><svg viewBox="0 0 244.43136 80.46665174843393" height="80.46665174843393" width="244.43136"><g transform="matrix(1,0,0,1,0,0)"><svg width="244.43136" viewBox="1.6944445555599998 -35.34152542372881 111.91180544444 36.84152542372881" height="80.46665174843393" data-palette-color="#3905f7"><path d="M11.1-15.75L11.1-2.5 14.95-1.5Q15.1-0.55 14.7 0.25L14.7 0.25Q13.35 0.15 11.68 0.08 10 0 8.6 0L8.6 0Q7.2 0 5.18 0.08 3.15 0.15 1.75 0.25L1.75 0.25Q1.6-0.7 1.85-1.5L1.85-1.5Q2.9-1.6 3.9-1.85 4.9-2.1 5.85-2.5L5.85-2.5 5.85-32.5 2-33.5Q1.85-34.45 2.25-35.25L2.25-35.25Q3.6-35.2 5.68-35.08 7.75-34.95 9.35-35L9.35-35 14.05-35.3Q20.5-35.65 24.28-33.05 28.05-30.45 28.05-25.6L28.05-25.6Q28.05-22.2 26.3-20.08 24.55-17.95 21.2-16.8L21.2-16.8 21.2-16.6Q21.55-16.4 21.83-15.9 22.1-15.4 22.3-15L22.3-15Q24.3-10.6 25.53-7.9 26.75-5.2 27.58-3.85 28.4-2.5 29.28-2.02 30.15-1.55 31.45-1.55L31.45-1.55 32.05-1.6Q32.3-1.2 32.35-0.8 32.4-0.4 32.35 0L32.35 0Q32.1 0.35 31.4 0.5 30.7 0.65 30.03 0.7 29.35 0.75 29.05 0.75L29.05 0.75Q25.75 0.75 23.6-1.85L23.6-1.85Q22.65-3 21.83-4.85 21-6.7 19.9-9.38 18.8-12.05 16.95-15.8L16.95-15.8Q15.3-15.65 13.6-15.65L13.6-15.65Q12.95-15.65 12.33-15.68 11.7-15.7 11.1-15.75L11.1-15.75ZM23.15-25.3L23.15-25.3Q23.15-27.85 22.03-29.55 20.9-31.25 19-32.13 17.1-33 14.75-33L14.75-33Q13.9-33 13-32.85 12.1-32.7 11.1-32.45L11.1-32.45 11.1-18.05Q11.9-17.85 12.65-17.78 13.4-17.7 14.1-17.7L14.1-17.7Q18.45-17.7 20.8-19.75 23.15-21.8 23.15-25.3ZM42.35-25.05L42.2-21.65 42.25-21.6Q44.55-24 46.95-24.9 49.35-25.8 51.15-25.8L51.15-25.8Q53.6-25.8 55.3-24.73 57-23.65 57.7-21.6L57.7-21.6Q59.85-24 61.95-24.9 64.05-25.8 66.15-25.8L66.15-25.8Q69.4-25.8 71.27-23.95 73.15-22.1 73.15-18.55L73.15-18.55 73.2-2.5 76.7-1.5Q76.85-0.55 76.45 0.25L76.45 0.25Q75.1 0.15 73.6 0.08 72.1 0 70.7 0L70.7 0Q69.3 0 67.75 0.08 66.2 0.15 64.8 0.25L64.8 0.25Q64.65-0.7 64.9-1.5L64.9-1.5Q65.9-1.7 66.67-1.95 67.45-2.2 68.2-2.5L68.2-2.5 68.2-16.3Q68.2-19.7 67.15-20.95 66.1-22.2 63.8-22.2L63.8-22.2Q62.7-22.2 61.2-21.48 59.7-20.75 58.15-18.95L58.15-18.95 58.15-18.55 58.2-2.5 61.7-1.5Q61.85-0.55 61.45 0.25L61.45 0.25Q60.1 0.15 58.6 0.08 57.1 0 55.7 0L55.7 0Q54.3 0 52.75 0.08 51.2 0.15 49.8 0.25L49.8 0.25Q49.65-0.7 49.9-1.5L49.9-1.5Q50.9-1.7 51.67-1.95 52.45-2.2 53.2-2.5L53.2-2.5 53.2-16.3Q53.2-19.7 52.15-21 51.1-22.3 48.8-22.3L48.8-22.3Q47.6-22.3 45.97-21.58 44.35-20.85 42.6-19.3L42.6-19.3 42.6-2.5 45.95-1.5Q46.1-0.55 45.7 0.25L45.7 0.25Q44.35 0.15 42.92 0.08 41.5 0 40.1 0L40.1 0Q38.7 0 37.05 0.08 35.4 0.15 34 0.25L34 0.25Q33.85-0.7 34.1-1.5L34.1-1.5Q35-1.75 35.9-1.98 36.8-2.2 37.6-2.5L37.6-2.5 37.6-22 33.45-22.4Q33.3-23.4 33.7-24.15L33.7-24.15Q35.55-24.45 37.3-24.8 39.05-25.15 40.65-25.5L40.65-25.5Q41.5-25.45 42.35-25.05L42.35-25.05ZM87.45-35L88.7-32.4 104.15-12.55Q105-11.45 105.62-10.2 106.25-8.95 106.85-7.65L106.85-7.65 107-7.65Q106.95-8.85 106.82-9.95 106.7-11.05 106.7-12.45L106.7-12.45 106.65-32.5 102.8-33.5Q102.65-34.45 103.05-35.25L103.05-35.25Q104.4-35.2 105.52-35.1 106.65-35 108.05-35L108.05-35Q109.5-35 110.82-35.1 112.15-35.2 113.55-35.25L113.55-35.25Q113.7-34.3 113.45-33.5L113.45-33.5Q112.45-33.3 111.45-33.1 110.45-32.9 109.45-32.5L109.45-32.5 109.45 1Q109.25 1.1 109 1.25 108.75 1.4 108.45 1.5L108.45 1.5 88.55-23.75Q87.75-24.8 87.05-26 86.35-27.2 85.6-28.5L85.6-28.5 85.45-28.5Q85.65-27.35 85.67-26.03 85.7-24.7 85.7-23.6L85.7-23.6 85.7-2.5 89.55-1.45Q89.7-0.5 89.3 0.3L89.3 0.3Q87.95 0.2 86.7 0.1 85.45 0 84.05 0L84.05 0Q82.65 0 81.5 0.08 80.35 0.15 78.95 0.25L78.95 0.25Q78.8-0.7 79.05-1.5L79.05-1.5Q80.05-1.65 81.02-1.9 82-2.15 82.95-2.5L82.95-2.5 82.95-32.5 79.1-33.5Q78.95-34.45 79.35-35.25L79.35-35.25Q80.7-35.2 82.37-35.1 84.05-35 85.45-35L85.45-35 87.45-35Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#ffffff" class="wordmark-text-0" data-fill-palette-color="primary" id="text-0"/></svg></g></svg></g></svg></g></svg></g></svg></g></svg></g></svg></g><path d="M182.391 77.367L182.391 22.335 384.921 22.335 384.921 224.865 182.391 224.865 182.391 169.833 189.648 169.833 189.648 217.608 377.664 217.608 377.664 29.592 189.648 29.592 189.648 77.367Z" fill="#ffffff" stroke="transparent" data-fill-palette-color="tertiary"/></svg></g><defs/></svg><rect width="395.52" height="247.2" fill="none" stroke="none" visibility="hidden"/></g></svg></g></svg></div> */}

                    <div className="flex ">
                        <div className="flex flex-col justify-center ml-60 mb-40">
                            <div className="flex flex-col justify-center h-full p-2 rounded-xl w-[40rem] space-y-5">
                                <p className="text-4xl font-sans text-gray-600 font-bold">Manage your Digitel Life with RechargeMeNow App</p>
                                <div className="flex space-x-3 mt-4"> <img className="h-6 w-6 rounde-xl" src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1710495747/checked_cmivgb.png"></img>  <p className="text-xl  ">Recharge, pay bills, and check balance</p></div>
                                <div className="flex space-x-3"><img className="h-6 w-6 rounde-xl" src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1710495747/checked_cmivgb.png"></img> <p className="text-xl  ">Shop, UPI, and health</p></div>
                                <div className="flex space-x-3"><img className="h-6 w-6 rounde-xl" src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1710495747/checked_cmivgb.png"></img> <p className="text-xl  ">Movies, music, and games</p></div>
                                <div className="flex space-x-3"><img className="h-6 w-6 rounde-xl" src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1710495747/checked_cmivgb.png"></img> <p className="text-xl  ">Instant help with RechargeMeNow Care</p></div>
                            </div>
                            <div className="border h-40 p-1 pb-4 w-[25rem] bg-gray-200 rounded-xl flex flex-col space-x-4 mb-10 absolute top-[80%]">
                                {/* <p className="text-md font-sans font-bold">Do much more with RmN</p> */}
                                <div ><RxCross2 className='h-6 w-6 cursor-pointer text-end w-full ml-[11rem] ' /></div>
                                <div className="flex space-x-3 ">
                                    <div >
                                        <img className='w-[10rem] h-[28] mt-1' src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1710757914/myjioQRimage_efyhjg.png" height="101px" width="101px" alt="myjioQRimage"></img>
                                    </div>
                                    <div className="flex flex-col mt-3 space-y-2">
                                        <p className="text-xl font-bold mt-1 text-gray-500"> Download the app now</p>
                                        <p className="text-sm text-gray-700">Scan the QR code with your mobile to download the app</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {otp ? (<div className="flex h-full items-center justify-center">
                        <div className="flex justify-center items-center h-[500px] w-96 border rounded-xl outline-none shadow-sxl">
                            <div className="flex flex-col justify-center mb-8 p-8 space-y-5 w-96 m-2 mt-4 mb-4">
                                <p className="font-sans font-extrabold text-4xl">Welcome to RMN</p>
                                <p className="text-sm text-start">Login in to unlock a world of digital experience</p>
                                <div className="grid grid-cols-2 justify-stretch h-12 space-evenly w-80 border-2 rounded-3xl bg-gray-100 ">
                                    <p className={`${mobile ? "rounded-3xl bg-blue-800 text-white" : "hover:bg-gray-200 hover:rounded-3xl text-blue-900"} text-lg   items-center   pt-2   w-38 text-center font-sans cursor-pointer`}
                                        onClick={() => setMobile(true, setFibre(false))}>Mobile</p>
                                    <p className={`${fibre ? "rounded-3xl bg-blue-800 text-white" : "hover:bg-gray-200 hover:rounded-3xl  text-blue-900"} text-lg  items-center  pt-2   w-38 text-center font-sans cursor-pointer`} onClick={() => setFibre(true, setMobile(false))}>RMNFibre</p>
                                </div>
                                <label className="text-start">Mobile Number</label>
                                <input className="w-80 border rounded-lg p-2 h-12 outline-blue-900" type="text" id="phone_number" onChange={handleChange}></input>
                                <div></div>
                                <div className="space-y-5"><p className="p-2 h-12 bg-blue-100 w-80 text-center text-xl text-white font-sans rounded-2xl" onClick={() => setOtp(false)} onChange={handleGenerateOtp}>Generate OTP</p></div>
                            </div>
                        </div>
                    </div>) :
                        (<div className="flex h-full items-center justify-center">
                            {mobile ? (
                                <div className="flex justify-center items-center h-[500px] w-96 border rounded-xl outline-none shadow-sxl">
                                    <div className="space-y-12">
                                        <div>
                                            <svg className=" h-8 w-8 text-blue-900 flex justify-start cursor-pointer" onClick={() => setOtp(true)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 20a1.003 1.003 0 01-.71-.29l-7-7a1 1 0 010-1.42l7-7a1.005 1.005 0 011.42 1.42L9.41 12l6.3 6.29a.997.997 0 01.219 1.095.999.999 0 01-.93.615z" fill="currentColor" ></path></svg>
                                        </div>
                                        <div><p className="text-2xl font-bold font-sans">Verify Mobile Number</p>
                                            <p>The OTP has been sent to +919363***028</p></div>
                                        <div className="flex space-x-4">
                                            <div className="flex h-12 w-10 border-b-2 border-blue-900   outline-blue-900  justify-center"><input className="outline-none hover:outline-none  mt-3 p-2 h-8 w-8" placeholder="0"></input></div>
                                            <div className="flex h-12 w-10 border-b-2 border-blue-900   outline-blue-900  justify-center"><input className="outline-none hover:outline-none  mt-3 p-2 h-8 w-8" placeholder="0"></input></div>
                                            <div className="flex h-12 w-10 border-b-2 border-blue-900   outline-blue-900  justify-center"><input className="outline-none hover:outline-none  mt-3 p-2 h-8 w-8" placeholder="0"></input></div>
                                            <div className="flex h-12 w-10 border-b-2 border-blue-900   outline-blue-900  justify-center"><input className="outline-none hover:outline-none  mt-3 p-2 h-8 w-8" placeholder="0"></input></div>
                                            <div className="flex h-12 w-10 border-b-2 border-blue-900   outline-blue-900  justify-center"><input className="outline-none hover:outline-none  mt-3 p-2 h-8 w-8" placeholder="0"></input></div>
                                            <div className="flex h-12 w-10 border-b-2 border-blue-900   outline-blue-900  justify-center"><input className="outline-none hover:outline-none  mt-3 p-2 h-8 w-8" placeholder="0"></input></div>
                                        </div>
                                        <div>
                                            <p className="flex justify-end text-lg text-blue-900 font-poppins cursor-pointer hover:underline">Resend OTP</p>
                                        </div>
                                        <div className="">
                                            <div className="w-88 rounded-3xl bg-blue-300 text-center text-white p-2 text-xl border h-12 cursor-pointer" aria-disabled onClick={() => setMobile(false)}>Submit</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center h-[600px] w-[30rem] border rounded-xl outline-none shadow-sxl">
                                    <div className="space-y-5">
                                        <p className="text-3xl text-blue-900">Enter your details to register</p>
                                        <div className="flex flex-col space-y-2">
                                            <label>First Name</label>
                                            <input className="h-12 w-96 rounded-xl border outline-blue-900 p-2" placeholder="Enter firstName"></input>
                                        </div>
                                        <div className="flex flex-col space-y-2 ">
                                            <label>Last Name</label>
                                            <input className="h-12 w-96 rounded-xl border outline-blue-900 p-2" placeholder="Enter lastName"></input>
                                        </div>
                                        <div className="flex flex-col space-y-2  ">
                                            <label>User Name</label>
                                            <input className="h-12 w-96 rounded-xl border outline-blue-900 p-2" placeholder="Enter userName"></input>
                                        </div>
                                        <div className="flex flex-col space-y-2 outline-blue-900 ">
                                            <label>Email</label>
                                            <input className="h-12 w-96 rounded-xl border outline-blue-900 p-2" placeholder="Enter email"></input>
                                        </div>
                                        <div className="w-full flex gap-2">
                                            <input type="checkbox" className="inline-block w-4 h-4 text-blue-600 bg-gray-100 border-blue
                       -300 rounded "></input>
                                            <p className="text-sm flex gap-1"> I agree to the RMN{" "} <span className="text-blue-900 cursor-pointer hover:underline ">{" "}Terms and Conditions{" "}</span>and <p className="text-blue-900 hover:underline cursor-pointer">Privacy Policy</p></p>
                                        </div>
                                        <div className="flex w-full bg-blue-900 rounded-xl" onClick={()=>nav('/user/dashboard')}>
                                            <div className="p-3 text-center text-xl w-full text-white">Proceed</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* </div> */}
                        </div>)}
                </div>
            </div>
        </div>
    )
}
export default Login;