import icon from '../images_jpg/main_icon.jpg';


export const Burger = ({ isActive, setActive }) => {

	const handleClickScroll = (str) => {
		const element = document.getElementById(str);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<div className={!isActive ? "menu-burger menu-burger-active" : "menu-burger"}>
			<ul className="burger-list">
				<button
					onClick={() => {
						setActive(true);
						handleClickScroll("section-1")
					}}
					className="burger-link __button">Рассписание курсов</button>
				<button
					onClick={() => {
						setActive(true);
						handleClickScroll("section-2")
					}}
					className="burger-link __button">О нас</button>
				<button
					onClick={() => {
						setActive(true);
						handleClickScroll("section-3")
					}}
					className="burger-link __button">Отзывы</button>
				<button
					onClick={() => {
						setActive(true);
						handleClickScroll("section-4")
					}}
					className="burger-link __button">Контакты</button>
				<a href="/" className="burger-logo">
					<img className="icon-image" src={icon} alt="icon" />
				</a>
			</ul>
		</div>
	)
}
export default Burger