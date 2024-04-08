import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LoggedinNav = () => {
  return (
    <><div>
      <nav>
        <div className='flex px-10 py-3 ' style={{ justifyContent: 'space-between' }}>
          <div className='flex flex-row'>
            <img src='/assets/logo.png' style={{ width: '30px', height: '30px' }} />
            <h3 className="font-primary font-semibold flex flex-row self-center justify-center">INFINITY MARKET PLACE</h3>
          </div>
          <ul className="inline justify-center self-center">
            <li className="inline px-2 font-primary font-semibold"><Link to='/'>Home</Link> </li>
            <li className="inline px-2 font-primary font-semibold"> <Link to='/services'>Services</Link> </li>
            <li className="inline px-2 font-primary font-semibold">About</li>
            <li className="inline px-2 font-primary font-semibold">Login</li>
            <li className="inline px-2 font-primary font-semibold">Contact Us</li>
            <li className="inline px-2 font-primary font-semibold p-3 rounded" style={{ backgroundColor: '#8248BB' }}>Login/Signup</li>

          </ul>
        </div>
        {/* <hr style={{height:0.0001}} ></hr> */}
      </nav>
    </div>
    <Outlet />
    </>
  )
}

export default LoggedinNav
