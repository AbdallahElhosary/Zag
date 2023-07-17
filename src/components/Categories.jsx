import React from 'react'
import watch from '../img/category_img_01.jpg'
import shoes from '../img/category_img_02.jpg'
import glass from '../img/category_img_03.jpg'

const Categories = () => {
    return (
        <div className='Categories pt-5 pb-5 px-4'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center md:w-1/2 mx-auto mb-4'>
                    <div className='text-4xl'>Categories of The Month</div>
                    <p className='text-1xl leading-loose text-center'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 gap-4'>
                    <div className='text-center'>
                        <img src={watch} alt="Watch" className='rounded-full w-2/3 mx-auto' />
                        <h2 className='text-2xl font-bold my-3'>Watches</h2>
                        <button className='bg-green-500 p-2 text-white rounded-sm cursor-pointer'>Go Shop</button>
                    </div>
                    <div className='text-center'>
                        <img src={shoes} alt="Watch" className='rounded-full w-2/3 mx-auto' />
                        <h2 className='text-2xl font-bold my-3'>Shoes</h2>
                        <button className='bg-green-500 p-2 text-white rounded-sm cursor-pointer'>Go Shop</button>
                    </div>
                    <div className='text-center'>
                        <img src={glass} alt="Watch" className='rounded-full w-2/3 mx-auto' />
                        <h2 className='text-2xl font-bold my-3'>Accessories</h2>
                        <button className='bg-green-500 p-2 text-white rounded-sm cursor-pointer'>Go Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories