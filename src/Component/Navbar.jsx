import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../assets/r-logo.png";
import Toggle from "./Toggle/Toggle";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  const [isDark,setDark]=useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = use(AuthContext);

  const handelLogout = () => {
    logout().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      
    });
  };
  //
  useEffect(() => {
  const root = document.documentElement;

  if (isDark) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
}, [isDark]);

const handelMenu = ()=>{
 setOpenMenu(!openMenu)
}
  return (
    <div>
      <nav className="flex justify-between items-center md:px-3 lg-px-10 px-3  py-4">
        <div className="lg:w-3/10 xl:gap-x-6 md:gap-x-4 gap-x-2 flex items-center">
          <img className="w-15 h-16 rounded-md lg:flex hidden " src={logo} alt="" />
               <CiMenuFries onClick={handelMenu} size={33} className="md:hidden"/>
              <h1 className="xl:text-[40px] lg:[30px] md:text-[20px] text-[18px] font-bold md:mr-5 lg-mr-0">Room Syncs</h1>
        </div>
        <div className="justify-between hidden md:flex text-[20px] md:text-[13px] lg:text-[20px] font-bold items-center xl:w-6/10 lg:w-8/10 md:w-6/10 w-4/10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AddToFindRoommate">Add To Find Roommate</NavLink>
          <NavLink to="/BrowseListing">Browse Listing</NavLink>
          <NavLink to="/MyListings">My Listings</NavLink>
        </div>
        <div className="lg:w-1/10 flex md:justify-end">
           <div className=" md:w-16 md:h-16 md:flex hidden items-center justify-center p-3 rounded-[50%] ">
             <Toggle isCecked={isDark} handelChange={()=>setDark(!isDark)}></Toggle>
           </div>
            <div className="md:hidden ml-3 md:ml-12">
             <Toggle isCecked={isDark} handelChange={()=>setDark(!isDark)}></Toggle>
           </div>
         </div>
        {user ? (
          <div className="lg:w-1/10 flex justify-end items-center">
            <img
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className=" lg:w-17 lg:h-17 md:w-14 md:h-14 w-14 h-14 rounded-[50%] border"
              src={user?.photoURL}
              alt=""
              referrerPolicy="no-referrer"
            />
            {isHovered && (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="absolute top-19 right-0 bg-white text-black shadow-lg border rounded-md p-4 z-10 w-48 text-center"
              >
                <p className="font-semibold mb-2">{user?.displayName}</p>
                <p className="font-semibold mb-2">{user?.email}</p>

                <button
                  onClick={handelLogout}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="lg:w-2/10 text-black gap-3 xl:gap-x-6 flex justify-end items-center">

            <button
              onClick={() => navigate("/auth/login")}
              className=" text-[13px] xl:text-[20px] font-semibold md:py-2 py-1 px-2 md:px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-sm"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/auth/register")}
              className="xl:text-[20px] text-[13px] font-semibold md:py-2 py-1 px-2 md:px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-sm"
            >
              Register
            </button>
          </div>
        )}
         
      </nav>
      {
        openMenu && <div className="absolute top-20 rounded-sm w-60 h-100 bg-gray-300 z-40">
          <div className="text-center">
            <button onClick={()=>setOpenMenu(false)} className="text-red-400 text-4xl bg-white px-4 py-2 mt-4 rounded-2xl text-center">x</button>
          </div>
           <div className="flex flex-col text-black pl-4 gap-4 text-[20px]  font-bold ">
          <NavLink onClick={()=>setOpenMenu(false)} to="/">Home</NavLink>
          <NavLink onClick={()=>setOpenMenu(false)} to="/AddToFindRoommate">Add To Find Roommate</NavLink>
          <NavLink onClick={()=>setOpenMenu(false)} to="/BrowseListing">Browse Listing</NavLink>
          <NavLink onClick={()=>setOpenMenu(false)} to="/MyListings">My Listings</NavLink>
        </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
