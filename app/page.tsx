'use client';
// import { testDB } from '@/utils/db';

import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	IconButton,
	ThemeProvider,
	Toolbar,
	Typography,
	createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

// const test = await testS3();

const defaultTheme = createTheme();

export default function Home() {
	// const test = testDB();
	// console.log(test);
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			{/* <Box sx={{ flexGrow: 1 }}> */}
			<AppBar>
				<Toolbar component='nav'>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
			{/* </Box> */}
			<main>
				<section>
					<h1>Hello World!</h1>
					<form>
						<input type='text' id='search-input' />
						<input type='submit' />
					</form>
				</section>
				<section>
					<h2>Featured listing</h2>
					<ul>
						<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </li>
						<li>
							Laboriosam ipsam id fugit soluta ducimus voluptates voluptatum
							consequatur excepturi voluptatibus!{' '}
						</li>
						<li>
							Eum libero eius mollitia quis? Culpa maxime perspiciatis voluptate
							recusandae unde!
						</li>
					</ul>
				</section>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<section>
					<h2>Are you a landlord, property owner/manager?</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
						quibusdam? Voluptas vero placeat perspiciatis quis labore facilis
						dolorem nesciunt sapiente tenetur fuga, id aliquam a odio corrupti
						consequuntur expedita suscipit.
					</p>
					<button>Post your listing</button>
				</section>
				<section>
					<h2>Popular Cities</h2>
					<ul>
						<li>Toronto</li>
						<li>Vancouver</li>
						<li>Montreal</li>
						<li>Edmonton</li>
						<li>Calgary</li>
						<li>Red Deer</li>
					</ul>
				</section>
			</main>
		</ThemeProvider>
	);
}
