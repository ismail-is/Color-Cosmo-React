import React from 'react'
import CountUp from 'react-countup';
const FunFact = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="counter-text text-center">
                    <h6 className="wow fadeInUp">Numbers That Define Our Expertise</h6>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="counter-items">
                            <div className="counter-title">
                                <h2><span><CountUp end={50} enableScrollSpy /></span>+</h2>
                            </div>
                            <p className="text-center">Years of combined experience</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="counter-items">
                            <div className="counter-title bg-2">
                                <h2><span><CountUp end={10} enableScrollSpy /></span>+</h2>
                            </div>
                            <p className="text-center"> Substrates</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="counter-items">
                            <div className="counter-title bg-3">
                                <h2><span><CountUp end={4} enableScrollSpy /></span>+</h2>
                            </div>
                            <p className="text-center">Types of specialized inks</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="counter-items">
                            <div className="counter-title bg-4">
                                <h2><span><CountUp end={100} enableScrollSpy /></span>%</h2>
                            </div>
                            <p className="text-center">Customization</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;