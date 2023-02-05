import { course } from '../course'
import ModalMoreInfo from './ModalMoreInfo';
import { useState } from 'react';
import Enroll from './Enroll';

export const Schedule = ({ isOpenInfo, setIsOpenInfo, enroll, setEnroll }) => {

	const [id, setId] = useState()


	return (
		<div className="schedule-wrapper" id="section-1">
			{isOpenInfo && <ModalMoreInfo setIsOpenInfo={setIsOpenInfo} isOpenInfo={isOpenInfo} id={id} />}
			{enroll && <Enroll enroll={enroll} setEnroll={setEnroll} id={id} />}
			<div className="schedule-course">
				расписание курсов
			</div>
			<div className="schedule-layout">
				{course.map((item) =>
					<div className="schedule-item" key={item.id}>
						<h5 className="item-title">Информация о курсе</h5>
						<h3 className="item-name">
							{item.name}
						</h3>
						<div className="item-text">
							{item.text}
						</div>
						<div className="item duration">
							{item.duration}
						</div>
						<div className="item amount">
							{item.amount}
						</div>
						<div className="item duration-hours">
							{item.hours}
						</div>
						<button
							onClick={() => {
								setIsOpenInfo(true);
								setId(item.id)
							}}
							className="schedule-link-more" >узнать подробнее</button>
						<button
							onClick={() => {
								setEnroll(true);
								setId(item.id)
							}}
							className="schedule-link __button"> ЗАПИСАТЬСЯ</button>
					</div>
				)}
			</div>

		</div>
	)
}
export default Schedule;