import SharedBanner from "../Contact/SharedBanner";
import img from "../../assets/images/blogsNews.jpg"
const AllNews = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto  ">
                <div className="">
                    <SharedBanner
                        background={img}
                        title="Our Blogs"
                        titleHead="Creating blog with daily News"
                        titleDes={
                            <>
                                We Create blog for World-Wide Problem and its solution. and trying to create a helping hand.
                            </>
                        }
                    ></SharedBanner>
                </div>
                <div>
                    <h1 className="text-lg p-8"><span className="text-[#F99F24] text-3xl font-black">Crowdfunding</span> has revolutionized the way individuals, startups, and organizations raise funds for their projects and initiatives. A plethora of dedicated blogs provide valuable insights and guidance to navigate the intricacies of this dynamic fundraising landscape. For instance, the Kickstarter Blog offers campaign success stories and valuable campaign strategies, while the Indiegogo Blog delves into crowdfunding trends and showcases diverse projects. Crowdfund Insider serves as a hub for news and analysis across the crowdfunding and fintech sectors. BackerKit Blog specializes in post-campaign management, aiding creators in fulfillment processes. Crowdfunding Insider covers both sides of the crowdfunding equation, serving campaign creators and investors alike. Seedrs Blog focuses on equity crowdfunding and startup investment, while Crowdfund Talks provides a wealth of strategies and case studies. Meanwhile, platforms like Fundable and Crowdfunding Heroes offer tailored advice and inspirational stories, making these blogs essential resources for anyone navigating the crowdfunding landscape.</h1>
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-bold text-black "> All Blogs</h2>
                    <hr className="border-b-[3px] w-[164px] mt-1 mb-5 border-[#F99F24] mx-auto" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto 
            grid lg:grid-flow-col md:grid-flow-col gap-3">
                <div className="col-span-4">
                    {/* News section */}
                    <h1>World-wide Blogs</h1>
                </div>
                
                <div  className="col-span-1">
                    {/* comment section */}
                    <h1>User Comment </h1>

                </div>
            </div>
        </div>
    );
};

export default AllNews;