import logo from '../../../assets/img/logo-main/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo__1_-removebg-preview.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r mt-10 from-[#03387B] to-[#048F87] ... text-white px-10 py-5'>
            <footer className="footer">
                <div>
                    <img className='w-56' src={logo}></img>
                    <p>Duis elementum sapien et neque<br></br> lobortis laoreet.  Pellentesque<br></br> habitant morbi tristique senectus<br></br> et netus et malesuada</p>
                    <button className="btn btn-warning text-white mt-1">Explore more</button>
                </div>
                <div>
                    <span className="footer-title">Category</span>
                    <a className="link link-hover">Medical</a>
                    <a className="link link-hover">Family</a>
                    <a className="link link-hover">Children</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Disaster</a>
                </div>
                <div>
                    <span className="footer-title">Know More</span>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                </div>
                <div>
                    <span className="footer-title">Support Forum</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Write your email into below field and <br></br> join our quick support forum.</span>
                        </label>
                        <div className="">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-warning text-white mt-1">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>


            {/* copyright and social  */}
            <div className='flex justify-between mt-10 items-center'>
                <div>
                    <p>Copyright © 2019. UniAid all Rights Reserved</p>
                </div>

                {/* social icons  */}
                <div className='flex gap-2 text-3xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>
        </div>
    );
};

export default Footer;