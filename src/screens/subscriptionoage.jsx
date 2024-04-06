import React from 'react'
import { Icon } from '@iconify/react';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link } from 'react-router-dom';

export default function Subscriptionoage() {
  return (
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl' style={{}}>
    <div className='h-full sm:py-10 p-5  md:p-20 ' style={{}}>
      <div className='md:columns-2 h-full ' style={{backgroundColor:'#F2F2F2'}}>
          <div className=' h-full '>
          <div className='pt-10 pb-3'>
          <h3 className='px-10 text-xl font-semibold'>Choose a plan</h3> 
          <p className='px-6'>choosing a plan for your business will help set your <br />
business on the right part</p>
          <h3 className='text-center font-bold pt-5'>SUBSCRIPTIONS</h3>
          </div>
          <div className='md:columns-3 gap-1 ' style={{height:'100%'}}>
          <div id="zoom" className='py-2 ml-2 rounded-3xl shadow-2xl' style={{backgroundColor:'#B4B4B4',}}>
          <h5 className='text-center p-2'>No Plan</h5>
          <h4 className='text-center pt-1 opacity-50' ><s>PAY</s></h4>
          <h6 className='text-center pt-2' style={{fontSize:'50%'}}>FOR START UPS AND SMALL SCALE BUSINESSES </h6>
          <div className='py-1' style={{backgroundColor:'#8D66B5'}}>
            <h3 className='text-center p-1'>FREEMIUM</h3>
          </div>
          <div>
          <h5 className='pl-2 pt-4'>what do you get?</h5>
          <ul className='pl-5 py-1'>
            <li className='text-sm' style={{fontSize:'60%'}}>An IMP default store on IPP</li>
            <li className='text-sm' style={{fontSize:'60%'}}>2 Product featured on New Arrivals</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Limited Product Upload Space</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Access to more seller templates</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Limited life span</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Slightly higher taxes</li>
          </ul>
          </div>
          </div>

          <div id='zoom' class="initial" className='py-2 ml-2 rounded-3xl shadow-2xl' style={{backgroundColor:'#DEDEDE',}}>
          <h5 className='text-center p-2'>A Plan</h5>
          <h4 className='text-center ' style={{lineHeight:1}} ><s className='opacity-50'>12 000</s><br /><h4 className='flex justify-center self-center '> 6500<h6 className='flex self-center ' style={{fontSize:'60%',paddingLeft:0.5}}>Monthly</h6></h4></h4>
          <h6 className='text-center pt-2' style={{fontSize:'50%'}}>MEDIUM SCALE BUSINESSES </h6>
          <div className='py-1' style={{backgroundColor:'#8D66B5'}}>
            <h3 className='text-center p-1'>Start 7-day trial</h3>
          </div>
          <div>
          <h5 className='pl-2 pt-4' style={{fontSize:'80%'}}>what do you get?</h5>
          <ul className='pl-5 py-1'>
            <li className='text-sm' style={{fontSize:'60%'}}>An IMP default store on IPP</li>
            <li className='text-sm' style={{fontSize:'60%'}}>2 Product featured on New Arrivals</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Limited Product Upload Space</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Access to more seller templates</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Limited life span</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Slightly higher taxes</li>
          </ul>
          </div>
          </div>


          <div id='zoom' className='py-2 ml-2 rounded-3xl shadow-2xl' style={{backgroundColor:'#FFFEFC',}}>
          <h5 className='text-center p-2'>Business Plan</h5>
          <h4 className='text-center ' style={{lineHeight:1}} ><s className='opacity-50'>30 000</s><br /><h4 className='flex justify-center self-center '> 12,000<h6 className='flex self-center ' style={{fontSize:'60%',paddingLeft:0.5}}>Monthly</h6></h4></h4>
          <h6 className='text-center pt-2' style={{fontSize:'50%'}}>LARGE SCALE BUSINESS PLANS </h6>
          <div className='py-1' style={{backgroundColor:'#8D66B5'}}>
            <h3 className='text-center p-1'>Start 7-day trial</h3>
          </div>
          <div>
          <h5 className='pl-2 pt-4' style={{fontSize:'80%'}}>what do you get?</h5>
          <ul className='pl-5 py-1'>
            <li className='text-sm' style={{fontSize:'60%'}}>An IMP default store on IPP</li>
            <li className='text-sm' style={{fontSize:'60%'}}>2 Product featured on New Arrivals</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Limited Product Upload Space</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Access to more seller templates</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Limited life span</li>
            <li className='text-sm' style={{fontSize:'60%'}}>Slightly higher taxes</li>
          </ul>
          </div>
          </div>

          </div>   
          </div>
         <div className='bg-red-900 h-full opacity-0 md:opacity-100'>
          <Sidecarousel />
         </div>
      </div>
    </div>
  </div>
  )
}
