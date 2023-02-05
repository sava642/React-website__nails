import icon from '../images_jpg/main_icon.jpg';

export const ContactUs = () => {
	return (
		<div className="contact_us-wrapper" id="section-4">
			<form className="contact_us-form">
				<div className="contact_us-title">
					Свяжитесь с нами
				</div>
				<label className="label label-name">
					<div className="required">Name</div>
					<input type="text" className="name" name="name" required />
				</label>
				<label className="label label-email">
					<div className="required">Email</div>
					<input type="email" className="email" name="email" required />
				</label>
				<label className="label label-number">
					<div className="required">Phone number</div>
					<input type="tel" className="number" name="number" required />
				</label>
				<label className="label label-message">
					<div className="required">Message</div>
					<input type="text" className="message" name="message" required />
				</label>
				<button className="contact_us-link __button" href="/">Send</button>
				<div className="contact_us-box">
					<div className="contact_us-image">
						<img className="icon-img" src={icon} alt="icon" />
					</div>
				</div>
			</form>
		</div>
	)
}
export default ContactUs