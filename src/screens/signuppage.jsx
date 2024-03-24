import React from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';

function Signuppage() {
  return (
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm ' style={{height:'100%'}}>
      <div className='h-full p-10' style={{height:'100%'}}>
        <div className='md:columns-2 bg-white h-full'>
            <div className='flex justify-center self-center h-full'>
            <div className='w-full h-full py-5'>
                <h3 className='font-md font-bold flex justify-center self-center '>Be A Seller!</h3>
                <div className='flex justify-center self-center'>
                <div className='' style={{height:0.5,width:80,backgroundColor:'#702EB2'}}></div>
                </div>
                <h1 className='flex justify-center self-center'>Create Your Account</h1>
                <div className='flex justify-center self-center'>
                <div className='p-2 rounded-xl' style={{backgroundColor:'#B6B0C2',}}>
                    <h6 className='flex justify-center self-center text-sm'>start your free trial today</h6>
                </div>
                </div>
                <div className='flex justify-center self-center py-1'>
                <div className='flex'>
                <Icon icon="flat-color-icons:google" width='30px' height='30px' />
                <Icon icon="heroicons:cloud-20-solid" width='30px' height='30px' style={{color:'#327abd',marginLeft:5}} />
                {/* <div> <h4>+234</h4> </div> */}
                </div>
                </div>

                <div className=''>
                    <div className='flex'>
                <div className='mt-3' style={{height:0.5,width:200,backgroundColor:'#807979'}}></div>
                <div>
                <h6 className='mx-3'>or</h6>
                </div>
                <div className='mt-3' style={{height:0.5,width:200,backgroundColor:'#807979'}}></div>
                </div>
                </div>

                <div className=''>
                    <div className='flex justify-between my-2 w-full'>
                        <div className='w-full px-3'>
                            <h5 className='font-semibold'>First Name<span style={{color:'#D69999'}}>*</span></h5>
                            <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}}  />
                        </div>
                        <div className='w-full px-3'>
                        <h5 className='font-semibold'>Surname<span style={{color:'#D69999'}}>*</span></h5>
                        <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}}  />
                        </div>
                    </div>

                        <div className='my-2 px-3'>
                            <h5 className='font-semibold'>Email Address<span style={{color:'#D69999'}}>*</span></h5>
                            <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                        </div>

                    <div className='flex justify-between my-2'>
                        <div className='px-3'>
                            <h5 className='font-semibold'>Password<span style={{color:'#D69999'}}>*</span></h5>
                            <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                        </div>
                        <div className='px-3'>
                        <h5 className='font-semibold'>Confirm Password<span style={{color:'#D69999'}}>*</span></h5>
                        <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                        </div>
                    </div>

                    <div className='flex self-center px-3'>
                        <input type='checkbox' className='self-center mr-2 bg-white drop-shadow-lg border-gray-300 border-2'/>
                        <h5>I agree to the Terms, Condition and Privacy Policy</h5> 
                    </div>

                    <div className='py-6 px-10'>
                        <div className='flex justify-center self-center rounded-2xl bg-transparent border' style={{borderColor:'#702EB2'}}>
                        <h4 className='m-1 font-semibold' style={{color:'#702EB2'}}>Sign Up</h4>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <h4 className='mb-2'>Already have an account? <span style={{color:'#702EB2'}}>Log In</span></h4>
                    </div>

                </div>
                </div>
            </div>
           <div className='bg-red-900 h-full opacity-0 md:opacity-100'>
            <Sidecarousel />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Signuppage
