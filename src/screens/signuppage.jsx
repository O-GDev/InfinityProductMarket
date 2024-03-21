import React from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';

function Signuppage() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm '>
      <div className='px-24 p-10 h-1/3'>
        <div className='columns-2 bg-white mx-14 mb-10'>
            <div className='flex justify-center self-center'>
            <div className='flex-col justify-center self-center pt-5'>
                <h3 className='font-md font-bold flex justify-center self-center'>Be A Seller!</h3>
                <div className='flex justify-center self-center'>
                <div className='' style={{height:0.5,width:80,backgroundColor:'#702EB2'}}></div>
                </div>
                <h1 className='flex justify-center self-center'>Create Your Account</h1>
                <div className='flex justify-center self-center'>
                <div className='p-2 rounded-xl' style={{backgroundColor:'#B6B0C2',}}>
                    <h6 className='flex justify-center self-center text-sm'>start your free trial today</h6>
                </div>
                </div>
                <div className='flex justify-center self-center py-2'>
                <div className='flex'>
                <Icon icon="flat-color-icons:google" width='30px' height='30px' />
                <Icon icon="heroicons:cloud-20-solid" width='30px' height='30px' style={{color:'#327abd',marginLeft:5}} />
                {/* <div> <h4>+234</h4> </div> */}
                </div>
                </div>

                <div>
                    <div className='flex'>
                <div className='mt-3' style={{height:0.5,width:200,backgroundColor:'#807979'}}></div>
                <div>
                <h6 className='mx-3'>or</h6>
                </div>
                <div className='mt-3' style={{height:0.5,width:200,backgroundColor:'#807979'}}></div>
                </div>
                </div>

                <div>
                    <div className='flex justify-between my-5'>
                        <div>
                            <h5 className='font-semibold'>First Name<span style={{color:'#D69999'}}>*</span></h5>
                            <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1' style={{}}  />
                        </div>
                        <div>
                        <h5 className='font-semibold'>Surname<span style={{color:'#D69999'}}>*</span></h5>
                        <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1' style={{}}  />
                        </div>
                    </div>

                        <div className='my-5'>
                            <h5 className='font-semibold'>Email Address<span style={{color:'#D69999'}}>*</span></h5>
                            <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                        </div>

                    <div className='flex justify-between my-5'>
                        <div>
                            <h5 className='font-semibold'>Password<span style={{color:'#D69999'}}>*</span></h5>
                            <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1' style={{}}  />
                        </div>
                        <div>
                        <h5 className='font-semibold'>Confirm Password<span style={{color:'#D69999'}}>*</span></h5>
                        <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1' style={{}}  />
                        </div>
                    </div>

                    <div className='flex self-center'>
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
            <div className='flex flex-col text-white font-semibold' style={{flex:1,backgroundImage:"url('/assets/businessman-working-tablet 1.png')", width:'40vw', height:'42vw'}}>
                <div className='flex justify-center h-full text-white font-semibold'>
               <h4 className='self-center text-center text-lg'>Join Adekunle and other sellers <br />at <span className='font-bold' style={{color:'#702EB2'}}> INFINITY PRODUCT PLACE </span>'IPP'</h4>
               </div>
               <div className='flex justify-end mr-1'>
                <h4 className='flex  '>Clothing Brand Owner</h4>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signuppage
