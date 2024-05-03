import React, { useState } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'


export default function Choosesociety() {
  const rand = Math.floor(Math.random() * 200000000000 - 100)
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='absolute'>
      <div className='flex flex-col justify-center text-center px-4 '>
        <h2 className='py-2 font-bold text-lg'>IMP is a Societal Platform with two communities.</h2>
        <h4 className='text-lg'>Select the community you which to thrive in.</h4>
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

      <div className='md:columns-2 md:mx-16 mx-5 my-12'>
        <h3 className='flex justify-center self-center font-bold py-1 pb-5'>INFINITY PRODUCT PLACE</h3>

        <div className='md:columns-2 rounded-xl' style={{ backgroundColor: '#D3D3D3' }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -150 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            // whileInView="visible"
            whileInView="visible"
            transition={{ duration: 1, }}>
            <img src='/assets/IMG_9517.JPG' className='rounded-xl w-full' style={{}} />
          </motion.div>
          <div className='flex flex-col justify-center self-center md:pt-16 pt-5'>
            <motion.p

              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='md:pt-16 sm:pt-1 px-3 text-center text-xl italic font-medium' style={{}}>
              Check out our product showcase, where we bring you the latest and greatest products in a laid-back and informative way!</motion.p>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='flex flex-col justify-self-center self-center'>
              <div onClick={() => setOpenModal(true)} className='flex self-center justify-center'>
                <Button><span className='font-bold' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Buy/Sell</span></Button>
              </div>
            </motion.div>
          </div>
          {/* <div className='flex flex-col justify-center self-center md:pt-16 pt-5'>
            <p className='md:pt-16 sm:pt-1 px-3 text-center text-xl italic font-medium'>Check out our product showcase, where we bring you the latest and greatest products in a laid-back and informative way!</p>
            <Link to={`/reg/${rand}`} className='flex self-center justify-center'>
            <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Buy/Sell</span></Button>
            </Link>
          </div> */}
        </div>
        <h3 className='flex justify-center text-center font-bold py-1 md:pt-0 pt-10 pb-5'>INFINITY SERVICE PLACE</h3>
        <div className='md:columns-2 rounded-xl' style={{ backgroundColor: '#D3D3D3' }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 150 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            // whileInView="visible"
            whileInView="visible"
            transition={{ duration: 1, }}
            style={{}}>
            <img src='/assets/medium-shot-woman-posing-studio.jpg' className='rounded-xl w-full' style={{}} />
          </motion.div>
          <div className='flex flex-col justify-self-center self-center md:pt-20 pt-5'>
            <motion.p
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='md:pt-16 sm:pt-3 px-3 text-center text-xl italic font-medium '>Check out our top notch professionals in different fields  of creativity all across the world. </motion.p>
            <motion.div
              className='flex flex-col justify-self-center self-center'
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div onClick={() => setOpenModal(true)} className='flex justify-center self-center'>
                <Button><span className='font-bold ' style={{ backgroundColor: 'transparent', padding: '10px', borderColor: '#702EB2', borderWidth: 1, color: '#702EB2' }}>Let's Deal</span></Button>
              </div>
            </motion.div>
            {/* <p className='md:pt-16 sm:pt-3 px-3 text-center text-xl italic font-medium'>Check out our top notch professionals in different fields  of creativity all across the world. </p>
            <Link to={`/reg/${rand}`} className='flex justify-center self-center'>
            <Button><span className='font-bold ' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Let's Deal</span></Button>
            </Link> */}
          </div>

        </div>
      </div>
      <div className='flex justify-center self-center mx-5 mb-10'>
        <h3 className='font-bold px-1'>NOTE: </h3>
        <h4> Switch between account at user settings.....</h4>
      </div>
      {openModal &&
        <div className='inset-0 fixed h-full flex p-24 px-56  bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl' >
          <div className=" h-full flex flex-col justify-center rounded-3xl" style={{ backgroundColor: '#F2F2F2' }} >
            <div className='pl-7 pb-5 font-medium text-3xl cursor-pointer' onClick={() => setOpenModal(false)}>
              <Icon icon="iconoir:cancel" />
            </div>
            <div className=" pl-36">
              <div className="md:columns-2 h-full ">
                <Link to={`/reg/${rand}`}>
                  <div className='flex flex-col self-center justify-center '>
                    <h4 className='font-bold text-lg'>Buyer</h4>
                    <p className='w-2/3 py-1 pr-5' style={{ fontSize: '12px' }} >Purchase quality products from INFINITY PRODUCT PLACE, prioritising commercial integrity and product quality</p>
                    <img src="/assets/Frame 427319608.png" alt="" className='h-2/3 w-3/5' />
                  </div>
                </Link>
                <Link to={`/reg/${rand}`}>
                  <div className='w-full'>
                    <img src="/assets/Frame 427319609.png" alt="" className='h-2/3 w-3/5 ' style={{}} />
                    <div className='w-2/3 pr-3'>
                      <p className='w-full py-1 pr-5 text-end' style={{ fontSize: '12px' }} >Create your business on INFINITY PRODUCT PLACE, optimising branding and business personality to facilitate business growth </p>
                      <h4 className='font-bold text-lg text-end pr-6'>Seller</h4>

                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}
