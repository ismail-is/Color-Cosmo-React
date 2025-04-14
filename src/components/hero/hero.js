import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../img/hero/hero-bg.jpg'
import Shape1 from '../../img/hero/circle-2.png'
import Shape2 from '../../img/hero/vector.png'
import Shape3 from '../../img/hero/circle.png'
import Shape4 from '../../img/hero/arrow-up.png'
import Shape5 from '../../img/Scroll_Down.png'
import Shape6 from '../../img/hero/bar.png'
import hero1 from '../../img/hero/hero-1.png'
import hero2 from '../../img/hero/information.png'



const hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url(${Bg})` }} >
            <div className="circle-shape">
                <img src={Shape1} alt="img" />
            </div>
            <div className="vector-shape float-bob-x">
                <img src={Shape2} alt="img" />
            </div>
            <div className="circle-shape-2">
                <img src={Shape3} alt="img" />
            </div>
            <div className="arrow-shape float-bob-y">
                <img src={Shape4} alt="img" />
            </div>
            <div id="scrollDown" className="scroll-down">
                <img src={Shape5} alt="img" />
            </div>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h6 className="wow fadeInUp">Manufacturer Of Industrial Printing Inks</h6>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                            High-Performance
                                <span>Industrial Printing Inks <img src={Shape6} alt="img" /></span>..
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                            Reliable, Custom-Formulated Industrial Inks for Superior Print Quality Across Diverse Applications
                            </p>
                            <ul className="list wow fadeInUp" data-wow-delay=".7s">
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    Top-Quality Prints Using Advanced Technology
                                </li>
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    Precision Color Matching for Vibrant Results
                                </li>
                                <li>
                                    <i className="fa-sharp fa-solid fa-check"></i>
                                    Durable, High-Performance Printing Inks
                                </li>
                            </ul>
                            <Link to="/" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Our Services</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-thumb">
                            <img src={hero1} alt="hero-img" />
                            <div className="information-shape float-bob-x">
                                {/* <img src={hero2} alt="img" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;