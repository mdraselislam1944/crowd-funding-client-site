import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import AboutUs from "../AboutUS/AboutUS";
import Donate from "../Payment/Donate";
import Payment from "../Payment/Payment";
import Campaigns from "../Campaigns/Campaigns";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path:"/donatePayment/:id",
          element:<Payment/>,
          loader:({params})=>fetch(`http://localhost:5000/saveAddress/${params.id}`),
        },
        {
          path:"/donate",
          element:<Donate/>
        },
        {
          path: "/campaigns",
          element: <Campaigns/>
        }
      ]
    },
  ]);
  export default Router;