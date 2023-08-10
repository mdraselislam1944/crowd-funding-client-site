import { Outlet } from "react-router-dom";
import Success from "../components/Home/Success/Success";


const Main = () => {
    return (
        <div>
            <Success></Success>
            <Outlet></Outlet>
          
        </div>
    );
};

export default Main;