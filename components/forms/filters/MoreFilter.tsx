import { ChangeEvent, useState } from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import useSearchQuery from '@/hooks/useSearchQuery';

const MORE_PARAM = 'pet';

let renderCounter = 0;

export default function MoreFilter() {
	renderCounter += 1;
	console.log(renderCounter);
	const moreParam = useSearchParams()?.get(MORE_PARAM);
	console.log(`${moreParam} ... ${Boolean(moreParam)}`);
	const [checkboxes, setCheckboxes] = useState({
		isPetFriendly: moreParam === 'true',
	});

	const debouncedCheckboxes = useDebounce(checkboxes);
	useSearchQuery(MORE_PARAM, '' + debouncedCheckboxes.isPetFriendly);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCheckboxes({
			...checkboxes,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<>
			<FormControl
				sx={{ m: 3, bgcolor: 'unset' }}
				component='fieldset'
				variant='standard'
				id='more-filter-checkboxes'
			>
				<Typography component='legend' sx={{ pb: 1 }}>
					Other filters
				</Typography>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={checkboxes.isPetFriendly}
								onChange={handleChange}
								name={'isPetFriendly'}
							/>
						}
						label={'Pet Friendly'}
					/>
				</FormGroup>
			</FormControl>
		</>
	);
}
