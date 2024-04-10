import React from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Link } from 'react-router-dom'
// import App from '../lilcomponents/Triang'
// import Triangle from '../lilcomponents/Triang'
import '../App.css'; // Import CSS for styling

export default function Buyerorsellerpage(props) {
  return (
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl'>
    <div className='flex justify-center self-center pt-5 h-full' style={{paddingRight:'60%'}}>

    <div class='bg-red-900' className=''>
    
    <Link to='' onClick={() => props.handleClick('signup')}>
    <div class="triangle1" id="zooms" >        
    </div>
    </Link>
    <Link to='' onClick={() => props.handleClick('signup')}>
    <div class="triangle2" id="zooms" >        
    </div>
    </Link>

   <div className=' m-5 absolute bg-transparent' id='' 
   style={{width:'45%',height:'70%'}}
   >
   <div className=''>        
    <div className='absolute p-3 rounded-2xl m-24 ' style={{backgroundColor:'#E7E6E6'}}><h4>Buyer</h4></div>  
    </div>
    <div className='flex self-center justify-end p-10 h-full'>        
    <div className='relative p-3 rounded-2xl self-end mr-10' style={{backgroundColor:'#702EB2',}}><h4>Seller</h4></div>  
    </div> 
   </div> 
    


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
