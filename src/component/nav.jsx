
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


    const isDesktopOrLaptop = useMediaQuery({
        // query: '(min-width: 41224px)'
        query: '(min-width: 1225px)'
    })
    const isonBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isonTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isonPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isonRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

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
        <div className='flex w-full h-full flex-col justify-center align-center bg-zinc-400' style={{  }}>
            {isDesktopOrLaptop && <>
                <div ref={slideRef} className="select-none w-full" style={{}}>
                    <img src={sliderImage[currentIndex]} alt='slide' className='object-cover w-full' loading='lazy' style={{ height: '87vh', width: '100vw', opacity: 1 }} />
                </div>

                <div className='absolute w-full text-white ' style={{height:'87vh'}}>
                    <Navmenu />
                    <div className='flex self-end pb-10 w-full ' style={{height:'87vh'}}>
                        {/* First Slide Text */}
                        {currentIndex == 1 &&
                            <div style={{ opacity: contentOpacity }} className='relative flex flex-col self-center w-full justify-end right-0 '>
                                {/* <div className='font-primary text-white font-semibold text-right'> */}
                                <div className="w-3/4 flex flex-col self-end">
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
                                        className='font-primary font-bold text-center self-center w-2/3'>get paid by international companies
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

                            </div>}

                        {/* Second Slide Text */}
                        {currentIndex == 0 &&
                            <div style={{ opacity: content1Opacity}} className='relative justify-center content-center w-full h-full'>
                                <div className='font-primary text-white font-semibold w-full flex flex-col justify-center self-center h-full'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 70,scale: 0.5 }}
                                        whileInView={{ opacity: 1, y: 0,scale: 1 }}
                                        transition={{duration:1}} className='flex flex-col self-center h-full justify-center'>
                                        <motion.h1
                                            className='text-4xl font-black text-center self-center' style={{ paddingTop: "10%" }}>
                                            SHOP LIKE A PRO, ALL IN ONE PLACE</motion.h1>
                                        <p className='font-primary self-center text-center mb-20 w-2/5'>Welcome to INFINITY MARKET PLACE, where you can
                                            effortlessly explore a wide range of services and products all in
                                            one convenient spot, revolutionizing your shopping journey.  </p>
                                    </motion.div>
                                  
                                    <motion.div
                                        initial={{opacity:0, y: -70, scale: 0.5 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className='flex flex-col justify-end h-full pl-4 mb-10'>
                                        <h1 className='text-2xl font-bold'>BECOME A SELLER</h1>
                                        <h6 className=' w-2/6'>You can now sell your products at INFINITY PRODUCT PLACE,(IPP)
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
                            <div style={{ opacity: content2Opacity }} className='relative self-center w-2/4 pl-4'>
                                <div className='font-primary text-white font-semibold '>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -70 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{duration:1}}
                                        className='text-xl font-bold'>TRANSACT ON IPP</motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y:150 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className='font-primary'>Infinity Product Place was created with the aim of creating quality,
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

            </>}
            {isonTabletOrMobile && <>
                <div ref={slideRef} className="select-none " style={{}}>
                    <img src={sliderImage[currentIndex]} alt='slide' loading='lazy' style={{ height: '57vh', width: '100vw', objectFit: 'none', opacity: 1 }} />
                </div><div className='absolute w-full text-white' style={{ height: '87vh' }}>
                    <Navmenu />
                    <div className='self-center justify-start pb-15 pt-5' style={{ height: '100vh' }}>
                        {/* First Slide Text */}
                        {currentIndex == 1 &&
                            <div style={{ opacity: contentOpacity }} className='relative flex-col justify-center h md:p-32 pt-20 px-1'>
                                {/* <div className='font-primary text-white font-semibold text-right'> */}
                                <h1 className='md:text-2xl text-sm font-bold text-center mb-1'>GET TO KNOW INFINITY MARKET PLACE ISP</h1>
                                <p className='font-primary font-bold text-center' style={{ fontSize: '75%' }}>get paid by international companies
                                    by rendering your skills and<br /> talents
                                    on INFINITY SERVICE PLACE </p>

                                {/* </div> */}
                                <div className='place-content-center bg-white text-center'>
                                    <Link to='/choosesociety'>
                                        <span className='absolute px-5 py-4 rounded-xl -mx-20 place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{ color: '#2A054E', }}>CONTINUE</span>
                                    </Link>
                                </div>

                            </div>}

                        {/* Second Slide Text */}
                        {currentIndex == 0 &&
                            <div style={{ opacity: content1Opacity, }} className='relative flex-col justify-center self-center p-3'>
                                <div className='font-primary text-white font-semibold w-full'>
                                    <h1 className='font-black text-center' >SHOP LIKE A PRO, ALL IN ONE PLACE</h1>
                                    <p className='font-primary text-center mb-6 p-2' style={{ fontSize: '75%' }}>Welcome to INFINITY MARKET PLACE, where you can
                                        effortlessly explore a wide range <br />of services and products all in
                                        one convenient spot, revolutionizing your shopping journey.  </p>
                                    <h1 className='font-bold' >BECOME A SELLER</h1>
                                    <h6 className='' style={{ fontSize: '75%' }}>You can now sell your products at INFINITY PRODUCT PLACE, <br />(IPP)
                                        also get paid for your Skills and Talents at INFINITY<br /> SERVICE PLACE, (ISP) </h6>

                                </div>
                                <div className='place-content-center bg-white mb-16'>
                                    <Link to='/choosesociety'>
                                        <span className='absolute px-5 py-4 rounded-xl place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{ color: '#2A054E', }}>CONTINUE</span>
                                    </Link>
                                </div>
                            </div>}

                        {/* Third Slide Text */}
                        {currentIndex == 2 &&
                            <div style={{ opacity: content2Opacity }} className='self-center w-full h p-3'>
                                <div className='font-primary text-white font-semibold '>
                                    <h1 className='text-xl font-bold'>TRANSACT ON IPP</h1>
                                    <p className='font-primary' style={{ fontSize: '75%' }}>Infinity Product Place was created with the aim of creating quality,
                                        trust<br /> and authenticity in today’s business world. What set us aside
                                        is our emphasis on quality<br /> over quantity, Business legitimacy and
                                        most importantly business branding. These<br /> values have been
                                        proven necessary for successful business relationship with our<br />
                                        protected consumers  </p>
                                </div>
                                {/* <span className='absolute px-10 py-4 rounded-3xl place-content-end my-5 font-primary text-white text-xl' style={{backgroundColor:'#2A054E',right:35}}>LEARN MORE</span> */}
                                <div className='place-content-center bg-white'>
                                    <Link to='/choosesociety'>
                                        <span className='absolute px-5 py-4 rounded-xl place-content-end my-5 font-primary bg-white text-sm font-bold shadow-xl ' style={{ color: '#2A054E' }}>CONTINUE</span>
                                    </Link>
                                </div>
                            </div>}

                    </div>


                </div></>}

        </div>
    )
}

