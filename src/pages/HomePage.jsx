import React from 'react';
import Hero from '../components/Hero';
import SignaturePizzas from '../components/SignaturePizzas';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import OfferBanners from '../components/OfferBanners';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Experience />
            <SignaturePizzas />
            <OfferBanners />
            <Testimonials />
        </>
    );
};

export default HomePage;
