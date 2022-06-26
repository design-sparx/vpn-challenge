import React from 'react';
import {NavbarLinks} from "../mocks/NavbarLinks";
import AppNavbar from "../shared/AppNavbar";
import {FooterLinks} from "../mocks/FooterLinks";
import {Footer} from "../shared/Footer";
import HeroSection from "../components/Servers/Hero";

const Servers = () => {
	return (
		<>
			<AppNavbar links={NavbarLinks}/>
			<HeroSection/>
			<Footer data={FooterLinks}/>
		</>
	);
};

export default Servers;
