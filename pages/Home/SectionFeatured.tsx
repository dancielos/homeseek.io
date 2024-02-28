import Section from '@/components/section/Section';
import { PropertyListing } from '@/data/types';
import Bento from '@/layouts/Bento';

export default function SectionFeatured({
	listings = [],
}: {
	listings: PropertyListing[];
}) {
	return (
		<Section title='Featured Homes' alignTitleCenter>
			<Bento listings={listings} />
		</Section>
	);
}
