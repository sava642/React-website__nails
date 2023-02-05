import React from 'react';
import close from '../svg/close.svg'
import { useState } from 'react';
import programm from '../programm';

const Enroll = ({ enroll, setEnroll, id }) => {
	const [enrollGet, setEnrollGet] = useState(true);
	const founded = programm.find(obj => {
		return obj.id === id;
	});

	if (enroll) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
	return (
		<>
			<div className="programm-background--dark"
				onClick={() => setEnroll(false)} />
			<div className="programm-mainblock">
				<div className="programm-wrapper">
					<button className="programm-btn" onClick={() => setEnroll(false)}>
						<img src={close} alt="close" />
					</button>
					{enrollGet ?
						<>
							<div className="enroll-title">
								Чтобы записаться на 		"{founded.title}"
							</div>

							<div>
								пожалуйста, оставьте свои контактные данные,
								чтобы мы смогли отправить вам полную информацию для  дальнейшего обучения.
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
									onClick={() => setEnrollGet(false)}
									href="/">Отправить</button>
							</form>
						</>
						:
						<>
							<h4 className="modal-text--h4">
								Благодарим за обратную связь.
							</h4>
							<div className="modal-text">

								B скором времени мы ответим на все ваши вопросы!
							</div>
							<h3 className="modal-text--h3">
								ПРИЯТНОГО ПРОСМОТРА!
							</h3>
							<button
								className="contact_us-link __button"
								onClick={() => setEnroll(false)}
								href="/">ХОРОШО</button>
						</>
					}
				</div>
			</div>
		</>
	)
};

export default Enroll;