import bgImg from './BackgroundImg/bgImg.jpg'
import ytVideoIcon from './ytVideoIcon/Icon.png'
import './WelcomeIntro.css'
import { Link } from 'react-router-dom'

function WelcomeIntro() {
    return (
        <>
            <br />
            <br />
            <div className='container-xl p-2'>
                <div className="text-center mt-5 pt-5">
                    <img src={bgImg} alt="#ImageNotFound" className='welcome_intro_image hide_after_lg_scrn' />
                </div>
                <div className="welcome_intro_content p-5">
                    <h5 style={{ color: "#C89196" }}>Welcome To Our Wedco</h5>
                    <h2>We Are Sharing Everything With You Forever</h2>
                    <p className="text-secondary">
                        We are creative for flawless execution, WedCo takes pride in being the most preferred event management companies all over the world since, 1995!
                    </p>
                    <br />
                    <p className="text-secondary">
                        We've delivered fabulous wedding event experiences over the last two decades and are now poised to chart out a whole new growth story. We have hosted the most great reputed company ever!. We make our best to make your event memorable and Unforgettable.
                    </p>
                    <button type="button" class="btn btn-outline-dark px-3 py-2">Read More &ensp;<i class="fa fa-long-arrow-right"></i></button><span><Link to="#yt_video" className='px-3'><img src={ytVideoIcon} alt="#ImageNotFound" width="40px" height="40px" /></Link> <span>
                        Watch Video!</span></span>
                </div>
                <div>
                    <img src={bgImg} alt="#ImageNotFound" className='unhide_after_lg_scrn w-100 py-2' />
                </div>
            </div>
        </>
    );
}

export default WelcomeIntro;
