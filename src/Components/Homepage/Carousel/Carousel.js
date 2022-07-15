import CarouselTabs from '../CarouselTabs/CarouselTabs';
import FirstSlideImage from './CarouselImages/FirstSlide.jpg'
import SecondSlideImage from './CarouselImages/SecondSlide.jpg'


function Carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FirstSlideImage} className="d-block w-100" alt="#ImageNotFound" style={{ minHeight: "450px" }} />
                        <div class="carousel-caption">
                            <CarouselTabs />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SecondSlideImage} className="d-block w-100" alt="#ImageNotFound" style={{ minHeight: "450px" }} />
                        <div class="carousel-caption">
                            <CarouselTabs />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
