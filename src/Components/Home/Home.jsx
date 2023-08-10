import Campaign from "./Campaign/Campaign";
import News from "./News/News";
import Success from "./Success/Success";

const Home = () => {
    return (
        <div>
            <Campaign></Campaign>
            <Success></Success>
            <News></News>
        </div>
    );
};

export default Home;