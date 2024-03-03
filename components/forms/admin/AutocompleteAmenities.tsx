'use client';

import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Autocomplete, Checkbox, Chip, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

export default function AutocompleteAmenities({
	label,
	value,
	setValue,
	options,
}: {
	label: string;
	value: string[];
	setValue: Dispatch<SetStateAction<string[]>>;
	options: string[];
}) {
	return (
		<Autocomplete
			multiple
			value={value}
			onChange={(event: any, newValue: string[]) => {
				setValue(newValue);
			}}
			options={options}
			disableCloseOnSelect
			getOptionLabel={(option) => option}
			renderOption={(props, option, { selected }) => (
				<li {...props} key={option}>
					<Checkbox
						disableRipple
						icon={icon}
						checkedIcon={checkedIcon}
						style={{ marginRight: 8 }}
						checked={selected}
					/>
					{option}
				</li>
			)}
			renderTags={(value: string[], getTagProps) =>
				value.map((option: string, index: number) => (
					<Chip
						{...getTagProps({ index })}
						variant='outlined'
						label={option}
						key={option}
					/>
				))
			}
			renderInput={(params) => (
				<TextField {...params} label={label} color='secondary' />
			)}
		/>
	);
}
