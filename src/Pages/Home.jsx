import React from 'react';
import Banner from '../Component/Banner';
import PopularCitys from '../Component/PopularCitys';
import Testimonials from '../Component/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <PopularCitys></PopularCitys>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;