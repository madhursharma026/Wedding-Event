import Carousel from "./Carousel/Carousel";
import Header from "../Header/Header";
import AfterCarouselDiv from "../AfterCarouselDiv/AfterCarouselDiv";
import WelcomeIntro from "../WelcomeIntro/WelcomeIntro";

function HomepageMeeting() {
    return (
        <>
            <Header />
            <Carousel />
            <AfterCarouselDiv />
            <WelcomeIntro />
        </>
    );
}

export default HomepageMeeting;
