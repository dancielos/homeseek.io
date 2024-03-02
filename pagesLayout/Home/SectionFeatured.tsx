import Section from '@/components/section/Section';
import Bento from '@/layouts/Bento';
import { FeaturedListing } from '@/utils/server-actions/getFeaturedListings';

export default function SectionFeatured({
	listings = [],
}: {
	listings: FeaturedListing[];
}) {
	return (
		<Section title='Featured Homes' alignTitleCenter>
			<Bento listings={listings} />
		</Section>
	);
}
