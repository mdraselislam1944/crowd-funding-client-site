// import { useState } from "react";
import { FaBars, FaBell, FaCog, FaExpand, FaHouseDamage } from "react-icons/fa";
import logo from "../assets/img/logo-main/logo.png"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    FaAddressCard,
    FaAngular,
    FaArtstation,

    FaBriefcase,
    FaDollarSign,
    FaExternalLinkAlt,
    FaLock,
    FaQrcode,
    FaRegClone,
    //   FaAngleDown,
    //   FaAngleUp,
    //   FaCheck,
    //   FaCompactDisc,
    //   FaGem,
    //   FaGlobe,
    //   FaLink,
    //   FaMedrt,
    //   FaPodcast,
    //   FaRebel,
    //   FaShoppingCart,
    //   FaUndoAlt,
    //   FaVimeoSquare,
    //   FaWindowRestore,
    //   FaYarn,
} from "react-icons/fa";

function Dashboard() {
    // const [count, setCount] = useState(0)
    //   const [orderIsOpen, setOrderIsOpen] = useState(false);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-black  flex flex-col items-center justify-center">
                {/* lg navbar */}

                <Outlet className="h-screen overflow-y-scroll"></Outlet>

                <div className="h-20 lg:hidden bg-black opacity-50%  top-0 left-0 right-0 absolute"></div>
                <div className="h-20 md:h-24 flex items-center  gap-5 justify-center invisible lg:visible bg-gradient-to-r from-black via-black to-[#F99F24] top-0 left-0 right-0 absolute">
                    <div className="flex items-center  justify-center gap-5 absolute left-80 ml-5">
                        <FaBars className="text-center text-3xl text-white" />
                        <input type="text" placeholder="Search Here" className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div className="flex items-center gap-7 justify-center absolute right-5">
                        <FaHouseDamage className="text-center text-3xl text-white" />
                        <FaExpand className="text-center text-3xl text-white" />
                        <FaBell className="text-center text-3xl text-white" />
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src="https://i.ibb.co/0DP9812/5.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="md:w-64 w-40 absolute z-30 top-5 md:top-2 md:left-5 left-4 lg:hidden md:hidden block">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>

                    <label
                        htmlFor="my-drawer-2"
                        className="btn border-[#f99F24] bg-black rounded-lg text-white absolute right-5 top-5 drawer-button lg:hidden"
                    >
                        <FaBars />
                    </label>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="bg-gradient-to-r from-black via-black to-[#F99F24]  text-white overflow-y-scroll menu p-4 w-80 h-full ">
                    {/* Sidebar content here */}
                    <img src={logo} className="w-52 ml-8" alt="" />

                    {/* Sidebar content here */}


                    <div className="mt-10 ml-5 text-xl">
                        <li className="mt-3">
                            <div className="flex flex-row bg-gray-400">
                                {/* <img className="w-4 h-4" src={dashboard} alt="" /> */}
                                <FaQrcode></FaQrcode>
                                <Link className="rounded-none m-0" to="/dashboard">
                                    Dashboard
                                </Link>
                            </div>
                        </li>


                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaDollarSign className="border rounded-full"></FaDollarSign>
                                <Link to="/revenue" className=" w-full rounded-none m-0" >
                                    Revenue
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaArtstation></FaArtstation>
                                <Link className=" w-full rounded-none m-0" to="/dashboard/allProject">
                                    All Projects
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaAddressCard></FaAddressCard>
                                <Link className=" w-full rounded-none m-0" to="/dashboard/allUser">
                                    All Users
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                {/* <img className="w-4 h-4" src={products} alt="" /> */}
                                <FaRegClone></FaRegClone>
                                <Link className=" w-full rounded-none m-0" to="/dashboard/UserPayment">
                                    Payment
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaBriefcase></FaBriefcase>
                                <Link className=" w-full rounded-none m-0" to="/dashboard/aCampaign">
                                    Campaign
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaLock></FaLock>
                                <Link className=" w-full rounded-none m-0" to="/dashboard/aEvent">
                                    Event
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaAngular></FaAngular>
                                <Link className=" w-full rounded-none m-0" to="/dashboard/blog">
                                    Blog
                                </Link>
                            </div>
                        </li>

                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaCog></FaCog>
                                <Link className=" w-full rounded-none m-0" to="/settings">
                                    Setting
                                </Link>
                            </div>
                        </li>
                        <li className="mt-3">
                            <div className="flex flex-row hover:bg-gray-400">
                                <FaExternalLinkAlt></FaExternalLinkAlt>
                                <Link className=" w-full rounded-none m-0" to="/logout">
                                    Log Out
                                </Link>
                            </div>
                        </li>
                    </div>

                </ul>
            </div>
        </div>
    );
}

export default Dashboard;