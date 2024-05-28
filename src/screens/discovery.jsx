import React from 'react'
import LoggedinNav from '../component/loggedinnav'
import Footers from '../lilcomponents/footers'

export default function Discovery() {
  return (
    <div>
      {/* <LoggedinNav /> */}
      <div className='pt-20 '>
        <img src='/assets/nav.png' className='flex w-full' />
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-3/4 h'> 
          <div className="w-full h-full px-5">        
        <div className=' w-full h-full grid md:grid-cols-3 gap-3 ' style={{}}>
            <img src='/assets/Frame 427319447.png' className='w-full h-3/5 object-cover rounded-xl' />
          <div className='grid grid-row-none md:grid-cols-2 gap-3 w-full h-3/5 '> 
            
        <img src='/assets/Frame 427319446.png' className='object-cover rounded-sm w-full h-3/5' />
        <img src='/assets/Frame 427319446 (2).png' className='object-cover rounded-sm w-full h-3/5'/>
        <img src='/assets/Frame 427319447 (1).png' className='object-cover rounded-sm w-full h-3/5 md:col-span-2 '/>
         </div>
        <img src='/assets/Frame 427319453.png' className='object-cover rounded-xl w-full h-3/5'/>
        </div>
        <div className="w-full md:grid grid-cols-2 gap-3 -mt-72">
          <img src="/assets/Frame 427319456.png" className='object-cover' alt="" />
          <img src="/assets/Frame 427319457.png" className='object-cover' alt="" />
        </div> 
      </div>
      </div>
      </div>
      <div className='p-5'>
            <h5 className='text-center'>INFINITY PRODUCT PLACE is a recognised as a product marketing community alongside infinity service place(ISP) a service centric community<br />The two individual communities comes together
            to form a marketing system called Infinity Market Place. Created by WAJISINFINITY LTD. all right reserved</h5>
            <div className='flex flex-row self-center justify-center pt-10'>
            <h4 className='text-center font-bold'>Put your skills services to good use and earn an income. <br />Create your portfolio today on infinity service place </h4>
            <span className='p-2 rounded-xl absolute right-7 text-white font-bold' style={{backgroundColor:'#702EB2',position:'  '}}>Join ISP</span>
         
            </div>
      </div>
     
    <Footers />
    </div>
  )
}
