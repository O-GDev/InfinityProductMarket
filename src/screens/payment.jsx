import React, { useState, } from 'react'
import Sidecarousel from '../lilcomponents/sidecarousel'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import Productplacehome from './productplacehome'

export const Payment = (props) => {
  const [selected, setSelected] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
// let selectedO = ;

  let paymentmeans =[
    {
      "image":"/assets/Frame 427319632.png",
    },
    {
      "image":"/assets/Frame 427319633.png",
    },
    {
     "image":"/assets/Frame 427319634.png",
    },
    {
      "image":"/assets/Frame 427319635.png",
    },
    {
      "image":"/assets/Frame 427319636.png",
    },
    {
      "image":"/assets/Frame 427319637.png",
    }

  ]  
  const select = () => {
    // if (index == )
    const activeNav = document.querySelectorAll("img");

    activeNav.forEach(activenav => {
      activenav.addEventListener("click", () => {
        document.querySelector('.selected')?.classList.remove('selected');
        activenav.classList.add('selected')
      })
    })
  }
  const handleClick =()=>{
    if (!selected){
      setError(true)
    }else{
    navigate('/paymentdetails',{selected})
    setError(false)
    }
  }
//   initial = {{ opacity: 0.3, scale: 0.5 }
// }
// whileInView = {{ opacity: 1, scale: 1 }}
// transition = {{ duration: 1 }}
  return (
    <div className='absolute flex flex-col w-full full'>
      <Productplacehome />
    <div className='fixed inset-0 h-full bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl ' style={{}}>
    <div className='h-full sm:py-10 p-5 md:p-10 flex flex-col justify-center self-center ' style={{}}>
      <div className='md:columns-2 flex w-full max-h-fit rounded-2xl self-center ' style={{backgroundColor:'#F2F2F2'}}>
      <div className='flex flex-col justify-center h-full w-full md:pb-10'>
                    <div className='pl-10 pt-5' onClick={() => [props.handleClick("subscribe")]} >
         <Icon icon="lets-icons:arrow-left-long-light" className='md:w-[2rem] md:h-[2rem]' />
         </div>
         {error && 
                                <div className='container'>                                     
                                <div className='flex justify-center relative rounded-md'  style={{backgroundColor:'#F9F9E0'}}  ><h5 className='text-sm p-4 text-red-400 text-[70%] md:text-[100%]'>Please select a payment method!</h5></div>
                                </div> }
         <div className='columns-3 gap-5 p-5 md:px-20 md:pt-28 justify-between w-full self-center'>  
          {paymentmeans.map((items, index) =>(                    
                    <div className='relative h-fit pb-16'>
                {/* <Icon id='img' icon="lets-icons:check-fill" className='w-9 h-9 absolute right-10'  style={{color: "#702EB2"}} /> */}
            <img src={items.image} onClick={() =>[select(), setSelected(index)]} className="flex self-center cursor-pointer"  width='70%' height='70%' alt='' />
                
                  </div>
          ))}        
         </div>
            
              <div className='flex justify-center self-center p-10 pt-12' onClick={handleClick}>
                <div className='p-3' style={{ marginTop: 0.5, color: '#702EB2', borderWidth: 0.5, borderColor: '#702EB2' }}> 
                 CONTINUE</div>
              </div>
      </div>

      
        
         <div className=' w-full hidden md:flex'>
         <Sidecarousel />
         </div>
      </div>
    </div>
  </div>
  </div>
  )
}
