import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LoggedinNav = () => {
  return (
    <><div>
      <nav className='w-full' style={{position:'fixed',backgroundColor:'#F2F2F2'}}>
      <div className='flex px-10 py-3' style={{ justifyContent: 'space-between' }}>
        <div className='flex flex-row'>
          <img src='/assets/2 2 (1).png' style={{ width: '60px', height: '60px' }} />
          <div className='bg-white flex flex-row justify-center self-center'>
          <img src='/assets/Search.png' className='w-4 h-4 my-3 ml-5 font-bold'  />
          <input placeholder='Search for brands or categories' className='text-sm outline-none pl-1 w-52 font-sembold' /></div>
          </div>
        <ul className="inline justify-center self-center">
          <li className="inline px-5 font-primary font-semibold"><Link to='/'>Home</Link> </li>
          <li className="inline px-5 font-primary font-semibold"> <Link to='/todaydeal'>Today's Deal</Link> </li>
          <li className="inline px-5 font-primary font-semibold"><Link to=''>Marketing</Link></li>
          <li className="inline px-5 font-primary font-semibold"><Link to=''>Store</Link></li>
          <li className="inline px-5 font-primary font-semibold"><Link to=''>Cart</Link></li>
         <li className='inline pl-5 pr-2 font-primary font-semibold'>            
            Adebola Makinde
             {/* {sellername} */}
             </li>
          <li className="inline pr-5 mt-5 font-primary font-semibold rounded-full bg-black" style={{width:'170px',height:'170px'}}> 
         </li>


         </ul>
      </div>
      <div className='absolute w-full text-white'>
    {/* <Navmenu />   */}
      <div className='' style={{fillOpacity:1,opacity:1}}>
      <div className='flex flex-row justify-center opacity-65 p-3 mx-36 shadow-outline' style={{backgroundColor:'#F2F2F2'}}>
      <h3 className='text-black font-semibold px-2'>Top Tags:</h3>
      <h3 className='text-black font-semibold px-2'>Gadgets</h3>
      <h3 className='text-black font-semibold px-2'>Clothing/Wears</h3>
      <h3 className='text-black font-semibold px-2'>Appliances</h3>
      <h3 className='text-black font-semibold px-2'>Cars</h3>
      <h3 className='text-black font-semibold px-2'>Electronics</h3>
      <h3 className='text-black font-semibold px-2'>Face Products</h3>
      <h3 className='text-black font-semibold px-2'>Funiture</h3>
      <h3 className='text-black font-semibold px-2'>Automobile</h3>
      <h3 className='text-black font-semibold px-2'>Cosmetics</h3>
      <h3 className='text-black font-semibold px-2'>Others:</h3>

    </div>
      </div>
    
    </div>  
      {/* <hr style={{height:0.0001}} ></hr> */}
    </nav>
    </div>
    <Outlet />
    </>
  )
}

export default LoggedinNav
