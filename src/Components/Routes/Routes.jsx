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
          loader:()=>axios.get("http://localhost:5000/blogs"),
        },
        {
          path:"allUser",
          element:<AllUsers></AllUsers>,
          loader:()=>axios.get("http://localhost:5000/users"),
        },
        {
          path:"description/:id",
          element:<ProjectDescription/>,
          loader:({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)
        },
      ]
    }
  ]);
  export default Router;