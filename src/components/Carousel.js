export default function Carousel(props) {
	const { children } = props;

	return (
		<div className='carousel-container'>
			<div className='carousel-wrapper'>
				<div className='carousel-content'>
					{children}
				</div>
			</div>
		</div>
	);
}