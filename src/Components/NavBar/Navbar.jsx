import { useContext, useState } from "react";
import logo from "../../assets/img/logo-main/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo__1_-removebg-preview.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setUser, toggleLoading } from "../../Redux/user/userSlice";
import auth from "../../Firebase/firebaseConfig";
import { useEffect } from "react";
import profile from "../../assets/professional.jpg";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status,setStatus]=useState(false);
  const dispatch=useDispatch();
  const {email,isLoading,image}=useSelector((state)=>state.userSlice);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(setUser({
          name:user.displayName,
          email:user.email,
          image:user.photoURL,
        }),)
        dispatch(toggleLoading(false));
      }
      else{
        dispatch(toggleLoading(false));
      }
    })
  },[])


  const handleClose = () => setIsMenuOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
    setStatus(true);
  }
  if(status){
    localStorage.removeItem('set-token-for-user');
    setStatus(false);
  }


  return (
    <nav className="bg-black md:bg-opacity-50 bg-opacity-90 px-7 md:px-0 text-white p-4 shadow font-poppins w-full fixed z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center ms-3">
          <Link to="/socialBlog">
            <img src={logo} alt="" className="w-36" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 flex-grow">
          <ul className="flex space-x-4 md:space-x-10 lg:space-x-10 mx-auto">
            <li>
              <Link to="/"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/event"
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Events
              </Link>
            </li>

            <li>
              <Link to="/campaigns"
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Campaigns
              </Link>
            </li>

            <li>
              <Link
                to='/about'
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link to="/contact"
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
           { email &&
           <li>
              <Link to="/dashboard"
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Dashboard
              </Link>
            </li>}
          </ul>
        </div>
       
        <div className="hidden md:flex items-center">
        {
            email ?
            <span className="flex items-center gap-3">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <img src={image || profile} alt="" />
                </div>
              </div>
              <Link><button className='btn bg-[#F99F24] text-white border-none me-3 px-4  hover:bg-black hover:text-[#F99F24]' onClick={handleLogOut}>LogOut</button></Link>
            </span>
              :
              <Link to="/login">
                <button
                  type="button" onClick={handleClose}
                  className="btn bg-[#F99F24] text-white border-none me-3 px-6 hover:bg-black hover:text-[#F99F24]"
                >
                  Login
                </button>
              </Link>
          }
          {/*   className="text-white border border-yellow-600 bg-inherit hover:bg-[#F99F24] focus:ring-4 focus:outline-none focus:ring-[#F99F24] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 mt-6" */}
          
        </div>
        <div className="md:hidden">
          <Link onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="mt-6 space-y-4">
            <li>
              <Link to="/socialBlog" onClick={handleClose}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/event" onClick={handleClose}
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Events
              </Link>
            </li>

            <li>
              <Link to="/campaigns" onClick={handleClose}
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Campaigns
              </Link>
            </li>

            <li>
              <Link
                to='/about' onClick={handleClose}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={handleClose}
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            { email &&
           <li>
              <Link to="/dashboard"
                className="text-white hover:text-gray-300 border-b-2 border-transparent transition-colors duration-300"
              >
                Dashboard
              </Link>
            </li>}
          </ul>
          {
            email ?
              <span className="flex items-center gap-3">
                <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                 <img  src={image|profile} alt="" />
                </div>
              </div>
              
              <Link><button className="text-[#F99F24] border border-[#F99F24] bg-inherit hover:bg-[#F99F24] focus:ring-4 focus:outline-none focus:ring-[#F99F24] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 mt-6" onClick={handleLogOut}>LogOut</button></Link>
              </span>
              :
              <Link to="/login">
                <button
                  type="button" onClick={handleClose}
                  className="text-[#F99F24] border border-[#F99F24] bg-inherit hover:bg-[#F99F24] focus:ring-4 focus:outline-none focus:ring-[#F99F24] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 mt-6"
                >
                  Login
                </button>
              </Link>
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
