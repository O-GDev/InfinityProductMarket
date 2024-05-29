import React from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BuyerSignup = ({props}) => {
    const navigate = useNavigate()
  return (
    <div>
          <motion.div
              //   initial={{ opacity: 0.3, scale: 0.5 }}
              //   whileInView={{ opacity: 1, scale: 1 }}
              //   transition={{duration:1}}
              className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl' style={{}}>
              <div className='h-full sm:py-10 p-5 md:p-20 flex justify-center align-middle ' style={{}}>
                  <div className='md:columns-2 flex w-full h-fit justify-center self-center align-middle rounded-2xl' style={{ backgroundColor: '#F2F2F2' }}>
                      <div className=' flex flex-col justify-center md:py-5 self-center h-fit w-full '>
                          <div className='w-full h-full py-1'>
                              <div className='flex flex-row justify-between '>
                                  <div className='pl-4 cursor-pointer' onClick={() => navigate('/choosesociety')}>
                                      <Icon icon="iconoir:cancel" width='1.2rem' height='1.2rem' />
                                  </div>
                                  <div><span>Login</span> or <span className='underline'>Sign up</span></div>
                                  <div></div>
                              </div>
                              {/* <div className='w-full bg-black mb-4' style={{ height: '1px' }}
                                  > */}
                                  {/* </div> */}
                              <div className='md:px-16 md:py-4 pb-20 px-5'>
                                  <div className='md:flex justify-between md:mb-2 w-full'>
                                      <div className='w-full md:px-3'>
                                          <h5 className='font-medium'>First Name<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='text' name='fName' className='rounded-xl bg-white outline-none border-gray-300 px-2 py-2 w-full ' style={{backgroundColor:''}} />
                                      </div>
                                      <div className='w-full md:px-3 my-2 md:my-0'>
                                          <h5 className='font-medium'>Surname<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='text' name='SName' className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-2 w-full ' style={{}} />
                                      </div>
                                  </div>

                                  <div className='my-2 md:px-3 md:my-0'>
                                      <h5 className='font-medium'>Email Address<span style={{ color: '#D69999' }}>*</span></h5>
                                      <input type='email' name='email' className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-2 w-full' style={{}} />
                                  </div>

                                  <div className='md:flex justify-between my-2'>
                                      <div className='w-full md:px-3'>
                                          <h5 className='font-medium'>Password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='password' name='password' className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-2 w-full' style={{}} />
                                      </div>
                                      <div className='w-full md:px-3 my-5 md:my-0'>
                                          <h5 className='font-medium'>Confirm Password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='password' name='conpassword' className='rounded-xl bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-2 w-full' style={{}} />
                                      </div>
                                  </div>

                                  <div className='md:px-3'>

                                      <div className=' md:pt-5 mt-2 relative flex'>
                                          <div className=' flex justify-end self-center absolute z-10 right-6'>/jadjl</div>
                                          <h5 className='font-medium flex absolute z-10 md:top-2 -top-3'>Create a secure password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input name='spassword' type='password' placeholder='***********' className='rounded-xl relative bg-white drop-shadow-sm outline-none border-gray-300 px-2 py-2 w-full' style={{}} />
                                      </div>

                                      <div className='flex flex-row justify-between'>
                                          <div style={{fontSize:'12px'}}>
                                              <h6>must contain at least</h6>
                                              <div className='flex flex-row'>
                                                  <h6>8 Characters<br />1 or more Uppercase character<br />1 or more Special character</h6>
                                              </div>
                                          </div>
                                          <div>fghj</div>
                                      </div>

                                  </div>

                                  <div className='flex justify-center self-center md:px-3 pb-2 mt-2'>
                                      <input type='checkbox' className='self-center mr-2 bg-white drop-shadow-sm border-gray-300' />
                                      <h5 className='text-sm'>I agree to the Terms, Condition and Privacy Policy</h5>
                                  </div>

                                  <div className='flex justify-center' >
                                      <Link to='/buyerdashboard'>
                                          <div className='flex justify-center self-center rounded-xl border w-80' style={{ borderColor: '#702EB2',backgroundColor:'#702EB2' }}>
                                              <h4 className='m-1 font-semibold text-white ' style={{ }}>CONTINUE</h4>
                                          </div>
                                      </Link>
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
                                          <div className="bg-white rounded-3xl p-2 flex justify-between my-1 w-80">
                                              <div><Icon icon="devicon:google" width="1.2rem" height="1.2rem" /></div>
                                              <div className='pl-3 flex justify-center'><h6 className='justify-center flex'>Continue with Google</h6></div>
                                              <div></div>
                                          </div>
                                          <div className="bg-white rounded-3xl p-2 flex justify-between my-1 w-80">
                                              <div><Icon icon="devicon:apple" width="1.2rem" height="1.2rem" /></div>
                                              <div className='pl-3 flex justify-center'><h6 className='justify-center flex'>Continue with Apple</h6></div>
                                              <div></div>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                      <div className='w-full md:flex hidden'>
                          <Sidecarousel />
                      </div>
                  </div>
              </div>
          </motion.div>
          )

    </div>
  )
}

export default BuyerSignup
