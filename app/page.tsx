'use client';
// import { testDB } from '@/utils/db';

import {
	AppBar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	CssBaseline,
	Grid,
	IconButton,
	Stack,
	ThemeProvider,
	Toolbar,
	Typography,
	createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

// const test = await testS3();

// const defaultTheme = createTheme();

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
	// const test = testDB();
	// console.log(test);
	return (
		<>
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
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth='sm'>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='text.primary'
							gutterBottom
						>
							Album layout
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph
						>
							Something short and leading about the collection below—its
							contents, the creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it entirely.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction='row'
							spacing={2}
							justifyContent='center'
						>
							<Button variant='contained'>Main call to action</Button>
							<Button variant='outlined'>Secondary action</Button>
						</Stack>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth='md'>
					{/* End hero unit */}
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<CardMedia
										component='div'
										sx={{
											// 16:9
											pt: '56.25%',
										}}
										image='https://source.unsplash.com/random?wallpapers'
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant='h5' component='h2'>
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small'>View</Button>
										<Button size='small'>Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
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
		</>
	);
}
