import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link } from 'react-router-dom';

export default function Paymentdetails(props) {
  return (
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl' style={{}}>
    <div className='h-full sm:py-10 p-5  md:p-20 flex justify-center  ' style={{}}>
        <div className='md:columns-2 flex rounded-2xl w-full h-fit self-center ' style={{ backgroundColor: '#F2F2F2' }}>
          <div className='flex flex-col justify-center self-center h-full w-full  py-5'>
         <div className='px-5'>
         <div>
                    <div className='md:pl-10 cursor-pointer' onClick={() => [props.handleClick("payment")]} >
         <Icon icon="lets-icons:arrow-left-long-light" width='2rem' height='2rem' />
         </div>            
            <h3 className='font-md font-bold flex justify-center self-center '>Be A Seller!</h3>
                  <div className='flex justify-center self-center'>
                  <div className='' style={{height:0.5,width:80,backgroundColor:'#702EB2'}}></div>
                  </div>
                  <h1 className='flex justify-center self-center'>Account Details</h1>
            </div>
  <div className="md:px-10">
  <div className='my-2 md:px-3 md:my-0 md:pt-9'>
                              <h5 className='font-md flex justify-start'>Account Number<span style={{color:'#D69999'}}>*</span></h5>
                              <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                          </div>
  
                          <div className='my-2 md:px-3 md:my-0'>
                              <h5 className='font-md flex justify-start'>Account Name<span style={{color:'#D69999'}}>*</span></h5>
                              <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                          </div>
  
                          <div className='my-2 md:px-3 md:my-0'>
                              <h5 className='font-md flex justify-start'>Bank Name<span style={{color:'#D69999'}}>*</span></h5>
                              <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                          </div>
  
                          <div className='my-2 md:px-3 md:my-0'>
                              <h5 className='font-md flex justify-start'>Card Number<span style={{color:'#D69999'}}>*</span></h5>
                              <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full' style={{}}  />
                          </div>
  
                          <div className='flex gap-3 justify-between md:my-0 w-full '>
                          <div className='w-48 md:px-3 flex flex-col'>
                              <h5 className='font-md w-full'>Expiry&nbsp; Date<span style={{color:'#D69999'}}>*</span></h5>
                              <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}}  />
                          </div>
         
                        <div className='w-48 md:px-3  md:my-0'>
                        <h5 className='font-md'>CVV<span style={{color:'#D69999'}}>*</span></h5>
                        <input name='fName' className='rounded-2xl bg-white drop-shadow-lg border-gray-300 border-2 px-2 py-1 w-full ' style={{}}  />
                        </div>
                    </div>
  </div>
      
                    </div>

<Link to='/sellerdashboard' >
<div className='flex justify-center self-center mt-8'>
<div className='p-3'style={{marginTop:0.5, color:'#702EB2',borderWidth:0.5,borderColor:'#702EB2'}}>CONTINUE</div>
</div>
</Link>
          </div>
         <div className=' w-full md:flex hidden'>
          <Sidecarousel />
         </div>
      </div>
    </div>
  </div>
  )
}
