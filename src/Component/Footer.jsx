import React from "react";
import fb from '../assets/fb (2).png';
import lin from '../assets/in (2).png';
import tube from '../assets/tube.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between flex-wrap">
        
        {/* Contact Details */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:support@roommatefinder.com" className="text-blue-400 hover:underline">support@roommatefinder.com</a></p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Roommate St, New York, NY</p>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-3">Terms & Conditions</h3>
          <ul>
            <li>
              <a href="/terms" className="text-blue-400 hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="space-x-4 flex">
             <a href="https://www.facebook.com/sk.shihab.73594" target="_blank"><img src={fb} alt="" /></a>
		 <a href="http://www.youtube.com/@ultracoder-j3i" target="_blank"><img src={tube} alt="" /></a>
		 <a href="https://github.com/Shihab177" target="_blank"><img src={lin} alt="" /></a>
		 
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
