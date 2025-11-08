import React from 'react'
import { Link } from 'react-router-dom';

function WelcomeMenu() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to={"/"} className="text-2xl font-bold text-gray-800">
              Employee
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to={"/login"}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <Link to={"/register"}
              className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
  
}

export default WelcomeMenu
