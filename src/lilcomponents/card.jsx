import React from 'react'

export default function Cards1({image, opa, pname, pprice, jobtype, padin, name,ppic}) {
  return (
    <div className='flex flex-col bg-transparent pb-3' >
<img src={image} style={{height:'150px',width:'100%',padding: padin}} className='' />
<div className='flex-col bg-white  self-end px-2 py-2 w-full' style={{opacity:opa}} >
<div className='font-bold text-md'> {pname}</div>
<div className='flex flex-row justify-between'>
    <div>
    <div className='flex flex-row self-center'>
    <div>
        <img src={ppic} style={{width:'20px',height:'20px'}} className='flex justify-center self-center rounded-full' />        
    </div>
    <p style={{fontSize:'10px',padding:2}}>{name} </p>
</div>
<div className='flex flex-row'>
 <img src='/assets/Shop.png' style={{width:'20px',height:'20px',}} className='flex justify-center self-center' />   
<div style={{fontSize:'12px'}}>Shop.{jobtype} </div>
</div>
    </div>
    <div className='flex justify-center self-center text-sm p-2 rounded-xl' style={{backgroundColor:'#D9D9D9', color:"#284797"}}>
       N {pprice}
    </div>
</div>
{/* <div className='text-red-600'># {pprice} </div>
<div className='flex text-white justify-end self-end pt-5'>
   <span style={{backgroundColor:'#6E4C8B',paddingTop:-50}} className='flex px-1 rounded-2xl'>
    <img src='/assets/rate.png' className='flex self-center justify-center' style={{width:'15px',height:'15px',}} />
    <p className='text-sm px-1 font-primary'>{rate}</p> */}
    {/* </span>
</div> */}

  </div>


    </div>
  )
}
