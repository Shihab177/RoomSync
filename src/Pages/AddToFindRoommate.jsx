import React from 'react';

const AddToFindRoommate = () => {
    return (
        <div className="md:container  mx-auto p-6 bg-white shadow rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Roommate Listing</h2>
      <form className="space-y-4">
       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
         <fieldset>
          <label className='text-black' htmlFor="">Title</label>
          <br />
           <input type="text" name="title" placeholder="Title" className="w-full p-2 border rounded" required />
        </fieldset>
        <fieldset>
          <label htmlFor="">Location</label>
          <br />
           <input type="text" name="location" placeholder="Location" className="w-full p-2 border rounded" required />
        </fieldset>
       <fieldset>
        <label htmlFor="">Rent Amount</label>
          <input type="number" name="rent" placeholder="Rent Amount" className="w-full p-2 border rounded" required />
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
          <option value="" disabled>Select Room Type (Single, Shared, etc.)</option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
          <option value="Private Room">Private Room</option>
          <option value="Studio">Studio</option>
        </select>
       </fieldset>

        
        {/* Lifestyle Preferences Dropdown */}
        <fieldset>
          <label className="block font-medium">Lifestyle Preferences</label>
        <select
          name="roomType"
          className="w-full p-2 border rounded"
          required
          defaultValue=""
        >
          <option value="" disabled>Select Lifestyle Preferences</option>
          <option value="Single">Pets</option>
          <option value="Shared">Smoking</option>
          <option value="Private Room">Night Owl</option>
          <option value="Studio"> etc.</option>
        </select>
        </fieldset>

          <fieldset>
            <label htmlFor="">Description</label>
            <br />
             <textarea name="description" placeholder="Description" className="w-full p-2 border rounded" required />
          </fieldset>
         <fieldset>
          <label htmlFor="">Contact Info</label>
          <br />
           <input type="text" name="contact" placeholder="Contact Info" className="w-full p-2 border rounded" required />
         </fieldset>
       

        {/* Availability Dropdown */}
        <fieldset>
          <label htmlFor="">Availability</label>
          <select name="availability" className="w-full p-2 border rounded" required>
          <option value="">Select Availability</option>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        </fieldset>

        {/* Read-only Fields */}
       <fieldset>
        <label htmlFor="">Email</label>
        <br />
         <input type='email'  placeholder='email' className="w-full p-2 border rounded bg-gray-100 " />
       </fieldset>
       <fieldset>
        <label htmlFor="">Name</label>
        <br />
         <input type="text"  placeholder='name' className="w-full p-2 border rounded bg-gray-100 " />
       </fieldset>

       </div>
       <input className='bg-[#38BDF8] text-white px-4 py-2 rounded mt-5  w-full' type="submit" value="Add" />
       
      </form>
    </div>
    );
};

export default AddToFindRoommate;