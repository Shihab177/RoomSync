import React from 'react';
import Banner from '../Component/Banner';
import PopularCitys from '../Component/PopularCitys';
import Testimonials from '../Component/Testimonials';
import AvailableRoommates from '../Component/AvailableRoommates';
import { useLoaderData } from 'react-router';

const Home = () => {
    const featuredPost =useLoaderData()
    return (
        <div>
           <Banner></Banner> 
           <AvailableRoommates></AvailableRoommates>
           <PopularCitys></PopularCitys>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;