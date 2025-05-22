import React from 'react';

const AvailableRoommates = ({featuredPost}) => {

    return (
        <div className='md:container mx-auto my-20'>
            <h1 className='text-[40px] font-bold mb-6  text-center'>Find Your Roommate</h1>
            <div className="text-2xl bg-gray-200 rounded-md p-5 grid gap-6 grid-cols-3 font-semibold">
               {
                featuredPost.map(post=><div className='  rounded-md  bg-white p-3' key={post._id}>
                   <div className="flex flex-col gap-4 items-center">
                     <p>Title : {post.title}</p>
                    <p>Name: {post.name}</p>
                    <p>Location : {post.location}</p>
                    <p>Availability : {post.availability}</p>
                    <p>Rent : {post.rent}</p>
                    <p>Lifestyle : {post.lifestyle}</p>
                    <p>Description : {post.description}</p>
                   </div>
                </div>)
               }
            </div>
        </div>
    );
};

export default AvailableRoommates;