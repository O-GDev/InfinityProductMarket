import React from 'react'
import Sidecarousel from '../lilcomponents/sidecarousel'
import { Link } from 'react-router-dom'

export const Payment = (props) => {
//   initial = {{ opacity: 0.3, scale: 0.5 }
// }
// whileInView = {{ opacity: 1, scale: 1 }}
// transition = {{ duration: 1 }}
  return (
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl ' style={{}}>
    <div className='h-full sm:py-10 p-5  md:p-10 ' style={{}}>
      <div className='md:columns-2 h-full ' style={{backgroundColor:'#F2F2F2'}}>
      <div className='flex flex-col h-full'>
      <div className='md:columns-3 gap-3 p-12 pt-28'>
        <img src='/assets/International.png' className='flex self-center'  width='60px' height='60px' alt='' />
        <img src='/assets/International (1).png' className='flex self-center'  width='60px' height='60px' alt='' />
        <img src='/assets/International (2).png' className='flex self-center'  width='60px' height='60px' alt='' />
      </div>

      <div className='md:columns-3 gap-3 p-12'>
        <img src='/assets/International (3).png' className='flex self-center'  width='60px' height='60px' alt='' />
        <img src='/assets/International (4).png' className='flex self-center'  width='60px' height='60px' alt='' />
        <img src='/assets/International (5).png' className='flex self-center'  width='60px' height='60px' alt='' />
     </div>

      <div className='p-12'>
      <img src='/assets/International (6).png' className='flex self-center'  width='60px' height='60px' alt='' />
            </div>
            
            <Link to='' onClick={() => props.handleClick('paymentdetails')}>
              <div className='flex justify-end self-end p-10 pt-12'>
                <div className='p-3' style={{ marginTop: 0.5, color: '#702EB2', borderWidth: 0.5, borderColor: '#702EB2' }}>CONTINUE</div>
              </div>
            </Link>
      </div>

      
        
         <div className='h-full opacity-0 md:opacity-100'>
         <Sidecarousel />
         </div>
      </div>
    </div>
  </div>
  )
}

