import H1 from '@/components/htmlElements/H1';
import StickyBar from '@/components/ui/StickyBar';
import { MailOutline } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import BackButton from './BackButton';

export default function TitleBar() {
	return (
		<StickyBar
			sx={{
				pl: {
					xm: 0,
					sm: 1,
				},
				py: 0,
				borderBottom: 'solid',
				borderTop: 'solid',
				borderColor: 'secondary.main',
			}}
		>
			<Stack
				flexDirection='row'
				columnGap={4}
				sx={{
					justifyContent: {
						xs: 'space-between',
						sm: 'flex-start',
					},
				}}
			>
				<BackButton />

				<H1
					sx={{
						alignSelf: 'center',
						letterSpacing: 1,
						fontSize: {
							// xm: '1rem',
							xs: '1rem',
							xm: '1.4rem',
							sm: '1.8rem',
							md: '2rem',
						},
						p: 0,
						py: {
							xs: 1,
							sm: 2,
						},
					}}
				>
					150 Peter Herner Bay
				</H1>

				<IconButton
					// variant='contained'
					// color='secondary'
					sx={{
						backgroundColor: 'secondary.main',
						borderRadius: 0,
						display: {
							xm: 'flex',
							sm: 'none',
						},
						flex: '0 0 10%',
					}}
					// startIcon={}
				>
					<MailOutline />
				</IconButton>
			</Stack>
		</StickyBar>
	);
}
