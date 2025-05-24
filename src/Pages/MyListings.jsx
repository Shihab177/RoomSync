import React, { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Component/Loading";
import SmallLoading from "../Component/SmallLoading";

const MyListings = () => {
    const navigate = useNavigate()
  const { user } = use(AuthContext);
  const [myPost,setMyPost]=useState([])
  useEffect(() => {
    fetch(`https://roommate-finder-web-server.vercel.app/roommates?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
      
        setMyPost(data)
      });
  }, [user.email]);
  //
  const handelUpdate = (id)=>{
   navigate(`/update/${id}`)
  }
  const handelDelete = (id)=>{
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://roommate-finder-web-server.vercel.app/roommates/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your post has been deleted.',
              'success'
            );
            // Optional: Remove the deleted item from state
            setMyPost(myPost.filter(post => post._id !== id));
          }
        });
    }
  });
  }
  return (
    <div className="md:container mx-auto  rounded-md md:p-8 md:my-20">
      <h1 className="text-center text-[40px] text-bold">My Posts</h1>
      <div className="overflow-x-auto bg-gray-100">
        <table className="w-full min-w-[700px] mt-5 text-black">
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
               
              No Listings Found
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
                    <button onClick={()=>handelDelete(post._id)} className="bg-red-500 text-white px-3 py-1 rounded">
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
    </div>
  );
};

export default MyListings;
