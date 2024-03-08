import { getSession } from '@/utils/server-actions/auth';
import { Box, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';

export default async function ActionButtons({
	listingId = '',
	userId = '',
}: {
	listingId: string;
	userId: string;
}) {
	const session = await getSession();
	const isListingByCurrentUser = session?.user.id === userId;
	// listing.userId.toString();
	return (
		<>
			{isListingByCurrentUser && (
				<Box
					sx={{
						my: 2,
					}}
				>
					<ButtonGroup aria-label='Basic button group'>
						<Button
							color='info'
							variant='contained'
							LinkComponent={Link}
							href={`/properties/edit/${listingId}`}
						>
							Edit
						</Button>
						<Button
							color='error'
							LinkComponent={Link}
							href={`/properties/edit/${listingId}?action=delete`}
						>
							Delete
						</Button>
					</ButtonGroup>
				</Box>
			)}
		</>
	);
}
