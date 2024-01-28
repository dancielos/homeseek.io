export default function Overlay() {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,

				background: 'rgba(0, 0, 0, 0.1)',

				width: '100vw',
				height: '56.25%',
				zIndex: -10,
			}}
		></div>
	);
}
