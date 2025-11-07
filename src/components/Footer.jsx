import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-1 mt-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-lg font-semibold mb-4 md:mb-0">
           <span className="text-blue-500"></span>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-blue-500 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-2">
        © {new Date().getFullYear()} Employee Management System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
