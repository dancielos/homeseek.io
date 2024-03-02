import { ListingSelectOptions } from '@/data/types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function ListingSelect({
	id,
	label,
	labelId,
	options,
}: {
	id: string;
	label: string;
	labelId: string;
	options: ListingSelectOptions[];
}) {
	return (
		<FormControl fullWidth variant='outlined'>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select
				variant='outlined'
				labelId={labelId}
				id={id}
				name={id}
				label={label}
				color='secondary'
				defaultValue=''
			>
				<MenuItem disabled value=''>
					<em>{label}</em>
				</MenuItem>
				{options.map((city, i) => (
					<MenuItem key={i} value={JSON.stringify(city.value)}>
						{city.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
