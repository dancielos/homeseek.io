import { CloudUpload } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Paper,
	Snackbar,
	Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import FormContainer from './FormContainer';
import Dropzone, { FileRejection, useDropzone } from 'react-dropzone';

import styles from './ImageUpload.module.css';

interface FileWithPreview extends File {
	preview: string;
}

const MAX_NUMBER_FILES = 5;

export default function ImageUpload() {
	// const imageUploadRef = useRef<HTMLInputElement>(null);
	// function test() {
	// 	console.log(imageUploadRef.current?.files);
	// }
	const [files, setFiles] = useState<FileWithPreview[]>([]);
	const fileCount = files.length;
	// console.log('after render:', fileCount);

	// const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

	const [openSnackbar, setOpenSnackbar] = useState<string | null>(null);

	const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
		useDropzone({
			accept: {
				'image/*': ['.jpeg', '.png', '.jpg'],
			},
			onDrop: handleOnDrop,
			onDropRejected: (fileRejections) => {
				setOpenSnackbar(`Error: Invalid image file. Please try again.`);
			},
		});

	function handleCloseSnackbar() {
		setOpenSnackbar(null);
	}
	function handleOnDrop(acceptedFiles: File[]) {
		let currentFileCount = fileCount;
		if (currentFileCount >= MAX_NUMBER_FILES) {
			setOpenSnackbar(
				'Error: You have already reached the maximum number of files.'
			);
			return;
		}
		if (currentFileCount + acceptedFiles.length > MAX_NUMBER_FILES) {
			setOpenSnackbar(
				`Warning: Only ${MAX_NUMBER_FILES} images will be uploaded.`
			);
		}
		const newFiles = acceptedFiles
			.filter((file, i) => {
				// console.log({ i, currentFileCount });
				if (currentFileCount < MAX_NUMBER_FILES) {
					currentFileCount++;
					// console.log('returning');
					return file;
				}
			})
			.map((file, i) => {
				// console.log({ i, file });
				return Object.assign(file, {
					preview: URL.createObjectURL(file),
				});
			});
		// console.log('setting files');
		setFiles((prevFiles) => [...prevFiles, ...newFiles]);
	}
	// console.log(files);
	// console.log(getInputProps());

	// console.log({ acceptedFiles });
	// console.log({ fileRejections });

	// const files = acceptedFiles.map((file) => (
	// 	<li key={file.name}>
	// 		{file.name} - {file.size} bytes
	// 	</li>
	// ));

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<>
			{openSnackbar ? (
				<Snackbar
					open={Boolean(openSnackbar)}
					autoHideDuration={6000}
					onClose={handleCloseSnackbar}
					message={openSnackbar}
				/>
			) : (
				''
			)}

			<FormContainer title='Images'>
				<div {...getRootProps({ className: styles['dropzone'] })}>
					<input {...getInputProps()} />
					<Typography textAlign='center'>
						Upload your images by clicking this box or simply dragging and
						dropping them here.
					</Typography>
					<Typography textAlign='center' variant='body2' fontStyle='italic-'>
						Note: Only {MAX_NUMBER_FILES} images (.jpg, .jpeg, .png) will be
						accepted.
					</Typography>
				</div>

				{/* <aside>
				<h4>Files</h4>
				<ul>{files}</ul>
			</aside> */}
				<aside className={styles['thumbsContainer']}>
					{files.map((file, i) => (
						<Card sx={{ display: 'flex', width: '100%' }} key={i}>
							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<CardMedia
									component='img'
									sx={{ width: 120 }}
									image={file.preview}
									alt='Live from space album cover'
								/>
								<CardContent sx={{ flex: '1 0 auto' }}>
									<Typography
										variant='subtitle1'
										color='text.secondary'
										component='div'
									>
										{file.name}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					))}
				</aside>

				{/* <Button component='label' variant='contained' startIcon={<CloudUpload />}>
				Upload file
			</Button>
			<input
				type='file'
				ref={imageUploadRef}
				onInput={test}
				accept='image/png, image/gif, image/jpeg, image/jpg'
				multiple
			/> */}
			</FormContainer>
		</>
	);
}
