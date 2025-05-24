import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { user } = use(AuthContext);
  const postData = useLoaderData();
  const handelUpdate = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const updatedData = Object.fromEntries(fromData.entries());

    fetch(`https://roommate-finder-web-server.vercel.app/roommates/${postData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        
        Swal.fire({
          position: "center",
          icon: "error",
          title: error,
        });
      });
  };
  return (
    <div className="md:container mx-auto  md:my-10">
      <h1 className="mb-5 md:my-5 font-bold text-2xl text-center">Update your Data</h1>
      <div className="md:container  mx-auto p-6 bg-gray-100 shadow rounded-lg ">
        <form onSubmit={handelUpdate} className="space-y-4 text-black">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <fieldset>
              <label className="text-black" htmlFor="">
                Title
              </label>
              <br />
              <input
                type="text"
                name="title"
                defaultValue={postData.title}
                placeholder="Title"
                className="w-full p-2 border rounded"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="">Location</label>
              <br />
              <input
                type="text"
                defaultValue={postData.location}
                name="location"
                placeholder="Location"
                className="w-full p-2 border rounded"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="">Rent Amount</label>
              <input
                type="number"
                defaultValue={postData.rent}
                name="rent"
                placeholder="Rent Amount"
                className="w-full p-2 border rounded"
                required
              />
            </fieldset>
            {/* Room Type Dropdown */}
            <fieldset>
              <label className="block font-medium">Room Type</label>
              <select
                name="roomType"
                
                className="w-full p-2 border rounded"
                required
                defaultValue={postData.roomType}
              >
                <option value="" disabled>
                  Select Room Type (Single, Shared, etc.)
                </option>
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
                <option value="Private Room">Private Room</option>
                <option value="etc">etc</option>
              </select>
            </fieldset>

            {/* Lifestyle Preferences Dropdown */}
            <fieldset>
              <label className="block font-medium">Lifestyle Preferences</label>
              <select
                name="lifestyle"
                className="w-full p-2 border rounded"
                required
                defaultValue={postData.lifestyle}
              >
                <option value="" disabled>
                  Select Lifestyle Preferences
                </option>
                <option value="Pets">Pets</option>
                <option value="Smoking">Smoking</option>
                <option value="Night Owl">Night Owl</option>
                <option value="etc"> etc.</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="">Description</label>
              <br />
              <textarea
                name="description"
                defaultValue={postData.description}
                placeholder="Description"
                className="w-full p-2 border rounded"
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="">Contact Info</label>
              <br />
              <input
                type="number"
                name="contact"
                defaultValue={postData.contact}
                placeholder="Contact Info"
                className="w-full p-2 border rounded"
                required
              />
            </fieldset>

            {/* Availability Dropdown */}
            <fieldset>
              <label htmlFor="">Availability</label>
              <select
                name="availability"
                className="w-full p-2 border rounded"
                required
                defaultValue={postData.availability}
              >
                <option value="">Select Availability</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </fieldset>

            {/* Read-only Fields */}
            <fieldset>
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                placeholder="email"
                required
                id="email"
                className="w-full p-2 border rounded bg-gray-100 "
              />
            </fieldset>
            <fieldset>
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                name="name"
                value={user.displayName}
                readOnly
                placeholder="name"
                className="w-full p-2 border rounded bg-gray-100 "
              />
            </fieldset>
          </div>
          <input
            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded mt-5  w-full"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
