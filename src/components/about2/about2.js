import React from 'react'
import { Link } from 'react-router-dom'
import abImg from '../../img/about/t-shirt.png'
import abImg1 from '../../img/about/shape-1.png'
import abImg2 from '../../img/about/mug1.png'
import abImg3 from '../../img/about/color_cycle.png'
import abImg4 from '../../img/about/sticer.png'
import abImg5 from '../../img/about/shape-2.png'
import Line from '../../img/line.png'
import author from '../../img/about/author.png'
import Line2 from '../../img/about/line.png'


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-image wow img-custom-anim-top" >
                                    <img src={abImg} alt="img" />
                                </div>
                                <div className="shape-1">
                                    <img src={abImg1} alt="img" />
                                </div>
                                <div className="shape-2">
                                    <img src={abImg2} alt="img" />
                                </div>
                                <div className="shape-3">
                                    <img src={abImg3} alt="img" />
                                </div>
                                <div className="shape-4">
                                    <img src={abImg4} alt="img" />
                                </div>
                                <div className="shape-5">
                                    <img src={abImg5} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp"> About us</h6>
                                    <h2 className="wow fadeInUp" >
                                    Our Ink Solutions,
                                        <span>  Crafted to Perform<img src={Line} alt="img" /> </span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" >
                                We manufacture custom industrial inks for dry offset, screen, UV offset, and letterpress printing—designed for durability, brilliance, and precision across all packaging types.
                                </p>
                                <ul className="about-list wow fadeInUp">
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Precision-Engineered Inks for Unmatched Print Quality
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Custom Ink Solutions Tailored to Your Printing Needs
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Reliable and High-Performance Inks for Every Application
                                    </li>
                                </ul>
                                <div className="about-author">
                                    <Link  to="/contact" className="theme-btn wow fadeInUp" >contact us</Link>
                                    {/* <div className="author-image wow fadeInUp" >
                                        <img src={author} alt="author-img" />
                                            <div className="content">
                                            <span>10m+ Trusted Global clients <img src={Line2} alt="img" /></span>
                                            </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;