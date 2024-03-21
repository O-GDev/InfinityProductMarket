import React from 'react'
import { useState, useEffect, useRef } from "react";



const sliderImage = [
    "/assets/businessman-working-tablet 1.png",
    "/assets/Group 8760.png",
    "/assets/beautiful-curly-brunette-dark-skinned-fashion-designer-poses-office-leans-table 1.png",
];

let count = 1
function Sidecarousel() {
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
    <div>
        <div ref={slideRef} className="select-none " >
       <div className='flex flex-col text-white font-semibold' style={{flex:1,backgroundImage:`url("${sliderImage[currentIndex]}")`, width:'40vw', height:'42vw'}}>
            {currentIndex == 0 && 
            <>
            <div className='flex justify-center h-full text-white font-semibold'>
                          <h4 className='self-center text-center text-xl'>Join Adekunle and other sellers <br />at <span className='font-bold' style={{ color: '#702EB2' }}>INFINITY PRODUCT PLACE </span>'IPP'</h4>
                      </div><div className='flex justify-end mr-1'>
                              <h4 className='flex pr-5 pb-3 '>Clothing Brand Owner</h4>
                          </div>
                          </>
               }
               {currentIndex == 1 && 
            <>
            <div className='flex justify-center h-full text-white font-semibold'>
                          <h4 className='self-end text-center text-xl pb-20'>Join Chinedu and other professionals <br />on INFINITY PRODUCT PLACE 'IPP'</h4>
                      </div><div className='flex justify-end mr-1'>
                              <h4 className='flex pr-5 pb-3'>Consultant</h4>
                          </div>
                          </>
               }
               {currentIndex == 2 && 
            <>
            <div className='flex justify-center h-full text-white font-semibold'>
                          <h4 className='self-end text-center text-xl pb-5'>Join Maria and other sellers <br />at INFINITY PRODUCT PLACE 'IPP'</h4>
                      </div><div className='flex justify-end mr-1'>
                              <h4 className='flex p-12 ' style={{color:"red"}}>Designer</h4>
                          </div>
                          </>
               }
            </div>
    </div>
    </div>
  )
}

export default Sidecarousel
