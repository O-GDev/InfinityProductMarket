import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const Navmenu = ({index}) => {
  const [active, setActive] = useState(false) 
  const [isOpen, setIsOpen] = useState(false)

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
    <><div className=' bg-white '>
      <nav className='bg-white text-black'>
        <div className='flex justify-between md:px-10 px-3 py-1' style={{ justifyContent: 'space-between' }}>
          <div className='flex flex-row justify-center items-center'>
            <img src='/assets/ICON DEEP PURPLE 1.png' className='w-5 h-5' style={{  }} />
            <h3 className="font-primary font-semibold flex flex-row self-center justify-center pl-3  text-md">INFINITY MARKET PLACE</h3>
          </div>
          <div className='flex justify-center self-center lg:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen) }>
          <Icon icon="material-symbols-light:menu" style={{}} className='w-6 h-10' />
          </div>
         {isOpen &&
          <div className=' absolute right-5 bg-white rounded-md shadow-sm z-50 top-5 p-2 px-3'>
          <ul id='navbar' className="flex flex-col relative md:hidden justify-between self-center top-0 right-0">
            <li onClick={handleClick} className='relative p-5 cursor-pointer pr-10'><Link to='/'>Home</Link> </li>
            <li onClick={handleClick} className='relative p-5 cursor-pointer pr-10 ' > <Link to='/services'>Services</Link> </li>
            <li onClick={handleClick} className='relative p-5 cursor-pointer pr-10 ' >About</li>
            <li onClick={handleClick} className='relative p-5 cursor-pointer pr-10 ' >Contact Us</li>
            <li onClick={handleClick} className='relative p-5 cursor-pointer pr-10 ' >Login/Signup</li>
            </ul>
          </div>
          }
          {/* <div className=''> */}
            <ul id='navbar' className="lg:flex hidden justify-between self-center">
            <li onClick={handleClick} className='relative cursor-pointer pr-5 active'><NavLink exact to='/' activeStyle={{}}>Home</NavLink> </li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' > <NavLink activeClassName="bg-red-900" to='/services'>Services</NavLink> </li>
            <li onClick={handleClick} className='relative cursor-pointer pr-5 ' >About</li>
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
