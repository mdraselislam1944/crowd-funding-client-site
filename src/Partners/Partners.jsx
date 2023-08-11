import brand1 from '../../../assets/img/partner-logos/brand-1.png'
import brand2 from '../../../assets/img/partner-logos/brand-2.png'
import brand3 from '../../../assets/img/partner-logos/brand-3.png'
import brand4 from '../../../assets/img/partner-logos/brand-4.png'
import brand11 from '../../../assets/img/partner-logos/brand-11.png'
import brand12 from '../../../assets/img/partner-logos/brand-12.png'


const Partners = () => {
    return (
        <div>
            <div className="text-center mt-16">
                <h2 className="text-3xl font-bold">Who Work With Us</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 mt-8 md:mt-5 p-5 gap-5'>
                <img src={brand1}></img>
                <img src={brand2}></img>
                <img src={brand4}></img>
                <img src={brand11}></img>
                <img src={brand12}></img>
                <img src={brand1}></img>
                <img src={brand2}></img>
                <img src={brand4}></img>
                <img src={brand11}></img>
                <img src={brand12}></img>
            </div>
        </div>
    );
};

export default Partners;