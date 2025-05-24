import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const DetailsPage = () => {
  const {user}=use(AuthContext)
  const detailsData = useLoaderData();
  //console.log(detailsData)

  const [likeCount, setLikeCount] = useState(detailsData.likeCount || 0);
  const [liked, setLiked] = useState(false);
  //console.log(likeCount)
  const handleLike = () => {
   
    if(user?.email === detailsData.email){
      return  Swal.fire({
                  position: "center",
                  icon: "error",
                  title:"You cannot like your own post.",
                 
                });
    }
   
     
     fetch(`https://roommate-finder-web-server.vercel.app/roommates/${detailsData._id}/like`,{
      method: "PATCH",
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
        setLiked(true)
       setLikeCount(data.likeCount);
     })
    
  };
  
  return (
    <div className="md:container pb-10  flex flex-col justify-center items-center mx-auto">
      <h1 className="text-[40px] font-bold text-center">Post Details</h1>
      <div className="md:text-3xl p-3 bg-gray-200 rounded-sm shadow  flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-bold ">Title : {detailsData.title}</h2>
        <p>
          <strong>Location:</strong> {detailsData.location}
        </p>
        <p>
          <strong>Rent:</strong> {detailsData.rent}৳
        </p>
        <p>
          <strong>Room Type:</strong> {detailsData.roomType}
        </p>
        <p>
          <strong>Lifestyle:</strong> {detailsData.lifestyle}
        </p>
        
        <p>
          <strong>Availability:</strong> {detailsData.availability}
        </p>
        <p>
          <strong>Description:</strong> {detailsData.description}
        </p>
        <p>
          <strong>Posted By:</strong> {detailsData.name} ({detailsData.email})
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            {likeCount} people Like
          </h3>
          <button
            onClick={handleLike}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
             Like
          </button>

          {liked && (
            <div className="mt-4">
              <p>
                <strong>Contact Info:</strong> {detailsData.contact}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
