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
import image from '../../assets/img/hero.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/free-solid-svg-icons';

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
						<Title className={classes.title}>Stay <span className={classes.highlight}>private</span> and access
							worldwide content</Title>
						<Text color="dimmed" mt="md">
							Protect yourself with military-grade encryption, and access sites and streaming content around the world.
						</Text>
						<Group mt={30}>
							<Button size="lg" className={classes.control}>
								Get Ace VPN
							</Button>
						</Group>
					</div>
					<Image src={image} className={classes.image}/>
				</div>
			</Container>
		</div>
	);
}

export default HeroSection
