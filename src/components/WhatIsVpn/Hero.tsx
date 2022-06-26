import React from 'react';
import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
		alignItems: "center"
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: 28,
		},
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
				: theme.colors[theme.primaryColor][0],
		borderRadius: theme.radius.sm,
		padding: '4px 12px',
	},
}));

const HeroSection = () => {
	const {classes} = useStyles();
	return (
		<div>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>What is a VPN?</Title>
						<Text color="dimmed" mt="md">
							VPN stands for “virtual private network” — a service that protects your internet connection and privacy
							online. It creates an encrypted tunnel for your data, protects your online identity by hiding your IP
							address, and allows you to use public Wi-Fi hotspots safely.
						</Text>

						<Group mt={30}>
							<Button size="md" className={classes.control}>
								Get AceVPN
							</Button>
						</Group>
					</div>
					<Image
						src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						className={classes.image}/>
				</div>
			</Container>
		</div>
	);
}
export default HeroSection
