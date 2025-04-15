import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4';
import WorksSection from '../../components/WorksSection/WorksSection';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import About from '../../components/about/about';
import About4 from '../../components/about4/about4';
import Navbar from '../../components/Navbar/Navbar';
const ServicePage = () => {
    return (
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
               <Navbar hclass={'header-section'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Service page'} />

            <About/>
            <About4/>
            {/* <ServiceSection hclass={'service-section section-padding section-bg-2 fix pb-0'} /> */}
            {/* <FunFact hclass={'counter-section fix section-padding'} /> */}
            {/* <ServiceSectionS4 /> */}
            {/* <WorksSection hclass={'about-feature-sections fix section-padding section-bg-2 pb-0'} eclass={'about-feature-wrapper'} /> */}
            <CtaSectionS2 />
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};
export default ServicePage;
