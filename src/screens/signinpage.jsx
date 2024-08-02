import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


import {BASE_URL} from '../component/url/url'
import Productplacehome from './productplacehome';
import { useAuth } from '../utils/AuthProvider';



function Signinpage(props) {
    const navigate = useNavigate()    
    const[error, setError] = useState(false)
    const[message, setMessage] = useState(false)
    const[data, setData] = useState("")

const [input, setInput] = useState({
    email: "",
    password : "",
    role: "buyer"
})
const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const auth = useAuth()


const handleSellerSignin = async(e)=>{
    if ( input.email =="" || input.password=="" ){
         setError(true);
         return;
    }else{ 
    auth.sellerlogin(input);
    return;
    }
    
}

    return (
        <div className='text-[70%] md:text-[100%]'>
            <Productplacehome />
            <motion.div
            //   initial={{ opacity: 0.3, scale: 0.5 }}
            //   whileInView={{ opacity: 1, scale: 1 }}
            //   transition={{duration:1}}
            className='fixed inset-0 h-dvh bg-opacity-30 backdrop-blur-sm shadow-2xl bg-black flex flex-col align-middle' style={{}}>
            <div className='h-full py-32 p-5  md:p-20 flex flex-col w-full align-middle justify-center ' style={{}}>
                <div className='md:columns-2 flex gap-0 w-full h-fit justify-center self-center rounded-2xl ' style={{ backgroundColor: '#F2F2F2' }}>
                    <div className='flex flex-col w-full justify-center self-center h-full my-5'>
                        <div className='flex flex-col max-w-full max-h-full py-1  md:py-2'>
                    <div className='pt-5 pl-5 cursor-pointer md:mb-5' onClick={() => navigate('/choosesociety')} >
         <Icon icon="lets-icons:arrow-left-long-light" className='md:w-[2rem] md:h-[2rem] ' />
         </div>
                            <h3 className='md:font-md font-sm font-extrabold flex justify-center self-center text-2xl'>Welcome Back!</h3>
                            <div className='flex justify-center self-center'>
                                <div className='' style={{ height: 0.5, width: 80, backgroundColor: '#702EB2' }}></div>
                            </div>
                            <h1 className='flex justify-center self-center'>Log into Your Account</h1>
                            <div className="flex justify-center relative">
                                      <div className='flex flex-col justify-center'>
                                          <div className="bg-white rounded-3xl p-2 flex justify-between my-1">
                                              <Icon icon="devicon:google" className='mx-3 self-center' width="1.2rem" height="1.2rem" />
                                              <div className='pl-3 flex justify-center px-5 my-1'><h6 className='justify-center flex'>Continue with Google</h6></div>
                                              <div></div>
                                          </div>
                                          <div className="bg-white rounded-3xl p-2 flex justify-between my-1">
                                              <Icon icon="devicon:apple" className="mx-3 self-center" width="1.2rem" height="1.2rem" />
                                              <div className='pl-3 flex justify-center px-5 my-1 '><h6 className='justify-center flex'>Continue with Apple</h6></div>
                                              <div></div>
                                          </div>
                                      </div>
                                  </div>


                            <div className=''>
                                <div className='flex justify-center w-full px-12'>
                                    <div className='mt-3' style={{ height: 0.5, width: 200, backgroundColor: '#807979' }}></div>
                                    <div>
                                        <h6 className='mx-3'>or</h6>
                                    </div>
                                    <div className='mt-3' style={{ height: 0.5, width: 200, backgroundColor: '#807979' }}></div>
                                </div>
                            </div>

                            {error && 
                                <div className='container'>                                     
                                <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400'>All fields are required!</h5></div>
                                </div> }
                                {message && 
                                <div className='container'>                                     
                                <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400'>{message}</h5></div>
                                </div> }

                            <div className='md:px-10 px-5 '>

                                <div className='my-2 md:px-3 md:my-0'>
                                    <h5 className='font-md  text-medium'>Email Address<span style={{ color: '#D69999' }}>*</span></h5>
                                    <input  type='email' name='email' id='email' placeholder='Email' onChange={handleInput} className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                </div>

                                    <div className='w-full md:px-3'>
                                        <h5 className='font-md  text-medium'>Password<span style={{ color: '#D69999' }}>*</span></h5>
                                        <input type='password' name='password' id='password' placeholder='Password' onChange={handleInput} className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                    </div>

                                <div className='py-4 md:px-40 '>
                                        <div onClick={handleSellerSignin} className='flex justify-center self-center rounded-2xl bg-transparent border cursor-pointer' style={{ borderColor: '#702EB2' }}>
                                            <h4 className='m-1 font-semibold' style={{ color: '#702EB2' }}>Sign In</h4>
                                        </div>
                                </div>
                                <div className='flex justify-center md:mb-5'>
                                    <h4 className='pb-2  text-medium'>Don't have an account? <span onClick={()=>navigate("/signup")} className='cursor-pointer' style={{ color: '#702EB2' }}>Sign Up</span></h4>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='max-h-full w-full lg:flex hidden'>
                        <Sidecarousel />
                    </div>
                </div>
            </div>
        </motion.div>
        </div>
    )
}

export default Signinpage
