import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-500 ease-in-out">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Contact Us
        </h1>
        <p className="text-center text-gray-500 mb-6">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <form className="space-y-6 animate-fade-in-up">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-transform transform hover:scale-105" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-transform transform hover:scale-105" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-transform transform hover:scale-105" rows="4"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-110">
              Send Message
            </button>
          </div>
        </form>

        <div className="flex justify-between mt-6 space-x-4">
          <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-transform transform hover:scale-105">Sign Up</button>
          <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105">Login</button>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-indigo-500 hover:text-indigo-700 transition-transform transform hover:scale-110">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-110">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700 transition-transform transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
