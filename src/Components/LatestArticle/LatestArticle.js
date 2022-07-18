import { Link } from 'react-router-dom'

function LatestArticle() {
    return (
        <div className="container-lg py-3" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="row">
                <div className="col-lg-6">
                    <h5 style={{ color: "#D8A882" }}>Latest News Articles</h5>
                    <h2>Our Latest News & Blogs</h2>
                </div>
                <div className="col-lg-6">
                    <p className='image_data_content-secondary'>
                        Checkout our least blog from the most liked bloggers regarding wedding and different aspects that most helpful for others. Stay up to date with our latest news Read more news.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 mt-4" style={{ overflow: "hidden" }}>
                    <div class="card">
                        <img src="http://wedco.themetechmount.net/wp-content/uploads/2020/10/post-02-620x480.jpg" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Catering</Link>
                            &emsp;
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>John Joe</Link>
                            <h5 class="card-title pt-3 pb-2">Fall wedding colors might be the best wedding</h5>
                            <p class="card-text">Upcycling is one of the best ways to decorate an intimate wedding setting.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-4" style={{ overflow: "hidden" }}>
                    <div class="card">
                        <img src="http://wedco.themetechmount.net/wp-content/uploads/2020/10/post-03-620x480.jpg" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Catering</Link>
                            &emsp;
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>John Joe</Link>
                            <h5 class="card-title pt-3 pb-2">Fall wedding colors might be the best wedding</h5>
                            <p class="card-text">Upcycling is one of the best ways to decorate an intimate wedding setting.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 mt-4" style={{ overflow: "hidden" }}>
                    <div class="card">
                        <img src="http://wedco.themetechmount.net/wp-content/uploads/2020/10/postslider-3-620x480.jpg" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>Catering</Link>
                            &emsp;
                            <Link to="/" style={{ textDecoration: "none", color: "black" }}>John Joe</Link>
                            <h5 class="card-title pt-3 pb-2">Fall wedding colors might be the best wedding</h5>
                            <p class="card-text">Upcycling is one of the best ways to decorate an intimate wedding setting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticle;