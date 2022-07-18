import Carousel from "./Carousel/Carousel";
import Header from "../Header/Header";
import AfterCarouselDiv from "../AfterCarouselDiv/AfterCarouselDiv";
import WelcomeIntro from "../WelcomeIntro/WelcomeIntro";
import Services from "../Services/Services";
import LatestWeddingProject from "../LatestWeddingProject/LatestWeddingProject";
import Feedback from "../Feedback/Feedback";
import Member from "../Members/Members";
import Themes from "../Themes/Themes";
import Form from "../Form/Form";
import OurClients from "../OurClients/OurClients";
import LatestArticle from "../LatestArticle/LatestArticle";
import Footer from "../Footer/Footer";

function Homepage() {
    return (
        <>
            <Header />
            <Carousel />
            <AfterCarouselDiv />
            <WelcomeIntro />
            <Services />
            <LatestWeddingProject />
            <Feedback />
            <Member />
            <Themes />
            <Form />
            <OurClients />
            <LatestArticle />
            <Footer />
        </>
    );
}

export default Homepage;
