import React from 'react';
import {createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 36,
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},
}));

const features = [
	{
		icon: '',
		title: 'You use public Wi-Fi regularly',
		description: 'VPN is used to secure your connection on public Wi-Fi, so you can browse in full privacy. Hackers have many methods to steal your data on public hotspots, but with a VPN your online traffic is invisible to them.',
	},
	{
		icon: '',
		title: 'You want to access your content',
		description: 'If you want to access your home content while travelling around the world, a VPN can help. Install NordVPN on your device and never miss a friend’s post on social media.',
	},
	{
		icon: '',
		title: 'You want to stay safe online',
		description:
			'Government agencies, marketers, internet service providers would all love to track and collect your browsing history, messages, and other private data. Best way to hide it? Using a VPN to encrypt your traffic, hide your IP, and cover your tracks online. Use it at home, at work, and on the go to enjoy non-stop protection.',
	},
	{
		icon: '',
		title: 'You’re an avid gamer',
		description:
			'People who like gaming online unfortunately have to deal with DDoS attacks and bandwidth throttling as well. Luckily, you can forget about all of these problems with NordVPN. And with our Meshnet feature, you’ll be able to set up secure virtual LAN parties for your friends.',
	},
];

const WhyVpnSection = () => {
	const {classes} = useStyles();

	const items = features.map((feature) => (
		<div key={feature.title}>
			<Text size="lg" mt="sm" weight={500}>
				{feature.title}
			</Text>
			<Text color="dimmed" size="sm">
				{feature.description}
			</Text>
		</div>
	));

	return (
		<div className={classes.wrapper}>
			<Container>
				<Grid gutter={80}>
					<Col span={12} md={5}>
						<Title className={classes.title} order={2}>
							Why do you need a VPN?
						</Title>
						<Text color="dimmed">
							No one likes to be watched or tracked — even if they have nothing to hide. That’s why it’s important you
							step up your privacy game. When you’re browsing through a VPN, your traffic is encrypted so no one can see
							what you do online. Here are a few more reasons why you need a VPN:
						</Text>
					</Col>
					<Col span={12} md={7}>
						<SimpleGrid cols={1} spacing={30} breakpoints={[{maxWidth: 'md', cols: 1}]}>
							{items}
						</SimpleGrid>
					</Col>
				</Grid>
			</Container>
		</div>
	);
}

export default WhyVpnSection
