import React from 'react'

export default function Cards({ image, opa, pname, pprice, rate, padin, radius,width, height }) {
  return (
    <div className='relative flex bg-transparent mb-5' >
      <img src={image} style={{ height: height, width: width, padding: padin }} className={`rounded-${radius}`} />
<div className='absolute flex-col bg-white h-24 self-end rounded-md px-2' style={{width:'97%',margin:5,opacity:opa}} >
<div> {pname}</div>
<div className='text-red-600'># {pprice} </div>
<div className='flex text-white justify-end self-end pt-5'>
   <span style={{backgroundColor:'#6E4C8B',paddingTop:-50}} className='flex px-1 rounded-2xl'>
    <img src='/assets/rate.png' className='flex self-center justify-center' style={{width:'15px',height:'15px',}} />
    <p className='text-sm px-1 font-primary'>{rate}</p>
    </span>
</div>

  </div>

    </div>
  )
}
