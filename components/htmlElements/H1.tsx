import { Typography, TypographyProps } from '@mui/material';

interface H1Props extends TypographyProps {
	children: React.ReactNode;
}

export default function H1({ children, ...args }: H1Props) {
	return (
		<Typography component='h1' variant='h1' {...args}>
			{children}
		</Typography>
	);
}
