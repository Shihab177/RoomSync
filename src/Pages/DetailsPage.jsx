import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const detailsData = useLoaderData();

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    if (!liked) {
      setLikeCount((prev) => prev + 1);
      setLiked(true);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "You liked this post!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You already liked this.",
      });
    }
  };
  return (
    <div className="md:container flex flex-col items-center mx-auto">
      <h1 className="text-[40px] font-bold text-center">Post Details</h1>
      <div className="md:text-3xl flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-bold ">{detailsData.title}</h2>
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
          <strong>Description:</strong> {detailsData.description}
        </p>
        <p>
          <strong>Availability:</strong> {detailsData.availability}
        </p>
        <p>
          <strong>Posted By:</strong> {detailsData.name} ({detailsData.email})
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            {likeCount} people interested in
          </h3>
          <button
            onClick={handleLike}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
          >
            ❤️ Like
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
