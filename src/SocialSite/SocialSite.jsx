import { Outlet } from "react-router-dom";
import TopBar from "./TopBar/TopBar";

const SocialSite = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet/>
           
           
            
         
        </div>
    );
};

export default SocialSite;