import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import Header from "../Components/Home/Header/Header";
import Navbar from "../Components/NavBar/Navbar";



const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;