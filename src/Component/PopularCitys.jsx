import React from 'react';
import one from '../assets/one.jpg'
import two from '../assets/two.jpeg'
import three from '../assets/three.jpeg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpeg'
import six from '../assets/six.jpeg'
import seven from '../assets/seven.jpg'
import eight from '../assets/eight.jpg'
import nine from '../assets/nine.jpg'
import ten from '../assets/ten.webp'
const PopularCitys = () => {
    return (
        <div className='md:my-20 my-10 md:container mx-auto lg:px-1 px-4'>
            <h1 className='text-[40px] font-bold text-center'>View rooms in popular cities</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5  md:gap-5 gap-2 mt-7">
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={one} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Melbourne</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] h-[74px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={two} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Singapore</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={three} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Miami</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={four} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Rome</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={five} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>New Yourk</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={six} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Paris</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={seven} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Tokyo</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={eight} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Berlin</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={nine} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>Istanbul</p>
                </div>
              </div>
              <div className="relative group md:h-[210px] overflow-hidden">
                <img className='rounded-sm w-full h-full' src={ten} alt="" />
                <div className="absolute group-hover:bottom-0 bg-black text-center w-full py-2">
                    <p className='text-[24px] font-semibold text-white'>San Francisco</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default PopularCitys;