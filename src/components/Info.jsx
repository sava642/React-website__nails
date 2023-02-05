import woman from '../images_jpg/woman.jpg';
import woman2 from '../images_jpg/woman2.jpg';
import woman3 from '../images_jpg/woman3.jpg';

export const Info = () => {

	return (
		<div className="info-wrapper" id="section-2">
			<div className="info-image">
				<picture>
					<source srcSet={woman3} media="(max-width: 600px)" />
					<source srcSet={woman2} media="(min-width: 601px)" />
					<img src={woman} alt="woman" />
				</picture>
			</div>
			<div className="info-block">
				<p className="info-title">
					О нас
				</p>
				<p className="info-about">
					Онлайн-школа «nail service school»  на протяжении 5 лет предоставляет возможность любому желающему новичку освоить навыки мастера маникюра и педикюра.
					<br />
					<br />
					Также мы предлагаем каждому опытному мастеру прокачать свои возможности, обновить навыки и иметь более расширенные кругозор в сфере ногтевого сервиса.
				</p>
			</div>
		</div>
	)
}
export default Info;

