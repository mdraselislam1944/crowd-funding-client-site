import SharedBanner from '../Contact/SharedBanner';
import img from "../../assets/img/section-banner/josh-appel-NeTPASr-bmQ-unsplash.jpg"
import { useLocation, useParams } from 'react-router-dom';
const BdPayment = () => {
    const data=useParams()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const products=searchParams.get('products').slice(1, -1).split(',');
    console.log(searchParams.get('products')[1]);

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <SharedBanner
                    background={img}
                    title="Donate Us"
                    titleHead="Donate to Change a Life"
                    titleDes={
                        <>
                            The Access to Water, Food Security & The Promotion of Women Are Major Challenges.
                            <br /> Our Work in Palestine. Social Promotion Foundation for Women. Liaison Status FAO.
                        </>
                    }
                ></SharedBanner>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-3xl font-bold">Thank you providing payment in Bangladesh : ${searchParams.get('value')}</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-10">Your email is : {products[1]}</h1>
                <h1 className="text-3xl font-bold mb-10">Your transaction is : {products[0]}</h1>
            </div>
            <div className="max-w-xl mx-auto">
                
            </div>
        </div>
    );
};

export default BdPayment;