import {
	Box,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

export default function Loading() {
	const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<Box sx={{ overflow: 'auto', minHeight: '80vh' }}>
			<Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
				<TableContainer>
					<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell width={150}>Street</TableCell>
								<TableCell align='right' width={210}>
									City, Province
								</TableCell>
								<TableCell align='right' width={150}>
									Owner / Landlord
								</TableCell>
								<TableCell align='right' width={240}>
									Actions
								</TableCell>
								<TableCell align='right' width={150}>
									Property Type
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row}>
									<TableCell component='th' scope='row'>
										<Skeleton />
									</TableCell>
									<TableCell align='right'>
										<Skeleton />
									</TableCell>
									<TableCell align='right'>
										<Skeleton />
									</TableCell>
									<TableCell align='right'>
										<Skeleton />
									</TableCell>
									<TableCell align='right'>
										<Skeleton />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
}
