
import React, { useEffect, useRef, useState, } from 'react';
import Navmenu from './navmenu';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const sliderImage = [
    "/assets/firstslide.png",
    "/assets/secondslide.png",
    "/assets/thirdslide.png",
];

let count = 0;
export default function Navbars() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [contentOpacity, setContentOpacity] = useState(1);
    const [content1Opacity, setContent1Opacity] = useState(1);
    const [content2Opacity, setContent2Opacity] = useState(1);


    const slideRef = useRef()


    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        startSlider();
        // textSlider();
        // con();
    }, [])


    const nextSlide = () => {
        count = (count + 1) % sliderImage.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
        // console.log(currentIndex)
    }
    const startSlider = () => {
        const interval = setInterval(() => {
            nextSlide();
        }, [7000]);
        return () => {
            clearInterval(interval);
        }
    }



    return (
        <div className='text-[70%] md:text-[100%] ' style={{  }}>
               <div ref={slideRef} className='select-none w-full h-fit'>
                <div  className=" w-full h-[700px] flex justify-center items-center bg-cover bg-no-repeat bg-center" style={{backgroundImage:` linear-gradient(180deg,rgba(252, 252, 250,0.4),rgba(0,0,0,0.8)),url(${sliderImage[currentIndex]})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",}}>
                <div className=' w-full text-white h-full flex justify-center' >
                    {/* <Navmenu /> */}
                    <div className='flex self-end w-full h-full'>
                        {/* First Slide Text */}
                        {currentIndex == 1 &&
                         <div style={{ opacity: contentOpacity }} className=' flex flex-col self-center w-full justify-end right-0 '>
                         {/* <div className='font-primary text-white font-semibold text-right'> */}
                         <div className="w-3/4 flex flex-col self-end px-4 md:px-0">
                             <motion.h1
                                 initial={{
                                     opacity: 0,
                                     scale: 0
                                 }}
                                 whileInView={{
                                     opacity: 1,
                                     scale: 1
                                 }}
                                 // transition={{
                                 // duration: 0.7,
                                 // delay: 0.3,
                                 // type: "spring",
                                 // stiffness: 260,
                                 // damping: 20,
                                 // }}
                                 className='md:text-2xl text-sm font-bold text-center mb-1'>GET TO KNOW INFINITY MARKET PLACE ISP</motion.h1>
                             <motion.p
                                 initial={{
                                     y: -70,
                                     opacity: 0
                                 }}
                                 whileInView={{
                                     y: 0,
                                     opacity: 1
                                 }}
                                 transition={{ duration: 0.7, }}
                                 className='font-primary font-bold text-center self-center md:w-2/3'>get paid by international companies
                                 by rendering your skills an talents
                                 on INFINITY SERVICE PLACE </motion.p>

                             {/* </div> */}
                             <motion.div
                                 initial={{ scale: 0 }}
                                 whileInView={{ scale: 1 }}
                                 transition={{ duration: 0.6 }}
                                 className='place-content-center bg-white text-center'>
                                 <Link to='/choosesociety'>
                                     <span className='absolute px-10 py-4 rounded-xl -mx-20 place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{ color: '#2A054E', }}>CONTINUE</span>
                                 </Link>
                             </motion.div>
                        </div>

                     </div>
                           }

                        {/* Second Slide Text */}
                        {currentIndex == 0 &&
                            <div style={{ opacity: content1Opacity}} className='relative flex justify-center self-center w-full h-full'>
                                <div className='font-primary text-white font-semibold w-full flex flex-col items-center justify-center self-center h-full'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 70,scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0,scale: 1 }}
                                        transition={{duration:1}} className='flex flex-col self-center h-full justify-center w-full'>
                                        <motion.h1
                                            className='md:text-[4xl] text-lg px-3  font-black text-center pt-16 self-center items-center' style={{  }}>
                                            SHOP LIKE A PRO, ALL IN ONE PLACE</motion.h1>
                                        <p className='font-primary self-center text-center md:w-2/5 px-4 md:px-0'>Welcome to INFINITY MARKET PLACE, where you can
                                            effortlessly explore a wide range of services and products all in
                                            one convenient spot, revolutionizing your shopping journey.  </p>
                                    </motion.div>
                                  
                                    <motion.div
                                        initial={{opacity:0, y: -70, scale: 0.5 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className='flex flex-col justify-end h-full pl-4 mb-10 w-full'>
                                        <h1 className='text-2xl font-bold'>BECOME A SELLER</h1>
                                        <h6 className=' md:w-2/6'>You can now sell your products at INFINITY PRODUCT PLACE,(IPP)
                                            also get paid for your Skills and Talents at INFINITY SERVICE PLACE, (ISP) </h6>
                                        
                                
                                <div className='place-content-center bg-white mb-16'>
                                    <Link to='/choosesociety'>
                                        <span className='absolute px-10 py-4 rounded-xl place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{ color: '#2A054E', }}>CONTINUE</span>
                                    </Link>
                                    </div>
                                </motion.div>
                                </div>
                            </div>
                        }

                        {/* Third Slide Text */}
                        {currentIndex == 2 &&
                            <div style={{ opacity: content2Opacity }} className='relative self-end md:w-2/4 pl-4 px-4'>
                                <div className='font-primary text-white font-semibold '>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -70 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{duration:1}}
                                        className='text-xl font-bold'>TRANSACT ON IPP</motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y:150 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className='font-primary '>Infinity Product Place was created with the aim of creating quality,
                                        trust and authenticity in today’s business world. What set us aside
                                        is our emphasis on quality over quantity, Business legitimacy and
                                        most importantly business branding. These values have been
                                        proven necessary for successful business relationship with our
                                        protected consumers  </motion.p>
                                </div>
                                {/* <span className='absolute px-10 py-4 rounded-3xl place-content-end my-5 font-primary text-white text-xl' style={{backgroundColor:'#2A054E',right:35}}>LEARN MORE</span> */}
                                <div className='place-content-center bg-white mb-20'>
                                    <Link to='/choosesociety'>
                                        <span className='absolute px-10 py-4 rounded-xl place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{ color: '#2A054E' }}>CONTINUE</span>
                                    </Link>
                                </div>
                            </div>}

                    </div>


                </div>
               {/* // <img src={sliderImage[currentIndex]} alt='slide' className='object-cover w-full' loading='lazy' style={{ height: '87vh', width: '100vw', opacity: 1 }} /> */}
           </div>
           </div>

        </div>
    )
}

