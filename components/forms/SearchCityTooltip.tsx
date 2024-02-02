import { Tooltip, Zoom } from '@mui/material';

export default function SearchCityTooltip({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<Tooltip
			disableHoverListener
			title='The only cities available with dummy data: Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, and Red Deer'
			arrow
			TransitionComponent={Zoom}
		>
			{children}
		</Tooltip>
	);
}
