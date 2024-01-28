import React, { HTMLProps } from 'react';
import classes from '@/styles/video.module.css';

interface VideoProps extends HTMLProps<'video'> {}

// TODO: but not important
// the type can be automatic
// if the video is fetched...

export default function Video({ src }: VideoProps) {
	return (
		<video autoPlay loop muted className={classes.video}>
			<source src={src} type='video/mp4' />
		</video>
	);
}
