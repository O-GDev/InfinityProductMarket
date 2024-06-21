import React, { useState } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'


export default function Choosesociety() {
  const rand = Math.floor(Math.random() * 200000000000 - 100)
  const randb = Math.floor(Math.random() * 200000000000 - 100)
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='absolute md:p-28 md:pt-0 flex flex-col justify-center align-middle self-center'>
      <div className='flex flex-col justify-center text-center px-4 '>
                    <div className='pl-10 pt-10 cursor-pointer' onClick={() => navigate('/')}  >
         <Icon icon ="lets-icons:arrow-left-long-light" width="2rem" height="2rem" className='md:w-20 md: w-20' />
         {/* <Icon icon="lets-icons:arrow-left-long" /> */  }
         </div>
        <h2 className='py-2 font-bold md:text-lg'>IMP is a Societal Platform with two communities.</h2>
        <h4 className='md:text-lg'>Select the community you which to thrive in.</h4>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, },
          visible: { opacity: 1, }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, }}
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
          <div className='md:columns-2 flex flex-col md:flex-row h-fit gap-16 w-full justify-center px-[10%]'>
          
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
                className='w-full flex'
              >

                <img src='/assets/IMG_9517.JPG' className='rounded-xl h-[300px] md:h-full w-[400px] flex ' style={{}} />
                
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
<Button onClick={() => setOpenModal(true)}  className='flex items-center justify-center'><div className='font-bold id p-3' style={{ backgroundColor: 'transparent', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Buy/Sell</div></Button>
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
                className='w-full'
              >
                
              <img src='/assets/medium-shot-woman-posing-studio.jpg' className='rounded-xl h-[300px] md:h-full w-[400px] flex' style={{}} />
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
<Button onClick={() => setOpenModal(true)} className='flex items-center justify-center'><div className='font-bold id p-3' style={{ backgroundColor: 'transparent', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Let's&nbsp; Deal</div></Button>
</motion.div>
              </div>
            </motion.div>
          </div>
          </div>

        </div>
        </div>
      <div className='flex justify-center self-center mx-5 my-10'>
        <h3 className='font-bold px-1'>NOTE: </h3>
        <h4> Switch between account at user settings.....</h4>
      </div>
      {openModal &&
        <div className='inset-0 fixed h-full flex flex-col justify-center self-center align-midde md:p-24 md:px-56  bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl' >
          <div className=" h-full flex justify-center self-center align-middle p-5">
          <div className=" h-fit flex flex-col justify-center rounded-3xl overflow-auto self-center align-middle" style={{ backgroundColor: '#F2F2F2' }} >
                 <div className='flex h-full w-full'>
           <div className="flex flex-col justify-center align-middle h-full w-full">
            <div className='flex flex-col self-center justify-center w-full'>
              <div className='flex flex-col h-full align-middle'>
              <div className='p-7 font-medium md:text-3xl cursor-pointer' onClick={() => setOpenModal(false)}>
              <Icon icon="iconoir:cancel" />
            </div>
            <div className=" md:px-20 pb-4">
              <div className="md:columns-2 flex md:flex-row flex-col h-full items-center w-full ">
                <Link to="/buyersignup">
                  <div className='flex flex-col md:hover:flex-col-reverse hover:scale-110 items-center md:items-start w-full h-full p-5 px-5'>
                    <div className='w-full'>
                    <h4 className='font-bold text-lg'>Buyer</h4>
                    <p className='md:w-2/3 py-1 md:pr-5' style={{ fontSize:`clamp(2px, 10px, 60px)`}} >Purchase quality products from INFINITY PRODUCT PLACE, prioritising commercial integrity and product quality</p>
                   </div> 
                   <div className='w-full flex justify-center md:justify-start'>
                   <img src="/assets/Frame 427319608.png" alt="" className='md:h-full md:w-11/12 md:aspect-auto aspect-square w-[200px] h-[200px] self-end ' />
                   </div>
                  </div>
                </Link>
                <Link to="/signup">
                  <div className='p-5 px-5 flex flex-col md:hover:flex-col-reverse hover:scale-110 items-center md:items-end w-full h-full'>
                    <div className='w-full flex justify-center md:justify-end'>
                    <img src="/assets/Frame 427319609.png" alt="" className='md:h-full md:w-5/6 md:aspect-auto aspect-square w-[200px] h-[200px]' style={{}} />
                    </div>
                    <div className='md:w-2/3 w-full md:pr-3'>
                      <p className='w-full py-1 text-end' style={{ fontSize:`clamp(2px, 10px, 20px)`}} >Create your business on INFINITY PRODUCT PLACE, optimising branding and business personality to facilitate business growth </p>
                      <h4 className='font-bold text-lg text-end md:pr-6'>Seller</h4>

                    </div>
                  </div>
                </Link>

              </div>
            </div>
              </div>
            </div>
            </div>
           </div>
          </div>
          </div>
        </div>}
    </div>
  )
}
