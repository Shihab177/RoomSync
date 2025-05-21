import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const AuthLayout = () => {
    return (
        <>
           <Navbar></Navbar>
            <main className='md:container mx-auto min-h-[calc(100vh-306px)]'>
              <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default AuthLayout;