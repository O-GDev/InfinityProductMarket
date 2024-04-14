import React from 'react'
import LoggedinNav from '../component/loggedinnav'
import Footers from '../lilcomponents/footers'
import Cards1 from '../lilcomponents/card'

export default function Marketing() {
  return (
    <div>
    <LoggedinNav />
    <div className='pt-40'>
        <div className='flex flex-col justify-center'>
            <h4 className='text-center'>Vouchers, Promotions, Referral link all in one place.</h4>
            <h3 className='text-start p-5 font-bold text-lg text-gray-500'>Vouchers</h3>
            <div className='md:columns-3'>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
        <div>
        <h3 className='text-start p-5 font-bold text-lg text-gray-500'>Promotional features</h3>
        <p className='text-center'>Get your Products added to featured catalogues curated to showcase your products </p>
        </div>


        <div>
        <h3 className='text-start p-5 font-bold text-lg text-gray-500'>Promotion</h3>
        <div className='md:columns-2 px-20'>
        <div className='w-full p-5 h-full'>
        <div className=' h-full w-full justify-center' style={{}}>
        <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
        </div>
        </div>
        <div className='w-full h-full'>
            <input className='w-full p-3 my-2' placeholder='Product Name' />
            <textarea className='w-full my-1 border-0' placeholder='Description' />
            <input className='w-full p-3 my-1' placeholder='URL' />
            <div className='md:columns-2 gap-12 md:flex md:justify-between my-2'>
                <input className='w-full p-3' placeholder='Store Name' />
                <input className='w-full p-3' placeholder='Product Price' />
            </div>
            <input className='w-full p-3 my-1' placeholder='Card Number' />
            <input className='w-full p-3 my-1' placeholder='Per/day.' />
            <input className='w-full p-3 my-1' placeholder='Select location' />

            <div>
                <span className='flex justify-center my-3' >
                    <h3 className='p-2 px-10' style={{backgroundColor:'#8248BB',color:'white'}}>CONTINUE</h3>
                </span>
            </div>
        </div>
        </div>
            
        </div> 


        <div>
        <h3 className='text-start p-5 font-bold text-lg text-gray-500'>Referral</h3>
            <div className='md:columns-2'>
                <div className='w-full'>
                    <div className='bg-white p-5 ml-5'><h6>www.imp_referralinkurl.com</h6></div>
                </div>
                <div className='w-full'>
                    <p className='text-lg'>Get others involved by sharing your referral link invite to family and friends. Gain amazing benefits and bonuses.  </p>
                </div>
            </div>
        </div> 


        <div>
        <h3 className='text-start pt-5 pl-5 font-bold text-lg text-gray-500'>Business Affiliation</h3>
        <p className='pl-5'>Advance your business to the world. Get the course material that willl help enhance your business, becoming a success IMP </p>
            
        </div> 
    </div>
       <div className='p-5'>
            <h5 className='text-center'>INFINITY PRODUCT PLACE is a recognised as a product marketing community alongside infinity service place(ISP) a service centric community<br />The two individual communities comes together
            to form a marketing system called Infinity Market Place. Created by WAJISINFINITY LTD. all right reserved</h5>
            <div className='md:flex flex-row self-center justify-center pt-10'>
            <h4 className='text-center font-bold'>Put your skills services to good use and earn an income. <br />Create your portfolio today on infinity service place </h4>
            <span className='p-2 rounded-xl absolute right-7 text-white font-bold' style={{backgroundColor:'#702EB2',position:'  '}}>Join ISP</span>
         
            </div>
             </div>
    <Footers />
    </div>
  )
}
