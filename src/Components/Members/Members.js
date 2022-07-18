import './Member.css'
import { Link } from 'react-router-dom'
import profile1 from './Profile/profile1.jpg'
import profile2 from './Profile/profile2.jpg'
import profile3 from './Profile/profile3.jpg'

function Member() {
    return (
        <div className='py-5' style={{ background: "#EDF5F7", marginTop: "100px", marginBottom: "100px" }}>
            <div className="container-lg py-3">
                <div className="row">
                    <div className="col-lg-6">
                        <h5 style={{ color: "#D8A882" }}>Talented Team Member</h5>
                        <h2>Our Lovely Team Member</h2>
                    </div>
                    <div className="col-lg-6">
                        <p className='image_data_content-secondary'>
                            As the premier wedding event planning company in the area. Each event and client is unique and we believe our services should be as well. We make your event memorable. <Link to="/" style={{ color: "#C78665", textDecoration: "none" }}> View all members.</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 member_project_img member-img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                        <div class="card">
                            <img src={profile1} class="card-img-top w-100 member_project_img_col" alt="#ImgNotFound" />
                            <div class="card-body px-4">
                                <p className='text-muted' style={{ fontSize: "13px" }}>Wedding Planner</p>
                                <div className="row">
                                    <div className="col-9 col-lg-10">
                                        <h4>Alex Sam Martin</h4>
                                    </div>
                                    <div className="col-3 col-lg-2">
                                        <div class="btn-group dropup">
                                            <button type="button" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                                                <b style={{ fontSize: "20px" }}>+</b>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-twitter"></i></Link></li>
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-youtube-play"></i></Link></li>
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 member_project_img member-img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                        <div class="card">
                            <img src={profile2} class="card-img-top w-100 member_project_img_col" alt="#ImgNotFound" />
                            <div class="card-body px-4">
                                <p className='text-muted' style={{ fontSize: "13px" }}>Graphics Designer</p>
                                <div className="row">
                                    <div className="col-9 col-lg-10">
                                        <h4>Emilia Harold</h4>
                                    </div>
                                    <div className="col-3 col-lg-2">
                                        <div class="btn-group dropup">
                                            <button type="button" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                                                <b style={{ fontSize: "20px" }}>+</b>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-twitter"></i></Link></li>
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-youtube-play"></i></Link></li>
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 member_project_img member-img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                        <div class="card">
                            <img src={profile3} class="card-img-top w-100 member_project_img_col" alt="#ImgNotFound" />
                            <div class="card-body px-4">
                                <p className='text-muted' style={{ fontSize: "13px" }}>Wedding Stylish</p>
                                <div className="row">
                                    <div className="col-9 col-lg-10">
                                        <h4>Luis Em Hodge</h4>
                                    </div>
                                    <div className="col-3 col-lg-2">
                                        <div class="btn-group dropup">
                                            <button type="button" class="btn btn-light" data-bs-toggle="dropdown" aria-expanded="false">
                                                <b style={{ fontSize: "20px" }}>+</b>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-twitter"></i></Link></li>
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-youtube-play"></i></Link></li>
                                                <li><Link class="dropdown-item" to="#"><i style={{ fontSize: "20px" }} class="fa fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;