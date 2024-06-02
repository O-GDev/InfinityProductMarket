import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import {BASE_URL} from '../component/url/url'

const BuyerSignup = ({props}) => {
    const navigate = useNavigate()
    const[first_name, setFirstName] = useState('')
    const[last_name, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[cpassword,setCPassword] = useState("")
    const[error, setError] = useState(false)
    const[message, setMessage] = useState(false)
    const[data, setData] = useState("")



    const handleBuyerSignup = async(role)=>{
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
                navigate("/buyerdashboard") 
                setMessage(data.message)
            }else{
            setMessage(data.message)
        }
       
}
        
    }
  return (
    <div>
          <motion.div
              //   initial={{ opacity: 0.3, scale: 0.5 }}
              //   whileInView={{ opacity: 1, scale: 1 }}
              
              //   transition={{duration:1}}
              className='fixed inset-0 h-dvh bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl flex flex-col align-middle self-center justify-center' style={{}}>
              <div className='h-full w-full flex flex-col justify-center self-center align-middle px-5 md:px-10  md:py-10' style={{}}>
                  <div className='md:columns-2 flex w-full h-fit justify-center self-center align-middle rounded-2xl' style={{ backgroundColor: '#F2F2F2' }}>
                      <div className='flex flex-col justify-center py-10 self-center h-full w-full '>
                          <div className='w-full h-fit py-1 flex flex-col self-center justify-center'>
                              <div className='flex flex-row justify-between'>
                                  <div className='pl-4 cursor-pointer' onClick={() => navigate('/choosesociety')}>
                                      <Icon icon="iconoir:cancel" width='1.2rem' height='1.2rem' />
                                  </div>
                                  <div><span>Login</span> or <span className='underline'>Sign up</span></div>
                                  <div></div>
                              </div>
                              {/* <div className='w-full bg-black mb-4' style={{ height: '1px' }}
                                  > */}
                                  {/* </div> */}
                              <div className='md:px-16 md:py-2 px-5'>
                                {error && 
                                <div className='container'>                                     
                                <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400'>All fields are required!</h5></div>
                                </div> }
                                {message && 
                                <div className='container'>                                     
                                <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400'>{message}</h5></div>
                                </div> }
                                  <div className='md:flex justify-between md:mb-2 w-full'>
                                      <div className='w-full md:px-3'>
                                          <h5 className='font-md text-medium'>First Name<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='text' name='fName' onChange={(e) => setFirstName(e.target.value) } className='rounded-xl bg-white outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{backgroundColor:''}} />
                                      </div>
                                      <div className='w-full md:px-3  md:my-0'>
                                          <h5 className='font-md text-medium'>Surname<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='text' name='SName' onChange={(e) => setLastName(e.target.value) } className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                      </div>
                                  </div>

                                  <div className=' md:px-3 md:my-0'>
                                      <h5 className='font-md text-medium'>Email Address<span style={{ color: '#D69999' }}>*</span></h5>
                                      <input type='email' name='email' onChange={(e) => setEmail(e.target.value) } className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                  </div>

                                  <div className='md:flex justify-between'>
                                      <div className='w-full md:px-3'>
                                          <h5 className='font-md text-medium'>Password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='password' name='password' onChange={(e) => setPassword(e.target.value) } className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                      </div>
                                      <div className='w-full md:px-3 md:my-0'>
                                          <h5 className='font-md text-medium'>Confirm Password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='password' name='conpassword' onChange={(e) => setCPassword(e.target.value) } className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                      </div>
                                  </div>

                                  <div className='md:px-3'>

                                      {/* <div className=' md:pt-5 mt-2 relative flex'>
                                          <div className=' flex justify-end self-center absolute z-10 right-6'>/jadjl</div>
                                          <h5 className='font-md text-medium flex absolute z-10 md:top-2 -top-3'>Create a secure password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input name='spassword' type='password' placeholder='***********' className='rounded-xl relative bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-1 md:py-2 w-full' style={{}} />
                                      </div> */}

                                      <div className='flex flex-row justify-between text-medium ' style={{fontSize:''}}>
                                          <div style={{fontSize:'12px'}}>
                                              <h6 className='text-[90%]'>must contain at least</h6>
                                              <div className='flex flex-row'>
                                                  <h6 className='text-[90%]'>8 Characters<br />1 or more Uppercase character<br />1 or more Special character</h6>
                                              </div>
                                          </div>
                                          <div>fghj</div>
                                      </div>

                                  </div>

                                  <div className='flex justify-center self-center md:px-3 pb-2 mt-2'>
                                      <input type='checkbox' className='self-center mr-2 bg-white drop-shadow-sm border-gray-300' />
                                      <h5 className='text-[100%]'>I agree to the Terms, Condition and Privacy Policy</h5>
                                  </div>

                                  <div className='flex justify-center' >
                                      {/* <Link to='/buyerdashboard'> */}
                                          <div onClick={() => handleBuyerSignup("buyer")} className='flex justify-center self-center rounded-xl border cursor-pointer ' style={{ borderColor: '#702EB2',backgroundColor:'#702EB2' }}>
                                              <h4 className='m-1 font-semibold text-white md:mx-20 mx-8' style={{ }}>CONTINUE</h4>
                                          </div>
                                      {/* </Link> */}
                                  </div>    
                                  <div className=''>
                                  <div className='flex'>
                                      <div className='flex justify-center w-full px-2'>
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
  )
}

export default BuyerSignup
