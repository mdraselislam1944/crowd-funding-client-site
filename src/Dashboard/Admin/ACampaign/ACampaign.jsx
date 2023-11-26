import { Campaign } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ACampaign = () => {
    const campaigns = useState(useLoaderData().data);
    console.log(campaigns[0])

    return (
        <div className='bg-black px-10 w-full h-full mt-28 text-white min-h-[80vh]'>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-2xl text-orange-300 normal-case font-semibold">
                    All Campaigns ({campaigns.length})
                </h1>
                <div className="form-control mt-1 text-black">
                    <div >
                        <form className="input-group" onSubmit="">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search…"
                                className=" input input-bordered border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
                            />
                            <button className="btn  border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {/* row 1 */}
                        {
                            campaigns[0].map((Campaign,index) => <>
                                <tr key={Campaign._id} className='text-white'>
                                    <th>
                                        {++index}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={Campaign?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{Campaign?.name}</div>
                                                <div className="text-sm opacity-50">{Campaign?.country}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{Campaign?.title.slice(0,30)}....</td>
                                    <td>{Campaign?.status}</td>
                                    <th>
                                        <Link to={`/dashboard/aCampaign/${Campaign._id}`} className="btn btn-ghost btn-xs">details</Link>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ACampaign;