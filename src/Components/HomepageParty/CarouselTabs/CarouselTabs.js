import weddingIcon from './CarouselTabsIcon/weddingIcon.png'
import partyIcon from './CarouselTabsIcon/partyIcon.png'
import meetingIcon from './CarouselTabsIcon/meetingIcon.png'
import { TextField } from "@mui/material";
import { InputAdornment } from '@mui/material';
import './CarouselTabs.css'
import { Link } from 'react-router-dom'



function CarouselTabs() {
    return (
        <div className="text-white" style={{ marginTop: "-35%" }}>
            <h1 className="text-light">
                Plan The Perfect Event
            </h1>
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <p style={{ fontSize: "20px" }}>
                        <b>
                            Eventective is the most comprehensive resource to help you plan your event.
                            Find your Wedding, Party, or Meeting venue now.
                        </b>
                    </p>
                    <div>
                        <div className="row bg-light">
                        <Link to="/" className="col p-2" style={{ background: "#334B62", color: "white", textDecoration: "none" }}>
                                <h4 className='carouselTabsFontSize'><img src={weddingIcon} alt="#ImageNotFound" className='carouselTabsImageSize' /> Wedding</h4>
                            </Link>
                            <Link to="/homepage_party" className="col p-2" style={{ background: "white", color: "black", textDecoration: "none" }}>
                                <h4 className='carouselTabsFontSize'><img src={partyIcon} alt="#ImageNotFound" className='carouselTabsImageSize' /> Party</h4>
                            </Link>
                            <Link to="/homepage_meeting" className="col p-2" style={{ background: "#334B62", color: "white", textDecoration: "none" }}>
                                <h4 className='carouselTabsFontSize'><img src={meetingIcon} alt="#ImageNotFound" className='carouselTabsImageSize' /> Meeting</h4>
                            </Link>
                            <>
                                <TextField className='p-3'
                                    id="outlined-start-adornment"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><i class="fa fa-map-marker"></i></InputAdornment>,
                                    }}
                                />
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselTabs;






