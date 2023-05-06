import React, { useState } from 'react'

import './ImgCarousel.css'
import img1 from '../../../images/carouselImg1.png'
import img2 from '../../../images/carouselImg2.png'
import img3 from '../../../images/carouselImg3.png'
import Slider from 'react-slick'
import { Carousel } from 'antd'

const ImgCarousel = () => {
  const [carousels,setCarousels] = useState([img1,img2,img3,img1,img2,img3])
  
  const props = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 3.5,
    swipe:true,
    slidesToScroll: 1,
    initialSlide:0.25,
    waitForAnimate:true, 
    responsive: [
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 0.5,
					infinite: true,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3.5,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4.5,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
  };
  return (
    <div>

        <div className="w-full mb-10  md1:mb-16">
            <div className="lg:h-[350px] 2xl:h-[400px]">
              
               <Carousel 
              className=' w-full'
              {...props} >
                {
                  carousels?.map((item,i)=>{
                    return <div className='px-2'> <img src={img1} key={i} alt="img" /></div>
                  })
                }
              
              </Carousel> 

{/* <Carousel
              className=' w-full max-h-[460px] h-[450px]'
              autoplay autoplaySpeed={5000} dots={false} infinite={true}
                // ref={slider}
               
               >
                {carousels?.map((item,i) => {
                  return (
                    <img key={1} src={img1} alt="img1" className=' max-h-[450px] h-[450px] w-full object-cover'  />
                    );
                  })}
              </Carousel>  */}
            </div>
        </div>
      
    </div>
  )
}

export default ImgCarousel
