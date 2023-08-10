import { Outlet } from "react-router-dom";
import Success from "../components/Home/Success/Success";
import About from "../components/Home/About/About";


const Main = () => {
    return (
        <div>
       <About></About>
            <Success></Success>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Main;