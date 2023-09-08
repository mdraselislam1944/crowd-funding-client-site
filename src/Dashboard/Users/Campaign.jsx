import pic1 from "../../assets/img/others img/joel-muniz-3k3l2brxmwQ-unsplash.jpg";
import pic2 from "../../assets/img/others img/joel-muniz-BlnpElo7clE-unsplash.jpg";
import pic3 from "../../assets/img/others img/katt-yukawa-K0E6E0a0R3A-unsplash.jpg";
import pic4 from "../../assets/img/others img/ocg-saving-the-ocean-uXfYLTmF6fo-unsplash.jpg";
import pic5 from "../../assets/img/others img/jeremias-ybanez-fqFm_YJGHZk-unsplash.jpg";
import pic6 from "../../assets/img/others img/jordy-meow-Osd4ngHD4kM-unsplash.jpg";

const Campaign = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
            <div className="card w-96 glass text-white">
                <figure><img src={pic1} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Project Name: Emergency Food Relief in Yemen</h2>
                    <p>Delivering emergency food relief to children and families affected by conflict in Sana{"'"}a.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 glass text-white">
                <figure><img src={pic2} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Project Name: Combatting Child Hunger in Nigeria</h2>
                    <p>Taking action against child hunger by distributing food aid in Abuja.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 glass text-white">
                <figure><img src={pic3} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Project Name: Nutritional Support for Children in Niger</h2>
                    <p>Providing nutritional support to children in need in Niamey.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 glass text-white">
                <figure><img src={pic4} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Project Name: Food Aid and Assistance in Kabul</h2>
                    <p>Providing essential food aid and assistance to children affected by conflict in Kabul.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 glass text-white">
                <figure><img src={pic5} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Project Name: Food Aid and Assistance in Kabul</h2>
                    <p>Providing essential food aid and assistance to children affected by conflict in Kabul.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-96 glass text-white">
                <figure><img src={pic6} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Project Name: Food Aid and Assistance in Kabul</h2>
                    <p>Providing essential food aid and assistance to children affected by conflict in Kabul.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;