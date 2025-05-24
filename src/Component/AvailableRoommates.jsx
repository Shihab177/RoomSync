import React from "react";
import { Link } from "react-router";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const AvailableRoommates = ({ featuredPost }) => {
  const [typeEffect] = useTypewriter({
  words: ['Roommates ', 'Post'],
  loop: {}, 
  typeSpeed: 100,
  deleteSpeed: 40
})
  return (
    
    <div className="md:container mx-auto my-10 md:my-20">
      <h1 className="text-[19px] md:text-[40px] font-bold   text-center">
        Available
        <span style={{marginLeft:'5px'}}>{typeEffect}</span>
      </h1>
      <p className="mb-6 text-[14px] md:text-[20px] text-center font-semibold"> Find Your Roommate</p>
     
      <div className="text-[20px] bg-gray-200 rounded-md p-5 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 font-semibold">
        {featuredPost.map((post) => (
          <div className="  rounded-md  bg-white p-3" key={post._id}>
            <div className="flex text-black  flex-col relative gap-4">
              
              <p>Title : {post.title}</p>
              <p>Name: {post.name}</p>
              <p>Location : {post.location}</p>
              <p>Availability : {post.availability}</p>
              <p>Rent : {post.rent}</p>
              <p>Lifestyle : {post.lifestyle}</p>
             
              
                <Link
                to={`/details/${post._id}`}
                className="inline-block  mt-4 px-4 py-2  text-center  bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                See More
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default AvailableRoommates;
