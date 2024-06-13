import React from 'react'
import LoggedinBuyerNav from '../component/loggedinbuyernav'
// import {Swiper, SwiperSlide} from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import {EffectCoverflow, Pagination, Navigation} from 'swiper'

import Cards1 from '../lilcomponents/card'
import Footers from '../lilcomponents/footers'

export const Todaydeal = () => {
  return (
    <div className=''>
    {/* <LoggedinBuyerNav /> */}
      <div className='pt-20'>
        <img src='/assets/nav.png' className='flex w-full' />
      {/* <Swiper>
        <SwiperSlide>
          <img src='' alt='' />
        </SwiperSlide>
      </Swiper> */}
    </div>
    <div>
      <h3 className='text-center uppercase font-semibold pt-5'>Today's Deal</h3>
    </div>
    <div className='bg-white '>
      <div className='flex flex-row justify-between self-center m-5 p-2'>
        <h4 className='self-center'>Check out listed items on our curated catalogues made just for you improving your shopping expirience</h4>
        <div>
          <h4 className='text-white px-4 py-1' style={{backgroundColor:'#702EB2'}}>View</h4>
        </div>
      </div>
    </div>
    <div>
      <h3 className='font-bold pl-10'>HOT DEALS</h3>
      
    <div className='md:columns-7 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
    </div>
    </div>
        <div className='md:my-10 py-5 bg-white'>
          <div className='md:flex md:columns-2 self-center ' style={{color:'#45975B',}}>
<div className=' flex justify-center self-center' style={{}}>
<div className='mx-5' >
 <h4 className='text-center self-center text-2xl font-semibold'>AGROMAT</h4>
  <p className='text-center self-center mt-3'>Agricultural growth market. Agromat a Wajisinfinity Ltd. subsidiary which focus is on Agriculture and it’s produce.
Ensuring that customers enjoy freshly produce Agricultural harvest they desire.</p>
</div>
</div>
<div className='w-full'>
<div className='md:columns-3'>
  <img src='/assets/Frame427319406.png' style={{width:'200px',height:'200px'}}/>
  <img src='/assets/Frame427319404.png' style={{width:'200px',height:'200px'}}/>
  <img src='/assets/Frame427319405.png' style={{width:'200px',height:'200px'}}/>
</div>
</div>

  </div>
  <div>
  <div className='flex flex-row justify-between px-2 pt-3'>
    <h4 className='text-lg font-bold' style={{color:'#45975B'}}>Coming soon</h4>
    <h4 className='text-lg font-bold' style={{color:'#45975B'}}>Coming soon</h4>
    <h4 className='text-lg font-bold' style={{color:'#45975B'}}>Coming soon</h4>
    <h4 className='text-lg font-bold' style={{color:'#45975B'}}>Coming soon</h4>
  </div>
</div>
</div>

<div>
        <div>

          <div className=' md:flex md:columns-2 h-full'>
          <div className='h-full w-3/4'>
          <div className='md:columns-5 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      </div>
          </div>
          <div className='bg-white h-full'>
          <ul>
            <li>Device & Accessories</li>
            <li></li>
          </ul>
          </div>
          </div>
        </div>
</div>
<div>
  <div style={{backgroundColor:'#B43B3B'}}>
  <div>
  {/* Banner Advertisement goes here */}
    {/* <div>Discounted Sales by jewels by Hix</div> */}
  </div>
  </div>
</div>
<div className='p-5'>
                        <div className='justify-center self-center mb-3'>
                           <p>INFINITY PRODUCT PLACE is  recognised as a product marketing community alongside Infinity service place (ISP) a service centric community. The two individual communities comes together to form a marketing system called Infinity Market Place.  Created by WAJISINFINITY LTD all rights reserved  </p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p>Put your skill services  to good use and earn an income. create your portfolio today on Infinity service  place </p>
                            <div className='bg-white text-red-700 font-bold mr-5'><h5 className='m-2'>Join ISP</h5></div>
                        </div>
                    </div>
<Footers />
    </div>
  )
}
