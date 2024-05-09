import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navmenu = ({index}) => {
  const [active, setActive] = useState(false) 

  let nqv = [
    {
      "name": "Home",
      "link": "/"
    },
    {
      "name": "Services",
      "link": "/services"
    },
    {
      "name": "About",
      "link": "/"
    },
    {
      "name": "Contact Us",
      "link": "/"
    },

  ]


  const handleActiveMenu=(index)=>{
    setActive(index)
    
  }
  let selectedIndex = 0;
  // const handleClick = event => event.target.classList.add('active');
  const handleClick = (e) => {
    // if (index == )
    const activeNav = document.querySelectorAll("li");

    activeNav.forEach(activenav => {
      activenav.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove('active');
        activenav.classList.add('active')
      })
    })
  }
  return (
    <><div className='hidden md:inline'>
      <nav>
        <div className='flex px-10 py-3' style={{ justifyContent: 'space-between' }}>
          <div className='flex flex-row'>
            <img src='/assets/logo.png' style={{ width: '30px', height: '30px' }} />
            <h3 className="font-primary font-semibold flex flex-row self-center justify-center">INFINITY MARKET PLACE</h3>
          </div>
          {/* <div className=''> */}
            <ul id='navbar' className="flex justify-between self-center">
            <li onClick={handleClick} className='relative cursor-pointer pr-5 active'><Link to='/'>Home</Link> </li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' > <Link to='/services'>Services</Link> </li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' >About</li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' >Login</li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' >Contact Us</li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' >Login/Signup</li>
            </ul>
         </div>
        {/* </div> */}
        {/* <hr style={{height:0.0001}} ></hr> */}
      </nav>
    </div>
    <Outlet />
    </>
  )
}

export default Navmenu
