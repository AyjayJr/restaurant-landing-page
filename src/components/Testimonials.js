import Carousel from "./Carousel";

export default function Testimonials() {
	return (
		<div className='testimonial-bg'>
			<h2>Testimonials</h2>
				<Carousel>
					<div className='testimonial'></div>
					<img src="https://via.placeholder.com/1600x300" alt="placeholder" />
					<img src="https://via.placeholder.com/1600x300" alt="placeholder" />
				</Carousel>
		</div>
	);
}