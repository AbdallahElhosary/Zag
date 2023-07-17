import React from 'react'
import banner1 from "../img/banner_img_01.jpg";

const Landing = () => {

    return (
        <>
            <div className="landing bg-[#efefef] pt-5 pb-5 px-4 gap-4 relative">
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='flex justify-center flex-col'>
                            <h2 className='text-3xl text-green-500'>Zay eCommerce</h2>
                            <p className='text-2xl'>Tiny and Perfect eCommerce Template</p>
                            <p className='leading-loose'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                        </div>
                        <div>
                            <img src={banner1} alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Landing