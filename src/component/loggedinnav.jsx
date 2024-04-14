import React, {useState, useEffect, useRef} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'flowbite-react'

const LoggedinNav = () => {
  const [isOpen, setIsOpen] = useState(false);

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



// const open = event.target.classList.add('hidden');
   
  return (
    <><div>
      <nav className='w-full' style={{position:'fixed',backgroundColor:'#F2F2F2'}}>
      <div className='flex px-10 py-3' style={{ justifyContent: 'space-between' }}>
        <div className='flex flex-row'>
          <img src='/assets/2 2 (1).png' style={{ width: '60px', height: '60px' }} />
          <div className='bg-white flex flex-row justify-center self-center'>
          <img src='/assets/Search.png' className='w-4 h-4 my-3 ml-5 font-bold'  />
          <input placeholder='Search for brands or categories' className='text-sm outline-none pl-1 w-52 font-sembold' /></div>
          </div>
        <ul className="inline justify-center self-center">
          <li className="inline px-5 font-primary font-semibold"><Link to='/'>Home</Link> </li>
          <li className="inline px-5 font-primary font-semibold"> <Link to='/todaydeal'>Today's Deal</Link> </li>
          <li className="inline px-5 font-primary font-semibold"><Link to='/discovery'>Discovery</Link></li>
          <li className="inline px-5 font-primary font-semibold"><Link to='/marketing'>Marketing</Link></li>
          <li className="inline px-5 font-primary font-semibold"><Link to=''>Store</Link></li>
          <li className="inline px-5 font-primary font-semibold"><Link to=''>Cart</Link></li>
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
          <li  ref={menuRef} className="inline" style={{}}> 
          <button onClick={()=>{setIsOpen(!isOpen)}} id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="border-0 rounded-full md:me-0 font-semibold text-black text center justify-center" type="button">
<span className="sr-only">Open user menu</span>         
           Adebola Makinde
<img className="inline w-8 h-8 ml-2" src="/assets/Union.png" style={{}} alt="..." />
 </button>


         </li>
         </Link>


         </ul>

         
      </div>
      
{isOpen && <div id="dropdownAvatar" className=" absolute right-10 top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
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
}
      
      <div className='absolute w-full text-white'>
    {/* <Navmenu />   */}
      <div className='' style={{fillOpacity:1,opacity:1}}>
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
      <h3 className='text-black font-semibold px-2'>Others:</h3>

    </div>
      </div>
    
    </div>  
      {/* <hr style={{height:0.0001}} ></hr> */}
    </nav>
    </div>
    <Outlet />
    </>
  )
}

export default LoggedinNav
