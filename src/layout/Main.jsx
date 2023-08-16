import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";



const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;