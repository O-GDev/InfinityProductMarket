import React, {useState, useEffect} from 'react'

const Footers = () => {
 
  return (
    <div  className="select-none relative py-4" style={{backgroundColor:'white'}}>
    <div className='columns-4'>
      <div className='p-16'>
      <h3 className='font-semibold text-lg mb-5' style={{color:'#2E0853'}}>Get In Touch</h3>
      <p>Contact Us Anytime, we are always available for you.</p>
      </div>
      <div className='p-16'>
      <h3 className='font-semibold text-lg mb-5' style={{color:'#2E0853'}}>Company Info</h3>
      <ul>
      <li>Blog</li>
      <li>About Us</li>
      <li>Services</li>
      </ul>
      </div>
      <div className='p-16'>
      <h3 className='font-semibold text-lg mb-5' style={{color:'#2E0853'}}>Features</h3>
      <ul>
      <li>Unlimited Support</li>
      <li>Chats and Calls</li>
      <li>Business Marketing</li>
      </ul>
      </div>
      <div className='p-16'>
      <h3 className='font-semibold text-lg mb-5' style={{color:'#2E0853'}}>Legal</h3>
      <ul>
      <li>Terms and Condition</li>
      <li>Privacy Policy</li>
      <li className='font-bold text-xl' style={{color:'#2E0853'}}>SIGN UP/LOG IN</li>
      </ul>
      </div>
    </div>
    <div className='flex flex-col'>
      <h2 className='flex justify-center self-center font-bold text-xl'>Subscribe to Our Newsletter</h2>
      <button className='flex justify-center self-center' style={{backgroundColor:'#c3c6c9',}}><h3 className='p-4 px-16 font-bold' style={{}}>Subscribe</h3></button>
    </div>
    <div className='flex w-full px-12' style={{justifyContent:'space-between'}}>
        <h4 className='font-semibold p-1.5' style={{color:'#2E0853'}}>WajisInfinity Ltd.</h4>
        <span style={{color:'#2E0853'}}><h4 className='font-semibold p-1.5'>Made by Wajisinfinity Ltd All Rights Reserved.</h4></span>
      </div>
    </div>
  )
}

export default Footers