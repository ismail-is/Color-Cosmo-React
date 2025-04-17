import React from 'react';
import InfIcon1 from '../../img/icon/location.png'
import InfIcon2 from '../../img/icon/12.svg'
import InfIcon3 from '../../img/icon/13.svg'
import ContactForm from '../ContactFrom/ContactForm';
// import ContactForm from '../ContactFrom/ContactForm'
import PBg from '../../img/product/bg.jpg';

const Contactpage = () => {

    return (
        <div>
            <section className="contact-info-section fix section-padding section-bg-2">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <img src={InfIcon1} alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h3>Address</h3>
                                    <p>
                                    Ajman Free Zone, UAE
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-info-items active text-center">
                                <div className="icon">
                                    <img src={InfIcon2} alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h3>Phone Number</h3>
                                    <p>
                                    +971 508 928 586<br />
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <img src={InfIcon3} alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h3>Mail Adress</h3>
                                    <p>
                                    info@colorcosmo.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section section-padding pt-10 section-bg-2" style={{ backgroundImage: `url(${PBg})` }}>
                <div className="container">
                    <div className="contact-area">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="map-content-area">
                                    <h3 className="wow fadeInUp" data-wow-delay=".3s"> Get In Touch</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit mattis <br/>
                                            faucibus odio feugiat arc dolor.
                                    </p>
                                    <div className="google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21934.345565840806!2d55.441072189686935!3d25.40870682958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5828a03bc563%3A0x9e11214ae75b0bf2!2sFree%20Zone%20-%20Ajman%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1742879869906!5m2!1sen!2sin" ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
                                <div className="contact-form-items">
                                    <div className="contact-title">
                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3>
                                        <p className="wow fadeInUp" data-wow-delay=".5s">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Contactpage;
