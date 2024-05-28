import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import bgimage from '../images/background-image.svg'
import prevArrowImage from '../images/prev-arrow.svg'
import nextArrowImage from '../images/next-arrow.svg'


// const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className='mr-56'
//         style={{ 
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             zIndex: 2,
//             cursor: 'pointer'
//          }}
//         onClick={onClick}>

//         <img src={nextArrowImage}/>
//         </div>
//     );
//   };
  
//   const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
//         onClick={onClick}>

//         <img src={prevArrowImage}/>
//         </div>
//     );
//   };

const Carousel = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      }
  return (
    <div style={{fontFamily: "OpenSans-Medium"}} className='relative'>
        <div className='absolute top-1/4 left-96 w-1/2 z-10'>
          <div className='text-white bg-[#F45726] px-4 py-2 w-[250px] mb-5'>
            <p>DENTAL PRACTICE</p>
          </div>

          <div className='bg-white text-[#1E2D78] w-1/2'>
            <p className='text-[45px] pl-3' style={{ fontFamily: "OpenSans-Bold" }}>We provide the best</p>
          </div>

          <div className='bg-white text-[#1E2D78] w-1/2'>
            <p className='mt-5 text-[45px] pl-3' style={{ fontFamily: "OpenSans-Bold" }}>services out there</p>
          </div>

          <div className='space-x-5 space-y-7'>
            <button className='py-5 px-10 bg-[#2E3192] text-white'>VIEW MORE</button>
            <button className='py-5 px-10 bg-white text-[#2E3192]'>PURCHASE</button>
          </div>
        </div>

        <Slider {...sliderSettings}>
            <div className='relative'>
            <img src={bgimage}/>
            
           
            </div>
            
            <div className='relative'>
                <img src={bgimage}/>
            </div>

            <div className='relative'>
                <img src={bgimage}/>
                
            </div>

            <div className='relative'>
                <img src={bgimage}/>
                
            </div>
        </Slider>
    </div>
  )
}

export default Carousel