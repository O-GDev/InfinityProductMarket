import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navmenu = () => {
  const [active, setActive] = useState(false) 

  const handleActiveMenu=(index)=>{
    setActive(index)
    
  }
  let selectedIndex = 1;
  return (
    <><div>
      <nav>
        <div className='flex px-10 py-3' style={{ justifyContent: 'space-between' }}>
          <div className='flex flex-row'>
            <img src='/assets/logo.png' style={{ width: '30px', height: '30px' }} />
            <h3 className="font-primary font-semibold flex flex-row self-center justify-center">INFINITY MARKET PLACE</h3>
          </div>
          <ul className="inline justify-center self-center">
            <li className={selectedIndex === 1 ? "inline mx-2 font-primary font-semibold border-b" : "inline px-2 font-primary font-semibold "} style={{borderColor:'#976FBE'}} onClick={()=>handleActiveMenu(1)}><Link to='/'>Home</Link> </li>
            <li className={selectedIndex === 2 ? "inline mx-2 font-primary font-semibold border-b" : "inline px-2 font-primary font-semibold "} style={{borderColor:'#976FBE'}} onClick={()=>handleActiveMenu(2)}> <Link to='/services'>Services</Link> </li>
            <li className={selectedIndex === 3 ? "inline mx-2 font-primary font-semibold border-b" : "inline px-2 font-primary font-semibold "} style={{borderColor:'#976FBE'}} onClick={()=>handleActiveMenu(3)}>About</li>
            <li className={selectedIndex === 4 ? "inline mx-2 font-primary font-semibold border-b" : "inline px-2 font-primary font-semibold "} style={{borderColor:'#976FBE'}} onClick={()=>handleActiveMenu(4)}>Login</li>
            <li className={selectedIndex === 5 ? "inline mx-2 font-primary font-semibold border-b" : "inline px-2 font-primary font-semibold "} style={{borderColor:'#976FBE'}} onClick={()=>handleActiveMenu(5)}>Contact Us</li>
            <li className="inline px-2 font-primary font-semibold p-3 rounded" onClick={()=>handleActiveMenu(6)} style={{ backgroundColor: '#8248BB' }}>Login/Signup</li>

          </ul>
        </div>
        {/* <hr style={{height:0.0001}} ></hr> */}
      </nav>
    </div>
    <Outlet />
    </>
  )
}

export default Navmenu
