import H2 from '@/components/htmlElements/H2';
import P from '@/components/htmlElements/P';
import Section from '@/components/section/Section';

export default function About({ text = '' }: { text: string }) {
	return (
		<>
			<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
				<H2 smaller>About</H2>
				{text}
			</Section>
		</>
	);
}
