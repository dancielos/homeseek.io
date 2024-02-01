import H1 from '@/components/htmlElements/H1';
import CTA from '@/components/ui/CTA';
import StickyBar from '@/components/ui/StickyBar';
import { ArrowBackOutlined, MailOutline } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';

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
				borderColor: 'secondary.main',
			}}
		>
			<Stack flexDirection='row' columnGap={4}>
				<IconButton
					color='secondary'
					sx={{
						flexBasis: {
							sm: '5%',
							md: '10%',
						},
						py: 2,
						borderRadius: 0,
						borderRight: 'solid',
					}}
				>
					<ArrowBackOutlined />
				</IconButton>

				<H1
					sx={{
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
					150 Peter Herner Bay, Winnipeg, Manitoba, R2V 4W5
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
						flex: '0 0 auto',
					}}
					// startIcon={}
				>
					<MailOutline />
				</IconButton>
			</Stack>
		</StickyBar>
	);
}