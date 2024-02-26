import SectionHero from '@/pages/Home/SectionHero';
import SectionFeatured from '@/pages/Home/SectionFeatured';
import SectionCta from '@/pages/Home/SectionCta';
import SectionCities from '@/pages/Home/SectionCities';
import getFeaturedListings from '@/utils/server-actions/getFeaturedListings';

export default async function Home() {
	const featuredListings = await getFeaturedListings();
	return (
		<>
			<SectionHero />
			<SectionFeatured listings={featuredListings} />
			<SectionCta />
			<SectionCities />
		</>
	);
}
