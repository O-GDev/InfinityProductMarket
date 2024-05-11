import React from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BuyerSignup = ({props}) => {
  return (
    <div>
          <motion.div
              //   initial={{ opacity: 0.3, scale: 0.5 }}
              //   whileInView={{ opacity: 1, scale: 1 }}
              //   transition={{duration:1}}
              className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl' style={{}}>
              <div className='h-full sm:py-10 p-5 md:p-20 ' style={{}}>
                  <div className='md:columns-2 h-full justify-center ' style={{ backgroundColor: '#F2F2F2' }}>
                      <div className=' flex flex-col justify-center md:pt-7 self-center h-full '>
                          <div className='w-full h-full py-1'>
                              <div className='flex flex-row justify-between -mt-6'>
                                  <div>
                                      <Icon icon="iconoir:cancel" width='1.2rem' height='1.2rem' />
                                  </div>
                                  <div><span>Login</span> or <span className='underline'>Sign up</span></div>
                                  <div></div>
                              </div>
                              <div className='md:px-0 px-5'>
                                  <div className='w-full bg-black mb-4' style={{ height: '1px' }}
                                  >
                                  </div>
                                  <div className='md:flex justify-between md:mb-5 w-full'>
                                      <div className='w-full md:px-3'>
                                          <h5 className='font-semibold'>First Name<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input name='fName' className='rounded-lg bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}} />
                                      </div>
                                      <div className='w-full md:px-3 my-5 md:my-0'>
                                          <h5 className='font-semibold'>Surname<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input name='fName' className='rounded-lg bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}} />
                                      </div>
                                  </div>

                                  <div className='my-5 md:px-3 md:my-0'>
                                      <h5 className='font-semibold'>Email Address<span style={{ color: '#D69999' }}>*</span></h5>
                                      <input name='fName' className='rounded-lg bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                  </div>

                                  <div className='md:flex justify-between my-5'>
                                      <div className='w-full md:px-3'>
                                          <h5 className='font-semibold'>Password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='password' name='fName' className='rounded-lg bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                      </div>
                                      <div className='w-full md:px-3 my-5 md:my-0'>
                                          <h5 className='font-semibold'>Confirm Password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input type='password' name='fName' className='rounded-lg bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
                                      </div>
                                  </div>

                                  <div className='md:px-3'>

                                      <div className=' md:pt-5 mt-5 relative flex'>
                                          <div className=' flex justify-end self-center absolute z-10 right-6'>/jadjl</div>
                                          <h5 className='font-semibold flex absolute z-10 md:top-2 -top-3'>Create a secure password<span style={{ color: '#D69999' }}>*</span></h5>
                                          <input name='fName' type='password' placeholder='***********' className='rounded-lg relative bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}} />
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
                                      <input type='checkbox' className='self-center mr-2 bg-white drop-shadow-lg border-gray-300 border-2' />
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
                                      <div className='flex justify-center w-full px-2'>
                                          <div className='mt-3' style={{ height: 0.5, width: 200, backgroundColor: '#807979' }}></div>
                                          <div>
                                              <h6 className='mx-3'>or</h6>
                                          </div>
                                          <div className='mt-3' style={{ height: 0.5, width: 200, backgroundColor: '#807979' }}></div>
                                      </div>
                                  </div>

                                  <div className="flex justify-center">

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
                      <div className='h-full opacity-0 md:opacity-100'>
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
