import React from 'react';
import "./Animation.css";
import { FaBullhorn,FaHandHoldingUsd,FaDonate,FaShoppingBag } from "react-icons/fa";
const Animation = () => {
    return (
        <div className="bg-[#EEF7FF] h-full pb-[180vh] my-5 pt-5">
            <h1 className='text-center  text-3xl '>How We Function</h1>
            <hr  className='w-32 border-t-2 border-[#F99F24] mx-auto'/>
            <div className='text-white py-10 container1 mx-[20vw]'>
                <ul>
                    <li>
                        <div className="w-[30vw] h-[40vh] my-5 rounded bg-gradient-to-b from-[#03387B] to-[#048F87] flex flex-col justify-center items-center text-3xl">
                            <FaBullhorn className=' text-3xl' />
                            <h1>Launch a campaign</h1>
                         <span className='circle'/>
                        </div>
                        
                    </li>
                    <li>
                        <div className="w-[30vw] h-[40vh] my-5 rounded bg-gradient-to-b from-[#03387B] to-[#048F87] flex flex-col justify-center items-center text-3xl">
                            <FaHandHoldingUsd className=' text-5xl'/>
                            <h1>Collect</h1>
                            <span className='circle'/>
                        </div>
                    </li>
                    <li>
                        <div className="w-[30vw] h-[40vh] my-5 rounded bg-gradient-to-b from-[#03387B] to-[#048F87] flex flex-col justify-center items-center text-3xl">
                        <FaDonate className=' text-5xl'/>
                            <h1>Asses</h1>
                            <span className='circle'/>
                        </div>
                    </li>
                    <li>
                        <div className="w-[30vw] h-[40vh] my-5 rounded bg-gradient-to-b from-[#03387B] to-[#048F87] flex flex-col justify-center items-center text-3xl">
                        <FaShoppingBag className=' text-5xl'/>
                            <h1>Distribute</h1>
                            <span className='circle'/>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Animation;