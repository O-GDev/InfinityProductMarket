import React from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Reels({ image, opa, pname, pprice, rate, padin, radius, width, height, hashtags,ppic,name,jobtype }) {
    return (
        <div className={`relative flex bg-transparent mb-5 shadow-lg rounded-${radius} mx-0`}  >
            <img src={image} style={{ height: height, width: width, padding: padin }} className={`rounded-${radius}`} />
            <div className='absolute self-end w-full' style={{opacity: opa }} >
                <div className='flex justify-end self-end pr-5'>                    
                    <div className='flex flex-col'>
                        <Icon icon="bi:heart" width="1.5rem" height="1.5rem" style={{ color: '#702eb2', paddingLeft: '4px', paddingBottom:'3px' }} />
                        <Icon icon="iconoir:message" width="1.5rem" height="1.5rem" style={{ color: '#702eb2', paddingLeft: '4px', paddingBottom:'3px' }} />
                        <Icon icon="mdi-light:bookmark" width="1.9rem" height="1.9rem" style={{ color: '#702eb2', paddingBottom:'3px', paddingRight:'2px'  }} />
                        <Icon icon="carbon:send-alt-filled" width="1.7rem" height="1.7rem" style={{ color: '#702eb2', paddingBottom:'3px', paddingRight:'2px'  }} />
                    </div>
                </div>

                <div className='px-5 pb-2'>
                    <div className='font-semibold text-sm flex flex-row justify-between '>
                        <div className='text-white text-[90%] self-center'> {pname}</div>
                        <div className='text-red-700 text-[90%] self-center'>N {pprice}</div>
                    </div>
                    <div>
                        <p className='text-[60%] text-white'>{hashtags}</p>
                    </div>
                    <div className='flex flex-row self-center items-center'>
                        <div>
                            <img src={ppic} style={{ width: '15px', height: '15px' }} className='flex justify-center self-center rounded-full' />
                        </div>
                        <p style={{ fontSize: '12px', padding: 2 }}>{name} </p>
                    </div>
                    <div className='flex flex-row'>
                        <img src='/assets/Shop.png' style={{ width: '15px', height: '15px', }} className='flex justify-center self-center' />
                        <div style={{ fontSize: '12px' }}>Shop.{jobtype} </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
