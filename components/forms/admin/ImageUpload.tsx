import { CloudUpload } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRef } from 'react';
import FormContainer from './FormContainer';

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
		<FormContainer title='Images'>
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
		</FormContainer>
	);
}
