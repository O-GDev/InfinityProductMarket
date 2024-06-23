import React, {useState, useEffect, useRef} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'

const LoggedinNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [childIsOpen, setChildIsOpen] = useState(false);
  const [active, setActive] = useState(1) 

  const navigate = useNavigate()


  let menuRef = useRef()

  useEffect(()=>{
    let handler = (e) =>{
      if (e.target){
        setIsOpen(false)
      }
    };
    document.addEventListener("mousedown", handler);
}
  )
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  const handleClick = (e) => {
    const activeNav = document.querySelectorAll("li");

    activeNav.forEach(activenav => {
      activenav.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove('active');
        activenav.classList.add('active')
      })
    })
  }
  const logout = () =>{
    localStorage.removeItem("token")
    navigate('/')
  }

// const open = event.target.classList.add('hidden');
   
  return (
    <><div>
      <nav className='w-full z-50 bg-white shadow' style={{position:'fixed'}}>
      <div className='flex px-10 py-2 ' style={{ justifyContent: 'space-between' }}>
        <div className='flex flex-row justify-center'>
          <img src='/assets/ICON DEEP PURPLE 1.png' className='self-center' style={{ width: '30px', height: '30px' }} />
          <h6 className='hidden md:block self-center pl-4 capitalize text-semibold'>Infinity Market Place</h6>
          </div> 
          <div>            
          <div className='bg-white rounded-md hidden lg:flex flex-row justify-center self-center ml-3' style={{width:'450px'}}>
          <img src='/assets/Search.png' className='w-4 h-4 my-2 ml-5 font-bold'  />
          <input placeholder='Search for brands or categories' className='text-sm outline-none pl-1 w-full font-sembold rounded-md' /></div>
          </div>
          <ul id='navbar' className="flex items-center justify-between">
          <li className="relative pr-5 font-primary font-semibold active"  onClick={handleClick}><Link to='/sellerdashboard'>Store</Link> </li>
         
           <li className='inline pr-2 font-primary font-semibold'>  
             {/* {sellername} */}
             </li>
              {/* <li ref={menuRef} className="inline" style={{}}>  */}
          <button ref={menuRef} onClick={()=>{setIsOpen(!isOpen)}} id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="border-0 rounded-full md:me-0 font-semibold text-black text center justify-center" type="button">
<span className="sr-only">Open user menu</span>         
           Adebola Makinde
<img className="inline w-8 h-8 ml-2" src="/assets/Union.png" style={{}} alt="..." />
 </button>
 {isOpen && <div id="dropdownAvatar" className=" rounded-3xl absolute right-16 top-10 z-10  bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            {/* <Link to='/myprofile'> */}
      <li className='py-2' onMouseDown={()=>navigate('/sellersprofile')}>
        <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
              </li>
              {/* </Link> */}
      <li className='py-2'>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upgrade Plan</a>
      </li>
      <li className='py-2'>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chats</a>
            </li>
            <li className='py-2'>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Notification</a>
              {childIsOpen && <div id="dropdownAvatar" onMouseEnter={() => setChildIsOpen(true)} onMouseLeave={() => setChildIsOpen(false)} className=" absolute right-44 z-10 mr-1 bg-white divide-y divide-gray-400 rounded-2xl shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                style={{ width: '250px' }}>
                <div className="py-3 text-sm text-gray-900 dark:text-white">
                  <div className="px-4">
                    <div>Switch Accounts</div>
                    <div className="" style={{ fontSize: 10 }}>All accounts in one place</div>
                  </div>
                  <div className='text-align text-center w-full font-semibold ' style={{ fontSize: 13 }}>Infinity Product Place</div>
                  <li className='py-1 px-4' style={{ fontSize: 12 }}>
                    {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> */}
                    Selling.thrifts@imp.com
                    {/* </a> */}
                  </li>
                </div>
                <ul className="py-2 text-sm text-gray-900 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                  <div className='text-align text-center w-full font-semibold ' style={{ fontSize: 13 }}>Infinity Service Place</div>
                  <li className='py-1' style={{ fontSize: 12 }}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Adeolaui.uxisp@imp.com</a>
                  </li>
                  <li className='py-1' style={{ fontSize: 12 }}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">wajisbusinessisp@imp.com</a>
                  </li>
                </ul>
              </div>
              } 
            </li>
            
            <li className='py-2 cursor-pointer' onMouseEnter={()=>setChildIsOpen(true)} onMouseLeave={()=>setChildIsOpen(false)} >
              <div >
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Switch Accounts</a>
                
              </div>
            </li>
            <li className='py-2' onMouseDown={() => logout()}>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log out</a>
            </li>
    </ul>
</div>
}

         {/* </li> */}


         </ul>

         
      </div>
      

        {/* {isOpen && <div id="dropdownAvatar" className=" absolute right-10 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div class="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
        </div>
        }    */}
     
      {/* <hr style={{height:0.0001}} ></hr> */}
    </nav>
    </div>
    <Outlet />
    </>
  )
}

export default LoggedinNav
