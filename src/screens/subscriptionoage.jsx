import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Checkbox } from 'flowbite-react';
import Sidecarousel from '../lilcomponents/sidecarousel';
import { Link } from 'react-router-dom';
import { CustomScroll } from 'react-custom-scroll';

export default function Subscriptionoage(props) {
  return (
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl flex justify-center align-middle self-center ' style={{}}>
    <div className='h-full sm:py-10 p-5  md:p-10 ' style={{}}>
      <div className='md:columns-2 flex md:flex-row flex-col gap-0 h-full rounded-2xl overflow-auto md:overflow-hidden' style={{backgroundColor:'#F2F2F2'}}>
         {/* <CustomScroll heightRelativeToParent="calc(100%)" > */}
         <div>
        <div className='flex h-full'>
        <div className='flex flex-col justify-center align-middle h-full w-full'>
          <div className='flex flex-col self-center justify-center w-full'>
          <div className='flex flex-col '>
            <div className=' w-[89%] rounded-xl fixed md:hidden'>
            <div className='w-full rounded-t-2xl h-10 p-5 drop-shadow-0 z-50' style={{backgroundColor:'#F2F2F2'}} >
              <div className='md:pl-10 pl-5 cursor-pointer ' onClick={() => [props.handleClick("signup")]}>
         <Icon icon="lets-icons:arrow-left-long-light" className='md:w-[2rem] md:h-[2rem]' />
         </div>
              </div>
            
              {/* <div className='w-[87%] rounded-xl fixed flex z-10' style={{backgroundColor:'#F2F2F2'}} >
              <div className='md:pl-10 pl-5 pt-10 cursor-pointer ' onClick={() => [props.handleClick("signup")]}>
         <Icon icon="lets-icons:arrow-left-long-light" className='md:w-[2rem] md:h-[2rem]' />
         </div>
              </div> */}
            </div>
         <div className="pt-20 md:pt-10 flex flex-col justify-center w-full">
         <h3 className='px-10 pt-1 text-xl font-semibold'>Choose a plan</h3> 
          <p className='px-6' style={{fontSize:'12px'}}>choosing a plan for your business will help set your <br />
business on the right part</p>
          <h3 className='text-center font-bold pt-5'>SUBSCRIPTIONS</h3>
          <div className='md:columns-3 md:flex flex-row w-full gap-1 px-5 pt-2  ' style={{height:''}}>
                <Link to='' onClick={() => [props.handleClick("payment")]} className='w-full'>
                  <div id="zoom" className='py-2 ml-2 rounded-3xl shadow-2xl min-w-fit' style={{ backgroundColor: '#B4B4B4', }}>
                    <h5 className='text-center p-2'>No Plan</h5>
                    <h4 className='text-center pt-1 opacity-50' ><s>PAY</s></h4>
                    <h6 className='text-center pt-2' style={{ fontSize: '50%' }}>FOR START UPS AND SMALL SCALE BUSINESSES </h6>
                    <div className='py-1' style={{ backgroundColor: '#8D66B5' }}>
                      <h3 className='text-center p-1'>FREEMIUM</h3>
                    </div>
                    <div>
                      <h5 className='pl-2 pt-4'>what do you get?</h5>
                      <ul className='pl-5 py-1'>
                        <li className='text-sm' style={{ fontSize: '60%' }}>An IMP default store on IPP</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>2 Product featured on New Arrivals</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Limited Product Upload Space</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Access to more seller templates</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Limited life span</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Slightly higher taxes</li>
                      </ul>
                    </div>
                  </div>
                </Link>

                <Link to='' onClick={() => props.handleClick('payment')} className='w-full'>
                  <div id='zoom' className='py-2 ml-2 rounded-3xl shadow-2xl' style={{ backgroundColor: '#DEDEDE', }}>
                    <h5 className='text-center p-2'>A Plan</h5>
                    <h4 className='text-center z-10' style={{ lineHeight: 1 }} ><s className='opacity-50'>12 000</s><br /><h4 className='flex justify-center self-center '> 6500<h6 className='flex self-center ' style={{ fontSize: '60%', paddingLeft: 0.5 }}>Monthly</h6></h4></h4>
                    <h6 className='text-center pt-2' style={{ fontSize: '50%' }}>MEDIUM SCALE BUSINESSES </h6>
                    <div className='py-1' style={{ backgroundColor: '#8D66B5' }}>
                      <h3 className='text-center p-1'>Start 7-day trial</h3>
                    </div>
                    <div>
                      <h5 className='pl-2 pt-4' style={{ fontSize: '80%' }}>what do you get?</h5>
                      <ul className='pl-5 py-1'>
                        <li className='text-sm' style={{ fontSize: '60%' }}>An IMP default store on IPP</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>2 Product featured on New Arrivals</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Limited Product Upload Space</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Access to more seller templates</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Limited life span</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Slightly higher taxes</li>
                      </ul>
                    </div>
                  </div>
                </Link>




                <Link to='' onClick={() => props.handleClick('payment')} className='w-full'>
                  <div id='zoom' className='py-2 ml-2 rounded-3xl shadow-2xl' style={{ backgroundColor: '#FFFEFC', }}>
                    <h5 className='text-center p-2 z-10'>Business Plan</h5>
                    <h4 className='text-center ' style={{ lineHeight: 1 }} ><s className='opacity-50'>30 000</s><br /><h4 className='flex justify-center self-center '> 12,000<h6 className='flex self-center ' style={{ fontSize: '60%', paddingLeft: 0.5 }}>Monthly</h6></h4></h4>
                    <h6 className='text-center pt-2' style={{ fontSize: '50%' }}>LARGE SCALE BUSINESS PLANS </h6>
                    <div className='py-1' style={{ backgroundColor: '#8D66B5' }}>
                      <h3 className='text-center p-1'>Start 7-day trial</h3>
                    </div>
                    <div>
                      <h5 className='pl-2 pt-4' style={{ fontSize: '80%' }}>what do you get?</h5>
                      <ul className='pl-5 py-1'>
                        <li className='text-sm' style={{ fontSize: '60%' }}>An IMP default store on IPP</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>2 Product featured on New Arrivals</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Limited Product Upload Space</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Access to more seller templates</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Limited life span</li>
                        <li className='text-sm' style={{ fontSize: '60%' }}>Slightly higher taxes</li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>


          <div className='p-2 px-5 pt-3'>
            <h5 className='text-start' style={{fontSize:'12px'}}>Infinity Product Place is the tool for you to be in charge of your business by creating a direct relationship with your customers.</h5>
          </div>

              <div className='flex flex-col pr-5 pb-10'
                // style={{ backgroundColor: '#CBCBCB' }}
              >
            <div className='flex self-center justify-center pt-2'>
            <h5 className='text-center text-sm w-3/4 px-4'>INFINITY PRODUCT PLACE is a recognised as a product marketing community alongside infinity service place(ISP) created by WAJISINFINITY LTD. all right reserved</h5>
           </div>
             <div className=' flex md:flex-row flex-col justify-between align-middle self-center py-5'>
            <div></div>
              <h5 className=' md:w-2/3 text-sm text-center pl-5'>Make a realistic income with your Skills, Knowledge, 
Talents and other creative craft you possess
on <span style={{color:'#34A853'}}>ISP</span>  </h5>
              <div className='flex self-center' >
                <h4 className='p-2 px-3 rounded-xl text-white flex self-center' style={{backgroundColor:'#702EB2'}}>Join ISP</h4>
              </div>

         </div>
             </div>
          </div>
             
            </div>
          </div>

             

          </div>
        </div>
        </div>
         {/* </CustomScroll> */}
         <div className=' w-full md:flex hidden '>
          <Sidecarousel />
         </div>
      </div>
    </div>
  </div>
  )
}
