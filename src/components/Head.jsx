import React from 'react'
import { AiOutlineMail, AiOutlinePhone, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa"
const Head = () => {
  return (
      <div className='bg-slate-900 text-white p-2 flex justify-between flex-wrap gap-y-2'>
          <div className='flex flex-wrap'>
              <div className='flex items-center mx-2 gap-2'>
                  <AiOutlineMail/>
                  <p className='cursor-pointer'>abdallhelhosary@gmail.com</p>
              </div>
              <div className='flex items-center mx-2 gap-2'>
                  <AiOutlinePhone/>
                  <p className='cursor-pointer'>011-1383-3591</p>
              </div>
          </div>
          <div className='flex gap-2 items-center'>
              <FaFacebookF/>
              <AiFillInstagram />
              <AiOutlineTwitter />
              <AiFillLinkedin />
          </div>
    </div>
  )
}

export default Head