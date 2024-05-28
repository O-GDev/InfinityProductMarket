import React, {useState, useEffect} from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footers = () => {
 
  return (
    <div  className="select-none relative py-4 sm:justify-center" style={{backgroundColor:'white'}}>
    <div className='md:columns-4 md:p-0 sm:p-40 sm:pb-0'>
      <div className='md:p-16'>
      <h3 className=' text-lg mb-5 md:text-start text-center font-bold' style={{color:'#2E0853'}}>Get In Touch</h3>
      <p  className='md:text-start text-center font-medium py-2'>Contact Us Anytime, we are always available for you.</p>
      <div className="flex flex-row justify-between px-3 py-1">
      <Icon icon="skill-icons:instagram" width='1.5rem' height='1.5rem' className='self-center'/>
      <Icon icon="devicon:twitter" width='1.5rem' height='1.5rem' className='self-center'/>
      <Icon icon="logos:google-gmail" width='2rem' height='2rem' className='self-center'/>
      <Icon icon="logos:facebook" width='2rem' height='2rem' className='self-center'/>
      <Icon icon="logos:whatsapp-icon" width='2rem' height='2rem' className='self-center'/>
      </div>
      </div>
      <div className='md:p-16 sm:p-10 sm:pb-2'>
      <h3 className='font-bold text-lg mb-5 md:text-start text-center' style={{color:'#2E0853'}}>Company Info</h3>
      <ul>
      <li className='md:text-start font-medium py-2 text-center'>Blog</li>
      <li className='md:text-start font-medium py-2 text-center'>About Us</li>
      <li className='md:text-start font-medium py-2 text-center'>Services</li>
      </ul>
      </div>
      <div className='md:p-16 sm:p-10'>
      <h3 className='font-bold text-lg mb-5 md:text-start text-center' style={{color:'#2E0853'}}>Features</h3>
      <ul>
      <li className='md:text-start font-medium py-2 text-center'>Unlimited Support</li>
      <li className='md:text-start font-medium py-2 text-center'>Chats and Calls</li>
      <li className='md:text-start font-medium py-2 text-center'>Business Marketing</li>
      </ul>
      </div>
      <div className='md:p-16 sm:p-10'>
      <h3 className='font-bold text-lg mb-5 md:text-start text-center' style={{color:'#2E0853'}}>Legal</h3>
      <ul>
      <li className='md:text-start font-medium py-2 text-center'>Terms and Condition</li>
      <li className='md:text-start font-medium py-2 text-center'>Privacy Policy</li>
      <li className='font-bold text-xl md:text-start py-2 text-center' style={{color:'#2E0853'}}>SIGN UP/LOG IN</li>
      </ul>
      </div>
    </div>
    <div className="md:flex justify-between px-10">
     <div className='flex flex-col justify-end self-center md:w-full'>
     <div className=' p-2'>Subscribe to Our Newsletter</div>
    <div className='flex sm:justify-center flex-row'>
      <div className='flex justify-center self-center font-medium text-xl mx-3'>
        <input type="text" value="Enter your email" />
      </div>
      <button className='flex justify-center self-center' style={{backgroundColor:'#c3c6c9',}}><h3 className='p-2 px-16 font-bold' style={{}}>Subscribe</h3></button>
    </div>
     </div>
    <div className='flex mt-5 w-full pl-20 justify-end'>
    <div className='flex justify-center self-center px-3' style={{backgroundColor:'#2E0853'}}>
      <span className='text-md text-center flex self-center justify-center py-2 text-white'>SIGN UP/LOG IN</span>
      </div>
    </div>
    <div className='w-full flex md:justify-center md:pl-20 sm:justify-center sm:pt-5 '>
      <img src="/assets/CIRCULAR LOGO DEEP PURPLE 1.png" alt="" style={{width:'100px',height:'100px'}} />
    </div>
    </div>
    <div className='md:flex w-full md:px-5 pt-3' style={{justifyContent:'space-between'}}>
        <h4 className='font-semibold p-1.5 text-center' style={{color:'#2E0853'}}>WajisInfinity Ltd.</h4>
        <span style={{color:'#2E0853'}}><h4 className='font-semibold p-1.5 text-center'>Made by Wajisinfinity Ltd All Rights Reserved.</h4></span>
      </div>
    </div>
  )
}

export default Footers