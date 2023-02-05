import React from 'react';
import close from '../svg/close.svg'
import { useState } from 'react';

const Modal = ({ setIsOpen }) => {
	const [success, setSuccess] = useState(true);

	return (
		<>
			<div className="modal-background--dark"
				onClick={() => setIsOpen(false)} />
			<div className="modal-mainblock">
				<div className="modal-wrapper">
					<button className="modal-btn" onClick={() => setIsOpen(false)}>
						<img src={close} alt="close" />
					</button>
					{success ?
						<>
							<div className="modal-text">
								Чтобы получить доступ к бесплатному онлайн-уроку, пожалуйста, оставьте свои контактные данные, чтобы мы смогли отправить вам ознакомительную информацию.
							</div>
							<form className="modal-form">
								<label className="modal-label">
									<div className="modal-label--name">Name</div>
									<input type="text" className="name" name="name" required />
								</label>
								<label className="modal-label">
									<div className="modal-label--email">Email</div>
									<input type="email" className="email" name="email" required />
								</label>
								<button
									className="contact_us-link __button"
									onClick={() => setSuccess(false)}
									href="/">Отправить</button>
							</form>
						</>
						:
						<>
							<h4 className="modal-text--h4">
								ОТЛИЧНО!
							</h4>
							<div className="modal-text">
								Доступ к бесплатному уроку уже находится в вашей электронной почте!
							</div>
							<h3 className="modal-text--h3">
								ПРИЯТНОГО ПРОСМОТРА!
							</h3>
							<button
								className="contact_us-link __button"
								onClick={() => setIsOpen(false)}
								href="/">ХОРОШО</button>
						</>
					}
				</div>
			</div>
		</>
	)
};

export default Modal;