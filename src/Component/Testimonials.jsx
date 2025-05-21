import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import one from '../assets/emily.webp';
import two from '../assets/re-1.jpeg';
import three from '../assets/re-2.jpg';

const testimonials = [
  {
    image: one,
    name: 'Rebeca-M',
    text: `The only option I knew of to search for roommates was craigslist, and after several disappointing and stressful experiences looking for rooms/roommates, I stumbled upon RoomSync. It only took a few minutes to set up a profile and I was soon matched with multiple people with similar interests and lifestyles. RoomSync made it super easy for me to find Kevin with whom I am already planning on living with again next year! I will definitely continue to use RoomSync and am constantly recommending it to friends and family!`
  },
  {
    image: two,
    name: 'Lana Roy',
    text: `"I signed up on RoomSync with hope. Using a few filters, I matched with some potential roommates... I hit it off with one of them. I went to New York to meet them and see the apartment... Finally, my search was over! My roommate is the best, and this was all possible because of RoomSync!"`
  },
  {
    image: three,
    name: 'Shihab Islam',
    text: `"I moved from Madrid to New York. About a week before my trip, I registered on RoomSync... After getting a few likes, I found an apartment that was even better than I dreamed of! I can't believe how quickly it happened. Within just 4 days of arriving in the city, I already found my perfect place through RoomSync!"`
  }
];

const Testimonials = () => {
  return (
    <div className='md:container mx-auto my-20 px-4'>
      <h1 className='text-[40px] font-bold text-center'>Testimonials</h1>
      <p className='text-[30px] font-semibold text-center mb-10'>
        Check out what people are saying about RoomSync.
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className='pb-16' // 👈 Added padding-bottom
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col md:flex-row  bg-[#F9FAFB] justify-center gap-15 text-center md:text-left'>
              <img
                src={item.image}
                alt={item.name}
                className='w-42 h-42 rounded-full object-cover mx-auto md:mx-0'
              />
              <div className='text-center max-w-2xl'>
                <p className='text-gray-700 text-lg leading-relaxed italic'>{item.text}</p>
                <p className='mt-4 mb-10 font-semibold text-black'>{item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
