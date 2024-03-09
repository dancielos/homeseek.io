import CTA from '@/components/client/CTA';

import {
	CircularProgress,
	Dialog,
	DialogContent,
	DialogContentText,
} from '@mui/material';

export default function ListingFormSubmit({
	text,
	isError = false,
	pending = false,
	action,
}: {
	text: string;
	isError?: boolean;
	pending?: boolean;
	action: 'add' | 'edit';
}) {
	// const { pending } = useFormStatus();
	// console.log(pending);

	return (
		<>
			{!pending ? (
				<CTA type='submit'>{text}</CTA>
			) : (
				<>
					<Dialog
						open={pending}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'
					>
						<DialogContent>
							<DialogContentText
								textAlign='center'
								id='alert-dialog-description'
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 2,
								}}
							>
								<CircularProgress />
								{action === 'add'
									? 'Creating a new listing, please wait a moment...'
									: 'Updating listing, please wait a moment...'}
							</DialogContentText>
						</DialogContent>
					</Dialog>
					<CTA disabled>Saving...</CTA>
				</>
			)}
		</>
	);
}
