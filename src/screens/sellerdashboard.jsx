import React, { useState, useEffect, useRef } from 'react'
import { Button, Uline } from '../lilcomponents/style.styles'
import { Outlet, Link } from 'react-router-dom'
import Footers from '../lilcomponents/footers';
import Cards from '../lilcomponents/cards';
import Cards1 from '../lilcomponents/card';
import Signuppage from './signuppage';
import LoggedinNav from '../component/loggedinnav';
import { Icon } from '@iconify/react/dist/iconify.js';
import PostsCards from '../lilcomponents/postsCards';
import Reels from '../lilcomponents/reels';
import { motion } from 'framer-motion';

const sliderImage = [
    "assets/arrangement-different-traveling-elements 1.png"
    // "/assets/indoor-hotel-view.jpg",
    // "/assets/horizontal-shot-delighted-young-african-american-woman-points-stylish-clothes-sale-hanging-rails-carries-bag-beautiful-bouquet-has-toothy-smile-isolated-yellow-background.jpg",
    // "/assets/children-s-bright-clothes-hang-display-baby-clothing-store.jpg",
];

let count = 0;

export default function SellerDashboard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [cIsOpen, setCIsOpen] = useState(false);
    const [postIsOpen, setPostIsOpen] = useState(true)
    const [productName, setProductName] = useState('')
    const [pCaption, setPCaption] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [location, setLocation] = useState('')
    const [tags, setTags] = useState('')
    const [names, setNames] = useState('')

    let index = [0, 1, 2, 3]


    const slideRef = useRef()

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
    }
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        let handler = (e) => {
            if (e.target) {
                setIsOpen(false)
                setCIsOpen(false)
            }
        };
        document.addEventListener("mousedown", handler);
        // startSlider();
        // textSlider();
        // con();
    }, [])


    const startSlider = () => {
        const interval = setInterval(() => {
            nextSlide();
        }, [7000]);
        return () => {
            clearInterval(interval);
        }
    }


    const nextSlide = () => {
        count = (count + 1) % sliderImage.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }
    return (
        <>
            <div style={{ paddingBottom: 20, }}>
                <div>
                    <LoggedinNav />

                    <div className='flex pt-20' style={{ height: "", }}>
                        <div ref={slideRef} className="select-none" style={{}}>
                            <img src={sliderImage[currentIndex]} alt='slide' loading='lazy' style={{ height: '70vh', width: '100vw', opacity: 1 }} />
                        </div>


                    </div>

                    <div className="flex flex-row justify-between px-5 mb-5 h-full bg-white">
                        <div className='h-full'>
                            <div className='md:columns-2 h-full' style={{ width: '70%' }}>
                                <div className='h-full w-3/4 py-2'>
                                    <div className='rounded-full bg-black' style={{
                                        width: '70px', height: '70px', backgroundImage: "url('/assets/Union.png')",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}></div>
                                </div>
                                <div className='h-full w-full py-4'>
                                    <h5>Shopping.thrifts</h5>
                                    <p>Lagos&nbsp;Island</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-row justify-center '>
                            <div className='place-content-center px-12'>
                                <div onClick={() => { setCIsOpen(!cIsOpen) }}>
                                    <Icon className='cursor-pointer' icon="ph:camera" style={{ width: '30px', height: '30px' }} />
                                </div>

                                <div>
                                    {cIsOpen && <div id="dropdownAvatar" className="absolute right-16 z-10 pb-2 px-2 rounded-3xl bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div className='font-sm' style={{ fontSize: '11px' }}>Upload your product or content</div>
                                            <div className="" style={{ fontSize: '7px' }}>select where your product will be shown</div>
                                        </div>
                                        {/* <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton"> */}
                                        <div onClick={() =>setPostIsOpen(!postIsOpen)} className='cursor-pointer' >
                                            <a className="block py-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <div className='flex flex-row justify-center py-2'>
                                                    <div className="w-2 h-2 rounded-full self-center" style={{ backgroundColor: '#8248BB' }}></div>
                                                    <div>
                                                        <h5 className='px-2' style={{ fontSize: '15px' }}>Post</h5>
                                                        <p className='px-2' style={{ fontSize: '8px' }}>Upload high Quality pixels of Products only</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div>
                                            <a href="#" className="block py-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <div className='flex flex-row justify-center py-2'>
                                                    <div className="w-2 h-2 rounded-full self-center" style={{ backgroundColor: '#8248BB' }}></div>
                                                    <div>
                                                        <h5 className='px-2' style={{ fontSize: '15px' }}>Reel</h5>
                                                        <p className='px-2' style={{ fontSize: '7.3px' }}>Upload high Quality pixels of Products and contents only</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div>
                                            <a href="#" className="block py-5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                <div className='flex flex-row justify-center py-2'>
                                                    <div className="w-2 h-2 rounded-full self-center" style={{ backgroundColor: '#8248BB' }}></div>
                                                    <div>
                                                        <h5 className='px-2' style={{ fontSize: '15px' }}>Live</h5>
                                                        <p className='px-2' style={{ fontSize: '8px' }}>Connect with your customers in real-time</p>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>

                                        {/* </ul> */}

                                    </div>
                                    }

                                </div>
                            </div>

                            <div className='place-content-center pr-4'>
                                <div onClick={() => { setIsOpen(!isOpen) }}>
                                    <Icon className='cursor-pointer' icon="bx:menu-alt-right" style={{ width: '30px', height: '30px' }} />
                                </div>
                                {isOpen && <div id="dropdownAvatar" className="absolute right-5 z-10 rounded-3xl bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    {/* <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>Bonnie Green</div>
                                    <div className="font-medium truncate">name@flowbite.com</div>
                                </div> */}
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                        <li>
                                            <a href="#" className="block px-4 py-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Analysis</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Template</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Help</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Go to Promotion</a>
                                        </li>
                                    </ul>
                                </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='px-36 py-10'>
                        <div className='shadow-outline shadow-xl' style={{ backgroundColor: "#F2F2F2" }}>
                            <h5 className=' px-10 pt-12 text-lg font-semibold'>Sets & Editions</h5>
                            <div className="columns-4 gap-0 relative justify-center place-content-center px-6 pb-5" style={{ height: '600px' }}>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.45 * 1 }}
                                    className='h-full flex pl-20'>
                                    <div class="relative flex flex-col self-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56" style={{
                                        backgroundImage: "url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: '300px'
                                    }}>

                                    </div>

                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.45 * 2 }}
                                    className='h-full flex pl-14' >
                                    <div class="relative flex flex-col self-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56" style={{
                                        backgroundImage: "url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: '400px'
                                    }}>

                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.15 * 3 }}
                                    className='h-full flex pl-10'>
                                    <div class="relative flex flex-col self-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56" style={{
                                        backgroundImage: "url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: '350px'
                                    }}>

                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.45 * 4 }}
                                    className='h-full flex'>
                                    <div class="relative flex flex-col self-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56" style={{
                                        backgroundImage: "url('/assets/corporate-management-strategy-solution-branding-concept.jpg')",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: '500px'
                                    }}>

                                    </div>
                                </motion.div>


                            </div>
                        </div>
                    </div>

                    <div className='p-4'>
                        <div className="bg-white flex flex-col rounded-2xl pt-5 px-5 pb-2">
                            <h5>Posts</h5>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.23 }}
                                className='md:columns-4 pt-2'>
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.23 }} className='md:columns-4 pt-2'>
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.23 }} className='md:columns-4 pt-2'>
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                <PostsCards image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                            </motion.div>

                            <div className='pl-10 pt-5 '>
                                <div className='md:flex md:flex-row '>
                                    <div className=''>
                                        <div className='flex flex-row justify-between w-full'>
                                            <h3 className='font-md'>Products being Promoted</h3>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -150 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.34 }}
                                            className='pt-3'>
                                            <img src='/assets/bag.png' />
                                            <h3 className='text-center text-lg font-bold font-primary'>Green Italian-made Bag</h3>
                                            <h2 className='text-center text-lg font-bold' style={{ color: 'red' }}># 60,000</h2>
                                            <div className='flex justify-center w-full'>
                                                <div className='flex flex-col justify-center self-center mx-24 ' style={{ width: '100%' }}>
                                                    <p className='text-sm w-full '>still in stock</p>

                                                    <div class=" bg-gray-200 rounded-full w-full h-3 dark:bg-gray-700 border-black" style={{ borderWidth: 1 }}>
                                                        {/* <div class="" style="width: 45%"></div> */}
                                                        <div className=' h-2.5 rounded-full' style={{ width: '25%', backgroundColor: '#702EB2' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-row justify-between p-3'>
                                                <div>
                                                    <h5>Hurry up!</h5>
                                                    <p className='' style={{ fontSize: '10px' }}>Limited edition going out of stock soon</p>
                                                </div>
                                                <div className='rounded-full flex justify-center self-center p-2 text-white' style={{ backgroundColor: '#702EB2', fontSize: '55%' }}>
                                                    Add to Cart
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className='w-full'>
                                        <h3 className='font-md pl-20 '>Best Sellers</h3>
                                        <div className='md:columns-4 px-4 pt-3' >
                                            <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                            <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                            <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />
                                            <Cards1 image="/assets/shoe.png" ppic='/assets/Union.png' pname='BROWN LEATHER BROGUES ' jobtype='leather work' name='James Akunmowa' pprice="8000" rate='4.6' />

                                        </div>
                                        <div className='flex justify-center place-content-center bg-white mx-4 my-2 shadow h-2/5'>
                                            <h1 className='text-3xl text-center self-center'>Ads</h1>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-5'>
                        <h4 className='font-semibold pb-3'>Reels</h4>
                        <div className="md:columns-4">
                            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='550px' />
                            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='550px' />
                            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='550px' />
                            <Reels image="/assets/istockphoto-1475370822-612x612.jpg" ppic='/assets/Union.png' name='James Akinmowa' jobtype='leather work' opa='1' pname='BEACH FLIP FLOP' pprice='38,000' hashtags='Red stripe beach flip flop #flipflop #beachflipflop #wears' padin={2} radius='2xl' width='100%' height='550px' />
                        </div>
                    </div>

                    <div className='p-5' style={{ backgroundColor: '#DFDEDE' }}>
                        <div className='justify-center self-center mb-3'>
                            <li>The primary goal of the INFINITY MARKET PLACE  to a sellers transacting business in Infinity Product Place (ISP) is to ensure Business Longevity, Profitability Business Personality and branding optimization, Consumer is King understanding, quality Product deliverable, employment creation and customer relationship.
                                To facilitate Profitable sales certain Benefits has been put in place </li>
                            <li>Product Promotions : You can easily reach millions of customers all around the world through our promotional services which you can set to your Budget</li>
                            <li>Business Courses : Knowledge is power, Learn how to leverage on Infinity Market Place to showcase your Products all around the world</li>
                            <li>Business Tools : You get access to Business tools that helps you see the performances of your Product, this will help in strategising your business approach   </li>

                        </div>
                        <div className='flex justify-center' >
                            <span className='p-3 font-semibold' style={{ backgroundColor: '#DBC9E9' }}>Access Marketing</span>
                        </div>
                    </div>
                </div>
                {postIsOpen &&
                    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm shadow-2xl p-28 '>
                        <div className='rounded-3xl flex flex-col h-full' style={{ backgroundColor: '#DBC9E9' }}>
                            <div className='p-5'>
                                <div className='pl-3 pb-5 font-medium text-3xl cursor-pointer' onClick={() => setPostIsOpen(false)}>
                                    <Icon icon="iconoir:cancel" />
                                </div>
                                <div className='md:columns-2 flex justify-center px-7'>
                                    <div className='h-full w-full relative flex flex-col justify-center '>
                                        <div>Preview</div>
                                        <div className='relative flex flex-col bg-transparent mb-5 w-full' >
                                            <div className='w-3/4 h-3/6 ml-10 p-4'>
                                                <div className='w-full h-full shadow-lg rounded-md'>
                                                    <div className='' style={{
                                                        backgroundImage: "url('/assets/shoe.png')",
                                                        backgroundSize: "cover  ",
                                                        backgroundRepeat: "no-repeat",
                                                        height: '18vw',
                                                        // width:'400px'
}}>
                                                    {/* <img src='/assets/shoe.png' className='w-full' style={{}} /> */}
                                                    </div>
                                                    <div className='relative flex flex-col self-end w-full'>
                                                        <div className='flex bg-white h-32 rounded-b-md px-2 py-2' style={{ width: '100%' }} >
                                                            <div className='w-full'>
                                                                <div className="flex flex-row justify-between">
                                                                    <div className='font-semibold uppercase'>{productName}</div>
                                                                    <div className='text-red-600 font-medium'>{productPrice}</div>
                                                                </div>
                                                                <div>{pCaption}</div>
                                                                <div>{tags}</div>
                                                            </div>
                                                            <div className='flex absolute self-end'>
                                                                <div>
                                                                    <div className='flex flex-row self-center'>
                                                                        <div>
                                                                            <img src="" style={{ width: '20px', height: '20px' }} className='flex justify-center self-center rounded-full' />
                                                                        </div>
                                                                        <p style={{ fontSize: '10px', padding: 2 }}>xdhtcg</p>
                                                                    </div>
                                                                    <div className='flex flex-row'>
                                                                        <img src='/assets/Shop.png' style={{ width: '20px', height: '20px', }} className='flex justify-center self-center' />
                                                                        <div style={{ fontSize: '12px' }}>Shop.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                              </div>
                                         </div>
                                        </div>
                                    </div>
                                    <div className='h-full relative flex flex-col ' >
                                        <div className='place-content-center p-10'>
                                            <h4 className='text-center font-semibold py-2'>Upload Product Picture or Video</h4>
                                            <form>
                                                <input type='text' title='pName' name='productName' onChange={(e) => setProductName(e.target.value)} placeholder='Product Name' className='w-full rounded-xl border my-2 ' style={{ backgroundColor: "white" }} />
                                                <input type='text' title='pCaption' placeholder='Product Caption' onChange={(e) => setPCaption(e.target.value)} className='w-full rounded-xl border my-2 ' style={{ backgroundColor: "white" }} />
                                                <input type='text' title='pPrice' placeholder='Price' onChange={(e) => setProductPrice(e.target.value)} className='w-full rounded-xl border my-2 ' style={{ backgroundColor: "white" }} />
                                                <input type='text' title='location' placeholder='Location' onChange={(e) => setLocation(e.target.value)} className='w-full rounded-xl border my-2 ' style={{ backgroundColor: "white" }} />
                                                <input type='text' title='tags' placeholder='#tags' onChange={(e) => setTags(e.target.value)} className='w-full rounded-xl border my-2 ' style={{ backgroundColor: "white" }} />
                                                <input type='text' title='names' placeholder='Name' onChange={(e) => setNames(e.target.value)} className='w-full rounded-xl border my-2 ' style={{ backgroundColor: "white" }} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <Footers />
            </div>
            <Outlet />
        </>
    )
}



