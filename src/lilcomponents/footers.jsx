import React, {useState, useEffect} from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footers = () => {
 
  return (
    <div  className="select-none relative p-4 justify-center flex flex-col " style={{backgroundColor:'white'}}>
    <div className='md:columns-4 flex flex-col lg:flex-row justify-center w-full md:p-0 lg:my-20 lg:px-10'>
      <div className='lg:p-0 p-10 w-full'>
      <h3 className='font-bold text-lg mb-5 lg:text-start text-center' style={{color:'#2E0853'}}>Company Info</h3>
      <ul>
      <li className='lg:text-start font-medium py-2 text-center'>Blog</li>
      <li className='lg:text-start font-medium py-2 text-center'>About Us</li>
      <li className='lg:text-start font-medium py-2 text-center'>Services</li>
      </ul>
      <div className='hidden lg:flex flex-col justify-center self-center md:w-full h-48 '>
     <div className=' p-2 text-center lg:text-start '>Subscribe to Our Newsletter</div>
    <div className='flex justify-start flex-col'>
      <div className='flex justify-start self-start font-medium text-xl mb-2'>
        <input type="text" value="Enter your email" />
      </div>
      <button className='flex justify-center self-start ' style={{backgroundColor:'#c3c6c9',}}><h3 className='p-2 px-20 font-bold' style={{}}>Subscribe</h3></button>
    </div>
     </div>
      </div>
      <div className='lg:p-0 p-10 w-full flex flex-col'>
      <h3 className='font-bold text-lg mb-5 lg:text-start text-center' style={{color:'#2E0853'}}>Features</h3>
      <ul>
      <li className='lg:text-start font-medium py-2 text-center'>Unlimited Support</li>
      <li className='lg:text-start font-medium py-2 text-center'>Chats and Calls</li>
      <li className='lg:text-start font-medium py-2 text-center'>Business Marketing</li>
      </ul>
      {/* <div className='h-28'> */}
      <div className='hidden lg:flex flex-col w-full h-48 justify-center items-start self-start '>
    <div className='flex justify-center' style={{backgroundColor:'#2E0853'}}>
      <span className='text-md text-center flex self-center justify-center my-2 mx-4 text-white text-[100%] '>SIGN UP/LOG IN</span>
      </div>
    </div>
      {/* </div> */}
      </div>
      <div className='lg:p-0 p-10 w-full'>
      <h3 className='font-bold text-lg mb-5 lg:text-start text-center' style={{color:'#2E0853'}}>Legal</h3>
      <ul>
      <li className='lg:text-start font-medium py-2 text-center'>Terms and Condition</li>
      <li className='lg:text-start font-medium py-2 text-center'>Privacy Policy</li>
      <li className='font-bold text-xl lg:text-start py-2 text-center' style={{color:'#2E0853'}}>SIGN UP/LOG IN</li>
      </ul>
      <div className='w-full hidden lg:flex justify-center items-start self-start h-48 flex-col  '>
      <img src="/assets/CIRCULAR LOGO DEEP PURPLE 1.png" alt="" style={{width:'100px',height:'100px'}} />
    </div>
      </div>
      <div className='lg:p-0 p-10 w-full'>
      <h3 className=' text-lg mb-5  lg:text-start text-center font-bold' style={{color:'#2E0853'}}>Get In Touch</h3>
      <p  className='lg:text-start text-center font-medium py-2'>Contact Us Anytime, we are always available for you.</p>
      <div className="flex flex-row justify-center lg:justify-start py-1">
      <Icon icon="skill-icons:instagram" width='1.5rem' height='1.5rem' className='self-center mr-3'/>
      <Icon icon="devicon:twitter" width='1.5rem' height='1.5rem' className='self-center mx-3'/>
      <Icon icon="logos:google-gmail" width='2rem' height='2rem' className='self-center mx-3'/>
      <Icon icon="logos:facebook" width='2rem' height='2rem' className='self-center mx-3'/>
      <Icon icon="logos:whatsapp-icon" width='2rem' height='2rem' className='self-center mx-3'/>
      </div>
      </div>
    </div>
    <div className="justify-between px-10 lg:hidden">
    <div className='flex flex-col justify-end self-center md:w-full'>
     <div className=' p-2 text-center lg:text-start '>Subscribe to Our Newsletter</div>
    <div className='flex justify-center md:flex-row flex-col'>
      <div className='flex justify-center self-center font-medium text-xl mx-3'>
        <input type="text" value="Enter your email" />
      </div>
      <button className='flex justify-center self-center my-5' style={{backgroundColor:'#c3c6c9',}}><h3 className='p-2 px-16 font-bold' style={{}}>Subscribe</h3></button>
    </div>
     </div>
    <div className='flex mt-5 w-full justify-center lg:justify-end'>
    <div className='flex justify-center self-center px-3' style={{backgroundColor:'#2E0853'}}>
      <span className='text-md text-center flex self-center justify-center py-2 text-white'>SIGN UP/LOG IN</span>
      </div>
    </div>
    <div className='w-full flex md:hidden justify-center pt-5 '>
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