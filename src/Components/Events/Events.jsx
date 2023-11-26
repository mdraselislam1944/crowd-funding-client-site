import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import img from "../../assets/img/section-banner/larm-rmah-AEaTUnvneik-unsplash.jpg"
import SharedBanner from "../Contact/SharedBanner";
import bg from "../../assets/Video/wallpaperflarecom_wallpaper.jpg"
import Card from "./Card";
import { useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import axios from "axios";



const Events = () => {
    const [items, setItems] = useState([]);
    useEffect(async () => {
        const result = await axios.get('http://localhost:4000/api/getEvent');
        setItems(result.data)
    }, [])

    if(items){
        console.log(items)
    }

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    //bg-gradient-to-r from-neutral-600 from-10% via- via-50% to-neutral-600 to-90%
    return (
        <div ref={ref} className="bg-cover bg-center bg-no-repeat  max-w-7xl mx-auto " style={{ backgroundImage: `url(${bg})` }}>
            <div>
                <SharedBanner
                    background={img}
                    title="Our Event"
                    titleHead="Know how we work together"
                    titleDes={
                        <>
                            We are a worldwide ministry in which millions of children reap the benefits of one man’s clear


                        </>
                    }
                ></SharedBanner>
                <motion.div className="text-center mt-8"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.9, delay: 1 }}

                >
                    <h2 className="text-3xl font-bold text-white ">Our All Events</h2>
                    <hr className="border-b-[3px] w-[106px] mt-1 mb-5 border-[#F99F24] mx-auto" />

                    <div className="mb-6 relative w-10/12 mx-auto md:w-[20%]  ">
                        <input
                            type="text"
                            placeholder="Search Here..."
                            value=""
                            onChange=""
                            className="w-full px-4 py-2 mt-3  border border-black rounded-full text-black placeholder-black
                    bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
                        />
                        <BsSearch className="absolute top-[30%] right-2 text-black  p-1 w-8 h-8 rounded-full" />
                    </div>
                </motion.div>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-2  gap-2" >
                {
                    items?.map(item => <Card
                        key={item._id}
                        item={item}
                    ></Card>

                    )
                }

            </div >

        </div >
    );
};

export default Events;