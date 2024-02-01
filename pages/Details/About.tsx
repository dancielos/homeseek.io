import H2 from '@/components/htmlElements/H2';
import P from '@/components/htmlElements/P';
import Section from '@/components/section/Section';
import { Stack } from '@mui/material';

export default function About() {
	return (
		<>
			<Section fullWidth variant='custom' sx={{ p: { xs: 0 } }}>
				<H2 smaller>About</H2>
				<P>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
					corporis consequatur debitis exercitationem, unde dicta modi quia
					animi ab obcaecati eum porro deserunt veritatis a iure vitae commodi
					nesciunt autem.
				</P>
				<P>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
					corporis consequatur debitis exercitationem, unde dicta modi quia
					animi ab obcaecati eum porro deserunt veritatis a iure vitae commodi
					nesciunt autem.
				</P>
			</Section>
		</>
	);
}
