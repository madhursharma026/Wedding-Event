import './Header.css'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo.png'
import React, { useEffect, useState } from "react";

export default function Header() {
    const [headerChangeColor, setHeaderChangeColor] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setHeaderChangeColor(window.pageYOffset > 200)
            );
        }
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-xl fixed-top py-3" style={{ backgroundColor: `${headerChangeColor ? "white" : "transparent"}`, color: `${headerChangeColor ? "black" : "white"}` }}>
                <div className="container-xl px-xl-5">
                    {/* <Link to='/' className='navbar-brand' style={{ color: `${headerChangeColor ? "black" : "white"}`, fontSize:"24px" }}>{<b>Navbar</b>}</Link> */}
                    <Link to='/' className='navbar-brand' style={{ color: `${headerChangeColor ? "black" : "white"}`, fontSize:"24px" }}><img src={Logo} alt="#ImgNotFound" /></Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="unhide_after_xl_scrn">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-light px-3">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link active' aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <Link to='/link1' className='nav-link p-2'>Link 1</Link>
                                        </li>
                                        <li>
                                            <Link to='/link2' className='nav-link p-2'>Link 2</Link>
                                        </li>
                                        <li>
                                            <Link to='/link3' className='nav-link p-2'>Link 3</Link>
                                        </li>
                                        <li>
                                            <Link to='/link4' className='nav-link p-2'>Link 4</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to='/request_services' className='nav-link'>Request service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact_us' className='nav-link'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hide_after_xl_scrn'>
                        <ul style={{ listStyleType: "none" }}>
                            <li className="nav-item px-3 pt-2">
                                <Link to='/' className='nav-link active' aria-current="page"><b style={{fontSize:"18px"}}>Home</b></Link>
                            </li>
                            <li className="nav-item dropdown px-3 pt-2">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b style={{fontSize:"18px"}}>Services</b>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to='/link1' className='nav-link p-2'>Link 1</Link>
                                    </li>
                                    <li>
                                        <Link to='/link2' className='nav-link p-2'>Link 2</Link>
                                    </li>
                                    <li>
                                        <Link to='/link3' className='nav-link p-2'>Link 3</Link>
                                    </li>
                                    <li>
                                        <Link to='/link4' className='nav-link p-2'>Link 4</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item px-3 pt-2">
                                <Link to='/request_services' className='nav-link'><b style={{fontSize:"18px"}}>Request service</b></Link>
                            </li>
                            <li className="nav-item px-3 pt-2">
                                <Link to='/contact_us' className='nav-link'><b style={{fontSize:"18px"}}>Contact Us</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}