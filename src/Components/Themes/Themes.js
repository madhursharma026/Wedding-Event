import bgImg from './bgImg/bgImg.jpg'
import { Link } from 'react-router-dom'
import './Themes.css'

function Themes() {
    return (
        <div style={{ background: `url(${bgImg})`, backgroundPosition:"center center" }}>
            <div className="py-5">
                <div className="py-sm-5 text-center pt-5">
                    <i class="fa fa-heart-o p-2" style={{ fontSize: "100px", borderRadius: "50%", border: "3px solid #c78665", color: "red" }}></i>
                    <h3 className='text-light pt-3'>WedCo Wedding Themes</h3>
                    <h1 className='text-light pt-3'>We Plan Every Detail Of Your Wedding!</h1>
                    <div className="row">
                        <div className="col-md-6 whatsapp_side px-md-5">
                            <i class="fa fa-whatsapp" style={{ color: "#c78665", fontSize: "45px" }}></i>&emsp;<span style={{ fontSize: "25px", color: "white" }}>What’s App Chat</span><h6 className='text-white'>(+01) 123 456 7890</h6>
                        </div>
                        <div className="col-md-6 skype_side px-md-5">
                            <i class="fa fa-skype" style={{ color: "#c78665", fontSize: "45px" }}></i>&emsp;<span style={{ fontSize: "25px", color: "white" }}>Skype Meet</span><h6 className='text-white'>&emsp;&emsp;&emsp;@themetechmount</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Themes;