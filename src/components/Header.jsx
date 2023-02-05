import icon from '../images_jpg/main_icon.jpg';
import tel from '../svg/tel.svg';


export const Header = ({ toggleClass, isActive }) => {
	if (!isActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	const handleClickScroll = (str) => {
		const element = document.getElementById(str);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	return (
		<header className="header__container header">
			<button onClick={toggleClass}
				className={isActive ? "menu-icon" : "menu-icon active"} type="button">
				<span></span>
			</button>
			<a href="/" className="header-logo">
				<img className="icon-image" src={icon} alt="icon" />
			</a>
			<nav className="header-menu">
				<div className="menu-body">
					<div className="menu-list">
						<li className="menu-item">
							<button onClick={() => handleClickScroll("section-1")} className="menu-link">Рассписание курсов</button>
						</li>
						<li className="menu-item">
							<button onClick={() => handleClickScroll("section-2")} className="menu-link">О нас</button>
						</li>
						<li className="menu-item">
							<button onClick={() => handleClickScroll("section-3")} className="menu-link">Отзывы</button>
						</li>
						<li className="menu-item">
							<button onClick={() => handleClickScroll("section-4")} className="menu-link">Контакты</button>
						</li>
						<li className="menu-item">
							<button onClick={() => handleClickScroll("section-5")} className="menu-link link-border">Связаться с нами</button>
						</li>
					</div>
				</div>
			</nav>
			<a href="tel:+380500280594" className="header-phone">
				<img className="phone-icone" src={tel} alt="tel" />
			</a>
		</header >
	)
}
export default Header;
