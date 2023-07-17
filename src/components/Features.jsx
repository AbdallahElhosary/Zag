import React from 'react'
import feat1 from '../img/feature_prod_01.jpg'
import feat2 from '../img/feature_prod_02.jpg'
import feat3 from '../img/feature_prod_03.jpg'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
const Features = () => {
    return (
        <div className='Features pt-5 pb-5 px-4 bg-gray-300'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center  md:w-1/2 mx-auto mb-4'>
                    <div className='text-4xl'>Features of The Month</div>
                    <p className='text-1xl leading-loose text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 gap-4'>
                    <div className='shadow-2xl'>
                        <img src={feat1} alt="Watch" className='w-full' />
                        <div className='bg-white px-2 pb-4'>
                            <div className='flex justify-between py-2 px-2'>
                                <div className='stars flex gap-1 text-xl'>
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                                <span>$240.00</span>
                            </div>
                            <h2 className='text-2xl'>Gym Weight</h2>
                            <p className='leading-loose'>Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper</p>
                            <div className='pt-4 text-gray-500'>Reviews (24)</div>
                        </div>
                    </div>
                    <div className='shadow-2xl'>
                        <img src={feat2} alt="Watch" className='w-full' />
                        <div className='bg-white px-2 pb-4'>
                            <div className='flex justify-between py-2 px-2'>
                                <div className='stars flex gap-1 text-xl'>
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </div>
                                <span>$480.00</span>
                            </div>
                            <h2 className='text-2xl'>Cloud Nike Shoes</h2>
                            <p className='leading-loose'>Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper</p>
                            <div className='pt-4 text-gray-500'>Reviews (84)</div>
                        </div>
                    </div>
                    <div className='shadow-2xl'>
                        <img src={feat3} alt="Watch" className='w-full' />
                        <div className='bg-white px-2 pb-4'>
                            <div className='flex justify-between py-2 px-2'>
                                <div className='stars flex gap-1 text-xl'>
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                    <AiFillStar className='text-amber-500' />
                                </div>
                                <span>$360.00</span>
                            </div>
                            <h2 className='text-2xl'>Summer Addides Shoes</h2>
                            <p className='leading-loose'>Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
                            <div className='pt-4 text-gray-500'>Reviews (74)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
