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
		title: 'VPN changes your IP and masks your virtual location',
		description: 'People working in countries with limited freedom of speech rely on private internet connection for their work. Sometimes, their lives might depend on it. Someone who lives under an authoritarian regime should use a VPN to hide their IP address and ensure extra security for their sensitive messages.',
	},
	{
		icon: '',
		title: 'VPN encrypts your data',
		description: 'Using a VPN is a good idea even when browsing from your home. VPN encryption is important when you want to protect your internet traffic and minimize your online footprint. This way, your internet service provider won’t be able to sell your entire browsing history to the highest bidder.',
	},
	{
		icon: '',
		title: 'Protects your devices',
		description:
			'NordVPN’s special Threat Protection feature will keep your device safe from common internet hazards — malware in downloaded files, web trackers, flashy ads, and malicious links You don’t need to be connected to a VPN server to use it — just turn it on, and it will guard your device 24/7.',
	},
	{
		icon: '',
		title: 'You’re an avid gamer',
		description:
			'People who like gaming online unfortunately have to deal with DDoS attacks and bandwidth throttling as well. Luckily, you can forget about all of these problems with NordVPN. And with our Meshnet feature, you’ll be able to set up secure virtual LAN parties for your friends.',
	},
];

const WhatVpnDoesSection = () => {
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
					<Col span={12} md={7}>
						<SimpleGrid cols={1} spacing={30} breakpoints={[{maxWidth: 'md', cols: 1}]} mb={30}>
							{items}
						</SimpleGrid>
						<Button size="lg">Grab the deal</Button>
					</Col>
					<Col span={12} md={5}>
						<Title className={classes.title} order={2}>
							What does a VPN do?
						</Title>
						<Text color="dimmed">
							Typically, when you try to access a website, your ISP (Internet Service Provider) receives the request and
							redirects you to your destination. But when you connect to a VPN, it redirects your internet traffic
							through a VPN server first, before sending it over to your destination. Here’s what happens when you
							connect to a VPN:
						</Text>
					</Col>
				</Grid>
			</Container>
		</div>
	);
}

export default WhatVpnDoesSection
