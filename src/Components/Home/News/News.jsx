import img4 from "../../../../src/assets/img/others img/jeremias-ybanez-fqFm_YJGHZk-unsplash.jpg"
import img5 from "../../../../src/assets/img/others img/joel-muniz-BlnpElo7clE-unsplash.jpg"
import img6 from "../../../../src/assets/img/others img/jordy-meow-Osd4ngHD4kM-unsplash.jpg"
import img7 from "../../../../src/assets/img/others img/josh-appel-NeTPASr-bmQ-unsplash.jpg"
const News = () => {
    return (
        <div className="bg-[#EEF7FF] pb-9">
            <div className="text-center mt-8 mb-14">
                <h2 className="text-3xl font-bold p-4 "> Latest News</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ">
                <div  className="lg:ps-44 m-2">
                    <div className="card bg-base-100 shadow-xl  ">
                        <figure><img className="" src={img4} alt="Shoes" /></figure>
                        <p className="text-end pr-2 text-slate-500">27 June 2023</p>
                        <div className="card-body">
                          
                        <h2 className="card-title font-black text-2xl">Syrian refugee crisis !</h2>
                            <p>We are trying to help properly. And contribute to controlling every situation.</p>
                            <div className="card-actions justify-end">
                            <div className="card-actions justify-start">
                                <button className="btn bg-[#F99F24]">Read More</button>
                            </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="grid-cols-1 p-3 my-5 ">
                    <div className="flex gap-2 my-3 ">
                        <div>
                            <img className="rounded-lg w-56" src={img5} alt="" />
                        </div>
                        <div>
                            <p className="text-slate-400">News , 26 july 2023</p>
                            <h2>Meet people and life-changing teachers in need of your support.please help them.</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 my-3">
                        <div>
                            <img className="rounded-lg w-56" src={img6} alt="" />
                        </div>
                        <div>
                            <p className="text-slate-400">News , 26 july 2023</p>
                            <h2>Donate to help children fight hunger and malnutrition. Sponsor a Food kit today.</h2>
                        </div>
                    </div>
                    <div className="flex gap-2 my-3 ">
                        <div>
                            <img className="rounded-lg w-56" src={img7} alt="" />
                        </div>
                        <div>
                            <p className="text-slate-400">News , 26 july 2023</p>
                            <h2>create your own fund for helping people.give them food and beautiful future</h2>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default News;