import React from 'react';
import {
	SimpleGrid,
	Card,
	Container,
	Group,
	Image,
	Badge,
	useMantineTheme,
	Title,
	Text,
	createStyles,
	Button,
	Paper,
	Spoiler, ThemeIcon, ColorSwatch, Center, Avatar, ActionIcon
} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) => ({
	wrapper: {
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
	},
	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		marginBottom: theme.spacing.md,
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			fontSize: 28,
			textAlign: 'left',
		},
	},
	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('sm')]: {
			textAlign: 'left',
		},
	},
}));

interface TestimonialProps {
	testimonials: {
		title: string;
		description: string;
		author: string;
	}[]
}

const TestimonialsSection = ({testimonials}: TestimonialProps) => {
	const {classes} = useStyles()

	return <Container className={classes.wrapper}>
		<Title className={classes.title}>Trusted by millions for privacy and security</Title>
		<Text size="sm" className={classes.description}>Find out what other people have to say about AceVPN.</Text>
		<Container my="md">
			<SimpleGrid cols={3} mt={60} breakpoints={[{maxWidth: 'xs', cols: 1}]}>
				{testimonials.map((item, idx) => (
					<Card withBorder>
						<Text color="dimmed">
							<Group position="center" spacing="sm" mt={12} mb={12}>
								<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
								<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
								<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
								<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
								<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
							</Group>
						</Text>
						<Text size="xl" weight="bold" mb={12} align="center">
							{item.title}
						</Text>
						<Text color="dimmed" mb={12} align="center">
							{item.description}
						</Text>
						<Group position="center">
							<Center>
								<Avatar src={null} size={36} radius="xl" mr="xs"/>
								<Text size="sm" inline>
									{item.author}
								</Text>
							</Center>
						</Group>
					</Card>
				))}
			</SimpleGrid>
		</Container>
	</Container>;
}

export default TestimonialsSection
