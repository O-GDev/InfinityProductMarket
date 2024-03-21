import React, { useState, useEffect, useRef } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Outlet, Link } from 'react-router-dom'
import Footers from '../lilcomponents/footers';
import Cards from '../lilcomponents/cards';
import Cards1 from '../lilcomponents/card';
import Signuppage from './signuppage';


const sliderImage = [
    "/assets/indoor-hotel-view.jpg",
    "/assets/horizontal-shot-delighted-young-african-american-woman-points-stylish-clothes-sale-hanging-rails-carries-bag-beautiful-bouquet-has-toothy-smile-isolated-yellow-background.jpg",
    "/assets/children-s-bright-clothes-hang-display-baby-clothing-store.jpg",
];

let count = 0;

export default function Productplacehome() {
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
    <nav className='' style={{position:'fixed',backgroundColor:'#F2F2F2',width:'100%'}}>
      <div className='flex px-10 py-3' style={{ justifyContent: 'space-between' }}>
        <div className='flex flex-row'>
          <img src='/assets/2 2 (1).png' style={{ width: '60px', height: '60px' }} />
          <div className='bg-white flex flex-row justify-center self-center'>
          <img src='/assets/Search.png' className='w-4 h-4 my-3 ml-5 font-bold'  />
          <input placeholder='Search for brands or categories' className='text-sm outline-none pl-1 w-52 font-sembold' /></div>
          </div>
        <ul className="inline justify-center self-center">
          <li className="inline px-5 font-primary font-semibold"><Link to='/'>Home</Link> </li>
          <li className="inline px-5 font-primary font-semibold"> <Link to='/services'>Today's Deal</Link> </li>
          <li className="inline px-5 font-primary font-semibold">Discovery</li>
          <li className="inline px-5 font-primary font-semibold">Blog</li>
          <li className="inline px-5 font-primary font-semibold">Marketing</li>
          <li className="inline px-5 font-primary font-semibold">Be a seller</li>
          <li className="inline px-5 font-primary font-semibold p-3 rounded text-white" style={{ backgroundColor: '#8248BB' }}>Login/Signup</li>

        </ul>
      </div>
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

    <div className='flex pt-20' style={{height:"",}}>
        <div ref={slideRef} className="select-none" style={{}}>
    <img src={sliderImage[currentIndex]} alt='slide' loading='lazy' style={{height:'70vh',width:'100vw',opacity:1}} />  
    </div>
    
     
    </div>

    <div className='columns-4 p-4 px-10 bg-white'>
      <div className='flex flex-row'>
      <img src='/assets/store 1.png' style={{height:50,width:50}} />
        <div>
          <h5 className="font-bold text-sm px-2">FREE STORE</h5>
          <p className='px-2 text-sm'>Create your business with us
using our free template  </p>
        </div>
      </div>
      <div className='flex flex-row'>
      <img src='/assets/partners 1.png' style={{height:50,width:50}} />
      <div>
          <h5 className="font-bold text-sm px-2 ">COMMUNITY</h5>
          <p className='px-2 text-sm'>Connect with other business
through affiliation and partnership</p>
        </div>
      </div>
      <div className='flex flex-row'>
      <img src='/assets/key 1.png' style={{height:50,width:50}} />
      <div>
          <h5 className="font-bold text-sm px-2">OWNERSHIP</h5>
          <p className='px-2 text-sm'>Take charge of your business
and grow at your pace </p>
        </div>
      </div>
      <div className='flex flex-row'>
      <img src='/assets/money-bag 1.png' style={{height:50,width:50}} />
      <div>
          <h5 className="font-bold text-sm px-2">GROWTH</h5>
          <p className='px-2 text-sm'>Grow your income, make
the right decision </p>
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


    <div className='flex flex-row h-20 justify-between m-2 mx-10 bg-white'>
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
    </div>

    <div className='pl-10 pt-5 '>
    <div className='flex flex-row '>
    <div className=''>
      <div className='flex flex-row justify-between w-full'>
      <h3 className='font-bold'>DEALS OF THE WEEK</h3>
      <div className='mx-1 bg-white'>
        <span className='font-black w-0.5 pr-2'> {'<'} </span>
        <span className='font-black w-0.5 pl-2'> {'>'} </span>
      </div>
      </div>
      <div className='pt-3'>
        <img src='/assets/bag.png'/> 
        <h3 className='text-center text-lg font-bold font-primary'>Green Italian-made Bag</h3>
        <h2 className='text-center text-lg font-bold' style={{color:'red'}}># 60,000</h2>
       <div className='flex justify-center w-full'>
       <div className='flex flex-col justify-center self-center mx-24 ' style={{width:'100%'}}>
        <p className='text-sm w-full '>still in stock</p>
        
        <div class=" bg-gray-200 rounded-full w-full h-3 dark:bg-gray-700 border-black" style={{borderWidth:1}}>
          {/* <div class="" style="width: 45%"></div> */}
          <div className=' h-2.5 rounded-full' style={{width:'25%',backgroundColor:'#702EB2'}}></div>
        </div>
        </div>        
       </div>
       <div className='flex flex-row justify-between p-3'>
       <div>
          <h5>Hurry up!</h5>
          <p className='' style={{fontSize:'10px'}}>Limited edition going out of stock soon</p>
        </div>
        <div className='rounded-full flex justify-center self-center p-2 text-white' style={{backgroundColor:'#702EB2',fontSize:'10px'}}>
          Add to Cart
        </div>
       </div>
      </div>
      </div>
      <div className='w-full'>
        <h3 className='font-bold pl-20 '>BEST SELLERS</h3>
        <div className='columns-4 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>

        </div>
        <div className='columns-4 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>

        </div>
        <div className='columns-4 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>

        </div>
      </div>


    </div>
    </div>

    
    <div></div>


<div className=''>
  <h3 className='font-bold pl-10'>FEATURED ITEMS</h3>
  <h5 className='text-center' style={{color:'#42255F'}}>Top Rated</h5>
  <div className='columns-4 px-4 pt-3' >        
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>
      <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6'/>

        </div>

        <div className='columns-4 px-4 pt-3' >        
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
</div>

<div className='flex flex-row h-20 justify-between m-2 mx-10 bg-white'>
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
      <div className='flex justify-center self-end p-2'>
        <h5 className='font-semibold' style={{color:'#ab5ae0'}}>Become a supplier</h5>
      </div>

     
    </div>
    <div>            
  <h3 className='font-semibold pl-10 pt-5'  style={{color:'#42255F'}}>Top Merchants </h3>
  <div className='columns-4 m-10 relative'>
      <Cards image="/assets/premium_photo-1692873058899-624c0f96c5de.webp" pname='Cleaning Products' pprice="8000" opa='0' padin={15} />
      <Cards image="/assets/stock-photo-portrait-of-young-black-man-working-on-farm-standing-in-hothouse-holding-wooden-box-full-of-fresh-2183178705 2.png" pname='Nike Sneakers' pprice='28,000' opa='0' padin={15} />
      <Cards image="/assets/istockphoto-1475370822-612x612.jpg" pname='Camera' pprice='328,000' opa='0' padin={15} />
      <Cards image="/assets/young-smiling-cheerful-satisfied-positive-600nw-2127045413.jpg.webp" pname='Hermes Birkin Bag' pprice='28,000' opa='0' padin={15} />          
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
    <Signuppage />

  </div>
  <Outlet />
  </>
    )
}
