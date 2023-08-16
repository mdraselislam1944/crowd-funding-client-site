
import About from "./About/About";
import Campaign from "./Campaign/Campaign";
import Category from "./Category/Category";
import News from "./News/News";
import Success from "./Success/Success";
import Partners from "./Partners/Partners";
import Animation from "./Animation/Animation";
import Header from "./Header/Header";

const Home = () => {
   
    return (
      <div>
       <Header></Header>
        <About></About>
        <Campaign></Campaign>
        <Category></Category>
        <Animation></Animation>
        <Success></Success>
        <News></News>
        <Partners></Partners>
       
      </div>
    );
   

};

export default Home;
