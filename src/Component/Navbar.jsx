import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../assets/r-logo.png";
import Toggle from "./Toggle/Toggle";

const Navbar = () => {
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
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-4">
        <div className="w-3/10 gap-x-6 flex items-center">
          <img className="w-15 h-16 rounded-md " src={logo} alt="" />
             
              <h1 className="text-[40px] font-bold">Roomsyns</h1>
        </div>
        <div className="flex justify-between text-[20px] font-bold items-center w-4/10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AddToFindRoommate">Add To Find Roommate</NavLink>
          <NavLink to="/BrowseListing">Browse Listing</NavLink>
          <NavLink to="/MyListings">My Listings</NavLink>
        </div>
        <div className="w-1/10 flex justify-end">
           <div className="bg-blue-400 w-16 h-16 p-3 rounded-[50%] ">
             <Toggle isCecked={isDark} handelChange={()=>setDark(!isDark)}></Toggle>
           </div>
         </div>
        {user ? (
          <div className="w-1/10 flex justify-end items-center">
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
                className="absolute top-19 right-0 bg-white shadow-lg border rounded-md p-4 z-10 w-48 text-center"
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
          <div className="w-2/10 text-black gap-x-6 flex justify-end items-center">

            <button
              onClick={() => navigate("/auth/login")}
              className="text-[20px] font-semibold py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-sm"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/auth/register")}
              className="text-[20px] font-semibold py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-sm"
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
