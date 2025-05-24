import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToFindRoommate = () => {
  const { user } = use(AuthContext);

  const handelAdd = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const newRoommateData = Object.fromEntries(fromData.entries());

    //add from data in database
    fetch("https://roommate-finder-web-server.vercel.app/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRoommateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data add baked", data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          from.reset()
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add failed;",
          });
        }
      });
  };
  return (
    <div className="md:container  mx-auto p-6 bg-gray-100 shadow rounded-lg  mb-10">
      <h2 className="text-2xl font-bold  mb-6 text-center text-black">
        Create a Roommate Post
      </h2>
      <form onSubmit={handelAdd} className="space-y-4 text-black">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <fieldset>
            <label className="text-black" htmlFor="">
              Title
            </label>
            <br />
            <input
              type="text"
              name="title"
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
              defaultValue=""
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
              defaultValue=""
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
          className="bg-blue-600 text-white rounded hover:bg-blue-700 px-4 py-2 mt-5  w-full"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddToFindRoommate;
