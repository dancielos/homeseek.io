'use client';

// import { handleTextField } from '@/utils/actions';
import {
	Autocomplete,
	Button,
	Stack,
	TextField,
	Tooltip,
	Zoom,
} from '@mui/material';

export default function SearchBar() {
	return (
		<Stack
			component='form'
			sx={{ pt: 4 }}
			direction='row'
			spacing={2}
			justifyContent='center'
			width={{ xs: '100%', md: 1 / 2 }}
			margin='auto'
		>
			<Tooltip
				disableHoverListener
				title='The only cities available with dummy data: Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, and Red Deer'
				arrow
				TransitionComponent={Zoom}
			>
				<TextField
					id='outlined-basic'
					label='City'
					variant='outlined'
					fullWidth
				/>
			</Tooltip>
			<Button variant='contained' type='submit'>
				Search
			</Button>
		</Stack>
	);
}
