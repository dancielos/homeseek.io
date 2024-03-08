import { ListingSelectOptions } from '@/data/types';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectProps,
} from '@mui/material';

type ListingSelectProps = SelectProps & {
	id: string;
	label: string;
	labelId: string;
	options: ListingSelectOptions[];
	error?: boolean;
};

export default function ListingSelect({
	id,
	label,
	labelId,
	options,
	error = false,
	variant = 'outlined',
	...rest
}: ListingSelectProps) {
	return (
		<FormControl fullWidth variant='outlined' error={error}>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select
				labelId={labelId}
				id={id}
				name={id}
				label={label}
				color='secondary'
				{...rest}
				variant={variant}
			>
				<MenuItem disabled value=''>
					<em>{label}</em>
				</MenuItem>
				{options.map((option, i) => (
					<MenuItem key={i} value={option.value as string}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
