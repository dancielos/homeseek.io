import SectionHero from '@/pages/Home/SectionHero';
import SectionFeatured from '@/pages/Home/SectionFeatured';
import SectionCta from '@/pages/Home/SectionCta';
import SectionCities from '@/pages/Home/SectionCities';

export default function Home() {
	return (
		<>
			<SectionHero />
			<SectionFeatured />
			<SectionCta />
			<SectionCities />
		</>
	);
}
