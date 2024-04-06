import React from 'react';
import '../App.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

// Triangle component
const Triangle = ({ }) => {
  return (
    <div className=''>
    
    <Link to=''>
    <div class="triangle1" id="zooms" >        
    </div>
    </Link>
    <Link to=''>
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
  );
};

export default Triangle;
