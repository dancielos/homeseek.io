import CTA from '@/components/client/CTA';

import {
	CircularProgress,
	Dialog,
	DialogContent,
	DialogContentText,
} from '@mui/material';
import ProcessingDialog from './ProcessingDialog';

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
					<ProcessingDialog open={pending} action={action} />
					<CTA disabled>Saving...</CTA>
				</>
			)}
		</>
	);
}
