import React, { useState } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Outlet, Link } from 'react-router-dom'

export default function Productplacehome() {
  const[isFocused, setIsFocused] = useState('none')
  return (
    <><div style={{backgroundColor:'#F2F2F2',height:'100vh'}}>
    <nav>
      <div className='flex px-10 py-3' style={{ justifyContent: 'space-between' }}>
        <div className='flex flex-row'>
          <img src='/assets/2 2 (1).png' style={{ width: '60px', height: '60px' }} />
          <div className='bg-white flex flex-row justify-center self-center'>
          <img src='/assets/Search.png' className='w-4 h-4 my-3 ml-5 font-bold'  />
          <input placeholder='Search for brands or categories' className='text-sm outline-none pl-1 w-52 font-sembold' /></div>
          </div>
        <ul className="inline justify-center self-center">
          <li className="inline px-5 font-primary font-semibold"><Link to='/'>Home</Link> </li>
          <li className="inline px-5 font-primary font-semibold"> <Link to='/services'>Today's Deal</Link> </li>
          <li className="inline px-5 font-primary font-semibold">Discovery</li>
          <li className="inline px-5 font-primary font-semibold">Blog</li>
          <li className="inline px-5 font-primary font-semibold">Marketing</li>
          <li className="inline px-5 font-primary font-semibold">Be a seller</li>
          <li className="inline px-5 font-primary font-semibold p-3 rounded text-white" style={{ backgroundColor: '#8248BB' }}>Login/Signup</li>

        </ul>
      </div>
      {/* <hr style={{height:0.0001}} ></hr> */}
    </nav>
  </div>
  <Outlet />
  </>
    )
}
