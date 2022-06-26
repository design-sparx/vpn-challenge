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
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
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
						<Title className={classes.title}>
							Over 5000 best VPN servers worldwide
						</Title>
						<Text color="dimmed" mt="md">
							Choose from AceVPN’s 5553 ultra-fast servers in 60 countries all around the world.
						</Text>

						<Group mt={30}>
							<Button size="lg" className={classes.control}>
								Get AceVPN
							</Button>
							<Button variant="default" size="lg" className={classes.control}>
								Recommended server
							</Button>
						</Group>
						<Text color="dimmed" mt="md" size="sm">
							<FontAwesomeIcon icon={faCheckCircle}/> 30-day money-back guarantee
						</Text>
					</div>
					<Image
						src="https://img.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1284-1968.jpg?t=st=1656268266~exp=1656268866~hmac=ed4bccb5131f349e83c06248ed2c02b88e78d5cf280edbab6221a0928afef80a&w=900"
						className={classes.image}/>
				</div>
			</Container>
		</div>
	);
}

export default HeroSection
