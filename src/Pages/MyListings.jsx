import React, { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";

const MyListings = () => {
    const navigate = useNavigate()
  const { user } = use(AuthContext);
  const [myPost,setMyPost]=useState([])
  useEffect(() => {
    fetch(`http://localhost:7000/roommates?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
      
        setMyPost(data)
      });
  }, [user.email]);
  //
  const handelUpdate = (id)=>{
   navigate(`/update/${id}`)
  }
  return (
    <div className="md:container mx-auto bg-gray-100 p-8 my-20">
      <h1 className="text-center text-[40px] text-bold">My Roommate Posts</h1>
      <table className="w-full mt-5">
        <thead>
          <tr className="bg-gray-200  border-b">
            <th className="py-8 px-2 ">Title</th>
            <th className=" px-2 py-1">Rent</th>
            <th className=" px-2 py-1">Location</th>
            <th className=" px-2 py-1">Room Type</th>
            <th className=" px-2 py-1">Actions</th>
          </tr>
        </thead>
       <tbody>
          {myPost.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-2xl  py-4 text-black font-bold">
                No listings found.
              </td>
            </tr>
          ) : (
            myPost.map((post) => (
              <tr key={post._id} className="text-center border-b font-semibold">
                <td className=" py-5 px-2 ">{post.title}</td>
                <td className=" px-2 py-1">tk: {post.rent}</td>
                <td className=" px-2 py-1">{post.location}</td>
                <td className=" px-2 py-1">{post.roomType}</td>
                <td className=" px-2 py-1">
                  <div className="flex justify-center gap-2">
                    <button onClick={()=>handelUpdate(post._id)} className="bg-blue-500 text-white px-3 py-1 rounded">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyListings;
