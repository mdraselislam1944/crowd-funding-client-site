import About from "./About/About";
import Campaign from "./Campaign/Campaign";
import Category from "./Category/Category";
import Footer from "./Footer/Footer";
import News from "./News/News";
import Partners from "./Partners/Partners";
import Success from "./Success/Success";

const Home = () => {
    return (
        <div>
            <About></About>
            <Campaign></Campaign>
            <Category></Category>
            <Success></Success>
            <News></News>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;