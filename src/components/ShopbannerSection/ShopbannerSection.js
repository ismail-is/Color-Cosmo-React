import React from 'react';

import Sb1 from '../../img/shop-banner/01.png'
import Sb2 from '../../img/shop-banner/02.png'
import Shape from '../../img/shop-banner/vector.png'
import { Link } from 'react-router-dom';

const ShopbannerSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="shop-banner-section fix section-padding" style={{marginBottom:'-80px'}}>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-9 wow img-custom-anim-top">
                        <div className="shop-banner-items">
                            <div className="shop-banner-content">
                                {/* <p>ECO-FRIENDLY PACKAGING</p> */}
                                <h3>
                                Vision 
                                </h3>
                                <h4><span>To become a market-leading manufacturer of innovative, high-quality industrial inks and pigment pastes, known for reliability, customization, and consistency across global printing and packaging industries</span></h4>
                                {/* <Link onClick={ClickHandler} to="/shop" className="theme-btn">Shop Now</Link> */}
                            </div>
                            <div className="shop-image">
                                <img src={Sb1} alt="img" className="ps-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7 col-lg-9 wow img-custom-anim-top">
                        <div className="shop-banner-items">
                            <div className="shop-banner-content">
                                {/* <p>ECO-FRIENDLY PACKAGING</p> */}
                                <h3>
                                Mission  
                                </h3>
                                <h4 style={{color:'#08BDC9'}}><span>We aim to deliver competitively priced inks and trusted technical support to our clients, offering tailor-made solutions that enhance print quality across various substrates and packaging formats</span></h4>
                                {/* <Link onClick={ClickHandler} to="/shop" className="theme-btn">Shop Now</Link> */}
                            </div>
                            <div className="shop-image">
                                <img src={Sb1} alt="img" className="ps-2" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xxl-6 col-xl-7 col-lg-9 wow img-custom-anim-top" >
                        <div className="shop-banner-items style-2">
                            <div className="shop-banner-content">
                                <h3>
                                Mission 
                                </h3>
                                <h4><span>We aim to deliver competitively priced inks and trusted technical support to our clients, offering tailor-made solutions that enhance print quality across various substrates and packaging formats </span></h4>
                                <Link onClick={ClickHandler} to="/shop" className="theme-btn">Shop Now</Link>
                            </div>
                            <div className="shop-image">
                                <img src={Sb2} alt="img" className="ps-2" />
                                <div className="sale-text">
                                    <img src={Shape} alt="img" />
                                    <h5>
                                        sale <br />
                                        30% off
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default ShopbannerSection;