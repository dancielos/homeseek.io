import { Typography } from '@mui/material';
import React from 'react';

export default function P({ children }: { children: React.ReactNode }) {
	return <Typography variant='body1'>{children}</Typography>;
}
