import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="max-w-7xl mx-auto  navbar bg-[#5c771e] text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
            <li><Link to="/socialBlog" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/socialBlog/addPost" >Write</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">UNIAID</a>
        </div>
        <div className="navbar-center text-black hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal px-1 text-white text-lg">
          <li><Link to="/socialBlog" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/socialBlog/addPost" >Write</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-16">
        <div className="w-12 mr-2 rounded-full">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrTLYPUyH-UieHupbuKkh1FKZ_rq1dX0gIw&usqp=CAU" />
        </div>
      </label>
          <a className="btn btn-md  btn-outline text-white">Logout</a>
        </div>
      </div>
    );
};

export default TopBar;