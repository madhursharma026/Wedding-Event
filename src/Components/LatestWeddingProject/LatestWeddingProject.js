import './LatestWeddingProject.css'
import Img1 from './Images/Img1.jpg'
import Img2 from './Images/Img2.jpg'
import Img3 from './Images/Img3.jpg'
import Img4 from './Images/Img4.jpg'

function LatestWeddingProject() {
    return (
        <div className='py-5' style={{ background: "#EDF5F7", marginTop: "100px", marginBottom: "100px" }}>
            <div className="container-lg py-3">
                <div className="row">
                    <div className="col-lg-6">
                        <h5 style={{ color: "#D8A882" }}>Latest Wedding Project</h5>
                        <h2>What Can Be For Wedding?</h2>
                    </div>
                    <div className="col-lg-6">
                        <p className='image_data_content-secondary'>
                            It's no secret that a wedding is the most expensive party most people will ever throw. Wedco will you might want to opt for something edible, like a box of sweets or a locally produced food item.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 project_img img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                    <img src={Img1} alt="#Imgnotfound" className='w-100 project_img_col' />
                    <div class="image_data">
                        <h2 class="image_data_content">Wedding Bells</h2>
                        <h6 class="image_data_content">Catering, Stories</h6>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 project_img img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                    <img src={Img2} alt="#Imgnotfound" className='w-100 project_img_col' />
                    <div class="image_data">
                        <h2 class="image_data_content">Best Florists</h2>
                        <h6 class="image_data_content">Decorate, Planning</h6>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 project_img img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                    <img src={Img3} alt="#Imgnotfound" className='w-100 project_img_col' />
                    <div class="image_data">
                        <h2 class="image_data_content">Bride & Groom</h2>
                        <h6 class="image_data_content">Catering</h6>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 project_img img-hover-zoom--zoom-n-rotate mt-4" style={{ overflow: "hidden" }}>
                    <img src={Img4} alt="#Imgnotfound" className='w-100 project_img_col' />
                    <div class="image_data">
                        <h2 class="image_data_content">Photo Memories</h2>
                        <h6 class="image_data_content">Catering, Planning</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestWeddingProject;