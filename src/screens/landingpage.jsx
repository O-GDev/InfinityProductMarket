import React, { Component, useState } from 'react'
import Navbars from '../component/nav'
import { Button, Uline } from '../lilcomponents/style.styles'
import Cards from '../lilcomponents/cards'
import PeoplesChoice from '../lilcomponents/peopleschoiceh'
import Footers from '../lilcomponents/footers'


export class Landingpage extends Component {
   render() {
    return (
      <div className='relative' style={{backgroundColor:'#F2F2F2'}}>
      <div className=''>        
      <Navbars />
      </div>
      <div>
      <div className='relative flex-col h-full px-12 pt-12'>
      <h3 className='text-black font-primary font-bold'>THE MARKETS </h3>
      <Uline color='#702EB2' />
      </div>
      <div className='md:columns-2 p-5'>
        <div className='md:columns-2 rounded-xl my-10 md:mx-0 mx-12 md:my-0 p-5' style={{backgroundColor:'#D3D3D3'}}>
          <img src='/assets/IMG_9517.JPG' className='rounded-xl' style={{height:'400px',width:'100%'}}  />
          <div className='flex flex-col justify-self-center self-center'>
            <p className='pt-16 px-16 text-center italic font-medium' style={{}}>Check out our product showcase, where we bring you the latest and greatest products in a laid-back and informative way!</p>
            <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Let's Deal</span></Button>
          </div>
        </div>
        <div className='md:columns-2 rounded-xl my-10 md:mx-0 mx-12 p-5' style={{backgroundColor:'#D3D3D3'}}>
       
       <img src='/assets/medium-shot-woman-posing-studio.jpg' className='rounded-xl' style={{height:'400px',width:'100%'}} />          
       
         <div className='flex flex-col justify-self-center self-center'>
           <p className='pt-16 px-16 text-center italic font-medium '>Check out our top notch professionals in different fields  of creativity all across the world. </p>
           <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Let's Deal</span></Button>
         </div>
         
       </div>
        </div>
      <div className='relative flex-col h-full px-12 '>
      <h3 className='text-black font-primary font-bold md:text-start '>OUR SERVICES</h3>
      <Uline color='#702EB2' />
      </div>
      <div>
        <div className='md:columns-2 justify-center md:mx-36 my-12 '>
          <div className='w-full flex justify-center'>
          <div className='back w-2/3' 
          style={{backgroundImage:"url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"}}
          >
          {/* <div
           style={{backgroundImage:"url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height:'100%',backgroundPosition:'center'}}
          ></div> */}
           <img src='/assets/corporate-management-strategy-solution-branding-concept.jpg' id='' className='zoomImage' style={{height:'400px',}} />          
       </div>
          </div>
          <div>
          <div className='flex flex-col justify-self-center self-center md:mx-0 mx-16'>
          <h2 className='pt-16 text-center text-lg font-bold font-primary'>Curated Exellence</h2>
            <p className='md:px-16 text-center'>Check out our top notch professionals in different fields  of creativity all across the world. </p>
            <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Learn More</span></Button>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div className='md:columns-2 md:mx-36 my-12'>          
          <div>
          <div className='flex flex-col justify-self-center self-center md:mx-0 mx-16'>
          <h2 className='md:pt-16 text-center text-lg font-bold font-primary'>Community and Connection</h2>
            <p className='md:px-16 text-center'>More than an e-commerce platform, we are a thriving community. INFINITY MARKET PLACE serves as a meeting ground for creators, connoisseurs, and those who appreciate the finer things in life.</p>
            <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Learn More</span></Button>
          </div>
          </div>
          <div className='w-full flex justify-center'>
          <div className='w-2/3 '>
           <img src='/assets/drew-colins-LIEQsu5JuoM-unsplash 2.png' id='zoomImages' className='mr-12' style={{height:'400px'}} />          
       </div>
          </div>
        </div>
      </div>


      <div>
        <div className='md:columns-2 md:mx-36 my-12'>
          <div className='w-full flex justify-center'>
          <div className='p-3 w-2/3 '>
           <img src='/assets/image6 2.png' id='zoomImage' className='' style={{height:'400px'}} />          
       </div>
          </div>
          <div>
          <div className='flex flex-col justify-self-center self-center md:mx-0 mx-16'>
          <h2 className='md:pt-16 text-center text-lg font-bold font-primary'>Trust and Transparency</h2>
            <p className='md:px-16 text-center'>Trust is the cornerstone of INFINITY MARKET PLACE. Rigorous verification protocols ensure the authenticity of creators and the security of every transaction.</p>
            <Button><span className='font-bold' style={{backgroundColor:'transparent',padding:'10px',borderColor:'#702EB2',borderWidth:1,color:'#702EB2'}}>Learn More</span></Button>
          </div>
          </div>
        </div>
      </div>
      <div>
      <div className='relative flex-col h-full px-12' >
      <h3 className='font-primary font-bold text-center ' style={{color:'#2E0853'}}>TOP-RATED</h3>
      </div>
      <div className='flex w-full px-12' style={{justifyContent:'space-between'}}>
        <h4 className='font-semibold ' style={{color:'#2E0853'}}>PRODUCTS</h4>
        <span style={{color:'#2E0853',borderWidth:0.5,borderColor:'#2E0853',borderRadius:20}}><h4 className='font-semibold rounded-md p-1.5'>VIEW ALL</h4></span>
      </div>
      </div>
      </div>
      <div>
        <div className='md:columns-4 gap-14 md:m-10 p-5 md:p-0 lg:p-0 mx-12'>
        <Cards image="/assets/Rectangle 61.png" pname='Cleaning Products' pprice="8000" rate='4.6'/>
      <Cards image="/assets/Rectangle 61-2.png" pname='Nike Sneakers' pprice='28,000' rate='4.6'/>
      <Cards image="/assets/photo-camera-balancing-with-yellow-background.jpg" pname='Camera' pprice='328,000' rate='4.6'/>
      <Cards image="/assets/young-smiling-cheerful-satisfied-positive-600nw-2127045413.jpg.webp" pname='Hermes Birkin Bag' pprice='28,000' rate='4.6'/>          
        </div>
        <div>      
      <div className='flex w-full px-12' style={{justifyContent:'space-between'}}>
        <h4 className='font-semibold p-1.5' style={{color:'#2E0853'}}>PROFESSIONALS</h4>
        <span style={{color:'#2E0853',borderWidth:0.5,borderColor:'#2E0853',borderRadius:20}}><h4 className='font-semibold rounded-md p-1.5'>VIEW ALL</h4></span>
      </div>
      <div className='md:columns-4 sm:columns-1 gap-14 md:m-10 p-5 md:p-0 lg:p-0 mx-12'>
      <Cards image="/assets/premium_photo-1692873058899-624c0f96c5de.webp" pname='Cleaning Products' pprice="8000" opa='0' padin={15} />
      <Cards image="/assets/stock-photo-portrait-of-young-black-man-working-on-farm-standing-in-hothouse-holding-wooden-box-full-of-fresh-2183178705 2.png" pname='Nike Sneakers' pprice='28,000' opa='0' padin={15} />
      <Cards image="/assets/istockphoto-1475370822-612x612.jpg" pname='Camera' pprice='328,000' opa='0' padin={15} />
      <Cards image="/assets/young-smiling-cheerful-satisfied-positive-600nw-2127045413.jpg.webp" pname='Hermes Birkin Bag' pprice='28,000' opa='0' padin={15} />          
        </div>
      </div>
      <div>
      <div className='flex w-full px-12 pb-5' style={{justifyContent:'space-between'}}>
        <h4 className='font-semibold p-1.5' style={{color:'#2E0853'}}>PEOPLE'S CHOICE</h4>
        <span style={{color:'#2E0853',borderWidth:0.5,borderColor:'#2E0853',borderRadius:20}}><h4 className='font-semibold rounded-md p-1.5'>VIEW ALL</h4></span>
      </div>
      <PeoplesChoice /> 
      <Footers />     
      </div>
      </div>
      </div>
    )
  }
}

export default Landingpage