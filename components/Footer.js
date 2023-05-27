import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <div>
          <div className=' bg-dark-blue border-t-8 border-theme-blue hidden md:block'>
          <div className=' grid grid-cols-3 mx-14 p-8 pt-10 pb-14'>
            <div>
              <h4 className=' font-ptSerif text-theme-blue text-[30px]'>About</h4>
              <ul className=' text-theme-lightBlue'>
                <li className='my-2'>About Leisures Hotels </li>
                <li className='my-2'>Media</li>
                <li className='my-2'>Gallery</li>
                <li className='my-2'>Terms & Conditions</li>
                <li className='my-2'>Privacy Statement</li>
              </ul>
            </div>
            <div>
              <h4 className=' font-ptSerif text-theme-blue text-[30px]'>Follow Us</h4>
              <ul className='flex text-[30px] my-2 text-theme-lightBlue'>
                <li className='mr-4'><FaFacebook /></li>
                <li className='mr-4'><FaInstagram /></li>
                <li className='mr-4'><FaTwitter /></li>
                <li className='mr-4'><FaLinkedin /></li>
                <li className='mr-4'><FaYoutube /></li>
              </ul>
            </div>
            <div className=' flex flex-col'>
              <h4 className=' font-ptSerif text-theme-blue text-[30px]'>Subscribe to our Newsletter</h4>
              <input type="email" placeholder='example@email.com' className=' my-2 w-2/3 p-2 rounded-[8px] text-dark-blue' />
              <button className='text-theme-lightBlue text-center border-2 border-theme-blue mt-1 w-1/4 p-2 rounded-[8px] hover:bg-theme-blue hover:text-dark-blue ease-in-out duration-700'>Send</button>
            </div>
          </div>
          </div>
          
          {/* Mobile Footer */}

          <div className=' bg-dark-blue border-t-8 border-theme-blue md:hidden block'>
          <div className=' flex flex-col items-center text-center mx-14 p-8 pt-10 pb-14'>
            <div className='mb-4'>
              <h4 className=' font-ptSerif text-theme-blue text-[30px]'>About</h4>
              <ul className=' text-theme-lightBlue'>
                <li className='my-2'>About Leisures Hotels </li>
                <li className='my-2'>Media</li>
                <li className='my-2'>Gallery</li>
                <li className='my-2'>Terms & Conditions</li>
                <li className='my-2'>Privacy Statement</li>
              </ul>
            </div>
            <div className='mb-12'>
              <h4 className=' font-ptSerif text-theme-blue text-[30px]'>Follow Us</h4>
              <ul className='flex text-[30px] my-2 text-theme-lightBlue'>
                <li className='mr-4'><FaFacebook /></li>
                <li className='mr-4'><FaInstagram /></li>
                <li className='mr-4'><FaTwitter /></li>
                <li className='mr-4'><FaLinkedin /></li>
                <li className='mr-4'><FaYoutube /></li>
              </ul>
            </div>
            <div className=' flex flex-col'>
                <h4 className=' font-ptSerif text-theme-blue text-[30px]'>Subscribe to our Newsletter</h4>
                <div className=''>
                    <input type="email" placeholder='example@email.com' className=' m-2 w-2/3 p-2 rounded-[8px] text-dark-blue' />
                    <button className='text-theme-lightBlue text-center border-2 border-theme-blue mt-1 w-1/4 p-2 rounded-[8px] hover:bg-theme-blue hover:text-dark-blue ease-in-out duration-700'>Send</button>
                </div>
              
            </div>
          </div>
          </div>

    </div>
  )
}

export default Footer