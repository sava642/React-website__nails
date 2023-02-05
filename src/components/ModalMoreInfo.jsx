import close from '../svg/close.svg';
import programm from '../programm';

export const ModalMoreInfo = ({ setIsOpenInfo, isOpenInfo, id }) => {
	const found = programm.find(obj => {
		return obj.id === id;
	});

	if (isOpenInfo) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
	return (
		<>
			<div className="programm-background--dark"
				onClick={() => setIsOpenInfo(false)} />
			<div div className="programm-mainblock" >
				<div className="programm-wrapper">
					<button className="programm-btn" onClick={() => setIsOpenInfo(false)}>
						<img src={close} alt="close" />
					</button>
					<p className="layout-title">
						{found.title}
					</p>
					<div className="programm-layout" key={found.id}>
						<div className="layout-wrapper">
							<p className="layout-name">
								Программа:
							</p>
							<ul className="layout-list">
								{found.list.map((el, i) => {
									return (
										<li className="layout-item" key={i}>
											{el}
										</li>
									)
								}
								)}
							</ul>
							<div className="layout-price">
								ЦЕНА: {found.price}
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}
export default ModalMoreInfo;