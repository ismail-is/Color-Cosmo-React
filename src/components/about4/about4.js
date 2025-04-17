import React from 'react';

/* image  */
import Abimg1 from '../../img/about/dot-1.png'
import Abimg2 from '../../img/about/dot-2.png'
import Abimg3 from '../../img/about/circle.png'
import Abimg4 from '../../img/about/cap.png'
import Abimg5 from '../../img/about/shape.png'
import Abimg6 from '../../img/Allimg/service/2-1.jpg'
import Abimg7 from '../../img/Allimg/service/2-3.jpg'
import Abimg8 from '../../img/Allimg/service/2-2.jpg'
import Abimg9 from '../../img/line.png'
import Abimg10 from '../../img/Allimg/icons/Applications.png'
import Abimg11 from '../../img/about/author.png'
import Abimg12 from '../../img/about/line.png'
import Abimg13 from '../../img/Allimg/icons/Availability.png'
import Abimg14 from '../../img/Allimg/icons/package.png'
import Abimg15 from '../../img/Allimg/icons/Properties.png'

import t1 from '../../img/Allimg/service/3-1.jpg'
import t2 from '../../img/Allimg/service/3-2.jpg'
import t3 from '../../img/Allimg/service/3-3.jpg'



import f1 from '../../img/Allimg/service/4-1.jpg'
import f2 from '../../img/Allimg/service/4-2.jpg'
import f3 from '../../img/Allimg/service/4-3.jpg'

import { Link } from 'react-router-dom';

const About4 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (


        <>
        {/* 2 */}
        <section className="about-section  pt-20 ">
            <div className="dot-shape">
                <img src={Abimg1} alt="img" />
            </div>
            <div className="dot-shape-2">
                <img src={Abimg2} alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-6">
                      
                        <div className="col-lg-7">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp"> </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Screen Printing Inks
                                        {/* <span> Your Business <img src={Abimg9} alt="img" /></span> */}
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                Color Cosmo’s solvent and UV screen printing inks offer superior adhesion, gloss, and resistance—developed over time to ensure long-lasting performance and trusted by customers across industries.
                                </p>
                                <div className="row g-4">
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items active">
                                            <div className="icon-items">
                                                <div className="icon">
                                                    <img src={Abimg10} alt="img"  style={{height:'40px'}}/>
                                                </div>
                                                <h6>CC SS Types</h6>
                                            </div>
                                                
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            CC SS PP (Polypropylene Ink)
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            CC SS UV (For PP, HDPE, Glass and Paper)
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            CC SS PVC (PVC Ink)
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            CC SS GI (Glass Ink)
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            CC SS MI (Metal Ink)

                                            </span>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items" style={{borderColor:'#93519F'}}>
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
                                            Pantone Shades

                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#93519f' }}></i>
                                            Bespoke Color Matching (Spot Colors)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="about-author">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">more about us</Link>
                                  
                                </div> */}
                            </div>

                            
                        </div>
                        
                        <div className="col-lg-5" style={{marginBottom:'30px'}}>
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
                                <div className="row g-4">
  <div className="col-xl-12 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
    <div className="icon-box-items active ">
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
                        <div className="col-lg-6" >
                            <div className="about-content">
                                <div className="row g-4">
  <div className="col-xl-12 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
    <div className="icon-box-items active" style={{borderColor:'#93519F'}}>
      <div className="icon-items">
        <div className="icon" style={{backgroundColor:'#93519F'}}>
          <img src={Abimg14} alt="img"  style={{height:'40px'}}/>
        </div>
        <h6>Packaging        </h6>
      </div>
      

      {/* Wrapper for 2-row layout */}
      <div style={{ display: 'flex', justifyContent:'space-between' }}>
      <div className="icon-items">
      <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
        <h6>1 Kg        </h6>
      </div>
      <div className="icon-items">
      <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
        <h6>4 Kg        </h6>
      </div>
    
       
       
        
       
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
{/* 2 */}





{/* 3 */}
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
                                    <img src={t2} alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <img src={t1} alt="img" />
                                </div>
                                <div className="about-image-3">
                                    <img src={t3} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp"></h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    UV Offset Printing Inks
                                        {/* <span> Offset Inks <img src={Abimg9} alt="img" /></span> */}
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                Our UV Offset Inks deliver high-quality results with vibrant CMYKW and PMS shades. Custom-formulated for various substrates, these inks ensure precision, durability, and optimal performance under high-speed machines.
                                </p>
                                <div className="row g-4">
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items active">
                                            <div className="icon-items">
                                                <div className="icon">
                                                    <img src={Abimg10} alt="img"  style={{height:'40px'}}/>
                                                </div>
                                                <h6>Applications</h6>
                                            </div>
                                                
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Footboard
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Cardboard
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Metalized Board
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            PE Coated Paper
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            PP Coated Paper
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Coated Metals

                                            </span>

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items" style={{borderColor:'#93519F'}}>
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
    <div className="icon-box-items active" style={{borderColor:'#93519F'}}>
      <div className="icon-items" >
        <div className="icon" style={{backgroundColor:"#93519F"}}>
          <img src={Abimg14} alt="img"  style={{height:'40px'}}/>
        </div>
        <h6>Packaging        </h6>
      </div>
      

      {/* Wrapper for 2-row layout */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
          1 kg
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
         2.5 kg
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '50%', marginBottom: '10px' }}>
          <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
         4 kg
        </span>
       
       
       
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
    <div className="icon-box-items active">
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
{/* 3 */}





{/* 4 */}
        <section className="about-section  pt-20 ">
            <div className="dot-shape">
                <img src={Abimg1} alt="img" />
            </div>
            <div className="dot-shape-2">
                <img src={Abimg2} alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-6">
                      
                        <div className="col-lg-7">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp"> </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Letterpress Inks
                                        {/* <span> Your Business <img src={Abimg9} alt="img" /></span> */}
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                Color Cosmo’s UV Letterpress Inks are ITX and Benzo-free, formulated for seamless application on tubes and aggressive surfaces—ideal for cosmetics, pharmaceuticals, food, and industrial packaging.
                                </p>
                                <div className="row g-4">
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items active">
                                            <div className="icon-items">
                                                <div className="icon">
                                                    <img src={Abimg10} alt="img"  style={{height:'40px'}}/>
                                                </div>
                                                <h6>Applications for CC UV LP</h6>
                                            </div>
                                                
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Laminated Tubes
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Seamless Tubes
                                            </span>
                                            <span className="icon" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                            <i className="fas fa-check-circle" style={{ color: '#3a8d79' }}></i>
                                            Aluminum Tubes
                                            </span>
                                           

                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items" style={{borderColor:'#93519F'}}>
                                            <div className="icon-items" >
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
                                {/* <div className="about-author">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">more about us</Link>
                                  
                                </div> */}
                            </div>

                            
                        </div>
                        
                        <div className="col-lg-5" style={{marginBottom:'30px'}}>
                            <div className="about-image-items">
                                <div className="circle-shape float-bob-y">
                                    <img src={Abimg3} alt="img" />
                                </div>
                                <div className="cap-shape float-bob-x">
                                    <img src={Abimg2} alt="img" />
                                </div>
                                <div className="shape-img">
                                    <img src={Abimg5} alt="img" />
                                </div>
                                <div className="about-image-1 wow fadeInUp">
                                    <img src={f3} alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <img src={f1} alt="img" />
                                </div>
                                <div className="about-image-3">
                                    <img src={f2} alt="img" />
                                </div>
                            </div>
                        </div>




                        <div className="col-lg-6" style={{marginBottom:'20px'}}>
                            <div className="about-content">
                                <div className="row g-4">
  <div className="col-xl-12 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
    <div className="icon-box-items active">
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
                        <div className="col-lg-6" >
                            <div className="about-content">
                                <div className="row g-4">
  <div className="col-xl-12 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
    <div className="icon-box-items active" style={{borderColor:'#93519F'}}>
      <div className="icon-items" >
        <div className="icon" style={{backgroundColor:"#93519F"}}>
          <img src={Abimg14} alt="img"  style={{height:'40px'}}/>
        </div>
        <h6>Packaging        </h6>
      </div>
      

      {/* Wrapper for 2-row layout */}
      <div style={{ display: 'flex', gap:'230px' }}>
      <div className="icon-items">
      <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
        <h6>1 Kg        </h6>
      </div>
      <div className="icon-items">
      <i className="fas fa-check-circle" style={{ color: '#93519F' }}></i>
        <h6>4 Kg        </h6>
      </div>
    
       
       
        
       
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
{/* 4 */}

     





       
        </>






    );
};

export default About4;