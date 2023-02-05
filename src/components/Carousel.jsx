import nails1 from '../../images_jpg/nails1.jpg';
import nails2 from '../../images_jpg/nails2.jpg';
import nails3 from '../../images_jpg/nails3.jpg';
import { useState, useEffect } from 'react';

export const Carousel = () => {
	const [index, setIndex] = useState(0);

	const cards = [
		{ id: "1", image: nails1 },
		{ id: "2", image: nails2 },
		{ id: "3", image: nails3 },
	]

	const mod = (n, m) => {
		let result = n % m;
		return result >= 0 ? result : result + m;
	}

	useEffect(() => {
		setTimeout(() => {
			setIndex((index + 1) % cards.length);
		}, 3000)
	}, [index, cards.length])
	return (
		<div className="carousel">
			{cards.map((item, i) => {
				const indexLeft = mod(index - 1, cards.length);
				const indexRight = mod(index + 1, cards.length);

				let className = "";

				if (i === index) {
					className = "card card--active"
				} else if (i === indexRight) {
					className = "card card--right"
				} else if (i === indexLeft) {
					className = "card card--left"
				} else {
					className = "card"
				}
				return (
					<img
						key={item.id}
						src={item.image}
						alt="nails"
						className={className}
					/>
				)
			})}
		</div>
	)
};
export default Carousel;