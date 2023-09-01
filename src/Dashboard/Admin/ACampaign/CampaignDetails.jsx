import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div >
            
            <h1 className='text-center text-4xl font-bold my-5 text-orange-300'>Campaigns Details</h1>
            <div className="card card-side text-white shadow-xl">
                <figure><img className='w-96' src={data.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.header}</h2>
                    <p>{data.desc}</p>
                    <p>{data.location}</p>
                    <p>{data.date}</p>
                    <div className="card-actions justify-end">
                       
                        <p><progress className="progress progress-warning bg-white h-6 w-96" value={data.progress} max="100">{data.progress}</progress>
</p>
                        {/* <p className='progress progress-error h-6 rounded-full bg-orange-300 text-center text-black'>{data.progress} %</p> */}
                        <button className="btn bg-[#F99F24]">Action</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;