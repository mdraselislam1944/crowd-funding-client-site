import {  useState } from "react";
import logo from "../../assets/img/logo-main/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo__1_-removebg-preview.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav
      className={
        colorChange
          ? "sm:px-0 bg-transparent md:px-0 lg:px-56  fixed w-full z-20 top-0 left-0 bg-gradient-to-r from-[#03387B] to-[#048F87] py-3"
          : "sm:px-0 py-1 md:px-0 lg:px-56 dark:bg-gray-900 fixed w-full z-20 top-0 left-0"
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="" />
        </a>
        <div className="flex md:order-2">
         <Link to="/login">
         <button
            type="button"
            className="text-white bg-[#F99F24] hover:bg-[#F99F24] focus:ring-4 focus:outline-none focus:ring-[#F99F24] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#F99F24] dark:hover:bg-[#F99F24] dark:focus:ring-[#F99F24] "
          >
            Login
          </button>
         </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="hover:border-b-[3px] hover:border-[#F99F24] pb-1">
              <Link
                to="/"
                className="block py-2 pl-3  pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-500 md:p-0 md:dark:text-yellow-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="hover:border-b-[3px] hover:border-[#F99F24] pb-1">
              <Link
                to="/event"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Events
              </Link>
            </li>
            <li className="hover:border-b-[3px] hover:border-[#F99F24] pb-1">
              <Link
                to="/campaigns"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Campaigns
              </Link>
            </li>
            <li className="hover:border-b-[3px] hover:border-[#F99F24] pb-1">
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </Link>
            </li>
            <li className="hover:border-b-[3px] hover:border-[#F99F24] pb-1">
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    //    {/* <nav className={colorChange ? "w-full bg-opacity-80 fixed mx-auto px-56 z-20 top-0 bg-gradient-to-r from-[#03387B] to-[#048F87]" : "w-full bg-opacity-80 fixed mx-auto px-56 z-20 top-0 bg-transparent"}>
    //  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //    <a href="/" className="flex items-center">
    //      <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
    //    </a>
    //    <div className="flex md:order-2">
    //      <button
    //        type="button"
    //        className="text-white font-[700] text-xl h-12 w-40 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //      >
    //        Donate Now
    //      </button>
    //      <button
    //        data-collapse-toggle="navbar-sticky"
    //        type="button"
    //        className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //            aria-controls="navbar-sticky"
    //            aria-expanded="false"
    //          >
    //            <span className="sr-only">Open main menu</span>
    //            <svg
    //              className="w-5 h-5"
    //              aria-hidden="true"
    //              xmlns="http:.w3.org/2000/svg"
    //              fill="none"
    //              viewBox="0 0 17 14"
    //            >
    //              <path
    //                stroke="currentColor"
    //                strokeLinecap="round"
    //                strokeLinejoin="round"
    //                strokeWidth="2"
    //                d="M1 1h15M1 7h15M1 13h15"
    //              />
    //            </svg>
    //          </button>
    //        </div>
    //        <div
    //          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
    //          id="navbar-sticky"
    //        >
    //          <ul className="flex text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-5 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <Link to="/"><li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
    //              <a
    //                className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
    //                aria-current="page"
    //                href="#"
    //                data-te-nav-link-ref
    //              >
    //                Home
    //              </a>
    //            </li></Link>
    //            <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
    //              <a
    //                className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
    //                aria-current="page"
    //                href="#"
    //                data-te-nav-link-ref
    //              >
    //                Events
    //              </a>
    //            </li>
    //            <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
    //              <a
    //                className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
    //                aria-current="page"
    //                href="#"
    //                data-te-nav-link-ref
    //              >
    //                Campaigns
    //              </a>
    //            </li>
    //            <Link to="/about" className='active:text-red-500'>
    //            <li className="  pl-0 lg:my-0 " data-te-nav-item-ref>
    //              <a
    //                className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
    //                aria-current="page"
    //                data-te-nav-link-ref
    //              >
    //                About US
    //              </a>
    //            </li></Link>
    //            <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
    //              <a
    //                className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
    //                aria-current="page"
    //                href="#"
    //                data-te-nav-link-ref
    //              >
    //                Contact Us
    //              </a>
    //            </li>
    //          </ul>
    //        </div>
    //      </div>
    //    </nav> */}
  );
};

export default Navbar;
