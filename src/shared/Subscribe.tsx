import React from 'react';
import {createStyles, Text, Title, TextInput, Button, Image, Container} from '@mantine/core';
import image from '../assets/img/email-subscribe.svg';

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing.xl * 2,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: 'column-reverse',
			padding: theme.spacing.xl,
		},
	},

	body: {
		paddingRight: theme.spacing.xl * 4,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			paddingRight: 0,
			marginTop: theme.spacing.xl,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: 'flex',
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: '100%',
		flex: '1',
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
}));

const SubscribeSection = () => {
	const {classes} = useStyles();
	return (
		<div className={classes.wrapper}>
			<Container>
				<div className={classes.body}>
					<Title className={classes.title} align="center">Cybersecurity tips and news right to your inbox</Title>
					<Text weight={500} size="lg" mb={5} align="center">
						Just enter your email below to subscribe to the AceVPN newsletter.
					</Text>
					<Text size="sm" color="dimmed" align="center">
						You will never miss important product updates, latest news and community QA sessions. Our
						newsletter is once a week, every Sunday.
					</Text>

					<div className={classes.controls}>
						<TextInput
							placeholder="Your email"
							classNames={{input: classes.input, root: classes.inputWrapper}}
						/>
						<Button className={classes.control}>Subscribe</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default SubscribeSection
