import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Carousel from '../../components/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCalendarDays, faPersonWalkingLuggage, faTag } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa";
import CoustomDatePicker from '../../components/datepiker';
import CustomDropdown from '../../components/dropdown'
import Slmap from '../../public/lk.png';
import Pool from '../../public/pool.jpg';
import Card1 from '../../public/card1.jpg';
import Card2 from '../../public/card2.jpg';
import Card3 from '../../public/card3.jpg';
import Card4 from '../../public/card4.jpg';
import Card5 from '../../public/card5.jpg';
import Card6 from '../../public/card6.jpg';
import Card7 from '../../public/card7.jpg';
import Card8 from '../../public/card8.jpg';
import Card9 from '../../public/card9.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div className='p-3 px-14 bg-[#F4F9FF]'>
          <div className='flex justify-between '>
            <div>
              <Image className='self-center h-7 w-auto' src={logo}></Image>
            </div>
            <div className='flex'>
              <ul className='flex self-center'>
                <li className='mr-10 font-robotoMedium'>LKR</li>
                <li className='font-robotoMedium'>ENGLISH</li>
              </ul>
              <ul className='flex self-center ml-20'>
                <li className='mr-10 self-center font-robotoMedium'>SIGN IN</li>
                <li className=' bg-[#0095FA] p-2 rounded-[8px] font-robotoMedium text-[#F4F9FF] cursor-pointer hover:bg-[#0170b9]'>JOIN NOW</li>
              </ul>
            </div>
            </div>
        </div>
        <div className='bg-dark-blue py-1'>
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

        <div>
          <div className='absolute z-[2] w-full mt-[600px] '>
            <div className='flex justify-around'>
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
            
            
          </div>
          <div className=' bg-dark-blue'>
          <Carousel />         

          </div>
        </div>

        <div className=' bg-dark-blue'>
          <div className='absolute right-0 mr-14 overflow-hidden' >
            <Image className='h-[50rem] w-auto object-cover object-center opacity-25' src={Slmap}></Image>
          </div>
          <div className=' relative flex flex-col items-center' >
            <h4 className='font-ptSerif text-theme-blue my-4 text-[40px]'>OUR DESTINATIONS</h4>
            <div className=' max-w-3xl'>
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
            <div className='mt-4 mb-6 w-1/5'>
              <CustomDropdown />
            </div>
          </div>
          
        </div>
        
        <div>
          <div className=' relative flex flex-col items-center' >
              <h4 className='font-ptSerif text-theme-blue my-4 text-[40px]'>EXPERIENCE SOMETHING NEW</h4>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-y-12 justify-items-center mx-72 mb-4'>
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

        <div>
          <div className=' relative flex flex-col items-center mb-44' >
            <h4 className='font-ptSerif text-theme-blue my-4 text-[40px]'>OFFERS</h4>
            <div className='grid grid-cols-3'>
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
          </div>
        </div> 

        <div className=' bg-dark-blue border-t-8 border-theme-blue'>
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
              <h4 className=' font-ptSerif text-theme-blue text-[30px]'>Subscribe to our
Newsletter</h4>
              <input type="email" placeholder='example@email.com' className=' my-2 w-2/3 p-2 rounded-[8px] text-dark-blue' />
              <button className='text-theme-lightBlue text-center border-2 border-theme-blue mt-1 w-1/4 p-2 rounded-[8px] hover:bg-theme-blue hover:text-dark-blue ease-in-out duration-700'>Send</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
