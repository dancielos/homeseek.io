import H2 from '@/components/htmlElements/H2';
import { customH2Style } from '@/data/constants';
import { CloudUpload } from '@mui/icons-material';
import { Button, Paper, TextField, styled } from '@mui/material';
import { useRef } from 'react';

// const VisuallyHiddenInput = styled('input')({
// 	clip: 'rect(0 0 0 0)',
// 	clipPath: 'inset(50%)',
// 	height: 1,
// 	overflow: 'hidden',
// 	position: 'absolute',
// 	bottom: 0,
// 	left: 0,
// 	whiteSpace: 'nowrap',
// 	width: 1,
// });

export default function ImageUpload() {
	const imageUploadRef = useRef<HTMLInputElement>(null);
	function test() {
		console.log(imageUploadRef.current?.files);
	}
	return (
		<Paper elevation={3}>
			<H2 sx={customH2Style}>Images</H2>
			<Button component='label' variant='contained' startIcon={<CloudUpload />}>
				Upload file
			</Button>
			<input
				type='file'
				ref={imageUploadRef}
				onInput={test}
				accept='image/png, image/gif, image/jpeg, image/jpg'
				multiple
			/>
		</Paper>
	);
}
