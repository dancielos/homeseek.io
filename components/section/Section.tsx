import { Box, Container, SxProps, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from './SectionTitle';

interface SectionProps extends React.PropsWithChildren {
	title?: string;
	fullWidth?: boolean;
	variant?: 'primary' | 'secondary' | 'custom';
	sx?: SxProps;
	alignTitleCenter?: boolean;
}

export default function Section({
	fullWidth = false,
	title,
	children,
	variant = 'primary',
	sx,
	alignTitleCenter = false,
}: SectionProps) {
	let customStyle: SxProps = { py: 8 };
	if (variant === 'secondary') {
		customStyle.bgcolor = 'primary.main';
		customStyle.p = { xs: 2, md: 6 };
		customStyle.mb = 8;
		// if (sx) customStyle = sx;
		// TODO remove these spacing when the theme is customized
	}
	if (variant === 'custom') {
		if (!sx) throw Error('Missing sx prop');

		customStyle = sx;
	}

	return (
		<Container
			sx={customStyle}
			maxWidth={fullWidth ? 'xl' : 'lg'}
			component='section'
		>
			{title ? (
				<SectionTitle title={title} isCentered={alignTitleCenter} />
			) : null}

			{children}
		</Container>
	);
}
