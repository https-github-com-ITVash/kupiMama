// eslint-disable-next-line
import React from "react"

import "./style.scss"
const Footer = () => {
	return (
		<footer>
			<div className='f_sn'>
				<p>Мы в социальных сетях:</p>
				<div className='fsn_icons'>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://vk.com/kupimama.donetsk'
					>
						<i className='fa fa-vk fa-1x' aria-hidden='true'></i>
					</a>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://instagram.com/kupimama.donetsk'
					>
						<i className='fa fa-instagram fa-1x' aria-hidden='true'></i>
					</a>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://facebook.com/kupimama.donetsk'
					>
						<i className='fa fa-facebook fa-1x' aria-hidden='true'></i>
					</a>
				</div>
			</div>

			<div className='line'></div>

			<div className='f_nav'>
				<div className='fn_nav'>
					<a href='#/'>Распродажа</a>
					<a href='#/'>Доставка и оплата</a>
					<a href='#/'>Гарантия</a>
					<a href='#/'>Контакты</a>
					<a href='#/'>Магазины</a>
				</div>
				<div className='fn_cop'>
					<a href='#/'>Powered by itd.company</a>
				</div>
			</div>

			<div className='line'></div>

			<div className='f_inf'>
				<p>Время работы колл-центра:</p>
				<p>9:00 - 19:00 Пн-Пт</p>
				<p>Номер телефона: +380715050555</p>
				<p>Почта: info@kupimama.com</p>
			</div>

			<div className='fn_cop fn_cop_mobil'>
				<a href='#/'>Powered by itd.company</a>
			</div>
		</footer>
	)
}
export default Footer
