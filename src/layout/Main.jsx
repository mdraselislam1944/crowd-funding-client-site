import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";



const Main = () => {
    return (
        <div className="">
            <ScrollRestoration />
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;