import React from 'react';
import {Container, Title, Accordion, createStyles} from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const control = getRef('control');

	return {
		wrapper: {
			paddingTop: theme.spacing.xl * 2,
			paddingBottom: theme.spacing.xl * 2,
			minHeight: 650,
		},

		title: {
			fontSize: 52,
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			marginBottom: theme.spacing.xl * 1.5,
		},

		control: {
			ref: control,

			'&:hover': {
				backgroundColor: 'transparent',
			},
		},

		item: {
			borderRadius: theme.radius.md,
			marginBottom: theme.spacing.lg,

			border: `1px solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
			}`,
		},

		itemOpened: {
			[`& .${control}`]: {
				color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
			},
		},
	};
});

const placeholder =
	'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const FaqSection = () => {
	const {classes} = useStyles();
	return (
		<Container size="sm" className={classes.wrapper}>
			<Title align="center" className={classes.title}>
				Frequently Asked Questions
			</Title>

			<Accordion
				iconPosition="right"
				classNames={{
					item: classes.item,
					itemOpened: classes.itemOpened,
					control: classes.control,
				}}
				initialItem={0}
			>
				<Accordion.Item label="How does a VPN hide my IP address?">
					With a VPN, you are effectively switching out your computer’s real IP address with the IP address and physical
					location of the VPN’s server. This ensures you do not expose your personal information. Given there are many
					people using the same server simultaneously, it’s much harder to separate your data from the data of others on
					that server. By changing your IP address, you can block people from tracking your location. Understand how IP
					addresses work and use a VPN to protect yourself.
				</Accordion.Item>
				<Accordion.Item label="What can I use to watch Netflix with AceVPN?">
					AceVPN offers a free VPN as well as a paid version of its app. While our AceVPN Premium plan
					offers many additional benefits — such as over 73 server locations to choose from, unlimited bandwidth, faster
					speeds, connection for up to five devices, 24/7 customer support, and much more — our free AceVPN app
					will still allow you to access content and protect your devices with military-grade security. Learn more about
					our free and premium plans.
				</Accordion.Item>
				<Accordion.Item label="Are free VPNs safe?">
					While AceVPN’s free VPN is safe to use, not all VPN services are reputable. You need to make sure you
					understand how a VPN company makes its money. For instance, at AceVPN, our free VPN delivers basic
					functionality and ensures we can provide secure and private access to information for every person on the
					planet — whether they can afford to pay us or not. Our premium subscription VPN offers enhanced features and
					functionality, and it’s our paid product that allows us to offset the cost of our free service. Our business
					model is what’s known as a “freemium” model.
					<br/>
					If you can’t tell how a free VPN can sustain its business, then you should be wary about how your data could
					be exploited for profit. AV-Test conducted a recent study on the trustworthiness of VPN companies. You can
					read that report here.
				</Accordion.Item>
				<Accordion.Item label="What are the best VPN services for 2019?">
					When you’re deciding which VPN service is best, you need to look at a number of factors.
				</Accordion.Item>
				<Accordion.Item label="Will a VPN slow down my internet connection?">
					It depends on what VPN service you use. Since VPN services encrypt your data and require you to connect to a
					specific server before accessing the internet, these extra steps may slow down your connection. Low-quality
					VPN services will cause a significant slowdown on even the fastest internet connection. Sometimes the
					difference is so drastic that it can render a high-speed connection almost unusable.
					<br/>
					However, if you’re using a top-tier VPN service, the difference in speed usually isn’t noticeable, and can
					sometimes even speed up your connection. Our VPN servers are the fastest in the industry, due to our
					proprietary VPN protocol (Catapult Hydra). Learn more about what makes our technology superior.
				</Accordion.Item>
				<Accordion.Item label="Is a VPN legal to use?">
					It’s perfectly legal to use a VPN in most countries. However, there are a handful of countries where VPN use
					is a legal gray area or banned altogether. Some countries only allow the use of approved VPNs and others have
					separate laws for companies and individuals.
					<br/>
					AceVPN works in most countries, but that doesn’t mean it’s always legal to use a VPN in a specific
					country. If you have any doubts about the legality of using a VPN in a certain country, always consult a
					qualified lawyer. If you’re still unsure, then it’s best to play it safe and abide by the most conservative
					guidelines of a country.
				</Accordion.Item>
			</Accordion>
		</Container>
	);
}

export default FaqSection
