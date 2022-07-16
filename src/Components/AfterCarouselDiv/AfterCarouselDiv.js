import candleIncon from './Icons/candle.png'
import ringIcon from './Icons/rings.png'
import weddingCoupleIcon from './Icons/wedding-couple.png'
import weddingIcon from './Icons/wedding.png'
import './AfterCarousel.css'

function AfterCarouselDiv() {
    return (
        <>
            <div className="container-md mt-5 pt-5">
                <div className="row text-center">
                    <div className="col-md-3 col_data_1">
                        <img src={candleIncon} alt="#ImageNotFound" width="60px" height="60px" />
                        <h4 className='pt-3'>Made With Love</h4>
                        <p className="text-secondary">
                            Two people true emotions, the big decision & the vows of eternal love forever!
                        </p>
                    </div>
                    <div className="col-md-3 col_data_2">
                        <img src={weddingCoupleIcon} alt="#ImageNotFound" width="60px" height="60px" />
                        <h4 className='pt-3'>The Wedding Bliss</h4>
                        <p className="text-secondary">
                            An excellent customer service return investment makes you enjoy event full on!
                        </p>
                    </div>
                    <div className="col-md-3 col_data_3">
                        <img src={ringIcon} alt="#ImageNotFound" width="60px" height="60px" />
                        <h4 className='pt-3'>Just The Two Of Us</h4>
                        <p className="text-secondary">
                            We vendor the best musical band for the wedding event. Blissful music celebrate!
                        </p>
                    </div>
                    <div className="col-md-3 col_data_4">
                        <img src={weddingIcon} alt="#ImageNotFound" width="60px" height="60px" />
                        <h4 className='pt-3'>Made With Love</h4>
                        <p className="text-secondary">
                            Our management is the best to make your big day memorable in every aspects of event!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AfterCarouselDiv;
