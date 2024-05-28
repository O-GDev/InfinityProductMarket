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
    <div ref={ref} className='relative' style={{ backgroundColor: '#F2F2F2' }}>
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
        <div className='md:columns-2 gap-10 p-5 h-full'>
          <div className='h-full w-full'>
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
              className='lg:columns-2 md:flex rounded-xl my-5 md:my-0 p-5' style={{ backgroundColor: '#D3D3D3' }}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, },
                  visible: { opacity: 1, }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, }}
                className='w-full'
              >

                <img src='/assets/IMG_9517.JPG' className='rounded-xl md:h-[400px] w-full aspect-square ' style={{}} />
                
              </motion.div>
             <div className='flex w-full flex-col self-center'>
             <motion.p

initial={{ opacity: 0, x: -150 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
className='px-4 md:px-14 py-2 text-center italic font-medium' style={{fontSize:`clamp(15px, 8px, 30px)`}}>
Check out our product showcase, where we bring you the latest and greatest products in a laid-back and informative way!</motion.p>
<motion.div
initial={{ opacity: 0, y: 150 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className='flex flex-col justify-self-center self-center'>
<Button><span className='font-bold' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Let's Shop</span></Button>
</motion.div>
             </div>
            </motion.div>
          </div>
          

          <div className='w-full h-full'>
            <h3 className='justify-center text-center font-bold py-1 pt-2 md:pt-0'>INFINITY SERVICE PLACE</h3>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 150 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              // whileInView="visible"
              whileInView="visible"
              transition={{ duration: 1, }}
              className='lg:columns-2 md:flex rounded-xl md:my-0 my-10 p-5' style={{ backgroundColor: '#D3D3D3' }}>

            <motion.div
                variants={{
                  hidden: { opacity: 0, },
                  visible: { opacity: 1, }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, }}
                className='w-full'
              >

              <img src='/assets/medium-shot-woman-posing-studio.jpg' className='rounded-xl md:h-[400px] w-full aspect-square' style={{}} />
              </motion.div>


              <div className='flex w-full flex-col self-center'>
              <motion.p
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='px-4 md:px-14 py-2 text-center italic font-medium' style={{fontSize:`clamp(15px, 8px, 30px)`}}>Check out our top notch professionals in different fields  of creativity all across the world. </motion.p>
              <motion.div
                className='flex flex-col justify-self-center self-center'
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Button><span className='font-bold' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Let's Deal</span></Button>
              </motion.div>

              </div>
            </motion.div>
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
        <div>
          <div className='md:columns-2 md:flex justify-center my-12 '>
            <div className='md:w-5/12 w-full md:flex justify-center'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1,  }}
                className='md:w-3/5 flex mx-6 md:mx-0  h-[250px] md:h-full'
                style={{
                  backgroundImage: "url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img src='/assets/corporate-management-strategy-solution-branding-concept.jpg' id='' className='zoomImage hidden md:block' style={{ height: '400px', }} />
              </motion.div>
            </div>
            <div className=''>
              <div className='flex flex-col justify-self-center self-center md:mx-0 mx-16'>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className='pt-16 text-center text-lg font-bold font-primary'>Curated Exellence</motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{duration: 1,  }}
                  className='md:px-16 text-center w-4/6 self-center'>Check out our top notch professionals in different fields  of creativity all across the world. </motion.p>
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
          <div className='md:columns-2 my-12'>
            <div>
              <div className='flex flex-col justify-self-center self-center md:mx-0 mx-16'>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className='md:pt-16 text-center text-lg font-bold font-primary'>Community and Connection</motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{duration: 1,  }}
                  className='md:px-16 text-center'>More than an e-commerce platform, we are a thriving community. INFINITY MARKET PLACE serves as a meeting ground for creators, connoisseurs, and those who appreciate the finer things in life.</motion.p>
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
            <div className='w-full flex justify-center'>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 150 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1,  }}
                className='w-2/3 '
                style={{
                  backgroundImage: "url('/assets/drew-colins-LIEQsu5JuoM-unsplash 2.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <img src='/assets/drew-colins-LIEQsu5JuoM-unsplash 2.png' className='zoomImages md:block hidden' style={{ height: '400px' }} />
              </motion.div>
            </div>
          </div>
        </div>

        <div>
          <div className='md:columns-2 my-12'>
            <div className='w-full flex justify-center'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1,  }}
                className='back w-2/3'
                style={{
                  backgroundImage: "url('/assets/image6 2.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <img src='/assets/image6 2.png' className='zoomImage md:block hidden' style={{ height: '400px' }} />
              </motion.div>
            </div>
            <div>
              <div className='flex flex-col justify-self-center self-center md:mx-0 mx-16'>
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1,  }}
                  className='md:pt-16 text-center text-lg font-bold font-primary'>Trust and Transparency
                </motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{duration: 1,  }}
                  className='md:px-16 text-center'>
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
              className='font-primary font-bold text-center ' style={{ color: '#2E0853' }}>TOP-RATED
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
              className='font-semibold ' style={{ color: '#2E0853' }}>PRODUCTS
            </motion.h4>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1,  }}
              style={{ color: '#2E0853', borderWidth: 0.5, borderColor: '#2E0853', borderRadius: 20 }}>
              <h4 className='font-semibold rounded-md p-1.5'>VIEW ALL
              </h4>
            </motion.span>
          </div>
        </div>
      </div>
      <div>
        <div className='md:columns-4 gap-14 md:m-10 p-5 md:p-0 lg:p-0 mx-12'>
          {topRatedData.map((topRated, index) => (
            <motion.div
              // variants={}
              initial={{ opacity : 0, y : 70 }}
              whileInView={{opacity : 1, y : 0}}
              transition={{ delay: 0.05 * index, duration : 0.5 * index }}
              key={index} 
              >
              <Cards image={topRated.image} pname={topRated.pname} pprice={topRated.pprice} rate={topRated.rate} radius='xl' width='100%' height='250px' />
            </motion.div>
          ))}
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
              style={{ color: '#2E0853', borderWidth: 0.5, borderColor: '#2E0853', borderRadius: 20 }}><h4 className='font-semibold rounded-md p-1.5'>VIEW ALL</h4></motion.span>
          </div>
          <div className='md:columns-4 justify-center columns-1 gap-5 md:m-10 p-5 md:p-0 lg:p-0 mx-12'>
            {professionalsData.map((professionals, index) => (
              <motion.div
                // variants={}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.5 * index }}
                key={index}
                className='flex justify-center'
              >
                <Cards image={professionals.image} opa='0' padin={15} radius='full' width='250px' height='250px' />
                     

              </motion.div>
            ))}
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
              style={{ color: '#2E0853', borderWidth: 0.5, borderColor: '#2E0853', borderRadius: 20 }}>
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
