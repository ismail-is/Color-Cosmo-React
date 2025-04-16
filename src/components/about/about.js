import React from 'react';

/* image  */
import Abimg1 from '../../img/about/dot-1.png'
import Abimg2 from '../../img/about/dot-2.png'
import Abimg3 from '../../img/about/circle.png'
import Abimg4 from '../../img/about/cap.png'
import Abimg5 from '../../img/about/shape.png'
import Abimg6 from '../../img/Allimg/service/1-1.jpg'
import Abimg7 from '../../img/Allimg/service/1-3.jpg'
import Abimg8 from '../../img/Allimg/service/1-2.jpg'
import Abimg9 from '../../img/line.png'
import Abimg10 from '../../img/Allimg/icons/Applications.png'
import Abimg11 from '../../img/about/author.png'
import Abimg12 from '../../img/about/line.png'
import Abimg13 from '../../img/Allimg/icons/Availability.png'
import Abimg14 from '../../img/Allimg/icons/package.png'
import Abimg15 from '../../img/Allimg/icons/Properties.png'
import { Link } from 'react-router-dom';

const about = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section section-padding pt-20 ">
            <div className="dot-shape">
                <img src={Abimg1} alt="img" />
            </div>
            <div className="dot-shape-2">
                <img src={Abimg2} alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape float-bob-y">
                                    <img src={Abimg3} alt="img" />
                                </div>
                                <div className="cap-shape float-bob-x">
                                    <img src={Abimg1} alt="img" />
                                </div>
                                <div className="shape-img">
                                    <img src={Abimg5} alt="img" />
                                </div>
                                <div className="about-image-1 wow fadeInUp">
                                    <img src={Abimg6} alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <img src={Abimg7} alt="img" />
                                </div>
                                <div className="about-image-3">
                                    <img src={Abimg8} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp"></h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Dry Offset Inksdry 
                                        <span> Offset Inks <img src={Abimg9} alt="img" /></span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                Color Cosmo’s UV-based Dry Offset Inks are specially formulated for rigid plastic containers. Free from ITX and Benzo, they’re ideal for pharmaceutical, cosmetic, food, and dairy packaging applications
                                </p>
                                <div className="row g-4">
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items active">
                                            <div className="icon-items">
                                                <div className="icon">
                                                    <img src={Abimg10} alt="img"  style={{height:'40px'}}/>
                                                </div>
                                                <h6>Applications for CC UV DO</h6>
                                            </div>
                                                
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Poly Styrene (PS) Container
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Poly Propylene (PP) Containers
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            High Density Poly Ethylene  Containers
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Poly Ethylene (PET) Containers 
                                            </span>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items">
                                            <div className="icon-items">
                                                <div className="icon bg-2" style={{backgroundColor:'#93519f'}}>
                                                    <img src={Abimg13} alt="" style={{height:'40px'}}/>
                                                </div>
                                                <h6>Color Availability</h6>
                                            </div>
                                            
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Cyan
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Magenta
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Yellow 
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Black
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Pantone Matching System
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Bespoke Color Matching 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="row g-4">
  <div className="col-xl-12 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
    <div className="icon-box-items active" >
      <div className="icon-items">
        <div className="icon">
          <img src={Abimg14} alt="img"  style={{height:'40px'}}/>
        </div>
        <h6>Packaging        </h6>
      </div>
      

      {/* Wrapper for 2-row layout */}
      <div style={{ display: 'flex', gap:'230px' }}>
      <div className="icon-items">
      <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
        <h6>1 Kg        </h6>
      </div>
      <div className="icon-items">
      <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
        <h6>2 Kg        </h6>
      </div>
    
       
       
        
       
      </div>
    </div>
  </div>
</div>

                                
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="row g-4">
  <div className="col-xl-12 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
    <div className="icon-box-items ">
      <div className="icon-items">
        <div className="icon">
          <img src={Abimg15} alt="img" style={{height:'40px'}}/>
        </div>
        <h6>Properties</h6>
      </div>

      {/* Wrapper for 2-row layout */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          Low Odor
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          Minimum ΔE*
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          Best adhesion
        </span>
       
       
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          High Gloss
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          High Color Strength
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          Excellent Ink Transfer
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          Good Scuff Resistance
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          ITX Free
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          Low tack to minimize wastage
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
          High Cure speed for High Speed Machine
        </span>
      </div>
    </div>
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

export default about;