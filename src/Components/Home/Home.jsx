import Animation from "../Animation/Animation";
import About from "./About/About";
import Campaign from "./Campaign/Campaign";
import Category from "./Category/Category";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
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