import React from "react";

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
          <div className="space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
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
