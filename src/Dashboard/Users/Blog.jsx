import pic1 from "../../assets/img/Final/05.jpg";
import pic2 from "../../assets/img/Final/10.jpg";
import pic3 from "../../assets/img/Final/15.jpg";
import pic4 from "../../assets/img/Final/20.jpg";
import pic5 from "../../assets/img/Final/business-colleagues-using-laptop-dark-office.jpg";
import pic6 from "../../assets/img/Final/business-people-talking-meeting-table.jpg";


const Blog = () => {
    return (
        <div className="grid grid-cols-3 gap-7">
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

export default Blog;