import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import AboutUs from "../AboutUS/AboutUS";

import Contact from "../Contact/Contact";

import Donate from "../Payment/Donate";
import Payment from "../Payment/Payment";
import Campaigns from "../Campaigns/Campaigns";
import Login from "../Login/Login";
import SignUp from "../SignUP/SignUp";
import Events from "../Events/Events";
import Project from "../Project/Project";
import Info from "../Project/Info";
import Dashboard from "../../Dashboard/Dashboard";
import Admin from "../../Dashboard/Admin/Admin";
import AllUsers from "../../Dashboard/Admin/AllUser/AllUser";
import AllProject from "../../Dashboard/Admin/AllProject/AllProject";
import axios from "axios";
import ProjectDescription from "../../Dashboard/Admin/AllProject/ProjectDescription";
import ACampaign from "../../Dashboard/Admin/ACampaign/ACampaign";
import UserPayment from "../../Dashboard/Admin/UserPayment/UserPayment";
import AEvent from "../../Dashboard/Admin/AEvent/AEvent";
import BlogNews from "../../Dashboard/Admin/BlogNews/BlogNews";

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

          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path:"/donatePayment/:id",
          element:<Payment/>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/saveAddress/${params.id}`),
        },
        {
          path:"/donate",
          element:<Donate/>
        },
        {
          path: "/campaigns",
          element: <Campaigns/>
        },
        {
          path: "/event",
          element: <Events></Events>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/Project",
          element: <Project></Project>
        },
        {
          path: "/form",
          element: <Info></Info>
        }

      ]
    },
    {
      path: "/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"",
          element:<Admin></Admin>
        },
        {
          path:"allProject",
          element:<AllProject></AllProject>,
          loader:()=>axios.get("https://crowdfunding-gamma.vercel.app/blogs"),
        },
        {
          path:"allUser",
          element:<AllUsers></AllUsers>,
          loader:()=>axios.get("https://crowdfunding-gamma.vercel.app/users"),
        },
        {
          path:"description/:id",
          element:<ProjectDescription/>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/blogs/${params.id}`)
        },
        {
          path:"aCampaign",
          element:<ACampaign></ACampaign>
          
        },
        {
          path:"UserPayment",
          element:<UserPayment></UserPayment>
          
        },
        {
          path:"aEvent",
          element:<AEvent></AEvent>
          
        },
        {
          path:"blog",
          element:<BlogNews></BlogNews>
          
        },
      ]
    }
  ]);
  export default Router;