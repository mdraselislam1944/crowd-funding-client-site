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
import AllNews from "../AllNews/AllNews";
import CampaignDetails from "../../Dashboard/Admin/ACampaign/CampaignDetails";

import AddBlog from "../../Dashboard/Users/AddBlog";
import AddCampaign from "../../Dashboard/Users/AddCampaign";
import AddEvent from "../../Dashboard/Users/AddEvent";
import Blog from "../../Dashboard/Users/Blog";
import Campaign from "../../Dashboard/Users/Campaign";
import Event from "../../Dashboard/Users/Event";
import UserPaymentHistory from "../../Dashboard/Users/UserPaymentHistory";


import PrivateRoute from "./PrivateRoute";
import ChatRoom from "../ChatRoom/ChatRoom";
import BloggingSite from "../BloggingSite/BloggingSite";

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
          path: "/allNews",
          element: <AllNews></AllNews>

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
        },
        {
          path: "/chatRoom",
          element: <PrivateRoute><ChatRoom></ChatRoom></PrivateRoute>
        },
        

      ]
    },
    {
      path: "/socialBlog",
      element: <PrivateRoute><BloggingSite></BloggingSite></PrivateRoute>
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
          element:<ACampaign></ACampaign>,
          loader:()=>fetch('https://crowdfunding-gamma.vercel.app/campaigns'),
        },
        {
          path:"aCampaign/:id",
          element:<CampaignDetails/>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/campaigns/${params.id}`),
        },
        {
          path:"description/:id",
          element:<ProjectDescription/>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/blogs/${params.id}`)
        },
        {
          path:"UserPayment",
          element:<UserPayment></UserPayment>,
          loader:()=>fetch("https://crowdfunding-gamma.vercel.app/paymentHistory"),
          
        },
        {
          path:"aEvent",
          element:<AEvent></AEvent>
          
        },
        {
          path:"blog",
          element:<BlogNews></BlogNews>
          
        },
        {
          path:"userAddBlogs",
          element:<AddBlog/>
        },
        {
          path:"UserAddCampaign",
          element:<AddCampaign/>
        },
        {
          path:"AddEvent",
          element:<AddEvent/>,
        },
        {
          path:"userBlog",
          element:<Blog/>,
        },
        {
          path:"userCampaign",
          element:<Campaign/>
        },
        {
          path:"userEvent",
          element:<Event/>,
        },
        {
          path:"payment",
          element:<UserPaymentHistory/>,
        }
      ]
    }
  ]);
  export default Router;