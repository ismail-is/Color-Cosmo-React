import React from 'react';
import { Link } from 'react-router-dom';
import Services from "../../api/Services";

import Bgimg from '../../img/footer/footer-bg-2.jpg'
import Shape1 from '../../img/footer/line-shape.png'
import Shape2 from '../../img/footer/star.png'
import Shape3 from '../../img/mail.png'
import Logo from '../../img/Allimg/logo1.png';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const FooterS3 = () => {
    return (
        <footer className="footer-section style-2 bg-cover" style={{ backgroundImage: `url(${Bgimg})` }}>
            <div className="line-shape float-bob-y">
                <img src={Shape1} alt="img" />
            </div>
            <div className="star-shape float-bob-y">
                <img src={Shape2} alt="img" />
            </div>
            <div className="container">
                {/* <div className="footer-newsletter-wrapper style-2">
                    <div className="newsletter-items wow fadeInUp" data-wow-delay=".3s">
                        <div className="icon">
                            <img src={Shape3} alt="img" />
                        </div>
                        <h2>
                            Get Our Latest's News <br />
                            & Updates
                        </h2>
                    </div>
                    <div className="newsletter-input wow fadeInUp" data-wow-delay=".5s">
                        <input type="email" id="email22" placeholder="Business email adress" />
                        <button className="newsletter-btn" type="submit">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div> */}
                <div className="footer-widgets-wrapper style-2">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link onClick={ClickHandler} to="/home">
                                        <img src={Logo} alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p className="text-white">
                                    Advanced ink technology for seamless printing results. Consistency, reliability, and excellence
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link onClick={ClickHandler} to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link onClick={ClickHandler} to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link onClick={ClickHandler} to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                        <Link onClick={ClickHandler} to="#"><i className="fa-brands fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Usefull Links</h3>
                                </div>
                                <ul className="list-items">
                                    {/* {Services.slice(0, 5).map((service, sitem) => ( */}
                                        <li >
                                            <Link to='/'>
                                               Home 
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to='/about'>
                                               About  
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to='/services'>
                                            Our Services  
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to='/contact'>
                                            Contact
                                            </Link>
                                        </li>
                                    {/* ))} */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-4 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Types of Inks</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                        Dry Offset Inks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                        Screen Printing Inks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                        UV Offset Printing Inks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/news">
                                        UV Letterpress Inks
                                        </Link>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="footer-content">
                                    <p className="text-white">
                                    Ajman Free Zone, UAE
                                    </p>
                                    <ul className="contact-list">
                                    <li>
    <a href="mailto:info@colorcosmo.com" className="link">info@colorcosmo.com</a>
</li>
<li>
    <a href="https://wa.me/971508928586" target="_blank" rel="noopener noreferrer">
        +971 50 8928586
    </a>
</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <Link onClick={ClickHandler} to="#" id="scrollUp" className="scroll-icon">
                        <i className="fa-solid fa-chevrons-up"></i>
                    </Link>
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                        © 2025 Color Cosmo |  Powered By <a href="https://brightmedia.tech/" target='_blank'> Bright Media </a> 
                        </p>
                        <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <Link onClick={ClickHandler} to="/QualityPolicy">
                                Quality Policy
                                </Link>
                            </li>
                           
                            
                            <li>
                                <Link onClick={ClickHandler} to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterS3;