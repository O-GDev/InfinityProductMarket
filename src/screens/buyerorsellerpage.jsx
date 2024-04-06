import React from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Link } from 'react-router-dom'
import App from '../lilcomponents/Triang'
import Triangle from '../lilcomponents/Triang'

export default function Buyerorsellerpage() {
  return (
    <div className=' '>
    <div className='flex justify-center self-center pt-5 h-full' style={{paddingRight:'60%'}}>

    <div class='bg-red-900' className=''>
    <Triangle />
    </div>


    {/* <Link to='/producthome'>
      <h2>Buyer</h2>
      </Link> */}
      {/* <div className=''>         */}
      {/* <div className='self-center h-full' id="box"></div>
      <div className='self-center h-full' id="box1"></div> */}
      {/* </div> */}

      {/* <Link to='/producthome'>
      <h2>Seller</h2>
      </Link> */}
    </div>
    
    </div>
    
  )
}
