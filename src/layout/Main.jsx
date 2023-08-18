import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
import Header from "../Components/Home/Header/Header";




const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
             <Header></Header>
            <ScrollRestoration />

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;