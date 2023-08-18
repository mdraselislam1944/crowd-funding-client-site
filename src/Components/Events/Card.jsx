import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const { image,
        title,
        description,
        publish_date,
        publisher_name } = item;
    return (
        <div className="card w-96 mb-5 bg-gray-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <div className="">{publish_date}
                        <br />
                        {publisher_name}
                    </div>
                    <Link to="/about">
                        <button className="badge bg-[#F99F24] p-2 text white">Read More</button>
                    </Link>
                </div>

            </div>
        </div>

  
    );
};


export default Card;