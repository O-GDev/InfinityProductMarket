import React, {useState, useEffect, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'

const LoggedinBuyerNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [childIsOpen, setChildIsOpen] = useState(false);
  const [active, setActive] = useState(0) ;
  const navigate = useNavigate()


  let menuRef = useRef()

  const nav = [
    {
      "label":"Home",
      "link":"/",
    },
    {
      "label":"Today's Deal",
      "link":"/todaydeal",
    },
    {
      "label":"Discovery",
      "link":"/discovery"
    },
    {
      "label":"Marketing",
      "link":"/marketing"
    }
  ]
  
          {/* <li className="relative pr-5 font-primary font-semibold " > <Link to='/todaydeal' onClick={handleClick}>Today's Deal</Link> </li>
          <li className="relative pr-5 font-primary font-semibold " onClick={handleClick}><Link to='/discovery'>Discovery</Link></li>
          <li className="relative pr-5 font-primary font-semibold " onClick={handleClick}><Link to='/marketing'>Marketing</Link></li> */}
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

// const open = event.target.classList.add('hidden');
   
  return (
    <><div>
      <nav className='w-full z-50 bg-white border-b' style={{position:'fixed',}}>
      <div className='flex px-10 py-2 ' style={{ justifyContent: 'space-between' }}>
        <div className='flex flex-row justify-center'>
          <img src='/assets/ICON DEEP PURPLE 1.png' className='self-center' style={{ width: '30px', height: '30px' }} />
          <h6 className='self-center pl-4 capitalize text-semibold'>Infinity Market Place</h6>
          </div> 
          <div>            
          <div className='bg-white rounded-md flex flex-row justify-center self-center ml-3' style={{width:'450px'}}>
          <img src='/assets/Search.png' className='w-4 h-4 my-2 ml-5 font-bold'  />
          <input placeholder='Search for brands or categories' className='text-sm outline-none pl-1 w-full font-sembold rounded-md' /></div>
          </div>
          <ul id='navbar' className="flex items-center justify-between">{nav.map((nav, index) => (
          <li className={active ? "relative pr-5 font-primary font-semibold active" : "relative pr-5 font-primary font-semibold"} ><Link to={nav.link} onClick={() => setActive(index) }>{nav.label}</Link> </li>
          ))}
          {/* <li className="relative pr-5 font-primary font-semibold " > <Link to='/todaydeal' onClick={handleClick}>Today's Deal</Link> </li>
          <li className="relative pr-5 font-primary font-semibold " onClick={handleClick}><Link to='/discovery'>Discovery</Link></li>
          <li className="relative pr-5 font-primary font-semibold " onClick={handleClick}><Link to='/marketing'>Marketing</Link></li> */}
          {/* <li className="relative pr-5 font-primary font-semibold " onClick={handleClick}><Link to=''>Store</Link></li>
          <li className="relative font-primary font-semibold " onClick={handleClick}><Link to=''>Cart</Link></li> */}
          {/* <li className='inline px-5 font-primary font-semibold'><Link to=''>
          <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
<span className="sr-only">Open user menu</span>
<img className="w-8 h-8 rounded-full" src="" alt="user photo" />
 </button>
 </Link>
          
</li> */}

{/* <!-- Dropdown menu --> */}


          <Link to=''> <li className='inline pl-5 pr-2 font-primary font-semibold'>  
             {/* {sellername} */}
             </li>
              <li ref={menuRef} className="inline" style={{}}> 
          <button onClick={()=>{setIsOpen(!isOpen)}} id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="border-0 rounded-full md:me-0 font-semibold text-black text center justify-center" type="button">
<span className="sr-only">Open user menu</span>         
           Adebola Makinde
<img className="inline w-8 h-8 ml-2" src="/assets/Union.png" style={{}} alt="..." />
 </button>
 {isOpen && <div id="dropdownAvatar" className=" rounded-md absolute right-16 top-10 z-10  bg-white divide-y divide-gray-100 shadow w-60 dark:bg-gray-700 dark:divide-gray-600">
 <div className="">
 <div className='pl-7 pt-7 pr-7' onMouseEnter={()=>setChildIsOpen(true)} onMouseLeave={()=>setChildIsOpen(false)}>
    <h6 className='text-center rounded-md p-2 text-white' style={{backgroundColor:'#702EB2',fontSize:'12px'}}>Switch Accounts</h6>
    {childIsOpen && <div id="dropdownAvatar" onMouseEnter={() => setChildIsOpen(true)} onMouseLeave={() => setChildIsOpen(false)} className=" absolute right-60 z-10 bg-white divide-y divide-gray-400 rounded-2xl shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
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
  </div>
          <ul className="py-2 text-sm pl-7 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            {/* <Link to='/myprofile'> */}
      <li className='flex dark:hover:text-white' onMouseDown={() => navigate('/myprofile')}>
        <Icon icon="carbon:home" className='flex self-center' />
        <a  className="block px-4 py-2 ">Profile</a>
              </li>
              {/* </Link> */}
              <div>
                <span style={{fontSize:'10px'}}>TRANSACTION</span>
              </div>
              <li className='flex dark:hover:text-white'>
              <Icon icon="lets-icons:paper-light" className='flex self-center'/>
        <a href="#" className="block px-4 py-2">History</a>
      </li>
      <li className='flex dark:hover:text-white'>
      <Icon icon="lets-icons:wallet-light" className='flex self-center'/>
        <a href="#" className="block px-4 py-2 ">Wallet</a>
      </li>
              <div>
                <span style={{fontSize:'10px'}}>INFO</span>
              </div>
      <li className='flex dark:hover:text-white'>
      <Icon icon="solar:chat-dots-outline" className='flex self-center'/>
        <a href="#" className="block px-4 py-2 ">Chats</a>
      </li>
            <li className='flex dark:hover:text-white'>
            <Icon icon="mage:notification-bell-pending" className='flex self-center' />
              <a href="#" className="block px-4 py-2 ">Notification</a>
             
            </li>
            
            <div>
                <span style={{fontSize:'10px'}}>ACCOUNT</span>
              </div>
            {/* <li className='py-2 cursor-pointer'  >
              <div >
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Switch Accounts</a>
                
              </div>
            </li> */}
            <li className='flex'>
            <Icon icon="tdesign:help-circle-filled" className='flex self-center' />
        <a href="#" className="block px-4 py-2 ">Help</a>
      </li>
      <li className='flex dark:hover:text-white'>
      <Icon icon="material-symbols-light:box" className='flex self-center' />
        <a href="#" className="block px-4 py-2 ">Suggestion Box</a>
      </li>
            <li className='flex dark:hover:text-white'>
            <Icon icon="quill:cog" className='flex self-center' />
              <a href="#" className="block px-4 py-2 ">Settings</a>
            </li>
            <li className='flex dark:hover:text-white'>
            <Icon icon="solar:logout-2-outline" className='flex self-center'/>
              <a href="#" className="block px-4 py-2 ">Log out</a>
            </li>
    </ul>
 </div>
</div>
}

         </li>
         </Link>


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
      <div className='absolute w-full text-white'>
    {/* <Navmenu />   */}
      {/* <div className='' style={{fillOpacity:1,opacity:1}}>
      <div className='flex flex-row justify-center opacity-65 p-3 mx-36 shadow-outline' style={{backgroundColor:'#F2F2F2'}}>
      <h3 className='text-black font-semibold px-2'>Top Tags:</h3>
      <h3 className='text-black font-semibold px-2'>Gadgets</h3>
      <h3 className='text-black font-semibold px-2'>Clothing/Wears</h3>
      <h3 className='text-black font-semibold px-2'>Appliances</h3>
      <h3 className='text-black font-semibold px-2'>Cars</h3>
      <h3 className='text-black font-semibold px-2'>Electronics</h3>
      <h3 className='text-black font-semibold px-2'>Face Products</h3>
      <h3 className='text-black font-semibold px-2'>Funiture</h3>
      <h3 className='text-black font-semibold px-2'>Automobile</h3>
      <h3 className='text-black font-semibold px-2'>Cosmetics</h3>
      <h3 className='text-black font-semibold px-2'>Others:</h3> */}

    {/* </div> */}
      {/* </div> */}
    
    </div>  
      {/* <hr style={{height:0.0001}} ></hr> */}
    </nav>
    </div>
    {/* <Outlet /> */}
    </>
  )
}

export default LoggedinBuyerNav
