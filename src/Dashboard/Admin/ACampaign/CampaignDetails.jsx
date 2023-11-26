import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CampaignDetails = () => {
    const data = useLoaderData().data;
    
    console.log(data)

    const handleAction = (id) => {
        const saveData = {
            status: 'approved',
        };
        fetch(`http://localhost:4000/individualCampaign/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
            },
            body: JSON.stringify(saveData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Data Updated');
                }
            })
            .catch(error => {
                toast.error(error.message);
                toast.error(error);
            });
    };

    const date = new Date(data.date);

    // Format the date as a string in a locale-specific way
    const formattedDate = date.toLocaleDateString();


    return (
        <div >

            <h1 className='text-center text-4xl font-bold my-5 text-orange-300'>Campaigns Details</h1>
            <div className="card card-side text-white shadow-xl">
                <figure><img className='w-96' src={data.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.description}</p>
                    <p>{data.district}</p>
                    <p>{formattedDate}</p>
                    <div className="card-actions justify-end">

                        {/* <p><progress className="progress progress-warning bg-white h-6 w-96" value={data.progress} max="100">{data.progress}</progress>
                        </p> */}
                        {/* <p className='progress progress-error h-6 rounded-full bg-orange-300 text-center text-black'>{data.progress} %</p> */}
                        <button disabled={data.status === 'approved'} onClick={() => handleAction(data._id)} className="btn bg-[#F99F24]">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;