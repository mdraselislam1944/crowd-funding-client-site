import {  useState } from "react";
import logo from "../../assets/img/logo-main/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo__1_-removebg-preview.png"
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const user=0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white px-7 md:px-0 text-black p-4 shadow font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="#" className="text-black text-lg font-semibold">
           logo
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 flex-grow">
          <ul className="flex space-x-4 md:space-x-10 lg:space-x-10 mx-auto">
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <button className="bg-indigo-600 text-white rounded px-4 py-2 transition duration-300 hover:bg-indigo-300 hover:text-black">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="#"
                className="block text-black hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          {
          user ? 
          <Link><button className='mx-10 btn btn-success' onClick="">logOut</button></Link>
          :
          <Link to="/login">
          <button
             type="button"
             className="text-white bg-[#F99F24] hover:bg-[#F99F24] focus:ring-4 focus:outline-none focus:ring-[#F99F24] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#F99F24] dark:hover:bg-[#F99F24] dark:focus:ring-[#F99F24] "
           >
             Login
           </button>
          </Link>
        }
        </div>
      )}
    </nav>
  );
};

export default Navbar;

