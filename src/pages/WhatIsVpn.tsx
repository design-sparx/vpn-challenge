import React from 'react';
import {NavbarLinks} from "../mocks/NavbarLinks";
import AppNavbar from "../shared/AppNavbar";
import {FooterLinks} from "../mocks/FooterLinks";
import {Footer} from "../shared/Footer";
import HeroSection from "../components/WhatIsVpn/Hero";
import SubscribeSection from "../shared/Subscribe";
import WhyVpnSection from "../components/WhatIsVpn/WhyVpn";
import WhatVpnDoesSection from "../components/WhatIsVpn/WhatVpnDoes";
import HowDoesVpnWorkSection from "../components/WhatIsVpn/HowDoesVpnWorks";
import ChoosingVpnSection from "../components/WhatIsVpn/ChoosingVpn";
import SetupVpnSection from "../components/WhatIsVpn/SettupVpn";
import FaqsSection from "../shared/Faqs";
import PackageBanner from "../shared/Package";

const WhatIsVpnPage = () => {
	return (
		<>
			<AppNavbar links={NavbarLinks}/>
			<HeroSection/>
			<SubscribeSection/>
			<WhyVpnSection/>
			<WhatVpnDoesSection/>
			<HowDoesVpnWorkSection/>
			<ChoosingVpnSection/>
			<SetupVpnSection/>
			<FaqsSection/>
			<PackageBanner/>
			<Footer data={FooterLinks}/>
		</>
	);
};

export default WhatIsVpnPage;
