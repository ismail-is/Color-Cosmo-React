import React from 'react';

import Ws1 from '../../img/about/product-shape.png'
import Ws2 from '../../img/about/04.jpg'
import Ws3 from '../../img/about/05.jpg'
import Ws4 from '../../img/feature/StickersV30.png'
import Ws5 from '../../img/line.png'


const WorksSection = (props) => {
    return (
        <section className={"" +props.hclass} style={{ backgroundImage: `url(${props.Ws6})`}}>
            <div className="product-shape float-bob-x">
                <img src={Ws1} alt="img" />
            </div>
            <div className="container">
                <div className={"" +props.eclass}>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-feature-image">
                                    <img src={Ws2} alt="img"  className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s" />
                                        <div className="about-feature-image reveal image-anime">
                                        <img src={Ws3} alt="img" />
                                        </div>
                                        <div className="stickers-shape">
                                        <img src={Ws4} alt="img" />
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-feature-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Driven by Color, 
                                        <span><img src={Ws5} alt="img" />Backed by Science</span>
                                    </h2>
                                </div>
                                <div className="box-items-area mt-3 mt-md-0">
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Experts in Custom Inks</h5>
                                        <p>
                                        With over 50 years of combined expertise, we specialize in tailor-made ink solutions for diverse packaging materials and industries.
                                        </p>
                                    </div>
                                    <div className="box-item active wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Quality You Can Trust</h5>
                                        <p>
                                        Our ISO-certified facility, rigorous testing, and high-grade materials ensure consistent performance and customer satisfaction across every order
                                        </p>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksSection;