import React from 'react';
import {createStyles, Text, Image, Container, Title, List, Button} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 36,
		fontWeight: 900,
		lineHeight: 1.1,
		marginBottom: 60,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	item: {
		fontSize: theme.fontSizes.sm,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
	},
}));

const placeholder =
	'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

const HowDoesVpnWorkSection = () => {
	const {classes} = useStyles();
	return (
		<div className={classes.wrapper}>
			<Container mb={120}>
				<Title className={classes.title} order={2} align="center">
					How does a VPN work?
				</Title>
				<Text weight={500} mb={20} align="center">
					There are many different VPN types, but we’ll focus on consumer VPN here — that’s the one NordVPN
					offers. When you download client-based VPN software to your device, it does most of the work for you — you
					only need to log in and connect.
				</Text>
				<Image src="https://surfshark.com/wp-content/uploads/2021/06/what-is-vpn1-1024x501.png"/>
				<Text color="dimmed" align="center" mb={30}>
					However, it's helpful to know how a VPN works to understand the service better. Here’s what’s going on
					behind the scenes:
				</Text>
				<List type="ordered">
					<List.Item>When you connect to a virtual private network service, it authenticates your client with a VPN
						server.</List.Item>
					<List.Item>The server then applies an encryption protocol to all the data you send and receive.</List.Item>
					<List.Item>The VPN service creates an encrypted “tunnel” over the internet. This secures the data traveling
						between you and your destination.</List.Item>
					<List.Item>To ensure each data packet stays secure, a VPN wraps it in an outer packet, which is then encrypted
						through encapsulation. This is the core element of the VPN tunnel, keeping the data safe during
						transfer.</List.Item>
					<List.Item>When the data arrives at the server, the outer packet is removed through a decryption
						process.</List.Item>
				</List>
			</Container>
			<Container mb={120}>
				<Title className={classes.title} order={2} align="center">
					How does a VPN work?
				</Title>
				<Text mb={20}>
					The VPN tunnel is created by first authenticating your client — a computer, smartphone, or tablet — with a VPN
					server. The server then uses one of several encryption protocols to make sure that no one can monitor the
					information traveling between you and your online destination.
				</Text>
				<Text mb={20}>
					Here you should remember that before being sent and received over the internet, any data needs to first be
					split into packets. To ensure each data packet stays secure, a VPN service wraps it in an outer packet, which
					is then encrypted through a process called encapsulation.
				</Text>
				<Text mb={20}>
					This exterior packet keeps the data secure during the transfer, and it is the core element of the VPN tunnel.
					When the data arrives at the VPN server, the outer packet is removed to access the data within, which requires
					a decryption process.
				</Text>
			</Container>
			<Container mb={120}>
				<Title className={classes.title} order={2} align="center">
					How do VPN servers operate?
				</Title>
				<Text mb={20}>
					After the VPN tunnel is established, your device sends out encrypted information (like the website you want to
					visit) to the VPN server. It decrypts it and forwards the information to the designated web server. It also
					hides your real IP address before sending the data out. Instead, you will appear to have the IP address of the
					VPN server you’re connected to.
				</Text>
				<Text mb={20}>
					When the web server responds, the VPN server encrypts the data and sends it to you through your ISP. Your VPN
					client will decrypt the data once it reaches your device.
				</Text>
				<Text align="center">
					<Button size="lg">Grab the deal</Button>
				</Text>
			</Container>
		</div>
	);
}

export default HowDoesVpnWorkSection
