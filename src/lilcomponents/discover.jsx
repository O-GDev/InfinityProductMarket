import React from 'react'
import Reels from './reels'

function Discover() {
  return (
<div className='h-fit pt-10 p-5'>
    <div>        
      <h2 className='font-semibold text-lg'>Get Discovered!</h2>
      <p>Showcase your  product content creation on discovery page and get a chance to be seen by People all around the world.</p>
    </div>
    <div className='flex flex-col md:flex-row justify-between my-5'>   
      <div><h6 className='pl-3 text-[#702EB2] font-semibold'>Paid Ads</h6></div>         
          <div className='bg-white rounded-md flex flex-row justify-center self-center ml-3' style={{width:'250px'}}>
          <img src='/assets/Search.png' className='w-4 h-4 my-2 ml-5 font-bold'  />
          <input placeholder='Search categories' className='text-sm outline-none pl-1 w-full font-sembold rounded-md' /></div>
          </div>

          <div>
            <div className="flex flex-row">
                <div className="flex flex-wrap gap-3 justify-center lg:justify-between">
                    <div className="">
                    <img src='/assets/Frame 427320011.png' className='h-[300px] flex' alt='' />
                    <h6 className='text-[#702EB2]'>Streetfabrics - 9 Sept 2024</h6>
                    <div className='flex'>                        
                    <h6 className='bg-red-600 px-2 text-white'>New</h6>
                    </div>
                    <div className="flex justify-between">
                        <h6 className='lg:w-3/4'>Official video of @Streetfabrics new street wear collection</h6>
                        <div>   
                        <h6 className='bg-[#702EB2] px-2 text-white'>Shop</h6> 
                        </div>                       
                    </div>
                    </div>
                    <div className='px-2 flex flex-wrap lg:flex-col gap-5'>
                        <div className="flex flex-wrap gap-3 lg:flex-col lg:mt-2">
                        <img src='/assets/Frame 427320018.png' className='lg:w-[300px] h-[150px] flex w-full' alt='' />
                        <div className='leading-4 w-full'>
                        <h6 className='text-[#702EB2] text-[80%]'>Streetfabrics - 9 Sept 2024</h6>
                        <h6 className='font-bold text-[60%]'>New Kai cenat x Nike kicks</h6>
                        <h6 className='text-[60%]'>coming soon only on IMP
                        pre-order now </h6>
                        <div className='flex justify-between'>
                        <h6 className='bg-red-600 p-2 text-white'>New</h6>                              
                    <h6 className='bg-[#702EB2] p-2 text-white'>Shop</h6>   
                        </div>
                        </div>
                        </div>
                        <div className="flex flex-wrap gap-3 lg:flex-col lg:mt-2 ">
                        <img src='/assets/Frame 427320017.png' className='lg:w-[300px] h-[150px] flex w-full' alt='' />
                        <div className='leading-4 w-full'>
                        <h6 className='text-[#702EB2] text-[80%]'>Streetfabrics - 9 Sept 2024</h6>
                        <h6 className='font-bold text-[60%]'>New Kai cenat x Nike kicks</h6>
                        <h6 className='text-[60%]'>coming soon only on IMP
                        pre-order now </h6>
                        <div className='flex justify-between'>
                        <h6 className='bg-red-600 p-2 text-white'>New</h6>                              
                    <h6 className='bg-[#702EB2] p-2 text-white'>Shop</h6>   
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className='lg:columns-5 md:columns-2 pt-12'>
            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='350px' />
            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='350px' />
            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='350px' />
            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='350px' />
            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='350px' />        
          </div>
</div>
  )
}

export default Discover