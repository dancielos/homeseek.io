import { AppBar, Button, Icon, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
	return (
		<AppBar position='relative'>
			<Toolbar component='nav'>
				<HomeIcon sx={{ mr: 2 }} />
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					HomeSeek
				</Typography>
				<Button color='inherit'>Login</Button>
				<Button color='secondary' variant='outlined'>
					Post your listing
				</Button>
			</Toolbar>
		</AppBar>
	);
}
