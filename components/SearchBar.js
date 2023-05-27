import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCalendarDays, faPersonWalkingLuggage, faTag, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import CoustomDatePicker from '../components/datepiker';

const SearchBar = () => {
  
  const [model, setShowModel] = useState(false);

  
  return (
      <div>
          <div className='absolute z-[2] w-full md:mt-[600px] mt-[550px]'>
            <div className='md:flex justify-around hidden'>
              <div className='flex justify-between justify-items-center bg-theme-lightBlue w-9/12 rounded-3xl'>
                <FontAwesomeIcon className=' self-center text-2xl mx-3' icon={faCalendarDays} />
                <div className=' w-1/5'>
                  <CoustomDatePicker />
                </div>
                
                <span className='self-center mx-3'>to</span>
                <div className=' w-1/5 '>
                  <CoustomDatePicker />
                </div>
                <FontAwesomeIcon className='self-center text-2xl mx-3' icon={faPersonWalkingLuggage} />
                <input type="text" placeholder='1 Room, 1 Adult, 0 Children' className=' w-1/4 rounded-3xl p-3 placeholder:text-dark-blue' />
                <FontAwesomeIcon className='self-center text-2xl mx-3' icon={faTag} />
                <input type="text" placeholder='Coupon Code' className=' w-1/4 rounded-3xl p-3 placeholder:text-dark-blue' />
                <FontAwesomeIcon className='self-center text-2xl mx-3' icon={faMagnifyingGlass} />
              </div>
              </div>
              
              {/* mobile bar */}
              <div className='flex justify-around md:hidden' onClick={() => setShowModel(true)}>
              <div className='flex justify-between justify-items-center bg-theme-lightBlue w-9/12 p-3 rounded-3xl'>
                <span className='ml-3'>Book a Room</span>
                <FontAwesomeIcon className='self-center text-2xl mx-3' icon={faMagnifyingGlass} />
              </div>
              </div>
      </div>
      
      {model ? (
        <>
          <div className='flex flex-col justify-center items-center bg-theme-lightBlue rounded shadow h-screen w-full z-10 fixed inset-0 md:hidden'>
        <div className='flex items-center mb-10'>
          <FontAwesomeIcon className='text-2xl mr-4' icon={faChevronLeft} onClick={() => setShowModel(false)} />
          <h1 className=' text-3xl'>Book Your Room</h1>
        </div>
        <div className='flex flex-col items-center relative'>
          <div className='flex'>
            <FontAwesomeIcon className=' self-center text-2xl mx-3' icon={faCalendarDays} />
            <CoustomDatePicker />
            <span className='self-center'>to</span>
            <div className=''>
              <CoustomDatePicker />
            </div>
          </div>
          <div className='flex align-middle w-full mt-2'>
            <FontAwesomeIcon className='self-center text-2xl' icon={faPersonWalkingLuggage} />
            <input type="text" placeholder='1 Room, 1 Adult, 0 Children' className='w-1/2 rounded-3xl p-3 placeholder:text-dark-blue' />
            <FontAwesomeIcon className='self-center text-2xl' icon={faTag} />
            <input type="text" placeholder='Coupon Code' className='rounded-3xl p-3 placeholder:text-dark-blue' />
          </div>
           <button className='bg-dark-blue text-theme-lightBlue w-[70%] mt-4 p-3 rounded-3xl'>Find</button>
        </div>
        
      </div>
        </>
      ): null}
      
    </div>
  )
}

export default SearchBar