import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div className=''>
          
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </main>
           
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;