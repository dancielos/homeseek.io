import { Skeleton, TableCell, TableRow } from '@mui/material';

export default function RecentListingsLoading({
	colCount,
}: {
	colCount: number;
}) {
	const arr: number[] = Array.from(
		{ length: colCount },
		(_, index) => index + 1
	);
	return (
		<TableRow
			// key={row}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			{arr.map((a) => (
				<TableCell key={a}>
					<Skeleton />
				</TableCell>
			))}
		</TableRow>
	);
}
