import React from 'react'

export default function Cards({ image, opa, pname, pprice, rate, padin, radius,width, height }) {
  return (
    <div className="p-2 lg:p-10">
      <div className='relative flex bg-transparent justify-center' >
      <img src={image} style={{padding: padin }} className={`rounded-${radius} lg:h-${height} lg:w-${width} aspect-square`} />
<div className='absolute p-1 w-full self-end'>
<div className=' bg-white rounded-md px-2 flex flex-col justify-between' style={{opacity:opa}} >
  <div>    
<div className=' text-[70%] lg-[100%]'> {pname}</div>
<div className='text-red-600 text-[70%] lg-[100%]'># {pprice} </div>
  </div>
<div className='text-white self-end py-2'>
   <span style={{backgroundColor:'#6E4C8B'}} className='flex px-1 rounded-2xl self-end  bottom-0'>
    <img src='/assets/rate.png' className='flex self-center justify-center' style={{width:'15px',height:'15px',}} />
    <p className='self-center px-1 font-primary text-[70%] lg-[100%]'>{rate}</p>
    </span>
</div>

  </div>
</div>

    </div>
    </div>
  )
}
