import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/Final/10.jpg";
import project from "../../assets/img/Final/10.jpg";
import health from "../../assets/img/Final/health.jpg";
import help from "../../assets/img/Final/05.jpg";
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"



const Project = () => {
    
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])



    return (
        <>
           <div ref={ref} className="max-w-7xl mx-auto">
           <SharedBanner
                background={campaignPhoto}
                title="Projects"
                titleHead="Choose your project"
                titleDes={
                    <>
                        We will help you to start a new project or to collect funds for disasters.
                    </>
                } />
           </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 my-16 mx-28">
                {/* //two big card */}
                <motion.div className="flex flex-col "
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 1.2 }}

>
                    <div>
                        <h2 className="uppercase font-semibold text-xl my-6 text-center">Start Your Project</h2>
                        <Link to="/form/entrepreneur" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                            <figure><img src={project} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Be an entrepreneur
                                </h2>
                                <p>Share your ideas and thought with us!</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">Ideas</div>
                                    <div className="badge badge-outline">Skills</div>
                                    <div className="badge badge-outline">Responsibility</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>

                <div className="flex flex-col ">
                    <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 1.5 }}
    
    >
                        <h2 className="uppercase font-semibold text-xl my-6 text-center">Get help now</h2>
                        <Link to="/form/disaster" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                            <figure><img src={help} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Help disaster victims
                                </h2>
                                <p>Share details and let us help the mankind!</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">Disaster</div>
                                    <div className="badge badge-outline">Help</div>
                                    <div className="badge badge-outline">Mankind</div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
                <div className="flex flex-col ">
                    <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 1, delay: 1.5 }}
    
    >
                        <h2 className="uppercase font-semibold text-xl my-6 text-center">Get help now</h2>
                        <Link to="/form/health" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                            <figure><img src={health} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Help health victims
                                </h2>
                                <p>Share details and let us help the mankind!</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">cancer</div>
                                    <div className="badge badge-outline">Help</div>
                                    <div className="badge badge-outline">Mankind</div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Project;