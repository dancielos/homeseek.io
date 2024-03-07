import toTitleCase from '@/utils/toTitleCase';
import { TextField, TextFieldProps } from '@mui/material';

type ListingTextField = {
	name: string;
	label?: string;
	error?: boolean;
} & TextFieldProps;

export default function ListingTextField({
	name,
	label = name,
	error = false,
	...rest
}: ListingTextField) {
	return (
		<TextField
			required
			id={name}
			name={name}
			label={toTitleCase(label)}
			variant='outlined'
			color='secondary'
			fullWidth
			error={error}
			{...rest}
		/>
	);
}
