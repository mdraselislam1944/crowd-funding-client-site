import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { PiWechatLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";

const Main = () => {
    const location = useLocation();

    const shouldShowPiWechatLogo = location.pathname !== "/chatRoom";
    const shouldShowFooter = location.pathname !== "/chatRoom";

    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />

            {shouldShowFooter && <Footer />}

            {shouldShowPiWechatLogo && (
                <Link
                    to="/chatRoom"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: "999",
                    }}
                >
                    <PiWechatLogoBold title="Community" size={60} className="hover:scale-110 hover:duration-500 duration-500 m-1 p-2 bg-black text-[#F99F24] rounded-bl-full rounded-tl-full"  />
                </Link>
            )}
        </div>
    );
};

export default Main;