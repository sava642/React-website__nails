import instagramm from '../svg/instagramm.svg';
import facebook from '../svg/facebook.svg';
import telegramm from '../svg/telega.svg';
import gPay from '../svg/gPay.svg';
import master from '../svg/master.svg'



export const Footer = () => {
	return (
		<div className="footer footer-wrapper __container" id="section-5">

			<div className="footer-information">
				<div className="information-title">
					Контакты:
				</div>
				<div className="information-info">
					Учебный центр Nail Servis School © 2022
					Киев, ул. Володарского 28, 5 этаж, офис 505
				</div>
				<div className="information-politic">
					Политика конфиденциальности
				</div>
			</div>
			<div className="footer-social">
				<div className="social-info">
					<div className="social-info-text">
						Мы в социальных сетях:
					</div>
					<div className="social-info-contacts">
						<a href="https://www.instagram.com/">
							<img src={instagramm} alt="instagramm" />
						</a>
						<a href="https://www.facebook.com/">
							<img src={facebook} alt="facebook" />
						</a>
						<a href="https://web.telegram.org/">
							<img src={telegramm} alt="telegramm" />
						</a>
					</div>
				</div>
				<div className="social-pay">
					<div className="social-info-text">
						Способы оплаты:
					</div>
					<div className="social-info-contacts">
						<a href="https://pay.google.com/">
							<img src={gPay} alt="gPay" />
						</a>
						<a href="https://www.mastercard.com/">
							<img src={master} alt="master" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer