import SectionHero from '@/pagesLayout/Home/SectionHero';
import SectionFeatured from '@/pagesLayout/Home/SectionFeatured';
import SectionCta from '@/pagesLayout/Home/SectionCta';
import SectionCities from '@/pagesLayout/Home/SectionCities';
import getFeaturedListings from '@/utils/server-actions/getFeaturedListings';
import delay from '@/utils/delay';

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
