import React from 'react';
import AppNavbar from "../shared/AppNavbar";
import {NavbarLinks} from "../mocks/NavbarLinks";
import HeroSection from '../components/Landing/Hero';
import FeaturesSection from "../components/Landing/Features";
import LocationsSections from "../components/Landing/Locations";
import {Features} from "../mocks/Features";
import {FeaturesList} from "../mocks/FeaturesList";
import TestimonialsSection from "../components/Landing/Testimonials";
import {TestimonialsList} from '../mocks/TestimonialsList';
import {Footer} from "../shared/Footer";
import {FooterLinks} from '../mocks/FooterLinks';

const Landing = () => {
	return (
		<div>
			<AppNavbar links={NavbarLinks}/>
			<HeroSection/>
			<FeaturesSection {...Features} data={FeaturesList}/>
			<LocationsSections/>
			<TestimonialsSection testimonials={TestimonialsList}/>
			<Footer data={FooterLinks}/>
		</div>
	);
};

export default Landing;
