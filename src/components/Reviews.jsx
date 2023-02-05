
import level from '../svg/level.svg';
import { cards } from '../cards'

import { useState, useEffect } from 'react';

export const Reviews = () => {
	const [index, setIndex] = useState(0);


	const mod = (n, m) => {
		let result = n % m;
		return result >= 0 ? result : result + m;
	}

	useEffect(() => {
		setTimeout(() => {
			setIndex((index + 1) % cards.length);
		}, 3000)
	}, [index])

	return (
		<div className="review-wrapper" id="section-3">
			<div className="review-title">
				Отзывы
			</div>
			<div className="carousel">
				{cards.map((item, i) => {
					const indexLeft = mod(index - 1, cards.length);
					const indexRight = mod(index + 1, cards.length);

					let className = "";

					if (i === index) {
						className = "review-box box--active"
					} else if (i === indexRight) {
						className = "review-box box--right"
					} else if (i === indexLeft) {
						className = "review-box box--left"
					} else {
						className = "review-box"
					}
					return (

						<div className={className} key={item.id} >
							<div className="box-image">
								<img src={item.image} alt="foto1" />
							</div>
							<div className="icon-level">
								<img src={level} alt="foto1" />
							</div>
							<div className="box-name">
								{item.name}
							</div>
							<div className="box-text">
								{item.text}
							</div>
						</div>
					)
				})}
			</div>
			<div />
		</div>

	)
};
export default Reviews;