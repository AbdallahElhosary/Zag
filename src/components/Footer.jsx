import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa"
const Footer = () => {
    return (
        <>
        <div className='bg-gray-800 pt-5 px-4'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 border-b border-gray-400'>
                    <div className='text-white font-normal'>
                        <h2 className=' text-green-500 text-2xl  p-3 border-b border-gray-400 w-1/2 mb-2'>Zag Shop</h2>
                        <div className='location flex gap-2 items-center px-2 text-xl my-2'>
                            <HiOutlineLocationMarker className='text-white' />
                            <div>123 Consectetur at ligula 10660</div>
                        </div>
                        <div className='call flex gap-2 items-center px-2 text-xl my-2'>
                            <BiSolidPhoneCall className='text-white' />
                            <div>+2011-1383-3591</div>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h2 className='text-2xl  p-3 border-b border-gray-400 w-1/2 mb-2'>Products</h2>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Luxury</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Sport Wear</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Men's Shoes</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Women's Shoes</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Popular Dress</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Gym Accessories</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-400 text-xl'>Sport Shoes</div>
                    </div>
                    <div className='text-white font-normal'>
                        <h2 className='text-2xl  p-3 border-b border-gray-400 w-1/2 mb-2'>Further Info</h2>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-500 text-xl'>Home</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-500 text-xl'>About Us</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-500 text-xl'>Shop Location</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-500 text-xl'>FAQs</div>
                        <div className='my-2 hover:text-green-500 cursor-pointer transition-all duration-500 text-xl'>Contact</div>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4 px-4 flex-wrap pt-4 pb-4 border-b border-gray-400'>
                    <div className='icons flex gap-2'>
                        <FaFacebookF className='text-white text-4xl rounded-full p-2 border cursor-pointer transition-all duration-500 hover:text-black hover:bg-white'/>
                        <AiFillInstagram className='text-white text-4xl rounded-full p-2 border cursor-pointer transition-all duration-500 hover:text-black hover:bg-white'/>
                        <AiOutlineTwitter className='text-white text-4xl rounded-full p-2 border cursor-pointer transition-all duration-500 hover:text-black hover:bg-white' />
                        <AiFillLinkedin className='text-white text-4xl rounded-full p-2 border cursor-pointer transition-all duration-500 hover:text-black hover:bg-white'/>
                    </div>
                    <div>
                            <input type="text" placeholder='Email' className='h-9 bg-transparent p-1 border outline-none border-gray-400 rounded-tl rounded-bl'/>
                        <button className='h-9 bg-green-500 text-white p-1 rounded-tr rounded-br'>Subsribe</button>
                    </div>
                </div>
                
            </div>
        </div>
            <div className='bg-gray-900 p-3'>
            <div className='container mx-auto'>
                    <p className='text-xl text-white  text-center'>Copyright © 2023 abdallhelhosary | Designed by abdullah</p>
                </div>
        </div>
        </>
    )
}

export default Footer