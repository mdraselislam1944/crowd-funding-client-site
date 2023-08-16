import Partners from "../Home/Partners/Partners";


const AboutUs = () => {
    return (
        <div>
            <section className="bg-sup bg-gray-900 text-white">
                <div className="lg:flex md:flex grid grid-cols-3 place-items-baseline justify-between lg:h-[300px] md:h-[300px] h-[500px] items-center ps-3 pe-3">
                    <div></div> 
                    <div className="text-center">
                        <h2 className="text-6xl font-bold ">10</h2>
                        <p className="text-2xl font-bold text-orange-400">Years of <br />Experience</p>
                    </div>
                    <div className="lg:hidden md:hidden"></div>
                    <div className="text-center">
                        <h2 className="text-6xl font-bold">25</h2>
                        <p className="text-2xl font-bold text-orange-400">Country</p>
                    </div>
                    <div className="lg:hidden md:hidden"></div>
                    <div className="text-center">
                        <h2 className="text-6xl font-bold">25</h2>
                        <p className="text-2xl font-bold text-orange-400">1500 Volunteer</p>
                    </div>
                    <div className="lg:hidden md:hidden"></div>
                    <div className="text-center">
                        <h2 className="text-6xl font-bold">25</h2>
                        <p className="text-2xl font-bold text-orange-400">Companies</p>
                    </div>
                    <div></div>
                </div>
            </section>
            <section className="mt-9">
                <h1 className="text-center text-3xl font-bold pt-5 mb-3">Meet Our Team</h1>
                <hr className="w-32 border-2 rounded border-orange-400 mx-auto mt-1" />
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-7 mt-7">
                    <div className="md:hidden lg:block"></div>
                    <div className=" bg-gray-300">
                        <img className="" src="/src/assets/img/OurTeam/sajid.jpg" alt="" />
                        <h2 className="text-xl font-bold text-center">Estiaque Ahmed</h2>
                        <p className="text-md text-center">Developer</p>
                    </div>
                    <div className=" bg-gray-300">
                        <img src="/src/assets/img/OurTeam/sakib.jpg" alt="" />
                        <img src="" alt="" />
                        <h2 className="text-xl font-bold text-center">Md. Sakib Mia</h2>
                        <p className="text-md text-center">Developer</p>
                    </div>
                    <div className=" bg-gray-300">
                        <img src="/src/assets/img/OurTeam/mahdi.jpg" alt="" />
                        <img src="" alt="" />
                        <h2 className="text-xl font-bold text-center">Mahdi Mortuza</h2>
                        <p className="text-md text-center">Developer</p>
                    </div>
                    <div className=" bg-gray-300">
                        <img src="/src/assets/img/OurTeam/shahadat.jpg" alt="" />
                        <img src="" alt="" />
                        <h2 className="text-xl font-bold text-center">Shahadat Hosan</h2>
                        <p className="text-md text-center">Developer</p>
                    </div>
                    <div className="hidden lg:block md:hidden"></div>
                    <div className="hidden lg:block md:hidden"></div>
                    <div className="hidden lg:block md:hidden"></div>
                    <div className=" bg-gray-300">
                        <img src="/src/assets/img/OurTeam/saroar.jpg" alt="" />
                        <img src="" alt="" />
                        <h2 className="text-xl font-bold text-center">Saroar Jahan</h2>
                        <p className="text-md text-center">Developer</p>
                    </div>
                    <div className=" bg-gray-300">
                        <img src="/src/assets/img/OurTeam/rasel.jpg" alt="" />
                        <img src="" alt="" />
                        <h2 className="text-xl font-bold text-center">Md. Rasel Islam</h2>
                        <p className="text-md text-center">Developer</p>
                    </div>
                </div>
            </section>
            <Partners></Partners>
        </div>
    );
};

export default AboutUs;