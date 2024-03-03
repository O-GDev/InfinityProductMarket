import React, { useEffect, useRef, useState,  } from 'react'
import Navmenu from './navmenu';
import { Link } from 'react-router-dom';

const sliderImage = [
    "/assets/firstslide.png",
    "/assets/secondslide.png",
    "/assets/thirdslide.png",
];

let count = 0;
export default function Navbars() {
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
    <div className='flex' style={{height:"95vh",top:0,backgroundColor:"red"}}>
        <div ref={slideRef} className="select-none absolute" style={{}}>
    <img src={sliderImage[currentIndex]} alt='slide' style={{height:'87vh',width:'100vw',objectFit:'none',opacity:1}} />  
    </div>
    <div className='absolute w-full text-white'>
    <Navmenu />  
    <div className='flex self-center justify-end pb-10' style={{height:'100vh'}}>
         {/* First Slide Text */}
     {currentIndex == 1 &&
     <div style={{opacity:contentOpacity}} className='relative flex-col justify-center h p-32 '>
    {/* <div className='font-primary text-white font-semibold text-right'> */}
        <h1 className='text-2xl font-bold text-center mb-1'>GET TO KNOW INFINITY MARKET PLACE ISP</h1>
        <p className='font-primary font-bold text-center'>get paid by international companies
by rendering your skills and<br /> talents
on INFINITY SERVICE PLACE </p>

    {/* </div> */}
    <div className='place-content-center bg-white text-center'>
   <Link to='/choosesociety'> 
    <span className='absolute px-10 py-4 rounded-xl -mx-20 place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{color:'#2A054E',}}>CONTINUE</span>
        </Link>
    </div>
    
    </div>
}
    
    {/* Second Slide Text */}
    {currentIndex == 0 &&
    <div class="slide2" style={{opacity:content1Opacity,}} className='relative justify-center self-center w-full h p-10 '>
    <div className='font-primary text-white font-semibold w-full'>
        <h1 className='text-4xl font-black text-center'>SHOP LIKE A PRO, ALL IN ONE PLACE</h1>
        <p className='font-primary text-center mb-20'>Welcome to INFINITY MARKET PLACE, where you can
         effortlessly explore a wide range of services and <br /> products all in
         one convenient spot, revolutionizing your shopping journey.  </p>
         <h1 className='text-2xl font-bold'>BECOME A SELLER</h1>
        <h6 className=''>You can now sell your products at INFINITY PRODUCT PLACE, <br />(IPP)
        also get paid for your Skills and Talents at INFINITY<br /> SERVICE PLACE, (ISP) </h6>

    </div>
    <div className='place-content-center bg-white mb-16'>
   <Link to='/choosesociety'> 
   <span className='absolute px-10 py-4 rounded-xl place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{color:'#2A054E',}}>CONTINUE</span>
</Link> 
    </div>
    </div>}

    {/* Third Slide Text */}
   {currentIndex == 2 &&
    <div style={{opacity:content2Opacity}} className='relative self-center w-full h p-10 mt-15'>
    <div className='font-primary text-white font-semibold '>
        <h1 className='text-xl font-bold'>TRANSACT ON IPP</h1>
        <p className='font-primary'>Infinity Product Place was created with the aim of creating quality, 
        trust<br /> and authenticity in today’s business world. What set us aside
        is our emphasis on quality<br /> over quantity, Business legitimacy and 
        most importantly business branding. These<br /> values have been
        proven necessary for successful business relationship with our<br />
        protected consumers  </p>         
    </div>
    {/* <span className='absolute px-10 py-4 rounded-3xl place-content-end my-5 font-primary text-white text-xl' style={{backgroundColor:'#2A054E',right:35}}>LEARN MORE</span> */}
    <div className='place-content-center bg-white'>
   <Link to='/choosesociety'> 
    <span className='absolute px-10 py-4 rounded-xl place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{color:'#2A054E'}}>CONTINUE</span>
    </Link>
    </div>
    </div>}

    </div>
    
    
    </div>  
     
    </div>
  )
}

