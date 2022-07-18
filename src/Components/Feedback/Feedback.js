import './Feedback.css'

function Feedback() {
    return (
        <div className="container-lg px-lg-5">
            <div className="pb-5">
                <h6 className="text-center" style={{ color: "#C78665" }}>Beautiful Client</h6>
                <h1 className="text-center">What Our Clients Say?</h1>
                <div className="row">
                    <div className="col-sm-6 pt-5" style={{ paddingLeft: "40px" }}>
                        <div className="card flex-row" style={{ borderLeft: "5px solid #c78665", borderRadius: "0" }}>
                            <img className="mt-5" src="http://wedco.themetechmount.net/wp-content/uploads/2020/07/review-four.jpg" style={{ borderRadius: "100%", height: "70px", marginLeft: "-35px" }} />
                            <div className="card-body">
                                <i className="fa fa-quote-left" style={{ fontSize: "60px", color: "#c78665" }}></i>
                                <div className="card-body">
                                    <p className="card-text text-secondary">Thank you wedco for helping me give my daughter the wedding of her dreams. You guys did a fantastic job of turning our thoughts into reality!!</p>
                                    <h4>Maria Gregory</h4>
                                    <p style={{ fontSize: "15px" }}>Beauty Bride</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 pt-5" style={{ paddingLeft: "40px" }}>
                        <div className="card flex-row" style={{ borderLeft: "5px solid #c78665", borderRadius: "0" }}>
                            <img className="mt-5" src="http://wedco.themetechmount.net/wp-content/uploads/2020/07/review-four.jpg" style={{ borderRadius: "100%", height: "70px", marginLeft: "-35px" }} />
                            <div className="card-body">
                                <i className="fa fa-quote-left" style={{ fontSize: "60px", color: "#c78665" }}></i>
                                <div className="card-body">
                                    <p className="card-text text-secondary">Thank you wedco for helping me give my daughter the wedding of her dreams. You guys did a fantastic job of turning our thoughts into reality!!</p>
                                    <h4>Maria Gregory</h4>
                                    <p style={{ fontSize: "15px" }}>Beauty Bride</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
