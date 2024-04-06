import React from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Link } from 'react-router-dom'

export default function Choosesociety() {
  return (
    <div className='absolute'>
    <div className='flex flex-col justify-center text-center px-4 '>
    <h2 className='py-2 font-bold text-lg'>IMP is a Societal Platform with two communities.</h2>   
    <h4 className='text-lg'>Select the community you which to thrive in.</h4>   
    </div>
    <div className='relative flex-col justify-center h-full px-12'>
      <h3 className='text-black font-primary font-bold'>THE MARKETS</h3>
      <Uline color='#702EB2' />
      </div>

      <div className='md:columns-2 md:mx-16 mx-5 my-12'>
      <h3 className='flex justify-center self-center font-bold py-1'>INFINITY PRODUCT PLACE</h3>
        <div className='md:columns-2 rounded-xl' style={{backgroundColor:'#D3D3D3'}}>
        
          <img src='/assets/IMG_9517.JPG' className='rounded-xl w-full' style={{}}  />
          <div className='flex flex-col justify-center self-center md:pt-16 pt-5'>
            <p className='md:pt-16 sm:pt-1 px-3 text-center text-xl'>Check out our product showcase, where we bring you the latest and greatest products in a laid-back and informative way!</p>
            <Link to='/buyerorseller' className='flex self-center justify-center'>
            <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Buy/Sell</span></Button>
            </Link>
          </div>
        </div>
        <h3 className='flex justify-center text-center font-bold py-1 md:pt-0 pt-10'>INFINITY SERVICE PLACE</h3>
        <div className='md:columns-2 rounded-xl' style={{backgroundColor:'#D3D3D3'}}>
        <div style={{}}>
        <img src='/assets/medium-shot-woman-posing-studio.jpg' className='rounded-xl w-full' style={{}} />          
        </div>
          <div className='flex flex-col justify-self-center self-center md:pt-20 pt-5'>
            <p className='md:pt-16 sm:pt-3 px-3 text-center text-xl'>Check out our top notch professionals in different fields  of creativity all across the world. </p>
            <Link to='/buyerorseller' className='flex justify-center self-center'>
            <Button><span className='font-bold ' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Let's Deal</span></Button>
            </Link>
            </div>
          
        </div>        
        </div>
        <div className='flex justify-center self-center mx-5 mb-10'>
            <h3 className='font-bold px-1'>NOTE: </h3>
            <h4> Switch between account at user settings.</h4>
        </div>
    </div>
  )
}
