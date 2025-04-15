import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import About from '../../components/about/about';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import StoreSection from '../../components/StoreSection/StoreSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import FunFact from '../../components/FunFact/FunFact';
import WorksSection from '../../components/WorksSection/WorksSection';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import ServiceBg from '../../img/service/service-bg.jpg'
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import Ws6 from '../../img/feature/bg.png'
import FooterS3 from '../../components/footerS3/FooterS3';
import Hero2 from '../../components/hero2/Hero2';
import ShopbannerSection from '../../components/ShopbannerSection/ShopbannerSection';
import MarqueeSectionS2 from '../../components/MarqueeSectionS2/MarqueeSectionS2';
import ProductSectionS3 from '../../components/ProductSectionS3/ProductSectionS3';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import BrandSection from '../../components/BrandSection/BrandSection';
import MarqueeSectionS3 from '../../components/MarqueeSectionS3/MarqueeSectionS3';

const HomePage = ({ addToCart }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const products = productsArray

    return (
        <Fragment>
            <Navbar hclass={'header-section'} />
            {/* <Hero /> */}
            <Hero2 />
            {/* <FeatureSection /> */}
            <ShopbannerSection />
            {/* <MarqueeSectionS2 /> */}
            <MarqueeSection hclass={'marquee-section'} />
            <ProductSectionS3 products={products} />
            <ProjectSectionS2 hclass={'project-section s2 fix section-padding pt-0'} />
            <BrandSection />
            <MarqueeSectionS3 />

            {/* <About />
            <FunFact hclass={'counter-section fix section-padding pt-0'} />
          
            <ServiceSection hclass={'service-section bg-cover section-padding'} Bg={ServiceBg} />
            <StoreSection />
            <MarqueeSection hclass={'marquee-section margin-top-8 mb-80'} /> */}
            
            {/* <ProductSection
                addToCartProduct={addToCartProduct}
                products={products}
            /> */}
            {/* <PortfolioSection /> */}
            {/* <WorksSection hclass={'about-feature-section fix section-padding pt-0 bg-cover'} eclass={'about-feature-wrapper'} Ws6={Ws6} /> */}
            {/* <ProcessSection /> */}
            {/* <PricingSection /> */}
            {/* <Testimonial /> */}
            {/* <BlogSection hclass="blog-section section-padding pt-0 bg-cover" SubClass="blog-wrapper" /> */}
            {/* <CtaSection /> */}
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};
export default connect(null, { addToCart })(HomePage);