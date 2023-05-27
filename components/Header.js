import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
        <div className='p-3 md:px-14 px-8 bg-[#F4F9FF]'>
            <div className='flex justify-between '>
                <div>
                    <Image className='self-center h-7 w-auto z-[11] relative' src={logo} />
                </div>
                <div className='md:flex hidden'>
                    <ul className='flex self-center'>
                        <li className='mr-10 font-robotoMedium'>LKR</li>
                        <li className='font-robotoMedium'>ENGLISH</li>
                    </ul>
                    <ul className='flex self-center ml-20'>
                        <li className='mr-10 self-center font-robotoMedium'>SIGN IN</li>
                        <li className=' bg-[#0095FA] p-2 rounded-[8px] font-robotoMedium text-[#F4F9FF] cursor-pointer hover:bg-[#0170b9]'>JOIN NOW</li>
                    </ul>
                </div>
                <div onClick={handleNav} className='flex self-center md:hidden z-[11]'>
                    {nav ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
              </div>
              <div className={nav ? 'bg-theme-lightBlue absolute top-0 left-0 p-10 z-10 w-full h-screen md:hidden ease-in-out duration-300' :
                  'bg-theme-lightBlue absolute top-[-100%] left-0 p-10 z-10 w-full h-screen md:hidden ease-in-out duration-300'}>
                  <p className='my-4 -mx-4 font-bold'>Main Menu</p>
                    <ul className=''>
                        <li className='mb-5'> <a href="">ABOUT</a></li>
                        <li className='mb-5'><a href="">ROOMS & SUITES</a> </li>
                        <li className='mb-5'><a href="">DINING</a></li>
                        <li className='mb-5'> <a href="">EXPIRIENCE</a> </li>
                        <li className='mb-5'><a href="">EVENTS</a></li>
                        <li className='mb-5'><a href="">GALLERY</a></li>
                        <li className='mb-5'><a href="">OFFERS</a></li>
                        <li className='mb-5'><a href="">MORE</a></li>
                  </ul>
                  <hr className='opacity-25' />
                  <ul className='my-4 flex items-center'>
                      <li className=' bg-[#0095FA] p-2 rounded-[8px] font-robotoMedium text-[#F4F9FF] cursor-pointer w-fit mr-10'>JOIN NOW</li>
                      <li className='font-robotoMedium text-center'>SIGN IN</li>
                  </ul>
                  <hr className='opacity-25' />
                  <ul className='my-4'>
                        <li className='mr-10 font-robotoMedium mb-5'>LKR</li>
                        <li className='font-robotoMedium'>ENGLISH</li>
                    </ul>
                </div>
            
        </div>
        <div className='bg-dark-blue py-1 md:block hidden'>
            <ul className='flex justify-center text-[#F4F9FF]'>
                <li className=' mx-3 hover:text-[#0095FA]'> <a href="">ABOUT</a></li>
                <li className=' mx-3 hover:text-[#0095FA]'><a href="">ROOMS & SUITES</a> </li>
                <li className=' mx-3 hover:text-[#0095FA]'><a href="">DINING</a></li>
                <li className=' mx-3 hover:text-[#0095FA]'> <a href="">EXPIRIENCE</a> </li>
                <li className=' mx-3 hover:text-[#0095FA]'><a href="">EVENTS</a></li>
                <li className=' mx-3 hover:text-[#0095FA]'><a href="">GALLERY</a></li>
                <li className=' mx-3 hover:text-[#0095FA]'><a href="">OFFERS</a></li>
                <li className=' mx-3 hover:text-[#0095FA]'><a href="">MORE</a></li>
            </ul>
        </div>
    
    </div>
  )
}

export default Header