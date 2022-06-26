import React from 'react';
import {
	ThemeIcon,
	Text,
	Title,
	Container,
	SimpleGrid,
	useMantineTheme,
	createStyles, Button,
} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

interface FeatureProps {
	icon: any;
	title: React.ReactNode;
	description: React.ReactNode;
	action?: React.ReactNode;
}

export function Feature({icon, title, description, action}: FeatureProps) {
	const theme = useMantineTheme();
	return (
		<div>
			<ThemeIcon variant="light" size={60} radius={60}>
				<FontAwesomeIcon icon={icon} style={{width: 30, height: 30}}/>
			</ThemeIcon>
			<Title order={4} style={{marginTop: theme.spacing.sm, marginBottom: 7}}>{title}</Title>
			<Text size="md" color="dimmed" style={{lineHeight: 1.6, marginBottom: 20}}>
				{description}
			</Text>
			{action && <Button component={Link} to="/">{action}</Button>}
		</div>
	);
}

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

interface FeaturesGridProps {
	title: React.ReactNode;
	description: React.ReactNode;
	data?: FeatureProps[];
}

const FeaturesSection = ({title, description, data}: FeaturesGridProps) => {
	const {classes} = useStyles();
	const theme = useMantineTheme();
	const features = data && data.map((feature, index) => <Feature {...feature} key={index}/>);

	return (
		<Container className={classes.wrapper}>
			<Title className={classes.title}>{title}</Title>

			<Container size={560} p={0}>
				<Text size="sm" className={classes.description}>
					{description}
				</Text>
			</Container>

			<SimpleGrid
				mt={60}
				cols={3}
				spacing={theme.spacing.xl * 2}
				breakpoints={[
					{maxWidth: 980, cols: 2, spacing: 'xl'},
					{maxWidth: 755, cols: 1, spacing: 'xl'},
				]}
			>
				{features}
			</SimpleGrid>
		</Container>
	);
}

export default FeaturesSection
