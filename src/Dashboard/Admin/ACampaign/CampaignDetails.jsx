import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div >
            <h1 className='text-center text-2xl font-bold my-5 text-white'>Campaigns Details</h1>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={data.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.header}</h2>
                    <p>{data.desc}</p>
                    <p>{data.location}</p>
                    <div className="card-actions justify-end">
                        <p>{data.date}</p>
                        <p>{data.progress}</p>
                        <button className="btn btn-primary">Action</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;