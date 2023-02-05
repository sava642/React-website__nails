import nail from '../images_jpg/nail.jpg';
import Modal from './Modal';

export const School = ({ setIsOpen, isOpen }) => {

	return (
		<div className="main-wrapper">
			<div className="school-info">
				<p className="school-online">
					Онлайн-школа ногтевого сервиса
				</p>
				<p className="school-title">
					«NAIL SERVICE SCHOOL»
				</p>
				<p className="school-vizit">
					приглашает тебя на ознакомительный бесплатный урок с основателем школы Марии Федотовой
				</p>
				<button onClick={() => setIsOpen(true)} className="school-link __button" href="/"> ХОЧУ БЕСПЛАТНЫЙ УРОК</button>
			</div>
			<div className="school-image">
				<img src={nail} alt="nail" />
			</div>
			{isOpen && <Modal setIsOpen={setIsOpen} />}
		</div>
	)
};
export default School;