import React from 'react';
import { Link } from 'react-router-dom';
import Mq1 from '../../img/marquee-box-3.png'
import Mq2 from '../../img/cta-bg-2.jpg'
import Mq3 from '../../img/about/dot-1.png'
import Mq4 from '../../img/about/dot-1.png'
import Mq5 from '../../img/about/dot-2.png'
import Mq6 from '../../img/Allimg/ctc.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSectionS2 = () => {
    return (
        <section className="cta-section-3" style={{marginBottom:'10px'}}>
            {/* <div className="mycustom-marque style-3">
                <div className="scrolling-wrap">
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><img src={Mq1} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><img src={Mq1} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><img src={Mq1} alt="img" /></div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="cta-wrapper-2 bg-cover"  style={{ backgroundImage: `url(${Mq2})` }}>
                    <div className="prite-box float-bob-y">
                        <img src={Mq3} alt="img" />
                    </div>
                    <div className="hand-bag float-bob-x">
                        <img src={Mq4}alt="img" />
                    </div>
                    <div className="cta-sticker float-bob-y">
                        <img src={Mq5} alt="img" />
                    </div>
                    <div className="cta-content">
                        <div className="section-title">
                            <h6 className="bg-white wow fadeInUp"></h6>
                            <h2 className="text-white split-text right">
                                Ready To Create Some <br/>
                                    Custom Products?
                            </h2>
                        </div>
                        <div className="cta-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn">Contact Us</Link>
                        </div>
                    </div>
                    <div className="cta-image" >
                        <img src={Mq6} alt="img" style={{height:'320px'}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;