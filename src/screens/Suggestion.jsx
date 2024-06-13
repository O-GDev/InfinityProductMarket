import React from 'react'
import PostsCards from '../lilcomponents/postsCards'
import Footers from '../lilcomponents/footers'

function Suggestion() {
  return (
    <div className="bg-white" style={{height:'100dvh'}}>
        <div className="pt-10 ">
           <div className="w-full ">
           <div className='p-8'>
            <div className="">
                <h1 className="text-2xl font-bold"> Suggestion</h1>
                <p>Help us improve your expirience with us</p>
                <div>
                  <h5 className='text-[#702EB2] mt-12'>Hint, you can write on how to better any part of our user experience you are any problem with, 
                  while suggesting a solution if you have any </h5>
                </div>
                <div className='flex flex-col'>
                  <input type='email' placeholder='Email' className='my-5 rounded-xl' />
                  <textarea placeholder='Text' className='my-5 rounded-xl h-[40vh]'  />
                </div>
            </div>
{/*  */}
        </div>
        
           </div>
           </div>
    </div>
  )
}

export default Suggestion