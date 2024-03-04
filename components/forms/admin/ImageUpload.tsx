import { CloudUpload, Delete, Upload } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardActions,
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
				if (currentFileCount < MAX_NUMBER_FILES) {
					currentFileCount++;
					return file;
				}
			})
			.map((file, i) => {
				return Object.assign(file, {
					preview: URL.createObjectURL(file),
				});
			});
		setFiles((prevFiles) => [...prevFiles, ...newFiles]);
	}

	function handleDeleteImage(index: number) {
		if (fileCount <= 0) {
			setOpenSnackbar('Something went wrong, please try again later.');
			return;
		}
		setFiles((prevFiles) => {
			const newFiles = [...prevFiles];
			newFiles.splice(index, 1);
			return newFiles;
		});
	}

	useEffect(() => {
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
				<input
					type='hidden'
					name='img'
					id='img-hidden'
					value={JSON.stringify(files.map((file) => file.name))}
				/>
				<div {...getRootProps({ className: styles['dropzone'] })}>
					<input {...getInputProps()} />
					<Box display='flex' justifyContent='center' mb={2}>
						<CloudUpload fontSize='large' />
					</Box>
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
						<Card sx={{ width: '100%' }} key={i}>
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
								<CardActions
									sx={{
										justifySelf: 'end',
									}}
								>
									<IconButton
										aria-label='delete'
										onClick={() => handleDeleteImage(i)}
									>
										<Delete />
									</IconButton>
								</CardActions>
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
