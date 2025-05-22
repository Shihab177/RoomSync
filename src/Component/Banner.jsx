import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import '../App.css'
import 'swiper/css';
import slider1 from '../assets/slider-1.png'
import slider2 from '../assets/slider-2.png'
import slider3 from '../assets/slider-3.png'
const Banner = () => {
    return (
        <div className='md:container md:mx-auto md:h-[450px]  h-50 bg-[#EBF0F5] '>
           
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className=''>
           <div className='flex bg-[#FEFAD9] items-center'>
            <div className="text-left flex items-center justify-center w-2/6">
             <span className='md:h-50 h-35 px-3 items-center '>
             <h1 className='md:text-[37px] text-[16px] font-semibold'>Find Your Perfect <br />Roommate Today </h1>
             <p className='md:mt-4 mt-2 md:text-[20px] text-[9px] text-black font-medium'> Connect with like-minded individuals based on your lifestyle, <br /> budget, and location preferences.</p>
             <button className='px-4  py-2 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-4 rounded-md'>Find Roommate </button>
             </span> 
            </div>
            <div className='w-4/6 '>
               <img className='h-full w-full ' src={slider1} alt="" />
            </div>
           
           </div>
        </SwiperSlide>
        <SwiperSlide className=' '>
           <div className="flex  bg-[#FFFFFF]  items-center">
            <div className="w-2/6 text-left flex items-center justify-center ">
                 <span className="md:h-50 h-35 px-3 items-center ">
                   <h1 className='md:text-[37px] text-[16px] text-black font-semibold'> Find a Roommate, Make <br />a New Friend</h1>
                   <p className='mt-2 md:mt-4 md:text-[20px] text-[9px] text-black'>Room with someone who matches your vibe — and maybe <br /> becomes your best bud</p>
                   <button className='px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 mt-4 md:text-2xl text-[12px] rounded-md font-semibold'>Find Roommate </button>
                 </span>
            </div>
            <div className='w-4/6 '>
               <img className='h-full w-full ' src={slider2} alt="" />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='flex items-center h-[450px] bg-[#EEF0EF] '>
            <div className="text-left flex items-center justify-center w-2/6">
            <span className="md:h-50 h-30 px-3 items-center">
               <h1 className='md:text-[37px] text-[13px] hidden md:flex font-semibold'>Find the Perfect Roommate,</h1>
               <h1 className='md:text-[37px] text-[13px] md:hidden font-semibold'>Fast, Secure & Hassle-Free Bill Payments </h1>
               <p className='mt-2 md:mt-4 md:text-[20px] text-[9px]'> Connect with like-minded people and create a home full <br />
                   of comfort and friendship.</p>
               <button className='px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 mt-4 md:text-2xl text-[12px] rounded-md font-semibold'>Find Roommate </button>
            </span>
            
            </div>
            <div className='w-4/6 '>
               <img id='img' className='h-full w-full  ' src={slider3} alt="" />
            </div>
           
           </div>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Banner;