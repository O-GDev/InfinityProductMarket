import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'
import LoggedinBuyerNav from '../component/loggedinbuyernav'
import ProfilePage from '../screens/profilepage'
import History from '../screens/History'
import Wallet from '../screens/Wallet'
import Chats from '../screens/Chats'
import Notification from '../screens/Notification'
import Help from '../screens/Help'
import Suggestion from '../screens/Suggestion'
import Settings from '../screens/Settings'
import Discover from './discover'
import Saved from '../screens/Saved'



const BuyersAside = () => {
    const[childIsOpen, setChildIsOpen] = useState(false)
    const [currentUrl, setCurrentUrl] = useState('currenturl') 
    const navigate = useNavigate()
  return (
    <div className='h-full'>
        {/* <div>
            <LoggedinBuyerNav />
        </div> */}
        <div className="pt-10 h-full flex">
         <div>
               <div id='aside2' className="border-r h-full hidden md:block left-0 top-0"></div>
        <div id="aside1" className='border-r h-full hidden md:block left-0 top-0 mt-10'>
      
  <ul className="py-2 text-md pl-7 text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownUserAvatarButton">
            {/* <Link to='/myprofile'> */}
      <li className='flex my-4 dark:hover:text-white cursor-pointer' onMouseDown={() => navigate('/discovery')} onClick={() =>setCurrentUrl('profile')}>
        <Icon icon="carbon:home" className='flex self-center' />
        <a  className="block px-4 py-2 ">Discover</a>
              </li>
              <div className='pl-7 pt-7 pr-7' onMouseEnter={()=>setChildIsOpen(true)} onMouseLeave={()=>setChildIsOpen(false)}>
    <h6 className='text-center rounded-md p-2 text-white' style={{backgroundColor:'#702EB2',fontSize:'12px'}}>Upload</h6>
    {childIsOpen && 
    <div id=" " className="absolute right-16 z-10 pb-2 px-2 rounded-3xl bg-white divide-y divide-gray-100 shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
    {/* <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> */}
    <div onMouseDown={() => setPostIsOpen(true)} className='relative cursor-pointer' >
        <a className="block py-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className='flex flex-row justify-center py-2'>
                <div className="w-2 h-2 rounded-full self-center" style={{ backgroundColor: '#8248BB' }}></div>
                <div>
                    <h5 className='px-2' style={{ fontSize: '15px' }}>Post</h5>
                    <p className='px-2' style={{ fontSize: '8px' }}>Upload high Quality pixels of Products only</p>
                </div>
            </div>
        </a>
    </div>

    <div onMouseDown={() => setReelsIsOpen(true)} className='relative cursor-none' >
        <a href="#" className="block py-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className='flex flex-row justify-center py-2'>
                <div className="w-2 h-2 rounded-full self-center" style={{ backgroundColor: '#8248BB' }}></div>
                <div>
                    <h5 className='px-2' style={{ fontSize: '15px' }}>Reel</h5>
                    <p className='px-2' style={{ fontSize: '7.3px' }}>Upload high Quality pixels of Products and contents only</p>
                </div>
            </div>
        </a>
    </div>

    <div onMouseDown={() => setLiveIsOpen(true)} className='relative cursor-pointer' >
        <a href="#" className="block py-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <div className='flex flex-row justify-center py-2'>
                <div className="w-2 h-2 rounded-full self-center" style={{ backgroundColor: '#8248BB' }}></div>
                <div>
                    <h5 className='px-2' style={{ fontSize: '15px' }}>Live</h5>
                    <p className='px-2' style={{ fontSize: '8px' }}>Connect with your customers in real-time</p>
                </div>

            </div>
        </a>
    </div>

    {/* </ul> */}

</div>
              } 
  </div>
              {/* </Link> */}
              {/* <div className='mt-8'>
                <span style={{fontSize:'10px'}}>TRANSACTION</span>
              </div> */}
              <li onClick={() =>setCurrentUrl("saved")} className='flex dark:hover:text-white cursor-pointer pt-10'>
              <Icon icon="lets-icons:paper-light" className='flex self-center'/>
        <a href="#" className="block px-4 py-2">Saved</a>
      </li>
      {/* <li onClick={() => setCurrentUrl("wallet")} className='flex dark:hover:text-white cursor-pointer'>
      <Icon icon="lets-icons:wallet-light" className='flex self-center'/>
        <a href="#" className="block px-4 py-2 ">Wallet</a>
      </li> */}
              {/* <div className='mt-8'>
                <span style={{fontSize:'10px'}}>INFO</span>
              </div> */}
      {/* <li onClick={() => setCurrentUrl("chats")} className='flex dark:hover:text-white cursor-pointer'>
      <Icon icon="solar:chat-dots-outline" className='flex self-center'/>
        <a href="#" className="block px-4 py-2 ">Chats</a>
      </li>
            <li onClick={() => setCurrentUrl("notification")} className='flex dark:hover:text-white cursor-pointer'>
            <Icon icon="mage:notification-bell-pending" className='flex self-center' />
              <a href="#" className="block px-4 py-2 ">Notification</a>
             
            </li> */}
            
            {/* <div className='mt-8'>
                <span style={{fontSize:'10px'}}>ACCOUNT</span>
              </div> */}
            {/* <li className='py-2 cursor-pointer'  >
              <div >
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Switch Accounts</a>
                
              </div>
            </li> */}
            {/* <li onClick={() => setCurrentUrl("help")} className='flex cursor-pointer'>
            <Icon icon="tdesign:help-circle-filled" className='flex self-center' />
        <a href="#" className="block px-4 py-2 ">Help</a>
      </li>
      <li onClick={() => setCurrentUrl("suggestion")} className='flex dark:hover:text-white cursor-pointer'>
      <Icon icon="material-symbols-light:box" className='flex self-center' />
        <a href="#" className="block px-4 py-2 ">Suggestion Box</a>
      </li> */}
            <li onClick={() => setCurrentUrl("settings")} className='flex dark:hover:text-white mt-8 cursor-pointer'>
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
        <div className="w-full">
        {(() => {
      switch (currentUrl) {
        case 'discover':
            return <Discover   />
            case 'saved':
                return <Saved   />
                case 'settings':
                    return <Settings />
                    default:
                        return <Discover   />
      }
    })()}
        </div>
        </div>
    </div>
  )
}

export default BuyersAside