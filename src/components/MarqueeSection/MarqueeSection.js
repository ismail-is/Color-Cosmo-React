import React from 'react';

import MS1 from '../../img/marquee-box.png'

const MarqueeSection = (props) => {
    return (
        <div className={"" +props.hclass} style={{marginBottom:'10px',marginTop:'-10px'}}>
            <div className="mycustom-marque">
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div className="cmn-textslide">Precision</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Quality</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Innovation</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Customization</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Vibrancy</div>
                        <div><img src={MS1} alt="img" /></div>
                    </div>
                    <div className="comm">
                    <div className="cmn-textslide">Precision</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Quality</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Innovation</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Customization</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Vibrancy</div>
                        <div><img src={MS1} alt="img" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;