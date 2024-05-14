import React, { useState, useEffect, useRef } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Outlet, Link } from 'react-router-dom'
import Footers from '../lilcomponents/footers';
import Cards from '../lilcomponents/cards';
import Cards1 from '../lilcomponents/card';
import Signuppage from './signuppage';
import LoggedinNav from '../component/loggedinnav';
import PostsCards from '../lilcomponents/postsCards';
import { motion } from 'framer-motion';


const sliderImage = [
    "/assets/indoor-hotel-view.jpg",
    "/assets/horizontal-shot-delighted-young-african-american-woman-points-stylish-clothes-sale-hanging-rails-carries-bag-beautiful-bouquet-has-toothy-smile-isolated-yellow-background.jpg",
    "/assets/children-s-bright-clothes-hang-display-baby-clothing-store.jpg",
];

let count = 0;

export default function BuyerDashboard() {
  const[currentIndex, setCurrentIndex] = useState(0);


 
const slideRef = useRef()    

const removeAnimation = () =>{
  slideRef.current.classList.remove('fade-anim');
}
  
useEffect(()=>{
  slideRef.current.addEventListener('animationend', removeAnimation)
  startSlider();
  // textSlider();
  // con();
},[])


  const startSlider = () =>{
    const interval =  setInterval(() => {
          nextSlide();
      }, [7000]);
      return () => {
          clearInterval(interval);
      }
  }    
  

  const nextSlide = () =>{
      count = (count + 1) % sliderImage.length;
      setCurrentIndex(count);
      slideRef.current.classList.add('fade-anim');
  }
  return (
    <>
    <div style={{paddingBottom:20,}}>
    <LoggedinNav />

    <div className='flex pt-20' style={{height:"",}}>
        <div ref={slideRef} className="select-none" style={{}}>
    <img src={sliderImage[currentIndex]} alt='slide' loading='lazy' style={{height:'70vh',width:'100vw',opacity:1}} />  
    </div>
    
     
    </div>
        <div className='p-10'>
          <div className='flex p-4 px-10 rounded-3xl bg-white shadow-lg'>
            <div className='flex flex-row'>
              {/* <img src='/assets/store 1.png' style={{height:50,width:50}} /> */}
              <div>
                <h5 className="font-bold text-sm px-2">FREE STORE</h5>
                <p className='px-2 text-sm'>Create your business with us
                  using our free template  </p>
              </div>
            </div>
            <div className='flex flex-row'>
              {/* <img src='/assets/partners 1.png' style={{height:50,width:50}} /> */}
              <div>
                <h5 className="font-bold text-sm px-2 ">COMMUNITY</h5>
                <p className='px-2 text-sm'>Connect with other business
                  through affiliation and partnership</p>
              </div>
            </div>
            <div className='flex flex-row'>
              {/* <img src='/assets/key 1.png' style={{height:50,width:50}} /> */}
              <div className=''>
                <h5 className="font-bold text-sm px-2">OWNERSHIP</h5>
                <p className='px-2 text-sm'>Take charge of your business
                  and grow at your pace </p>
              </div>
            </div>
            <div className='flex flex-row'>
              {/* <img src='/assets/money-bag 1.png' style={{height:50,width:50}} /> */}
              <div>
                <h5 className="font-bold text-sm px-2">GROWTH</h5>
                <p className='px-2 text-sm'>Grow your income, make
                  the right decision </p>
              </div>
            </div>
          </div>
        </div>

      {/* shop by category */}
    <div className='pl-10' style={{}}>
      <h3 className='font-bold'>SHOP BY CATEGORIES</h3>
    </div>

    <div className='column-6' style={{}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>


    {/* <div className='flex flex-row h-20 justify-between m-2 mx-10 bg-white'>
      <div className='flex rounded-br-3xl' style={{backgroundColor:'#ab5ae0'}}>
      <div className='flex justify-center self-center' >
        <span className='text-white text-center p-2'>connect with <br /> foreign manufacturers</span>
      </div>
      </div>
      <div className='flex justify-center self-center'>
        <h5 className='font-bold'>Africa is the continent with highest demand on commodity</h5>
      </div>
      <div className='flex justify-center self-end p-2'>
        <h5 className='font-semibold' style={{color:'#ab5ae0'}}>Become a supplier</h5>
      </div>
    </div> */}

        <div >
          <div className=''>
            <div className='md:columns-2 md:flex gap-8 w-full h-full p-5'>
              <div className='w-full bg-white rounded-2xl shadow-md p-5'>
                <div className='flex flex-row justify-between px-0'>
                  <h3 className='font-semibold'>TOP RATED</h3>
                  <h3 >View All</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.23 }}
                  className='md:columns-3 pt-2'>
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.23 }}
                  className='md:columns-3 pt-2'>
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.23 }}
                  className='md:columns-3 pt-2'>
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                  <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                </motion.div>
              </div>
              <div className='w-full bg-white rounded-2xl shadow-md p-5 md:mt-0 mt-5 '>
                <div className='flex justify-center mx-6' style={{ backgroundColor: `rgba(130, 72, 187,0.8)` }}>
                  <h5 className='text-white p-3' style={{}}>Top Brands and Merchants</h5>
                </div>
                <div className='flex justify-end mx-6' style={{}}>
                  <h5 className='p-3' style={{}}>View All</h5>
                </div>
                <div>
                  <h6>Manufacturers</h6>
                  <div className="columns-4 flex justify-between gap-2 align-middle p-2">
                    <div className="rounded-full bg-black" style={{ width: '70px', height: '70px' }}></div>
                    <div className='self-center'>ffg</div>
                    <div className='self-center'>ffg</div>
                    <div className='self-center'>ffg</div>
                  </div>
                </div>
              </div>
              {/* <div className='flex pl-1'>
                <div className="relative flex self-end flex-col">
                  <div className="absolute">
                    <img src='/assets/flashsales.png' style={{ width: '60%' }} className='relative -top-24 z-10 -right-44' />
                  </div>
                  <img src='/assets/bag.png' className='relative rounded-2xl shadow-xl' />
                  <div className=' pt-3 flex flex-col self-end w-full'>
                    <div className='flex justify-between py-2 relative w-full'>
                      <h3 className='font-bold font-primary self-center' style={{fontSize:'90%'}}>Green Italian-made Bag</h3>
                      <div style={{ color: 'red', backgroundColor: `rgba(169, 130, 209, 0.8)` }}>
                        <h2 className='text-center text-md font-bold px-2 py-2' style={{ color: 'red', opacity: 1 }}># 60,000</h2>
                      </div>
                    </div>
                    <div className='flex justify-center w-full'>
                      <div className='flex justify-between self-center' style={{ width: '100%' }}>
                        <p className='text-sm w-full' style={{ fontSize: '10px' }}>{4} still in stock</p>

                        <div class=" rounded-full w-full h-3 dark:bg-gray-700 border-black flex self-center" style={{ borderWidth: '0.1px' }}>
                          <div className=' h-2.8 rounded-full' style={{ width: '25%', backgroundColor: '#702EB2' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between pt-3 '>
                      <div className='flex flex-row justify-between w-full'>
                        <h5 className='text-sm self-center'>Hurry up!, Get yours today</h5>
                        <p className='self-center' style={{ fontSize: '10px' }}>Limited edition </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

    
        <div id='gradient' className='m-5 p-8 py-8 rounded-2xl'>
          <div className='font-bold py-2'>CATEGORIES</div>
          <div className="flex flex-row justify-between">
            <div>
              <img src="/assets/Frame 427319739.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319741.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319743.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319745.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319747.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-5">
            <div>
              <img src="/assets/Frame 427319749.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319742.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319744.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319746.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
            <div>
              <img src="/assets/Frame 427319748.png" style={{}} alt="" />
              <h5 className='text-center pt-2'>Phones and Tablets</h5>
            </div>
          </div>
        </div>


{/* <div className=''>
  <h3 className='font-bold pl-10'>FEATURED ITEMS</h3>
  <h5 className='text-center' style={{color:'#42255F'}}>Top Rated</h5>
  <div className='md:columns-4 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>

        </div>

        <div className='md:columns-4 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>

        </div>
        
        <div className='columns-2 pl-10'>
          <div>            
  <h3 className='font-bold'  style={{color:'#42255F'}}>New Arrivals</h3>
          </div>
          <div>
  <h3 className='font-bold'  style={{color:'#42255F'}}>People's choice</h3>
  </div>
        </div>
</div> */}

<div className='flex flex-row h-20 justify-between bg-white'>
      <div className='flex rounded-br-3xl' style={{backgroundColor:'#ab5ae0'}}>
      <div className='flex justify-center self-center' >
        <span className='text-white text-center p-2'>connect with <br /> foreign manufacturers</span>
      </div>
      </div>
      <div className='flex flex-col justify-center self-center'>
        <h3 className='font-extrabold text-center' style={{color:'#33363F'}}>THIS FEATURE IS COMING SOON</h3>
        <h6 className='font-bold text-center text-sm'>Africa is the continent with highest demand on commodity</h6>
        <h5 className='font-bold' style={{color:'#33363F'}}>Contend, cooperate or partner with the world giant here on IPP </h5>
      </div>
      <div className='flex justify-center self-center pr-20'>
        <h5 className='font-semibold' style={{color:'#ab5ae0'}}>Become a supplier</h5>
      </div>

     
    </div>
    <div>            
  {/* <h3 className='font-semibold pl-10 pt-5'  style={{color:'#42255F'}}>Top Merchants </h3> */}
  {/* <div className='md:columns-4 m-10 relative'>
      <Cards image="/assets/premium_photo-1692873058899-624c0f96c5de.webp" pname='Cleaning Products' pprice="8000" opa='0' padin={15} />
      <Cards image="/assets/stock-photo-portrait-of-young-black-man-working-on-farm-standing-in-hothouse-holding-wooden-box-full-of-fresh-2183178705 2.png" pname='Nike Sneakers' pprice='28,000' opa='0' padin={15} />
      <Cards image="/assets/istockphoto-1475370822-612x612.jpg" pname='Camera' pprice='328,000' opa='0' padin={15} />
      <Cards image="/assets/young-smiling-cheerful-satisfied-positive-600nw-2127045413.jpg.webp" pname='Hermes Birkin Bag' pprice='28,000' opa='0' padin={15} />          
        </div> */}
        </div>
        
        <div className='m-10 rounded-2xl pb-5 drop-shadow-2xl' style={{ backgroundColor: `rgba(155, 109, 201, 0.6)` }}>
          <div className='flex flex-row justify-between p-5'>
            <div>
              <h3 className='font-semibold text-white uppercase' style={{}}>People's Choice </h3>
            </div>
            <div className='font-semibold text-white '>View All</div>
          </div>
          <div className='flex flex-row justify-evenly'>
            <div className="bg-white rounded-3xl" style={{ height: '300px', width: '200px' }}></div>
            <div className="bg-white rounded-3xl mt-12" style={{ height: '300px', width: '200px' }}></div>
            <div className="bg-white rounded-3xl" style={{ height: '300px', width: '200px' }}></div>
            <div className="bg-white rounded-3xl mt-12" style={{ height: '300px', width: '200px' }}></div>
            <div className="bg-white rounded-3xl" style={{ height: '300px', width: '200px' }}></div>
          </div>
  </div>
        <div>
          <div className='flex flex-row justify-between px-10'>
            <div>
              <h3 className='font-semibold uppercase' style={{}}>New Arrivals </h3>
            </div>
            <div className='font-semibold '>View All</div>
          </div>
        </div>
        

        <div>
          <div className='bg-white p-5 mx-10 drop-shadow-xl rounded-2xl'>
            <div className='flex flex-row justify-between px-10'>
              <div>
                <h3 className='font-semibold uppercase' style={{}}>Top Brands and Merchants</h3>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ rotate: 360, scale: 1 }}
                  // viewport={{ once: false, amount: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 10,
                  }}
                  className="flex justify-evenly"
                >
                  <Uline color='#702EB2' />
                </motion.div>
              </div>
              <div className='font-semibold '>View All</div>
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
  <Outlet />
  </>
    )
}



