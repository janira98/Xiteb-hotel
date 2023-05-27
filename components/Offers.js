import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Card7 from '../public/card7.jpg';
import Card8 from '../public/card8.jpg';
import Card9 from '../public/card9.jpg';

const Offers = () => {
  return (
      <div>
        <div>
          <div className=' relative flex flex-col items-center mb-44' >
            <h4 className='font-ptSerif text-theme-blue my-4 md:text-[40px] text-[30px]'>OFFERS</h4>
            <div className='md:grid grid-cols-3 hidden'>
              <div className='relative overflow-hidden my-4'>
                <div className='w-[25rem] h-[48rem] bg-theme-lightBlue'>
                  <Image className='rounded-t-xl w-[25rem] h-72 object-cover object-center' src={Card7}></Image>
                  <div className="flex flex-col p-4 ">
                    <h4 className='text-dark-blue text-[25px] text-center mb-4 font-robotoMedium'>Rooms & Suites</h4>
                    <p className='text-dark-blue mb-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h1 className='text-dark-blue text-center font-robotoMedium'>From LKR 65,000.00 Per Night</h1>
                    <button className='text-dark-blue text-center border-2 border-theme-blue mt-16 mx-24 p-2 rounded-[8px] hover:bg-theme-blue hover:text-theme-lightBlue ease-in-out duration-700'>View Details</button>
                </div>
                </div>
              </div>
              <div className='relative overflow-hidden my-4'>
                <div className='w-[25rem] h-[48rem] rounded-xl bg-dark-blue drop-shadow-2xl'>
                  <Image className='rounded-t-xl w-[25rem] h-72 object-cover object-center' src={Card9}></Image>
                  <div className='absolute top-0 right-0 '>
                    <h1 className=' bg-theme-blue p-1 px-4 rounded-bl-xl rounded-tr-xl text-theme-lightBlue font-robotoMedium'>Popular</h1>
                  </div>
                  <div className="flex flex-col p-4 ">
                    <h4 className='text-theme-lightBlue text-[25px] text-center mb-4 font-robotoMedium'>Rooms & Suites</h4>
                    <p className='text-theme-lightBlue mb-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h1 className='text-theme-lightBlue text-center font-robotoMedium'>From LKR 65,000.00 Per Night</h1>
                    <button className='text-theme-lightBlue text-center border-2 border-theme-blue mt-16 mx-24 p-2 rounded-[8px] hover:bg-theme-blue hover:text-dark-blue ease-in-out duration-700'>View Details</button>
                </div>
                </div>
              </div>
              <div className='relative overflow-hidden my-4'>
                <div className='w-[25rem] h-[48rem] bg-theme-lightBlue'>
                  <Image className='rounded-t-xl w-[25rem] h-72 object-cover object-center' src={Card8}></Image>
                  <div className="flex flex-col p-4 ">
                    <h4 className='text-dark-blue text-[25px] text-center mb-4 font-robotoMedium'>Rooms & Suites</h4>
                    <p className='text-dark-blue mb-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h1 className='text-dark-blue text-center font-robotoMedium'>From LKR 65,000.00 Per Night</h1>
                    <button className='text-dark-blue text-center border-2 border-theme-blue mt-16 mx-24 p-2 rounded-[8px] hover:bg-theme-blue hover:text-theme-lightBlue ease-in-out duration-700'>View Details</button>
                </div>
                </div>
              </div>
            </div>
                  <div className='relative overflow-hidden my-4 md:hidden block'>
                <div className='w-[25rem] h-auto rounded-xl bg-dark-blue drop-shadow-2xl'>
                  <Image className='rounded-t-xl w-[25rem] h-72 object-cover object-center' src={Card9}></Image>
                  <div className='absolute top-0 right-0 '>
                    <h1 className=' bg-theme-blue p-1 px-4 rounded-bl-xl rounded-tr-xl text-theme-lightBlue font-robotoMedium'>Popular</h1>
                  </div>
                  <div className="flex flex-col p-4 ">
                    <h4 className='text-theme-lightBlue text-[25px] text-center mb-4 font-robotoMedium'>Rooms & Suites</h4>
                    <p className='text-theme-lightBlue mb-10 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h1 className='text-theme-lightBlue text-center font-robotoMedium'>From LKR 65,000.00 Per Night</h1>
                              <button className='text-theme-lightBlue text-center border-2 border-theme-blue mt-16 mx-24 p-2 rounded-[8px] hover:bg-theme-blue hover:text-dark-blue ease-in-out duration-700'>View Details</button>
                              <Link href='#' className='text-theme-lightBlue text-center mt-4'>View More</Link>
                </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Offers