import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Uline } from '../lilcomponents/style.styles';
import {BASE_URL} from '../component/url/url'
import BuyerBackground from './buyerbackground';

const BuyerSignin = ({props}) => {
    const navigate = useNavigate()
    const[first_name, setFirstName] = useState('')
    const[last_name, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[cpassword,setCPassword] = useState("")
    const[error, setError] = useState(false)
    const[message, setMessage] = useState(false)
    const[data, setData] = useState("")



    const handleBuyerSignin = async(role)=>{
        if ( email =="" || password=="" ){
             setError(true)
        }else{ 
            await fetch(`${BASE_URL}/logInUsers`,{
                method: 'POST',
                body: JSON.stringify({
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
                localStorage.setItem("token", JSON.stringify(data.token.access_token))
                navigate("/buyerdashboard") 
                setMessage(data.message)
            }else{
            setMessage(data.message)
        }
       
}
        
    }
    return (
        <div className='flex flex-col w-full h-full justify-center self-center align-middle'>
            <BuyerBackground />
        <div className='text-[70%] md:text-[100%]'>
              <motion.div
                  //   initial={{ opacity: 0.3, scale: 0.5 }}
                  //   whileInView={{ opacity: 1, scale: 1 }}
                  
                  //   transition={{duration:1}}
                  className='fixed inset-0 h-dvh bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl flex flex-col align-middle self-center justify-center' style={{}}>
                  <div className='h-full w-full flex flex-col justify-center self-center align-middle px-5 md:px-10  md:py-10' style={{}}>
                      <div className='md:columns-2 flex w-full h-fit justify-center self-center align-middle rounded-2xl' style={{ backgroundColor: '#F2F2F2' }}>
                          <div className='flex flex-col justify-center py-4 md:py-10 self-center h-full w-full '>
                              <div className='w-full h-fit py-1 flex flex-col self-center justify-center'>
                                  <div className='flex flex-row justify-between'>
                                      <div className='pl-4 cursor-pointer' onClick={() => navigate('/choosesociety')}>
                                          <Icon icon="iconoir:cancel" width='1.2rem' height='1.2rem' />
                                      </div>
                                      <div><span className='underline cursor-pointer' onClick={()=>navigate('/buyersignin')}>Login</span> or <span className='cursor-pointer' onClick={()=>navigate('/buyersignup')}>Sign up</span></div>
                                      <div></div>
                                  </div>
                                  {/* <div className='w-full bg-black mb-4' style={{ height: '1px' }}
                                      > */}
                                      {/* </div> */}
                                  <div className='md:px-16 md:py-2 px-5'>
                                    
                                    <div className="flex flex-col justify-center items-center self-center">
                                        <h1 className="font-extrabold text-center text-2xl">Welcome Back!</h1>
                                        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          // viewport={{ once: false, amount: 1 }}
          transition={{
            // type: "spring",
            // stiffness: 260,
            // damping: 20,
            duration: 0.6,
          }}
          className="relative"
        >
          <Uline color='#702EB2' />
        </motion.div>
        <h3 className='text-lg'>Let's Get Started</h3>
                                    </div>
                                    {error && 
                                    <div className='container'>                                     
                                    <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400 text-[70%] md:text-[100%]'>All fields are required!</h5></div>
                                    </div> }
                                    {message && 
                                    <div className='container'>                                     
                                    <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400 text-[70%] md:text-[100%]'>{message}</h5></div>
                                    </div> }
                                    <div className=' md:px-3 w-full my-7'>
                                          {/* <h5 className='font-md text-medium'>Email Address<span style={{ color: '#D69999' }}>*</span></h5> */}
                                          <input type='email' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value) } className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                      </div>
    
                                          <div className='w-full my-7 md:px-3'>
                                              {/* <h5 className='font-md text-medium'>Password<span style={{ color: '#D69999' }}>*</span></h5> */}
                                              <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value) } className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                              <p>Forgot Password?</p>
                                          </div>
    
                        
    
                                      <div className='flex justify-center pt-3' >
                                          {/* <Link to='/buyerdashboard'> */}
                                              <div onClick={() => handleBuyerSignin("buyer")} className='flex justify-center self-center rounded-xl border cursor-pointer ' style={{ borderColor: '#702EB2',backgroundColor:'#702EB2' }}>
                                                  <h4 className='m-1 font-semibold text-white md:mx-28 mx-8' style={{ }}>CONTINUE</h4>
                                              </div>
                                          {/* </Link> */}
                                      </div>    
                                      <div className=''>
                                      <div className='flex justify-center'>
                                          <div className='flex justify-center self-center px-2 w-[40%]'>
                                              <div className='mt-3' style={{ height: 0.5, width: 200, backgroundColor: '#807979' }}></div>
                                              <div>
                                                  <h6 className='mx-3'>or</h6>
                                              </div>
                                              <div className='mt-3' style={{ height: 0.5, width: 200, backgroundColor: '#807979' }}></div>
                                          </div>
                                      </div>
                                      </div>
    
                                   
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
    
                                  </div>
                              </div>
                          </div>
                          <div className='w-full lg:flex hidden'>
                              <Sidecarousel />
                          </div>
                      </div>
                  </div>
              </motion.div>
    
        </div>
        </div>
      )
    }

export default BuyerSignin
