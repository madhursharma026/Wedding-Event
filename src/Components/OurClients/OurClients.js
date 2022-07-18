import logo1 from './Logo/logo1.png'
import logo2 from './Logo/logo2.png'
import logo3 from './Logo/logo3.png'
import logo4 from './Logo/logo4.png'

function OurClients() {
    return (
        <>
            <div style={{ background: "#EDF5F8" }}>
                <div className="py-5 container-md text-center">
                    <h1 className="pb-3"><b><u>Our Clients</u></b></h1>
                    <div className="row">
                        <div className="col-sm-6 col-lg-3"><img src={logo1} alt="#ImgNotFound" /></div>
                        <div className="col-sm-6 col-lg-3"><img src={logo2} alt="#ImgNotFound" /></div>
                        <div className="col-sm-6 col-lg-3"><img src={logo3} alt="#ImgNotFound" /></div>
                        <div className="col-sm-6 col-lg-3"><img src={logo4} alt="#ImgNotFound" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurClients;