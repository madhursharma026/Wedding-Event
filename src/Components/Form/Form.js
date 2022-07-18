import './Form.css'
import rightSideImg from './rightSideImg/rightSideImg.jpg'

function Form() {
    return (
        <>
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="pt-5">
                            <h5 className='pt-5' style={{ color: "#c78665" }}>
                                Welcome To Our Site
                            </h5>
                            <h2>Welcome To Our Site
                                Let's Plan Your Perfect Wedding For All Your Catering Needs</h2>
                            <p className="text-muted pt-3">
                                We offer the best food and drink service as per particular culture and taste Our Team make sure for the best catering arrangements as it is the most important part any wedding ceremony in all over country!
                            </p>
                            <select className='p-3 mt-5' name="" id="" style={{ width: "100%", background: "#EDF5F7" }}>
                                <option value="#value">
                                    Select Your Services
                                </option>
                                <option value="#value">
                                    Wedding Stories
                                </option>
                                <option value="#value">
                                    Planning
                                </option>
                                <option value="#value">
                                    General
                                </option>
                            </select>
                            <br /><br />
                            <input type="text" placeholder='Your Name*' className='p-3' style={{ width: "100%", background: "#EDF5F7" }} />

                            <div className="row">

                                <div className="col-md-6">
                                    <br />
                                    <input type="text" placeholder='Phone*' className='p-3' style={{ width: "100%", background: "#EDF5F7" }} />
                                </div>
                                <div className="col-md-6">
                                    <br />
                                    <input type="text" placeholder='Email*' className='p-3' style={{ width: "100%", background: "#EDF5F7" }} />
                                </div>
                            </div>
                            <button class="btn w-100 p-3 text-light mt-4" type="button" style={{ background: "#C78665", borderRadius: "0" }}><b>Send a Request</b></button>
                            <br /><br />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="imgSize" src={rightSideImg} alt="#ImgNotFound" style={{ borderTop: "20px solid #C78665" }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;