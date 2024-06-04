import React, { Component, useState, useEffect, useRef } from 'react'
import Navbars from '../component/nav'
import { Button, Uline } from '../lilcomponents/style.styles'
import Cards from '../lilcomponents/cards'
import PeoplesChoice from '../lilcomponents/peopleschoiceh'
import Footers from '../lilcomponents/footers'
import { motion, useAnimation, useInView } from 'framer-motion'
import {BASE_URL} from '../component/url/url'

const landingpage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControl = useAnimation();
  useEffect(()=>{
    fetch(`${BASE_URL}`),{}
  },[])
  let topRatedData = [
    {
      "image": "/assets/Rectangle 61.png",
      "pname": 'Cleaning Products',
      "pprice": "8000",
      "rate": '4.6'
    },
     {
       "image": "/assets/Rectangle 61-2.png",
       "pname": 'Nike Sneakers',
       "pprice": "28,000",
      "rate": '4.6'
    },
    {
      "image": "/assets/young-smiling-cheerful-satisfied-positive-600nw-2127045413.jpg.webp",
      "pname": 'Hermes Birkin Bag',
      "pprice": "28,000",
      "rate": '4.6'
    },
    {
      "image": "/assets/photo-camera-balancing-with-yellow-background.jpg",
      "pname": 'Camera',
      "pprice": "328,000",
      "rate": '4.6'
    },
  ]
  let professionalsData = [
    {
      "image": "/assets/premium_photo-1692873058899-624c0f96c5de.webp",
      
    },
    {
      "image": "/assets/stock-photo-portrait-of-young-black-man-working-on-farm-standing-in-hothouse-holding-wooden-box-full-of-fresh-2183178705 2.png",
      
    },
    {
      "image": "/assets/istockphoto-1475370822-612x612.jpg",
     
    },
    {
      "image": "/assets/young-smiling-cheerful-satisfied-positive-600nw-2127045413.jpg.webp",
      
    }
  ]
  useEffect(() => {
    console.log(isInView)
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className='relative flex flex-col justify-center align-middle self-center' style={{ backgroundColor: '#F2F2F2' }}>
       <div className=''>
        <Navbars />
      </div>
       
      <div className=''>
        <motion.div
          variants={{
            hidden: { opacity: 0, },
            visible: { opacity: 1, }
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1,  }}
          className='relative flex-col h-full px-12 pt-12'>
          <h3 className='text-black font-primary font-bold'>THE MARKETS </h3>
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
            className="absolute"
          >
            <Uline color='#702EB2' />
          </motion.div>
        </motion.div>
        <div>
          <div className='lg:columns-2 flex flex-col md:flex-row h-fit gap-16 w-full justify-center px-[10%]'>
          
        <div className='w-full'>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <h3 className='flex justify-center self-center font-bold py-1 pb-1'>INFINITY PRODUCT PLACE</h3>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -150 },
                visible: { opacity: 1, x: 0 },
              }}

              initial="hidden"
              whileInView="visible"
              // viewport={{ once: false, amount: 1 }}
              transition={{ duration: 1, }}
              className='lg:columns-2 flex w-full flex-col lg:flex-row rounded-xl my-5 md:my-0 p-5 h-full' style={{ backgroundColor: '#D3D3D3' }}>
             <div className='flex w-full'>
             <motion.div
                variants={{
                  hidden: { opacity: 0, },
                  visible: { opacity: 1, }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, }}
                className='w-full flex justify-center'
              >

                <img src='/assets/IMG_9517.JPG' className='rounded-xl h-[300px] w-[400px] flex self-center' style={{}} />
                
              </motion.div>
             </div>
             <div className='flex w-full flex-col self-center '>
             <motion.p

initial={{ opacity: 0, x: -10 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
className='px-[10%] py-2 text-center italic font-medium text-[80%] md:text-[100%] w-full ' style={{}}>
Check out our product showcase, where we bring you the latest and greatest products in a laid-back and informative way!</motion.p>
<motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className='flex w-full justify-center self-center'>
<Button className='flex items-center justify-center'><div className='font-bold id p-3' style={{ backgroundColor: 'transparent', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Let's&nbsp; Shop</div></Button>
</motion.div>
             </div>
            </motion.div>
          </div>
        </div>

          <div className=' w-full'>
            <div className='flex flex-col justify-center items-center h-full w-full' >
            <h3 className='flex justify-center self-center font-bold py-1 pb-1'>INFINITY SERVICE PLACE</h3>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 10 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              // whileInView="visible"
              whileInView="visible"
              transition={{ duration: 1, }}
              className='lg:columns-2 flex flex-col lg:flex-row w-full rounded-xl md:my-0 my-10 p-5 h-full   ' style={{ backgroundColor: '#D3D3D3' }}>
                <div className='flex w-full'>
                  
            <motion.div
                variants={{
                  hidden: { opacity: 0, },
                  visible: { opacity: 1, }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, }}
                className='w-full flex justify-center'
              >
                
              <img src='/assets/medium-shot-woman-posing-studio.jpg' className='rounded-xl h-[300px] w-[400px] flex' style={{}} />
              </motion.div>


                </div>
              <div className='flex w-full flex-col self-center'>
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='px-[10%] py-2 text-center italic font-medium text-[80%] md:text-[100%] ' style={{}}>Check out our top notch professionals in different fields  of creativity all across the world. </motion.p>
             <motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className='flex w-full justify-center self-center'>
<Button className='flex items-center justify-center'><div className='font-bold id p-3' style={{ backgroundColor: 'transparent', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Let's&nbsp; Deal</div></Button>
</motion.div>
              </div>
            </motion.div>
          </div>
          </div>

        </div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, },
            visible: { opacity: 1, }
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1,  }}
          className='relative flex-col h-full px-12 pt-12'>
          <h3 className='text-black font-primary font-bold'>OUR SERVICES </h3>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ rotate: 360, scale: 1,  }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
              delay: 1,
            }}
            className="absolute"
          >
            <Uline color='#702EB2' />
          </motion.div>
        </motion.div>
       <div className=''>
       <div>
          <div className='lg:columns-2 flex flex-col lg:flex-row justify-center my-12 text-[90%] '>
            <div className='md:w-full md:h-full  flex justify-center scale-75 md:scale-100'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1,  }}
                className='w-[400px]  flex mx-6 md:mx-0 self-center md:h-full'
                style={{
                  backgroundImage: "url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
                  backgroundColor:'red',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src='/assets/corporate-management-strategy-solution-branding-concept.jpg' id='' className='zoomImage' style={{ height: '400px', }} />
              </motion.div>
            </div>
            <div className='w-full flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center self-center px-5 '>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className='text-center text-lg font-bold font-primary'>Curated Exellence</motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{duration: 1,  }}
                  className='md:px-16 px-4 text-center self-center'>Check out our top notch professionals in different fields  of creativity all across the world. </motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className="flex justify-center"
                >
                  <Button><span className='font-bold' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Learn More</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='lg:columns-2 flex flex-col lg:flex-row justify-center my-12 text-[90%]  '>
            <div className='flex w-full items-center'>
              <div className='flex flex-col justify-center self-center '>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className='text-center text-lg font-bold font-primary'>Community and Connection</motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{duration: 1,  }}
                  className='md:px-16 px-9 text-center'>More than an e-commerce platform, we are a thriving community. INFINITY MARKET PLACE serves as a meeting ground for creators, connoisseurs, and those who appreciate the finer things in life.</motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className="flex justify-center"
                >
                  <Button><span className='font-bold' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Learn More</span></Button>
                </motion.div>
              </div>
              </div>
            <div className='md:w-full md:h-full flex justify-center scale-75 md:scale-100'>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 150 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1,  }}
                className='w-[400px] flex mx-6 md:mx-0 self-center md:h-full'
                style={{
                  backgroundImage: "url('/assets/drew-colins-LIEQsu5JuoM-unsplash 2.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <img src='/assets/drew-colins-LIEQsu5JuoM-unsplash 2.png' className='zoomImages' style={{ height: '400px' }} />
              </motion.div>
            </div>
          </div>
        </div>

        <div>
          <div className='lg:columns-2 flex flex-col lg:flex-row justify-center items-center my-12 text-[90%]  '>
            <div className='md:w-full md:h-full flex justify-center scale-75 md:scale-100'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1,  }}
                className='w-[400px] flex mx-6 md:mx-0 self-center md:h-full'
                style={{
                  backgroundImage: "url('/assets/image6 2.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <img src='/assets/image6 2.png' className='zoomImage' style={{ height: '400px' }} />
              </motion.div>
            </div>
            <div>
              <div className='flex flex-col justify-center items-center self-center'>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className='pt-3 lg:pt-0 text-center text-lg font-bold font-primary'>Trust and Transparency
                </motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{duration: 1,  }}
                  className='md:px-16 px-9 text-center self-center'>
                  Trust is the cornerstone of INFINITY MARKET PLACE. Rigorous verification protocols ensure the authenticity of creators and the security of every transaction.
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className="flex justify-center"
                >
                  <Button><span className='font-bold' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Learn More</span></Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
       </div>
        <div>
          <div className='relative flex-col h-full px-12' >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1,  }}
              className='font-primary font-bold text-center id' style={{ color: '#2E0853' }}>TOP-RATED
            </motion.h3>
          </div>
          <div className='flex w-full px-12' style={{ justifyContent: 'space-between' }}>
            <motion.h4
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1,  }}
              className='font-semibold id' style={{ color: '#2E0853' }}>PRODUCTS
            </motion.h4>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1,  }}
              style={{ color: '#2E0853' }}>
              <h4 className='font-semibold rounded-md p-1.5 id'>VIEW ALL
              </h4>
            </motion.span>
          </div>
        </div>
      </div>
      <div>
        <div className='md:px-16'>
        <div className='md:columns-4 h-[70%] columns-2 md:gap-7 md:m-10 p-1 md:p-0 '>
          {topRatedData.map((topRated, index) => (
            <motion.div
              // variants={}
              initial={{ opacity : 0, y : 70 }}
              whileInView={{opacity : 1, y : 0}}
              transition={{ delay: 0.05 * index, duration : 0.5 * index }}
              key={index} 
              className='py-3 lg:py-0 px-[2%] md:px-0'
              >
              <Cards image={topRated.image} pname={topRated.pname} pprice={topRated.pprice} rate={topRated.rate} radius='xl' width='100%' height='250px' />
            </motion.div>
          ))}
        </div>
        </div>
        <div>
          <div className='flex w-full px-12' style={{ justifyContent: 'space-between' }}>
            <motion.h4
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, }}
              className='font-semibold p-1.5' style={{ color: '#2E0853' }}>PROFESSIONALS</motion.h4>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, }}
              style={{ color: '#2E0853' }}><h4 className='font-semibold rounded-md p-1.5'>VIEW ALL</h4></motion.span>
          </div>
          <div className="container">
          <div className='md:columns-4 justify-center columns-1 gap-5 md:m-10 p-5 md:p-0 md:mx-12'>
            {professionalsData.map((professionals, index) => (
              <motion.div
                // variants={}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.5 * index }}
                key={index}
                className='flex justify-center p-12'
              >
                <Cards image={professionals.image} opa='0' padin={15} radius='full' width='' height='' />
                     

              </motion.div>
            ))}
            </div>
          </div>
        </div>
        <div>
          <div className='flex w-full px-12 pb-5' style={{ justifyContent: 'space-between' }}>
            <motion.h4
              variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, }}
              className='font-semibold p-1.5' style={{ color: '#2E0853' }}>PEOPLE'S CHOICE</motion.h4>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, }}
              style={{ color: '#2E0853'}}>
              <h4 className='font-semibold rounded-md p-1.5'>VIEW ALL</h4></motion.span>
          </div>
          <PeoplesChoice />
          <Footers />
        </div>
      </div>
    </div>
  )
}

export default landingpage
