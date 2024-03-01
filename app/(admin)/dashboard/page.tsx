import {
	Box,
	Button,
	Container,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';

import { LineChart } from '@mui/x-charts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CTA from '@/components/client/CTA';
import Grid from '@mui/material/Unstable_Grid2';

import styles from './page.module.css';
import ActiveListings from '@/pagesLayout/Dashboard/ActiveListings';
import ViewsReport from '@/pagesLayout/Dashboard/ViewsReport';
import formatDate from '@/utils/formatDate';

function createData(
	name: string,
	calories: number,
	fat: number,
	carbs: number,
	protein: number
) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Dashboard() {
	const today = formatDate(Date.now());
	return (
		<Grid container columns={10} spacing={4}>
			<Grid xs={10} md={7}>
				<ViewsReport />
			</Grid>
			<Grid xs={10} md={3}>
				<Grid
					container
					columns={10}
					flexDirection={{ xs: 'column', sm: 'row', md: 'column' }}
					spacing={2}
				>
					<Grid xs={10} sm={5} md={10}>
						<ActiveListings date={today} />
					</Grid>
					<Grid xs={10} sm={5} md={10}>
						<Paper
							elevation={3}

							// sx={{
							// 	height: '100%',
							// }}
						>
							<Typography variant='body2'># of Closed Listings</Typography>
							<Typography component='p' variant='h3'>
								120
							</Typography>
							<Typography color='text.secondary' sx={{ flex: 1 }}>
								on 15 March, 2019
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
			<Grid xs={10}>
				<Paper
					elevation={3}

					// sx={{
					// 	whiteSpace: 'nowrap',
					// 	overflow: 'auto',
					// 	width: '100%',
					// 	display: 'block',
					// }}
				>
					<Box sx={{ overflow: 'auto' }}>
						<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
							<Table size='small' aria-label='a dense table'>
								<TableHead>
									<TableRow>
										<TableCell>Dessert (100g serving)</TableCell>
										<TableCell align='right'>Calories</TableCell>
										<TableCell align='right'>Fat&nbsp;(g)</TableCell>
										<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
										<TableCell align='right'>Protein&nbsp;(g)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow
											key={row.name}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell
												component='th'
												scope='row'
												sx={{
													minWidth: {
														xs: '50vw',
														xm: '40vw',
														sm: 'auto',
													},
												}}
											>
												{row.name}
											</TableCell>
											<TableCell align='right'>{row.calories}</TableCell>
											<TableCell align='right'>{row.fat}</TableCell>
											<TableCell align='right'>{row.carbs}</TableCell>
											<TableCell align='right'>{row.protein}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
}
