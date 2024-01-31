import H2 from '@/components/htmlElements/H2';
import { Chip, Stack } from '@mui/material';

export default function UtilitiesIncluded() {
	return (
		<>
			<H2>Utilities Included</H2>
			<Stack flexDirection='row' gap={1}>
				<Chip label='Lorem' />
				<Chip label='Lorem' />
				<Chip label='Lorem' />
				<Chip label='Lorem' />
			</Stack>
		</>
	);
}
