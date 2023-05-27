import React from 'react'
import Image from 'next/image'
import Card1 from '../public/card1.jpg';
import Card2 from '../public/card2.jpg';
import Card3 from '../public/card3.jpg';
import Card4 from '../public/card4.jpg';
import Card5 from '../public/card5.jpg';
import Card6 from '../public/card6.jpg';

const Experience = () => {
  return (
      <div>
          <div>
            <div className=' relative flex flex-col items-center' >
                <h4 className='font-ptSerif text-theme-blue my-4 text-center md:text-[40px] text-[30px]'>EXPERIENCE SOMETHING NEW</h4>
            </div>
            <div>
                <div className='grid md:grid-cols-3  gap-y-12 justify-items-center md:mx-72 mb-4'>
                    <div className='w-56 h-72 drop-shadow-lg group '>
                        <div className='relative group-hover:scale-95 duration-700 ease-in-out overflow-hidden' >
                        <Image className='rounded-xl w-56 h-72 object-cover object-center' src={Card1}></Image>
                        <div className="absolute inset-0">
                        <div className="bg-gradient-to-t from-[#0D0F13] via-black-alpha opacity-75 rounded-xl h-full w-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center pb-3 text-theme-lightBlue font-robotoMedium">
                        <h2 className=' text-[20px] text-center px-4'>Book Ahead & Save Up To 17%</h2>
                        </div>
                        </div>
                        
                    </div>
                    <div className='w-56 h-72 drop-shadow-lg group'>
                        <div className='relative  overflow-hidden group-hover:scale-95 duration-700 ease-in-out' >
                        <Image className='rounded-xl w-56 h-72 object-cover object-center' src={Card2}></Image>
                        <div className="absolute inset-0">
                        <div className="bg-gradient-to-t from-[#0D0F13] via-black-alpha opacity-75 rounded-xl h-full w-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center pb-3 text-theme-lightBlue font-robotoMedium">
                        <h2 className=' text-[20px] text-center px-4'>Multiply Your Points</h2>
                        </div>
                        </div>
                        
                    </div>
                    <div className='w-56 h-72 drop-shadow-lg group'>
                        <div className='relative  overflow-hidden group-hover:scale-95 duration-700 ease-in-out' >
                        <Image className='rounded-xl w-56 h-72 object-cover object-center' src={Card3}></Image>
                        <div className="absolute inset-0">
                        <div className="bg-gradient-to-t from-[#0D0F13] via-black-alpha opacity-75 rounded-xl h-full w-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center pb-3 text-theme-lightBlue font-robotoMedium">
                        <h2 className=' text-[20px] text-center px-4'>Free Bonus Points at New Hotels</h2>
                        </div>
                        </div>
                        
                    </div>
                    <div className='w-56 h-72 drop-shadow-lg group'>
                        <div className='relative  overflow-hidden group-hover:scale-95 duration-700 ease-in-out' >
                        <Image className='rounded-xl w-56 h-72 object-cover object-center' src={Card4}></Image>
                        <div className="absolute inset-0">
                        <div className="bg-gradient-to-t from-[#0D0F13] via-black-alpha opacity-75 rounded-xl h-full w-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center pb-3 text-theme-lightBlue font-robotoMedium">
                        <h2 className=' text-[20px] text-center px-4'>Park & Stay with Leisures</h2>
                        </div>
                        </div>
                        
                    </div>
                    <div className='w-56 h-72 drop-shadow-lg group'>
                        <div className='relative  overflow-hidden group-hover:scale-95 duration-700 ease-in-out' >
                        <Image className='rounded-xl w-56 h-72 object-cover object-center' src={Card5}></Image>
                        <div className="absolute inset-0">
                        <div className="bg-gradient-to-t from-[#0D0F13] via-black-alpha opacity-75 rounded-xl h-full w-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center pb-3 text-theme-lightBlue font-robotoMedium">
                        <h2 className=' text-[20px] text-center px-4'>Make You Stay Even Sweeter</h2>
                        </div>
                        </div>
                        
                    </div>
                    <div className='w-56 h-72 drop-shadow-lg group'>
                        <div className='relative  overflow-hidden group-hover:scale-95 duration-700 ease-in-out' >
                        <Image className='rounded-xl w-56 h-72 object-cover object-center' src={Card6}></Image>
                        <div className="absolute inset-0">
                        <div className="bg-gradient-to-t from-[#0D0F13] via-black-alpha opacity-75 rounded-xl h-full w-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center pb-3 text-theme-lightBlue font-robotoMedium">
                        <h2 className=' text-[20px] text-center px-4'>Breakfast Included Pakage</h2>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Experience