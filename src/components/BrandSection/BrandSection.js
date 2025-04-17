import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay } from 'swiper';

// Import brand logos
import PBg from '../../img/product/bg.jpg';
import BS1 from '../../img/Allimg/clients/1.png';
import BS2 from '../../img/Allimg/clients/2.png';
import BS3 from '../../img/Allimg/clients/3.png';
import BS4 from '../../img/Allimg/clients/4.png';
import BS5 from '../../img/Allimg/clients/5.png';
import BS6 from '../../img/Allimg/clients/6.png';
import BS7 from'../../img/Allimg/clients/7.png';
import BS8 from '../../img/Allimg/clients/8.png';
import BS9 from '../../img/Allimg/clients/1.png';
import BS10 from '../../img/Allimg/clients/2.png';

// Install required Swiper modules
SwiperCore.use([Autoplay]);

const BrandSection = () => {
    return (
        <section  className="shop-section bg-cover section-padding" style={{ backgroundImage: `url(${PBg})`,marginTop:'-100px' }} > 
        <div className="brand-section">
            <div className="container">
                
                <div className="brand-wrapper">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Color Cosmo</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Some Of The Brands  We have  <br/> Worked With
                    </h2>
                </div>
                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        breakpoints={{
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-logo">
                                <img src={BS1} alt="Brand 1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <img src={BS2} alt="Brand 2" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <img src={BS3} alt="Brand 3" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <img src={BS4} alt="Brand 4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <img src={BS5} alt="Brand 5" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo">
                                <img src={BS3} alt="Brand 3" />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{ delay: 1000, reverseDirection: true, disableOnInteraction: false }}
                        breakpoints={{
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <img src={BS6} alt="Brand 6" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <img src={BS7} alt="Brand 7" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <img src={BS8} alt="Brand 8" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <img src={BS9} alt="Brand 9" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <img src={BS10} alt="Brand 10" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="brand-logo style-2">
                                <img src={BS7} alt="Brand 7" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        </section>
    );
};

export default BrandSection;
