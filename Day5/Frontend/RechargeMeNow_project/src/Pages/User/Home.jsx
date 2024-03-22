import {  useState } from 'react'
import Carousel from '../../Components/User/Carousel'
import { useNavigate } from 'react-router-dom';


function Home() {
    const nav=useNavigate();
    const slides = [
        "https://res.cloudinary.com/dnghkq7oo/image/upload/v1710777442/recharge-desk_prttlq.jpg",
        "https://res.cloudinary.com/dnghkq7oo/image/upload/v1710781047/jio-sim-desk_1_sltj9c.jpg"
    ]
    const [prePaid, setPrePaid] = useState(true);
    const [postPaid, setPostPaid] = useState(false);
    return (
        <div>
            <div className='flex flex-col w-[98.9vw] h-auto space-y-16'>
                <div className="flex w-full">
                    <div className="">
                        <Carousel autoSlide={true} >
                            {[...slides.map((s) => (
                                <img src={s} className='min-w-full h-[500px] bg-gray-700' />
                            ))]}
                        </Carousel>
                    </div>
                </div>
                <div className='w-[80rem] flex justify-center items-cneter mt-10 border shadow ml-24 rounded-xl h-[550px] p-2'>
                    <div className='flex items-center'>
                        <div className='space-y-10'>
                            <p className='font-black text-7xl w-[40rem] text-blue-800'>Easily recharge or pay bills online</p>
                            <div className='flex space-x-5'>
                                <div className='h-12 w-32 rounded-3xl  bg-blue-800  border border-1 border-gray-300 border-opacity-40 text-white text-md font-semibold cursor-pointer hover:bg-blue-900'><p className='text-center p-[10px]'>Recharge</p></div>
                                <div className='h-12 w-32 rounded-3xl  bg-blue-800 border border-1 border-gray-300 border-opacity-40  text-white text-md font-semibold cursor-pointer hover:bg-blue-900'><p className='text-center p-[10px]'>Pay Bills</p></div>
                            </div>
                        </div>
                        <div>
                            <img className='h-[550px] w-[40rem] border border-r-none ml-2' src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710781908/20824349_6342757_yeizde.jpg'>
                            </img>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <div className='flex flex-col '>
                        <div className='text-6xl flex justify-cneter items-center w-full'><p className='text-center w-full font-sans1'>Here's why India prefers RmN</p></div>
                        <div className=' flex justify-evenly mt-5 space-x-4'>
                            <div className='space-y-3'><div className='h-10 w-10  text-sm rounded-2xl bg-blue-800 p-2 ml-[190px] mt-1  flex items-center justify-center '><p className='text-white text-md '>5G</p></div><p className='text-center  font-bold'>True 5G</p><p className='text-center text-lg  text-gray-500'>Experience the internet at lightning speed with no latency.</p></div>
                            <div className='space-y-2'><div className='ml-60'><img className='h-12 w-12' src='https://jep-asset.akamaized.net/jio/svg/plans-logo.svg'></img></div><p className='text-center font-bold'>Plans for all</p><p className='text-center text-lg text-gray-500'>Explore plans with unlimited voice calls, data, SMS, and a host of benefits.</p></div>
                            <div className='space-y-2'><div><svg className='ml-56' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M38.5214 14.5C38.1414 14.36 37.2614 14.5 36.9014 14.7C36.1214 15.12 34.4614 16.12 34.1814 16.96C34.1014 17.2 34.3614 17.98 34.3614 17.98L31.9414 18.4C31.9414 18.4 31.1214 18.14 30.9414 17.92C30.7814 17.7 30.9414 17.02 30.7614 16.84C30.5814 16.68 29.9014 16.64 29.7814 16.86C29.5614 17.28 30.3214 18.38 30.0214 18.72C29.7414 19.04 28.3614 18.76 28.3614 18.76C27.8214 18.76 27.2814 18.7 26.7614 18.52L24.6614 17.84C24.3414 17.74 24.0214 17.6 23.7214 17.42C23.7214 17.42 21.4014 16.7 21.2614 16.02C21.1614 15.56 22.2014 14.78 22.0814 14.32C21.9214 13.7 19.9814 12.84 19.9814 12.84C19.9814 12.84 19.5014 11.6 19.8014 11.4C19.9414 11.32 20.2014 11.72 20.3614 11.76C20.5414 11.8 20.9214 11.54 20.9614 11.36C21.0614 11 20.2614 9.99999 20.2614 9.99999L21.5614 8.75999C21.5614 8.75999 21.9614 7.97999 21.8414 7.75999C21.7214 7.51999 21.0814 7.37999 20.8014 7.37999C20.3214 7.37999 18.8814 7.73998 18.8814 7.73998L18.5214 7.39999C17.4814 6.39999 16.1014 5.89999 14.7214 5.99999C14.7214 5.99999 13.9814 6.63999 14.0214 6.91999C14.0814 7.41999 15.5014 7.65999 15.5814 8.13999C15.6014 8.27999 15.2014 8.55999 15.2014 8.55999C15.2014 8.55999 14.8814 8.55999 14.8214 8.63999C14.5214 8.99999 14.4814 10.18 14.8014 10.54C15.0614 10.86 16.1014 11.02 16.1814 11.42C16.5014 13.06 12.3014 16.9 12.3014 16.9C12.3014 16.9 11.0414 16.6 10.6614 16.74C10.2414 16.9 9.56141 17.76 9.62141 18.2C9.74141 19 11.4614 20.22 11.2214 20.98C11.1214 21.3 10.3214 21.56 9.98141 21.58C9.64141 21.58 8.96141 21.28 8.60141 21.34C8.38141 21.38 7.94141 21.74 7.94141 21.98C7.94141 22.4 9.06141 23.2 9.06141 23.2C9.06141 23.2 8.88141 24.02 8.96141 24.28C9.14141 24.9 10.2414 25.98 10.8814 26L10.9214 25.96C10.9214 25.96 12.3414 25.14 12.7614 25.38C12.9814 25.5 13.0014 26.4 13.0014 26.4V28.52C13.0414 29.1 13.1214 29.68 13.3014 30.24L15.5214 37.1L16.1214 38.32L16.9414 41.14C16.9414 41.14 17.3814 41.8 17.6014 41.92C17.8614 42.06 18.5414 42.02 18.7614 41.82C18.9214 41.7 18.9814 41.06 18.9814 41.06L20.9414 38.72V38.5L20.9014 37.42L20.9414 37.26L21.4814 35.38L21.4214 35.34V35.28L21.4814 35.36V35.26L21.1814 33.38C21.1814 33.38 21.3014 32.72 21.4214 32.54C22.2014 31.4 25.8214 29.22 25.8214 29.22L26.6014 28.14C26.6014 28.14 26.9014 27.48 27.0814 27.34C27.3614 27.14 28.1414 27.18 28.4214 26.98C28.9014 26.62 29.2014 25.36 29.5814 24.88C29.7214 24.7 30.1014 24.42 30.3214 24.42C30.6014 24.42 31.2014 24.92 31.4014 24.72C32.2214 23.96 30.4614 20.36 30.4614 20.36C30.4614 20.36 30.1014 19 30.4214 18.74C30.6814 18.52 31.7414 19 31.7414 19L31.9614 19.94L32.6014 20.28C32.6014 20.28 34.5214 19.86 34.8414 20.32C34.9414 20.46 34.6214 20.92 34.6214 20.92L34.8214 21.96C34.8214 21.96 34.8214 23.78 35.3014 23.86C35.6814 23.92 36.1014 22.58 36.1014 22.58L35.9414 21.44L36.7214 21.52C36.7214 21.52 37.1414 20.02 37.3014 19.54C37.4214 19.14 37.8414 17.96 37.8414 17.96L39.4014 16.92C39.4014 16.92 39.9814 16.3 39.9814 16.02C39.9814 15.48 39.0214 14.6 38.5014 14.4L38.5214 14.5Z" fill="#0F3CC9"></path>
                            </svg></div><p className='text-center font-bold'>Pan India coverage</p><p className='text-center text-lg text-gray-500'>Enjoy HD-quality voice calls and faster data speeds anywhere in India..</p></div>
                        </div>
                    </div>
                </div>
                <div className='bg-light_blue space-y-8 p-8 '>
                    <div><p className='text-6xl font-sans1 font-black text-center w-full'>Popular mobile plans</p></div>
                    <div><p className='text-gray-600 text-xl text-center'>Choose your connection type to find a plan as per your digital needs</p></div>
                    <div className='flex justify-center'>
                        <div className="grid grid-cols-2 justify-stretch h-12 space-evenly w-80 border-2 rounded-3xl bg-gray-100 ">
                            <p className={`${prePaid ? "rounded-3xl bg-blue-800 text-white" : "hover:bg-gray-200 hover:rounded-3xl text-blue-900"} text-lg   items-center   pt-2   w-38 text-center font-sans cursor-pointer`}
                                onClick={() => setPrePaid(true, setPostPaid(false))}>Prepaid</p>
                            <p className={`${postPaid ? "rounded-3xl bg-blue-800 text-white" : "hover:bg-gray-200 hover:rounded-3xl  text-blue-900"} text-lg  items-center  pt-2   w-38 text-center font-sans cursor-pointer`} onClick={() => setPostPaid(true, setPrePaid(false))}>PostPaid</p>
                        </div>
                    </div>
                    <div className='space-x-5 flex justify-center'>
                    <div className='bg-white shadow rounded-xl p-4 w-96 space-y-3'>
                        <div className='flex flex-col p-2 space-y-2'>
                            <div className='bg-blue_dark h-8  rounded-md'><p className='text-xs text-white text-center mt-2'>TRENDING</p></div>
                            <div>{prePaid?(<p className='font-black text-4xl'>₹299</p>):(<p className='font-black text-4xl'>₹399</p>)}</div>
                            <div className='flex space-x-2'><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710789378/prime_wjdbza.jpg' className='h-10 w-10 rounded-3xl'></img><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710789378/disney_twitit.jpg' className='h-10 w-10 rounded-3xl'></img><p className='mt-2 text-gray-500'> +1 more</p></div>
                        </div>
                        <hr />
                        <div className='flex justify-between px-2 font-sans1'>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-gray-600'>Validity</p>
                                {prePaid?(<p className='font-semibold text-md'>28 days</p>):(<p className='font-semibold text-md'>Bill cycle</p>)}
                            </div>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-gray-600'>Data</p>
                                {prePaid ?(<p className='font-semibold text-md'>2 GB/day</p>):(<p className='font-semibold text-md'>Unlimited</p>)}
                            </div>
                        </div>
                        <div className='flex space-x-5'>
                            <div className='h-12 w-44 bg-blue-800 rounded-3xl p-2 hover:bg-blue-900'>{prePaid?(<p className='text-center text-xl text-white cursor-pointer'>Recharge</p>):(<p className='text-center text-xl text-white cursor-pointer'>Get Now</p>)}</div>
                            <div className='h-12 w-44 hover:bg-blue-100 outline-none rounded-3xl hover:outline-none p-2'><p className='text-center text-md text-blue-800 font-semibold mt-1 cursor-pointer'>View details</p></div>
                        </div>
                    </div>
                        <div className='bg-white shadow rounded-xl p-4 w-96 space-y-3'>
                            <div className='flex flex-col p-2 space-y-2'>
                                <div className='bg-blue_dark h-8  rounded-md'>{prePaid?(<p className='text-xs text-white text-center mt-2'>14 OTT + 18 GB EXTRA DATA</p>):(<p className='text-xs text-white text-center mt-2'>TRENDING</p>)}</div>
                                <div>{prePaid?(<p className='font-black text-4xl'>₹1198</p>):(<p className='font-black text-4xl'>₹599</p>)}</div>
                                <div className='flex space-x-2'><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710789378/prime_wjdbza.jpg' className='h-10 w-10 rounded-3xl'></img><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710789378/disney_twitit.jpg' className='h-10 w-10 rounded-3xl'></img><p className='mt-2 text-gray-500'> +14 more</p></div>
                            </div>
                            <hr />
                            <div className='flex justify-between px-2 font-sans1'>
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-gray-600'>Validity</p>
                                    {prePaid?(<p className='font-semibold text-md'>84 days</p>):(<p className='font-semibold text-md'>Bill cycle</p>)}
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <p className='text-gray-600'>Data</p>
                                {prePaid ?(<p className='font-semibold text-md'>2 GB/day</p>):(<p className='font-semibold text-md'>Unlimited</p>)}
                                </div>
                            </div>
                            <div className='flex space-x-5'>
                                <div className='h-12 w-44 bg-blue-800 rounded-3xl p-2 hover:bg-blue-900'>{prePaid?(<p className='text-center text-xl text-white cursor-pointer'>Recharge</p>):(<p className='text-center text-xl text-white cursor-pointer'>Get Now</p>)}</div>
                                <div className='h-12 w-44 hover:bg-blue-100 outline-none rounded-3xl hover:outline-none p-2'><p className='text-center text-md text-blue-800 font-semibold mt-1 cursor-pointer'>View details</p></div>
                            </div>
                        </div>
                        {/* <div> */}
                            <div className='bg-white shadow rounded-xl p-4 w-96 space-y-3'>
                                <div className='flex flex-col p-2 space-y-2'>
                                    <div className='bg-blue_dark h-8 rounded-md'>{prePaid?(<p className='text-xs text-white text-center mt-2'>ONLY ₹230/MONTH</p>):(<p className='text-xs text-white text-center mt-2'>TRENDING</p>)}</div>
                                    <div>{prePaid?(<p className='font-black text-4xl'>₹2999</p>):(<p className='font-black text-4xl'>₹699</p>)}</div>
                                    <div className='flex space-x-2'><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710789378/prime_wjdbza.jpg' className='h-10 w-10 rounded-3xl'></img><img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1710789378/disney_twitit.jpg' className='h-10 w-10 rounded-3xl'></img><p className='mt-2 text-gray-500'> +1 more</p></div>
                                </div>
                                <hr />
                                <div className='flex justify-between px-2 font-sans1'>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-gray-600'>Validity</p>
                                    {prePaid?(<p className='font-semibold text-md'>365 days</p>):(<p className='font-semibold text-md'>Bill cycle</p>)}
                                        
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <p className='text-gray-600'>Data</p>
                                {prePaid ?(<p className='font-semibold text-md'>2.5 GB/day</p>):(<p className='font-semibold text-md'>Unlimited</p>)}
                                    </div>
                                </div>
                                <div className='flex space-x-5'>
                                    <div className='h-12 w-44 bg-blue-800 rounded-3xl p-2 hover:bg-blue-900'>{prePaid?(<p className='text-center text-xl text-white cursor-pointer'>Recharge</p>):(<p className='text-center text-xl text-white cursor-pointer'>Get Now</p>)}</div>
                                    <div className='h-12 w-44 hover:bg-blue-100 outline-none rounded-3xl hover:outline-none p-2'><p className='text-center text-md text-blue-800 font-semibold mt-1 cursor-pointer'>View details</p></div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className='flex justify-center w-full items-center text-center '>
                        <div className=' h-12 w-64 text-blue-900 rounded-3xl border-gray-300 border-2 hover:border-blue-900 cursor-pointer text-xl p-2'>{prePaid?(<p className='ml-4'>View all prepaid plans</p>):(<p className='ml-4'>View all postpaid plans</p>)}</div>
                    </div> 
                </div>
                <div className='bg-blue-700 h-64 space-y-4 items-center p-8 '>
                    <div><p className='text-6xl font-black text-white text-center'>Need guidance?</p></div>
                    <div><p className=' text-gray-200 font-semibold text-center text-xl'>we'd love to help you</p></div>
                    <div className='flex space-x-8 justify-center '>
                        <div className='flex space-x-2 h-12 w-40 cursor-pointer border-2 border-gray-400 border-opacity-50 hover:border-white rounded-3xl p-2'><div className='flex space-x-2 px-4'><svg className='text-white h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 4H5a3 3 0 00-3 3v8a3 3 0 003 3h3v1a2 2 0 003.2 1.6l3.47-2.6H19a3 3 0 003-3V7a3 3 0 00-3-3zm-7 12.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.32-4.62l-.33.24A1 1 0 0111 12a2.18 2.18 0 011.17-1.76c.56-.4.83-.61.83-1.24a1.17 1.17 0 00-1-1 1.17 1.17 0 00-1 1 1 1 0 01-2 0 3.16 3.16 0 013-3 3.16 3.16 0 013 3 3.31 3.31 0 01-1.68 2.88z" fill="currentColor"></path></svg><p className='text-white text-md font-semibold mt-1'>Support</p></div></div>
                        <div className='flex space-x-2 h-12 w-48 cursor-pointer border-2 border-gray-400 border-opacity-50 hover:border-white rounded-3xl p-2'><div className='flex space-x-2 px-4'><svg className='text-white h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 4H9a7 7 0 00-1 13.92V20a1.5 1.5 0 002.4 1.2l4.27-3.2H15a7 7 0 000-14zm-7 8a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"></path></svg><p className='text-white text-md font-semibold mt-1'>Chat with us</p></div></div>
                        <div className='flex space-x-2 h-12 w-40 cursor-pointer border-2 border-gray-400 border-opacity-50 hover:border-white rounded-3xl p-2'><div className='flex space-x-2 px-4'><svg className='text-white h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.27 15.73c3.74 3.75 7.07 3.85 8.48 3.68a1.89 1.89 0 001.13-.57l1-1a2 2 0 000-2.83l-.71-.71a2 2 0 00-2.82 0l-.71.71a.997.997 0 01-1.095.219.998.998 0 01-.325-.219L9 10.79a.999.999 0 010-1.42l.71-.71a2 2 0 000-2.82L9 5.13a2 2 0 00-2.83 0l-1 1a1.89 1.89 0 00-.57 1.13c-.18 1.4-.08 4.74 3.67 8.47z" fill="currentColor"></path></svg><p className='text-white text-md font-semibold mt-1'>Call us</p></div></div>
                        <div className='flex space-x-2 h-12 w-48 cursor-pointer border-2 border-gray-400 border-opacity-50 hover:border-white rounded-3xl p-2'><div className='flex space-x-2 px-4'><svg className='text-white h-8 w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.12 5.88l-2.55-2.35A2 2 0 0017.22 3H6.78a2 2 0 00-1.35.53L2.88 5.88a3 3 0 004.24 4.24c.076-.082.146-.169.21-.26a3 3 0 004.67 0 3 3 0 004.67 0c.065.091.135.178.21.26a3 3 0 104.24-4.24zM7.34 12.42a5 5 0 01-4.34.16V18a3 3 0 003 3h5v-8.19a4.91 4.91 0 01-3.66-.39zm9.32 0a4.91 4.91 0 01-3.66.39V15h2a1 1 0 010 2h-2v4h5a3 3 0 003-3v-5.42a5 5 0 01-4.34-.16z" fill="currentColor"></path></svg><p className='text-white text-md font-semibold mt-1'>Find a store</p></div></div>
                        
                    </div>
                </div>
                <div>
            
                </div>
            </div>
            <div className='absolute top-48 left-32 space-y-5'>
                <p className='text-6xl font-black text-white w-[40rem] '>Recharging is no more monthly hassle!</p>
                <p className='text-xl text-white w-[35rem] '>With ₹2999 plan, recharge once and stay connected all year long</p>
                <div className='h-12 w-40 rounded-3xl  bg-blue-800  text-white text-md font-semibold cursor-pointer hover:bg-blue-900'><p className='text-center p-[10px]' onClick={()=>nav('/recharge')}>Recharge Now</p></div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home