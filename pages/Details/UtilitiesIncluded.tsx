import H2 from '@/components/htmlElements/H2';
import Section from '@/components/section/Section';
import { Chip, Stack } from '@mui/material';

const arr = [1, 2, 3, 4, 5, 6, 7];

export default function UtilitiesIncluded() {
	return (
		<>
			<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
				<H2 smaller>Utilities Included</H2>
				<Stack flexDirection='row' gap={1} flexWrap='wrap'>
					{arr.map((a) => (
						<Chip label={`Lorem${a}`} />
					))}
				</Stack>
			</Section>
		</>
	);
}
