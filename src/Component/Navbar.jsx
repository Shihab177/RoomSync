import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { user,logout } = use(AuthContext);
  console.log(user);
  const handelLogout =()=>{
   logout()
   .then(()=>{
     Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Logout Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setTimeout(()=>{
                  navigate('/')
                },1600)
   
   })
     
  }
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-4">
        <div className="w-3/10  flex items-center">
          <h1 className="text-2xl font-bold bg-">RoomSync</h1>
        </div>
        <div className="flex justify-between text-[20px] font-bold items-center w-4/10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AddToFindRoommate">Add To Find Roommate</NavLink>
          <NavLink to="/BrowseListing">Browse Listing</NavLink>
          <NavLink to="/MyListings">My Listings</NavLink>
        </div>
        {user ? (
          <div className="w-3/10 flex justify-end items-center">
            <img
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className=" md:w-17 md:h-17 w-14 h-14 rounded-[50%] border"
              src={user?.photoURL}
              alt=""
              referrerPolicy="no-referrer"
            />
            {isHovered && (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='absolute top-19 right-0 bg-white shadow-lg border rounded-md p-4 z-10 w-48 text-center'
              >
                <p className='font-semibold mb-2'>{user?.displayName}</p>
                <p className='font-semibold mb-2'>{user?.email}</p>
                
                <button onClick={handelLogout}
                  className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                >
                  Logout
                </button>
              </div>
            )}


          </div>
        ) : (
          <div className="w-3/10 text-black gap-x-6 flex justify-end items-center">
            <button
              onClick={() => navigate("/auth/login")}
              className="text-[20px] font-semibold py-2 px-4 bg-[#38BDF8] rounded-sm"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/auth/register")}
              className="text-[20px] font-semibold py-2 px-4 bg-[#38BDF8] rounded-sm"
            >
              Register
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
