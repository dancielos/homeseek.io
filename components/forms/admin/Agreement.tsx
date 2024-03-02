import H3 from '@/components/htmlElements/H3';
import {
	Checkbox,
	Divider,
	FormControlLabel,
	List,
	Paper,
	Typography,
} from '@mui/material';

export default function Agreement() {
	return (
		<Paper elevation={3}>
			<Typography variant='h4'>Terms and conditions:</Typography>
			<ol>
				<li>
					<strong>Data Editing:</strong> Users can edit only the data created by
					their own account (demo@homeseek.io). Superadmin accounts (Dan) hold
					exclusive rights for updates.
				</li>
				<li>
					<strong>Visibility:</strong> Listings created are initially visible
					only to logged-in users (Demo accounts). Each listing will undergo
					manual review before being visible to all users, ensuring compliance
					with these terms and conditions.
				</li>
				<li>
					<strong>Content Guidelines:</strong> Users are prohibited from
					uploading any content that contains explicit or sensitive material,
					including but not limited to personally identifiable information.
				</li>
				<li>
					<strong>Moderation:</strong> We reserve the right to delete any data
					deemed inappropriate or violating community standards.
				</li>
			</ol>
			<Divider />
			<FormControlLabel
				control={<Checkbox id='agreement' name='agreement' />}
				label='You agree to abide by these terms and conditions by checking the checkbox.'
			/>
		</Paper>
	);
}
