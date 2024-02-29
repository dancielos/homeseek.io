import toTitleCase from '@/utils/toTitleCase';
import { TextField } from '@mui/material';

type ContactFieldProps = {
	name: string;
	isSuccess: boolean;
	isError: boolean;
};

export default function ContactField({
	name,
	isSuccess,
	isError,
}: ContactFieldProps) {
	return (
		<TextField
			id={`contact-form__${name}`}
			disabled={isSuccess}
			error={isError}
			label={toTitleCase(name)}
			variant='filled'
			name={name}
			required
		/>
	);
}
