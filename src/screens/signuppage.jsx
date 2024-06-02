import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {BASE_URL} from '../component/url/url'
import Productplacehome from './productplacehome';



function Signuppage(props) {
    const navigate = useNavigate()    
    const[first_name, setFirstName] = useState('')
    const[last_name, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[cpassword,setCPassword] = useState("")
    const[error, setError] = useState(false)
    const[message, setMessage] = useState(false)
    const[data, setData] = useState("")


    const handleSellerSignup = async(role)=>{
        if (first_name == "" || last_name =="" || email =="" || password=="" || cpassword==""){
             setError(true)
        }else{ 
            await fetch(`${BASE_URL}/registration`,{
                method: 'POST',
                body: JSON.stringify({
                    "first_name":first_name,
                    "last_name":last_name,
                    "email":email,
                    "password":password,
                    "role":role
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res => res.json())
            .then(data => setData(data))
            setError(false)
            console.log(data)
            if(data.status == 200 ){
                navigate("/subscribe")
                setMessage(data.message)
            }else{
            setMessage(data.message)
        }
       
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
                    <div className='flex flex-col w-full justify-center self-center h-full'>
                        <div className='flex flex-col max-w-full max-h-full py-1  md:py-2'>
                    <div className='pt-5 pl-5 cursor-pointer' onClick={() => navigate('/choosesociety')} >
         <Icon icon="lets-icons:arrow-left-long-light" className='md:w-[2rem] md:h-[2rem] ' />
         </div>
                            <h3 className='md:font-md font-sm font-bold flex justify-center self-center '>Be A Seller!</h3>
                            <div className='flex justify-center self-center'>
                                <div className='' style={{ height: 0.5, width: 80, backgroundColor: '#702EB2' }}></div>
                            </div>
                            <h1 className='flex justify-center self-center'>Create Your Account</h1>
                            <div className='flex justify-center self-center'>
                                <div className='p-2 rounded-xl' style={{ backgroundColor: '#B6B0C2', }}>
                                    <h6 className='flex justify-center self-center text-[70%]'>start your free trial today</h6>
                                </div>
                            </div>
                            <div className='flex justify-center self-center py-1'>
                                <div className='flex'>
                                    <Icon icon="flat-color-icons:google" width='20px' height='20px' />
                                    <Icon icon="heroicons:cloud-20-solid" width='20px' height='20px' style={{ color: '#327abd', marginLeft: 5 }} />
                                    {/* <div> <h4>+234</h4> </div> */}
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
                                <div className='md:flex justify-between md:my-2 max-w-full'>
                                    <div className='w-full md:px-3'>
                                        <h5 className='font-md  text-medium'>First Name<span style={{ color: '#D69999' }}>*</span></h5>
                                        <input name='fName' onChange={(e) => setFirstName(e.target.value) } className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}} />
                                    </div>
                                    <div className='w-full md:px-3 my-2 md:my-0'>
                                        <h5 className='font-md  text-medium'>Surname<span style={{ color: '#D69999' }}>*</span></h5>
                                        <input name='fName' onChange={(e) => setLastName(e.target.value) } className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}} />
                                    </div>
                                </div>

                                <div className='my-2 md:px-3 md:my-0'>
                                    <h5 className='font-md  text-medium'>Email Address<span style={{ color: '#D69999' }}>*</span></h5>
                                    <input name='fName' onChange={(e) => setEmail(e.target.value) } className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                </div>

                                <div className='md:flex justify-between my-2 max-w-full'>
                                    <div className='w-full md:px-3'>
                                        <h5 className='font-md  text-medium'>Password<span style={{ color: '#D69999' }}>*</span></h5>
                                        <input name='fName' onChange={(e) => setPassword(e.target.value) } className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                    </div>
                                    <div className='w-full md:px-3 my-2 md:my-0'>
                                        <h5 className='font-md  text-medium'>Confirm Password<span style={{ color: '#D69999' }}>*</span></h5>
                                        <input name='fName' onChange={(e) => setCPassword(e.target.value) } className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                    </div>
                                </div>

                                <div className='flex self-center md:px-3'>
                                    <input type='checkbox' className='self-center mr-2 bg-white drop-shadow-lg border-gray-300 border-2' />
                                    <h5 className=' text-medium'>I agree to the Terms, Condition and Privacy Policy</h5>
                                </div>

                                <div className='py-4 md:px-40 '>
                                    <Link>
                                        <div onClick={() => handleSellerSignup("seller")} className='flex justify-center self-center rounded-2xl bg-transparent border' style={{ borderColor: '#702EB2' }}>
                                            <h4 className='m-1 font-semibold' style={{ color: '#702EB2' }}>Sign Up</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='flex justify-center'>
                                    <h4 className='pb-2  text-medium'>Already have an account? <span style={{ color: '#702EB2' }}>Log In</span></h4>
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

export default Signuppage
