import H2 from '@/components/htmlElements/H2';
import Section from '@/components/section/Section';
import { Chip, Stack } from '@mui/material';

export default function UtilitiesIncluded({
	utilities = [],
}: {
	utilities: Array<string>;
}) {
	return (
		<>
			<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
				<H2 smaller>Utilities Included</H2>
				<Stack flexDirection='row' gap={1} flexWrap='wrap'>
					{utilities.map((utility) => (
						<Chip key={utility} label={utility} />
					))}
				</Stack>
			</Section>
		</>
	);
}
