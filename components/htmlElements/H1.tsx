import { HProps } from '@/data/types';
import { Typography } from '@mui/material';

export default function H1({ children, smaller = false, ...args }: HProps) {
	return (
		<Typography component='h1' variant='h1' {...args}>
			{children}
		</Typography>
	);
}
