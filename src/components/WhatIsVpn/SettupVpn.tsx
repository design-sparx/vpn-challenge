import React from 'react';
import {createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container, Accordion} from '@mantine/core';

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

	item: {
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
	},
}));

const features = [
	{
		icon: '',
		title: 'Use VPN apps',
		description: 'AceVPN offers apps for all major platforms. It doesn’t matter if you use a Mac, an Android tablet, or a Windows laptop. We strongly believe that people shouldn’t struggle to protect their home network and mobile devices, so our apps are extremely user-friendly.',
	},
	{
		icon: '',
		title: 'Configure it yourself',
		description: 'If you know what you’re doing, setting up your VPN just the way you want it is also an option. Bear in mind — manual setup will take more time, and mistakes are more likely to happen. Don’t worry — if you need some help, you’ll find detailed tutorials in our Help Center.',
	},
	{
		icon: '',
		title: 'Install it on your router',
		description: 'Install AceVPN on your Wi-Fi router, and every device connected to it will be protected by bulletproof encryption. The process might seem a bit too complicated for novice users, but once you’re done, you can enjoy a safe internet connection without interruptions.',
	},
];

const SetupVpnSection = () => {
	const {classes} = useStyles();

	const items = features.map((feature, idx) => (
		<Accordion.Item key={idx} label={feature.title} className={classes.item}>
			{feature.description}
		</Accordion.Item>
	));

	return (
		<div className={classes.wrapper}>
			<Container>
				<Grid gutter={80}>
					<Col span={12} md={7}>
						<SimpleGrid cols={1} spacing={30} breakpoints={[{maxWidth: 'md', cols: 1}]} mb={30}>
							<Accordion iconPosition="right" initialItem={1}>
								{items}
							</Accordion>
						</SimpleGrid>
					</Col>
					<Col span={12} md={5}>
						<Title className={classes.title} order={2}>
							Setting up a VPN connection
						</Title>
						<Text>
							Join the VPN protection trend, set up your AceVPN account, and have an encrypted VPN connection wherever
							you go. There are a few different ways you can do it:
						</Text>
					</Col>
				</Grid>
			</Container>
		</div>
	);
}

export default SetupVpnSection
