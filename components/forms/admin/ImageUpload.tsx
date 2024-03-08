import { CloudUpload, Delete, Upload } from '@mui/icons-material';
import {
	Alert,
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
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import FormContainer from './FormContainer';
import Dropzone, { FileRejection, useDropzone } from 'react-dropzone';

import styles from './ImageUpload.module.css';
import { FileWithPreview } from './ListingForm';
import ImageUploadPreviews from './ImageUploadPreviews';
import getFilename from '@/utils/getters/getFilename';
import H3 from '@/components/htmlElements/H3';

const MAX_NUMBER_FILES = 5;

export default function ImageUpload({
	invalidInputs = [],
	files = [],
	setFiles,
	action,
	images = [],
	setUploadedImages,
}: {
	invalidInputs?: string[];
	files: FileWithPreview[];
	setFiles: Dispatch<SetStateAction<FileWithPreview[]>>;
	action: 'add' | 'edit';
	images: string[];
	setUploadedImages: Dispatch<SetStateAction<string[]>>;
}) {
	// const imageUploadRef = useRef<HTMLInputElement>(null);
	// function test() {
	// 	console.log(imageUploadRef.current?.files);
	// }
	// const [files, setFiles] = useState<FileWithPreview[]>([]);
	const fileCount = files.length + (action === 'edit' ? images.length : 0);
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

	const isError = invalidInputs.includes('img');

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

	function handleDeleteUploadedImage(index: number) {
		if (images.length <= 0) {
			setOpenSnackbar('Something went wrong, please try again later.');
			return;
		}
		setUploadedImages((prevFiles) => {
			const newImages = [...prevFiles];
			newImages.splice(index, 1);
			return newImages;
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
				<div {...getRootProps({ className: styles['dropzone'] })}>
					<input {...getInputProps()} name='img' />
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
					{files.length > 0 ? (
						<Typography variant='h6'>New Images</Typography>
					) : (
						''
					)}
					{files.map((file, i) => (
						<ImageUploadPreviews
							name={file.name}
							preview={file.preview}
							i={i}
							handleDeleteImage={handleDeleteImage}
						/>
					))}
					{action === 'edit' && images.length > 0 ? (
						<>
							<Typography variant='h6'>Uploaded Images</Typography>

							{images.map((image, i) => (
								<ImageUploadPreviews
									name={getFilename(image) as string}
									preview={`${process.env.S3_URL}/${image}`}
									i={i}
									handleDeleteImage={handleDeleteUploadedImage}
								/>
							))}
						</>
					) : (
						''
					)}
				</aside>
				{isError ? (
					<Alert severity='error'>
						Please upload at least one image, and make sure it's a valid image
						format (.jpg, .jpeg, .png).{' '}
					</Alert>
				) : (
					''
				)}
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
