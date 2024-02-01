import H2 from '@/components/htmlElements/H2';
import { Chip, Stack } from '@mui/material';

const arr = [1, 2, 3, 4, 5, 6, 7];

export default function UtilitiesIncluded() {
	return (
		<>
			<Stack>
				<H2 smaller>Utilities Included</H2>
				<Stack flexDirection='row' gap={1} flexWrap='wrap'>
					{arr.map((a) => (
						<Chip label={`Lorem${a}`} />
					))}
				</Stack>
			</Stack>
		</>
	);
}
