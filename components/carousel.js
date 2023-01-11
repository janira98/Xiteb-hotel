import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image';
import image1 from './pexels-pixabay-221457.jpg'
import image2 from './pexels-quark-studio-3201921.jpg'
import image3 from './pexels-elina-sazonova-1838554.jpg'



  

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    let slider;

    const customPrev = () => {
        slider.slickPrev();
      };
    
      const customNext = () => {
        slider.slickNext();
      };
  
    return (
        
        <div>
        <div className='text-theme-lightBlue text-[5rem] absolute z-[1] h-[720px] w-full flex items-center justify-between p-8 opacity-0 hover:opacity-100 duration-700 ease-in-out '>
                <FontAwesomeIcon icon={faAngleLeft} onClick={customPrev} />

            <FontAwesomeIcon icon={faAngleRight} onClick={customNext} />
            </div>
        <Slider className='relative' {...settings} ref={(c) => (slider = c)}>
                
            <div>
                <Image className=' h-[720px] w-full' src={image1}></Image>
            </div>
            <div>
                <Image className=' h-[720px] w-full' src={image2}></Image>
            </div>
            <div>
                <Image className=' h-[720px] w-full' src={image3}></Image>
            </div>
            </Slider>
            
      </div>
    );
  };
  
  export default Carousel;
  