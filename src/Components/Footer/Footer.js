import { Link } from 'react-router-dom'
import logoFooter from './Logo/logo-footer.png'
import logoIcons from './Logo/logo-icons.jpg'

function Footer() {
    return (
        <div style={{ background: "#ECF4F6" }}>
            <div className='container-lg'>
                <div className="text-center py-4">
                    <img src={logoFooter} alt="#ImgNotFound" />
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 text-center py-4">
                        <h4>Office Address</h4>
                        <h6>Evanto HQ 24 Fifth st., Los Angeles, USA</h6>
                    </div>
                    <div className="col-md-4 text-center py-4">
                        <h4>Office Address</h4>
                        <h6>Evanto HQ 24 Fifth st., Los Angeles, USA</h6>
                    </div>
                    <div className="col-md-4 text-center py-4">
                        <h4>Office Address</h4>
                        <h6>Evanto HQ 24 Fifth st., Los Angeles, USA</h6>
                    </div>
                </div>
                <hr />
                {/* <input type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" style={{width:"500px"}} />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
                <div className="row py-5">
                    <div className="col-md-8 col-lg-6 col-xxl-6 offset-md-2 offset-lg-3 offset-xxl-3">
                        <input type="text" placeholder='Your Email Address' style={{ width: "100%", paddingRight: "170px", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px" }} />
                        <button type="button" class="btn my-1 px-5" style={{ marginLeft: "-155px", borderRadius: "0", background: "#C78665" }}>Submit</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container-md'>
                <div className="row pb-5">
                    <div className="col-lg-3 col-md-6 pt-5">
                        <h4 className='pb-3'>About WedCo</h4>
                        <p className="text-secondary">
                            We’ve delivered fabulous wedding event experiences over the last two decades and are now poised to chart out a whole new growth story. We hosted for reputed company
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 pt-5">
                        <h4 className='pb-3'>Our Services</h4>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> User Strategy</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> Product Designing</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> Marketing Strategy</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> IT Consultancy</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> Server Security</Link><br />
                    </div>
                    <div className="col-lg-3 col-md-6 pt-5">
                        <h4 className='pb-3'>Wedding Planner Faqs</h4>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> Why hire a planner ?</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> How can i make an appointment ?</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> How to choose a venue ?</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> Event catalogue ?</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fa fa-angle-right pt-3"></i> Pyment type you accept</Link><br />
                    </div>
                    <div className="col-lg-3 col-md-6 pt-5">
                        <h4 className='pb-3'>Instagram Gallery</h4>
                        <div className="row">
                            <div className="col-4 p-0"><img src={logoIcons} alt="#ImgNotFound" className='w-100 p-1' /></div>
                            <div className="col-4 p-0"><img src={logoIcons} alt="#ImgNotFound" className='w-100 p-1' /></div>
                            <div className="col-4 p-0"><img src={logoIcons} alt="#ImgNotFound" className='w-100 p-1' /></div>
                            <div className="col-4 p-0"><img src={logoIcons} alt="#ImgNotFound" className='w-100 p-1' /></div>
                            <div className="col-4 p-0"><img src={logoIcons} alt="#ImgNotFound" className='w-100 p-1' /></div>
                            <div className="col-4 p-0"><img src={logoIcons} alt="#ImgNotFound" className='w-100 p-1' /></div>
                        </div>
                    </div>
                </div>
            </div>
                <hr />
                <p className='text-center pb-3'>Copyright © 2020. All rights reserved by Themetechmount</p>
        </div>
    );
}

export default Footer;