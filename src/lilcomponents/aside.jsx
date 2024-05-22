import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'



const Aside = () => {
    const[childIsOpen, setChildIsOpen] = useState(false)
    const navigate = useNavigate()
  return (
    <div>
        <div id="aside1" className='border-r'>
        <div className='pl-7 pt-7 pr-7' onMouseEnter={()=>setChildIsOpen(true)} onMouseLeave={()=>setChildIsOpen(false)}>
    <h6 className='text-center rounded-md p-2 text-white' style={{backgroundColor:'#702EB2',fontSize:'12px'}}>Switch Accounts</h6>
    {childIsOpen && <div id="dropdownAvatar" onMouseEnter={() => setChildIsOpen(true)} onMouseLeave={() => setChildIsOpen(false)} className=" absolute left-30 z-10 bg-white divide-y divide-gray-400 rounded-2xl shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
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
  <ul className="py-2 text-sm pl-7 text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownUserAvatarButton">
            {/* <Link to='/myprofile'> */}
      <li className='flex my-4 dark:hover:text-white cursor-pointer' onMouseDown={() => navigate('/myprofile')}>
        <Icon icon="carbon:home" className='flex self-center' />
        <a  className="block px-4 py-2 ">Profile</a>
              </li>
              {/* </Link> */}
              <div className='mt-8'>
                <span style={{fontSize:'10px'}}>TRANSACTION</span>
              </div>
              <li className='flex dark:hover:text-white cursor-pointer'>
              <Icon icon="lets-icons:paper-light" className='flex self-center'/>
        <a href="#" className="block px-4 py-2">History</a>
      </li>
      <li className='flex dark:hover:text-white cursor-pointer'>
      <Icon icon="lets-icons:wallet-light" className='flex self-center'/>
        <a href="#" className="block px-4 py-2 ">Wallet</a>
      </li>
              <div className='mt-8'>
                <span style={{fontSize:'10px'}}>INFO</span>
              </div>
      <li className='flex dark:hover:text-white cursor-pointer'>
      <Icon icon="solar:chat-dots-outline" className='flex self-center'/>
        <a href="#" className="block px-4 py-2 ">Chats</a>
      </li>
            <li className='flex dark:hover:text-white cursor-pointer'>
            <Icon icon="mage:notification-bell-pending" className='flex self-center' />
              <a href="#" className="block px-4 py-2 ">Notification</a>
             
            </li>
            
            <div className='mt-8'>
                <span style={{fontSize:'10px'}}>ACCOUNT</span>
              </div>
            {/* <li className='py-2 cursor-pointer'  >
              <div >
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Switch Accounts</a>
                
              </div>
            </li> */}
            <li className='flex cursor-pointer'>
            <Icon icon="tdesign:help-circle-filled" className='flex self-center' />
        <a href="#" className="block px-4 py-2 ">Help</a>
      </li>
      <li className='flex dark:hover:text-white cursor-pointer'>
      <Icon icon="material-symbols-light:box" className='flex self-center' />
        <a href="#" className="block px-4 py-2 ">Suggestion Box</a>
      </li>
            <li className='flex dark:hover:text-white mt-8 cursor-pointer'>
            <Icon icon="quill:cog" className='flex self-center' />
              <a href="#" className="block px-4 py-2 ">Settings</a>
            </li>
            <li className='flex dark:hover:text-white cursor-pointer'>
            <Icon icon="solar:logout-2-outline" className='flex self-center'/>
              <a href="#" className="block px-4 py-2 ">Log out</a>
            </li>
    </ul>
        </div>
    </div>
  )
}

export default Aside