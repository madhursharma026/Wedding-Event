import BgImg from './backgroundImg/bgImg.jpg';
import ImgLeftCol from './backgroundImg/ImgLeftCol.png'
import RingRotation from './ringRotation';
import './Services.css'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <div className="container-fluid-lg" style={{ background: `url(${BgImg})`, marginTop: "100px" }}>
        <div className="container-lg pt-5 text-center">
          <h5 style={{ color: "#D8A882", paddingTop: "30px" }}>Our Wedding Services</h5>
          <h2 className="pb-5">Prepare For The Big Day</h2>
          <div className="row services_without_slider pb-5">
            <div className="col-12 col-sm-6 col-lg-4 px-3 col_1_services">
              <div className="card">
                <div className="card-body">
                  <RingRotation />
                  <h6 className="card-title pt-3" style={{ color: "#CE9578" }}>Planning</h6>
                  <h4 className="card-subtitle mb-2 text-muted">Clovely Decoration</h4>
                  <p className="card-text">We always be on time and ready to give you the great service possible</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 col_2_services">
              <div className="card">
                <div className="card-body">
                  <RingRotation />
                  <h6 className="card-title pt-3" style={{ color: "#CE9578" }}>Weeding Stories</h6>
                  <h4 className="card-subtitle mb-2 text-muted">Live Music & Dj</h4>
                  <p className="card-text">We vendor one of the top brands for the blissful music according to rituals</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 px-3 col_3_services">
              <div className="card">
                <div className="card-body">
                  <RingRotation />
                  <h6 className="card-title pt-3" style={{ color: "#CE9578" }}>Planning</h6>
                  <h4 className="card-subtitle mb-2 text-muted">Dinner & Drinks</h4>
                  <p className="card-text">Serve the best food as per culture & ritual as food is important aspect.</p>
                </div>
              </div>
            </div>
          </div>
          <h6 className='pb-5'>Don't Hesitate, Contact Us For Better Help And Services.<Link to="/" style={{ color: "#ce9578" }}> View More Services</Link></h6>
        </div>
      </div>
      <div className="container-lg px-lg-5">
        <div className="row px-3">
          <div className="col-md-6 col-lg-5 p-0 offset-xl-1" style={{ zIndex: "1" }}>
            <img src={ImgLeftCol} className='w-100' style={{ height: "700px" }} alt="#ImgNotFound" />
          </div>
          <div className="col-md-6 col-lg-6 p-0 text-center">
            <div className='rightSideBoxBorder' style={{ marginTop: "80px" }}>
              <h4 className="pt-5 text-secondary">SAVE THE DATE</h4>
              <h1 style={{ fontFamily: "Cormorant", fontSize: "55px" }}>Jhon Martin</h1>
              {/* <p className='text-secondary and_with_both_side_line'>and</p> */}
              <p class="text-secondary and_with_both_side_line"><span className='and_with_both_side_line_span'>and</span></p>
              <h1 style={{ fontFamily: "Cormorant", fontSize: "55px" }}>Nilsionm</h1>
              <p className="text-secondary">15. October 2020</p>
              <p className="text-secondary" style={{ paddingLeft: "100px", paddingRight: "100px" }}>At 7 o clock in the evening
                Royal Villa macadamiana Second at Marianberg
                Hilltop Dr Menomonce Falls, Wi 98061 US</p>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>Location</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;