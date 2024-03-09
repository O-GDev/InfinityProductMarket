import React, { useState, useEffect, useRef } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Outlet, Link } from 'react-router-dom'


const sliderImage = [
    "/assets/firstslide.png",
    "/assets/secondslide.png",
    "/assets/thirdslide.png",
];

let count = 0;

export default function Productplacehome() {
  const[currentIndex, setCurrentIndex] = useState(0);
  const[contentOpacity, setContentOpacity] = useState(1);
  const[content1Opacity, setContent1Opacity] = useState(1);
  const[content2Opacity, setContent2Opacity] = useState(1);


 
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
    <><div style={{backgroundColor:'#F2F2F2',height:'100vh'}}>
    <nav>
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
      {/* <hr style={{height:0.0001}} ></hr> */}
    </nav>

    <div className='flex' style={{height:"",top:0,}}>
        <div ref={slideRef} className="select-none " style={{}}>
    <img src={sliderImage[currentIndex]} alt='slide' loading='lazy' style={{height:'70vh',width:'100vw',objectFit:'none',opacity:1}} />  
    </div>
    <div className='absolute w-full text-white'>
    {/* <Navmenu />   */}
    <div className='flex flex-row justify-center opacity-65 p-3' style={{backgroundColor:'#F2F2F2'}}>
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

  </div>
  <Outlet />
  </>
    )
}
