import React from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Link } from 'react-router-dom'

export default function Buyerorsellerpage() {
  return (
    <div className='absolute flex w-full h-full p-10'>
    <div className='bg-red-900 w-full h-full'>
    <Link to='/producthome'>
      <h2>Buyer</h2>
      </Link>
      <Link to='/producthome'>
      <h2>Seller</h2>
      </Link>
    </div>
    
    </div>
    
  )
}
