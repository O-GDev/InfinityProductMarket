import React from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'

export default function PostsCards({ image, opa, pname, pprice, jobtype, padin, name, ppic }) {
    return (
        <div className='w-fit mb-5'>
        <div className='flex flex-col mt-5 md:mt-0 gap-3 md:h-full bg-transparent border rounded-xl shadow-md w-fit bg-blackv ' >
            <img src={image} style={{ width: '100%', padding: padin }} className='' />
            <div className="px-1">
            <div className='flex-col self-end py-2 w-full h-full flex rounded-lg ' style={{ opacity: opa, }} >
                <div className='font-semibold text-sm flex flex-row justify-between'>
                    <div className='text-t' style={{ }}> {pname} </div>
                    <div className='text-red-700 text-t' style={{}}>N {pprice}</div> </div>
                <div >
                    <div className='flex flex-row justify-between pt-2'>
                        <div className='flex flex-row self-center items-center'>
                            <div>
                                <img src={ppic} style={{ width: '20px', height: '20px' }} className='flex justify-center self-center rounded-full' />
                            </div>
                            <p className='self-center text-sm'>{name} </p>
                        </div>
                        <div className='flex flex-row pl-2'>
                            <img src='/assets/Shop.png' style={{ width: '20px', height: '20px', }} className='flex justify-center self-center' />
                            <div className='self-center text-sm' style={{}}>Shop.{jobtype} </div>
                        </div>
                    </div>
                    {/* <div className='flex justify-center self-center text-sm p-2 rounded-xl' style={{ backgroundColor: '#D9D9D9', color: "#284797" }}>
                        N {pprice}
                    </div> */}
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


        </div>
        </div>
    )
}
