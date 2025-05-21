import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import "./Navbar.css"
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className='flex justify-between items-center px-10 py-4'>
               <div className="w-3/10  flex items-center">
                 <h1 className='text-2xl font-bold bg-'>RoomSync</h1>
               </div>
                <div className="flex justify-between text-[20px] font-bold items-center w-4/10">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/AddToFindRoommate">Add To Find Roommate</NavLink>
                    <NavLink to="/BrowseListing">Browse Listing</NavLink>
                    <NavLink to="/MyListings">My Listings</NavLink>
                   
                </div>
                <div className="w-3/10 text-black gap-x-6 flex justify-end items-center">
                    <button onClick={ ()=>navigate('/auth/login')} className='text-[20px] font-semibold py-2 px-4 bg-[#38BDF8] rounded-sm'>Login</button>
                    <button onClick={()=>navigate('/auth/register')} className='text-[20px] font-semibold py-2 px-4 bg-[#38BDF8] rounded-sm'>Register</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;