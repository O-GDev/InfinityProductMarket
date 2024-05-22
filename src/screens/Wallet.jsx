import React from 'react'
import PostsCards from '../lilcomponents/postsCards'
import Footers from '../lilcomponents/footers'

function Wallet() {
  return (
    <div className="bg-white" style={{height:'100dvh'}}>
        <div className="pt-10 ">
           <div className="w-full ">
           <div className='p-8'>
            <div className="">
                <h6 className="pb-10">Wallet</h6>
            </div>

            <div className='flex rounded-lg w-full' style={{backgroundColor:`rgba(245, 235, 255, 0.6)`}}>
                <div className='w-full'>
                <div className='flex justify-end w-full'>
                    <div className='flex flex-col justify-end p-10'>
                        <h4 className='text-center' style={{color:'#FF0000'}}>Total Balance</h4>
                        <h2 className='text-center' style={{color:'#FF0000'}}>$10,000</h2>
                    </div>
                </div>
                <div className='w-full px-20 flex flex-col'>
                <div>
                    <div className='pl-3'>Add Cash</div>
                    <div className='border-2 rounded-2xl p-5'>
                        <div>
                            
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

        </div>
        
           </div>
           </div>
    </div>
  )
}

export default Wallet