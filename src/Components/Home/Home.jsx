import Header from "../../Header/Banner/Header";
import Navbar from "../../Header/Navbar/Navbar";
import Animation from "../Animation/Animation";
import About from "./About/About";
import Campaign from "./Campaign/Campaign";
import Category from "./Category/Category";
import News from "./News/News";
import Success from "./Success/Success";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Campaign></Campaign>
            <Category></Category>
            <Animation></Animation>
            <Success></Success>
            <News></News>
        </div>
    );
};

export default Home;