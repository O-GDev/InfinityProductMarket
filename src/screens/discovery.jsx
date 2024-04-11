import React from 'react'
import LoggedinNav from '../component/loggedinnav'
import Footers from '../lilcomponents/footers'

export default function Discovery() {
  return (
    <div>
      <LoggedinNav />
      <div className='pt-20 '>...</div>
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
