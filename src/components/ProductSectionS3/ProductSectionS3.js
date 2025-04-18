import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';  // Make sure to install Swiper with 'npm install swiper'
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

import PBg from '../../img/product/bg.jpg';
import Shap1 from '../../img/product/shape-2.png';
import Shap2 from '../../img/product/shape-3.png';
import img from '../../img/Allimg/works/1.png';
import img2 from '../../img/Allimg/works/2.png';
import img3 from '../../img/Allimg/works/3.png';
import img4 from '../../img/Allimg/works/4.png';
import img5 from '../../img/Allimg/works/5.png';
import img6 from '../../img/Allimg/works/6.png';
import img7 from '../../img/Allimg/works/7.png';

const ProductSectionS3 = ({ products }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        const shopSlider = new Swiper('.shop-slider', {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.array-next',
                prevEl: '.array-prev',
            },
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }, []);

    return (
        <section className="shop-section bg-cover section-padding" style={{ backgroundImage: `url(${PBg})` }}>
            <div className="shape-image">
                <img src={Shap1} alt="img" />
            </div>
            <div className="shape-image-2">
                <img src={Shap2} alt="img" />
            </div>
            <div className="array-button justify-content-center">
                <button className="array-prev"><i className="fa-regular fa-arrow-left-long"></i></button>
                <button className="array-next"><i className="fa-regular fa-arrow-right-long"></i></button>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Color Cosmo</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Some Of The Brands  We have  <br/> Worked With
                    </h2>
                </div>
                <div className="swiper shop-slider">
                    <div className="swiper-wrapper">
                        {products.length > 0 &&
                            products.slice(0, 8).map((product, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="shop-box-items">
                                        <div className="shop-image">
                                            <img src={img} alt="img" />
                                        </div>
                                        <div className="shop-content">
                                            <h3>
                                                <Link to='#'>
                                                    {product.title}
                                                </Link>
                                            </h3>
                                            {/* <p>312 Product</p> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
{/* 
                <h5 className="shop-bottom-title wow fadeInUp" data-wow-delay=".3s">
                    Unlock more products & buy it for your business <Link onClick={ClickHandler} to="/shop">More products</Link>
                </h5> */}
            </div>
        </section>
    );
};

export default ProductSectionS3;
