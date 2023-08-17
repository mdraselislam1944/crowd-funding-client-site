import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";



const Main = () => {
    return (
        <div className="">
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;