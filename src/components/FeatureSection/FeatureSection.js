import React from 'react';

import Feature1 from '../../img/feature/tshirt.png'
import Feature2 from '../../img/feature/tshirt-2.png'
import Feature3 from '../../img/feature/return.png'

const FeatureSection = () => {
    return (
        <section className="feature-section fix section-padding">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <img src={Feature1} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Vision</h3>
                                    <p>
                                    Color Cosmo aims to become a market-leading supplier of Custom-Made Industrial Inks, Pigment Paste, and Related Accessories with a focus on reliability and quality consistency
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <img src={Feature2} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Mission</h3>
                                    <p>
                                    Color Cosmo is committed to providing competitively-priced products and trustworthy on-site services for the Printing and Packaging Industry within the UAE and abroad
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="feature-box-items">
                                <div className="icon">
                                    <img src={Feature3} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Ready for ship</h3>
                                    <p>
                                        Print on 100% quality cotton for <br />
                                            vibrant finish and all-day
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;