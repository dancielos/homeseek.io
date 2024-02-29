import { getSession } from '@/utils/server-actions/auth';
import { Button } from '@mui/material';
import Link from 'next/link';

export default async function LoginLink() {
	const session = await getSession();

	return (
		<>
			{!session && (
				<Button
					color='inherit'
					sx={{
						display: {
							xs: 'none',
							xm: 'inherit',
						},
					}}
					LinkComponent={Link}
					id='navbar-link-login'
					href='/login'
				>
					Login
				</Button>
			)}
		</>
	);
}
