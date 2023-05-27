import React from 'react'
import Image from 'next/image'
import CustomDropdown from '../components/dropdown'
import Slmap from '../public/lk.png';
import Pool from '../public/pool.jpg';

const Destinations = () => {
  return (
      <div>
          <div className=' bg-dark-blue'>
            <div className='absolute md:right-0 md:mr-14 overflow-hidden' >
                <Image className='h-[50rem] w-auto object-cover object-center opacity-25' src={Slmap}></Image>
            </div>
            <div className=' relative flex flex-col items-center' >
                <h4 className='font-ptSerif text-theme-blue my-4 md:text-[40px] text-[30px]'>OUR DESTINATIONS</h4>
                <div className='md:max-w-3xl max-w-md'>
                    <div className='md:block hidden'>
                        <div className='grid grid-cols-7'>
                            <div className='rounded-l-[8px] col-span-3 bg-theme-lightBlue overflow-hidden'>
                                <Image className='object-cover object-center' src={Pool}></Image>
                            </div>
                            <div className='flex flex-col items-center col-span-4 rounded-r-[8px] bg-theme-lightBlue'>
                            <h1 className='font-ptSerif text-theme-blue p-4 text-[30px]'>LEISURES LIFE</h1>
                            <p className='font-ptSerif text-center p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button className='font-ptSerif text-dark-blue text-center border-2 border-theme-blue mt-4 p-2 rounded-[8px] hover:bg-theme-blue hover:text-theme-lightBlue ease-in-out duration-700'>DISCOVER MORE</button>
                            </div>
                        </div>    
                        </div>
                        <div className='block md:hidden'>
                                <div className='rounded-t-[8px] bg-theme-lightBlue overflow-hidden'>
                                    <Image className='object-cover h-[20rem]' src={Pool}></Image>
                                </div>
                                <div className='flex flex-col items-center md:rounded-r-[8px] rounded-b-[8px] bg-theme-lightBlue'>
                                    <h1 className='font-ptSerif text-theme-blue md:p-4 py-4 px-2 md:text-[30px] text-[25px]'>LEISURES LIFE</h1>
                                    <p className='font-ptSerif text-center md:p-4 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <button className='font-ptSerif text-dark-blue text-center border-2 border-theme-blue mt-4 p-2 rounded-[8px] hover:bg-theme-blue hover:text-theme-lightBlue ease-in-out duration-700 md:mb-[unset] mb-4'>DISCOVER MORE</button>
                                </div>
                        </div>
                
                </div>
                <div className='mt-4 mb-6 md:w-1/5 w-1/2'>
                <CustomDropdown />
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Destinations