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
		title: 'Speed, security, and privacy',
		description: 'People turn to VPNs for different reasons, and whatever yours is, you need to ask three questions before choosing a provider. How fast is it? Will it keep my data safe? And will it respect my privacy? Of course, you want your connections to be safe and your data to stay private. But to have all that without losing any speed? That’s the trick. So when you choose a VPN service, make sure they don’t make any compromises – there’s no point in having unbreakable encryption if every website takes ages to load.',
	},
	{
		icon: '',
		title: 'Paid vs. free',
		description: 'Price is always one of the most important factors, no matter the product. And if a free option comes up, people are interested. But when it comes to free VPNs, it’s better to stay away. You’re looking for speed, security, and privacy, and with free VPNs, you’re unlikely to get any of it. These providers usually don’t invest in their server network, so their VPN connections might be unstable and leaking users’ IP addresses. They also must make money somehow – in some cases, they may resort to selling their users’ data. So instead of looking for the cheapest option, try to find a VPN provider you can trust.',
	},
];

const ChoosingVpnSection = () => {
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
					<Col span={12} md={5}>
						<Title className={classes.title} order={2}>
							What should I look for when choosing a VPN?
						</Title>
					</Col>
					<Col span={12} md={7}>
						<SimpleGrid cols={1} spacing={30} breakpoints={[{maxWidth: 'md', cols: 1}]} mb={30}>
							<Accordion iconPosition="right" initialItem={1}>
								{items}
							</Accordion>
						</SimpleGrid>
					</Col>
				</Grid>
			</Container>
		</div>
	);
}

export default ChoosingVpnSection
