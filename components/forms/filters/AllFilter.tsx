import FilterButton from './FilterButton';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import BathFilter from './BathFilter';
import BedsFilter from './BedsFilter';
import { Portal, Snackbar } from '@mui/material';
import PriceFilter from './PriceFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import MoreFilter from './MoreFilter';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function AllFilter() {
	const [open, setOpen] = React.useState(false);
	const [snackbarOpen, setSnackbarOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		setSnackbarOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSnackbarOpen(false);
	};

	const handleSnackBarClose = () => {
		setSnackbarOpen(false);
	};

	return (
		<FilterButton onClick={handleClickOpen} label='Filters' popover={false}>
			<Portal>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					open={snackbarOpen}
					message='Scroll down for more filter options'
					autoHideDuration={3000}
					onClose={handleSnackBarClose}
				/>
			</Portal>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
				sx={{
					height: {
						xs: '76%',
						sm: '72%',
					},
					bottom: '0',
					top: 'auto',
					'& .MuiDialog-container > div': {
						overflowY: 'hidden !important',
					},
				}}
			>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							onClick={handleClose}
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
							Filter Search
						</Typography>
						<Button autoFocus color='secondary' onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<List
					sx={{
						overflowY: 'scroll',
					}}
				>
					<PriceFilter />
					<Divider />
					<PropertyTypeFilter />
					<Divider />
					<BathFilter />
					<Divider />
					<BedsFilter />
					<Divider />
					<MoreFilter />
					<Divider />
				</List>
			</Dialog>
		</FilterButton>
	);
}
