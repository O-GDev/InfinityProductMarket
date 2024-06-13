import React from 'react'

export default function Collection({image, opa, pname, pprice, jobtype, padin, name,ppic}) {
  return (
    <div className="py-2">
      
    <div className='flex flex-col bg-transparent shadow-md' >
<img src={image} style={{width:'100%',padding: padin}} className='' />
<div className='flex-col bg-white  self-end px-2 py-2 w-full' style={{opacity:opa}} >
<div className='font-bold flex justify-center text-[60%] md:text-[100%]'> {pname}</div>


  </div>


    </div>
    </div>
  )
}
