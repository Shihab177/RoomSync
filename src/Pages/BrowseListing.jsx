import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const BrowseListing = () => {
    const navigate = useNavigate()
    const allPost = useLoaderData()
    const handelDetails =(id)=>{
     navigate(`/details/${id}`)
    }
    return (
        <div className='md:container mx-auto'>
            <h1 className='text-[40px] font-bold text-center'>Roommate Finder All Posts</h1>
            <div className="class bg-gray-100">
                 <table className="w-full mt-5 text-black">
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
          {allPost.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-2xl  py-4 text-black font-bold">
                No listings found.
              </td>
            </tr>
          ) : (
            allPost.map((post) => (
              <tr key={post._id} className="text-center border-b font-semibold">
                <td className=" py-5 px-2 ">{post.title}</td>
                <td className=" px-2 py-1">Tk: {post.rent}</td>
                <td className=" px-2 py-1">{post.location}</td>
                <td className=" px-2 py-1">{post.roomType}</td>
                <td className=" px-2 py-1">
                  <div className="flex justify-center gap-2">
                    <button onClick={()=>handelDetails(post._id)} className="bg-blue-500 text-white px-3 py-1 rounded">
                      See More
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

export default BrowseListing;