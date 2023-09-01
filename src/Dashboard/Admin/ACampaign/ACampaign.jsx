import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ACampaign = () => {
    const [campaigns, setCampaigns] = useState(useLoaderData());
    console.log(campaigns)
    return (
        <div className='text-white'>
            <h1 className='text-center text-2xl mt-[20vh]'>All campaigns Card</h1>
            <div className='grid grid-cols-3 gap-5 my-10 mx-2'>
                {
                    campaigns.map(campaign => <div className="card w-96 glass" key={campaign._id}>
                        <figure><img src={campaign.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{campaign.header}</h2>
                            <p>{campaign.location}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/dashboard/aCampaign/${campaign._id}`} className="btn btn-primary">Details!</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ACampaign;