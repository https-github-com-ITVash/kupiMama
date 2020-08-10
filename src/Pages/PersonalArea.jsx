import React from "react"
import { Headers, Footer, SectionWrap } from "../components"
import { Link } from "react-router-dom"
import { Button } from "antd"

const PersonalArea = () => {
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className='personalArea_content'>
					<p className='title'>Личный кабинет</p>

					<div className='pac_inf'>
						<div className='paci_img'>
							<img src='img/photo.png' alt='' />
							<Button type='link'>Редактировать изоюражение</Button>
						</div>

						<div className='paci_text'>
							<p>
								<span>Имя:</span>Евгения
							</p>
							<p>
								<span>Фамилия:</span>Рубцова
							</p>
							<p>
								<span>Отчество:</span>Олеговна
							</p>
							<p>
								<span>Номер:</span>333-555-000
							</p>
							<p>
								<span>ID:</span>25788994
							</p>
							<p>
								<span>Email:</span>evgeniya54@mail.ru
							</p>
							<p>
								<span>Адресс доставки:</span>г.Донецк, ул.Артёма 159, квартира
								50.
							</p>
						</div>
					</div>

					<div className='pac_inf'>
						<div className='paci_img'>
							<img src='img/qr.png' alt='' />
							<Button type='link'>Скидка 5%</Button>
						</div>

						<div className='paci_text'>
							<Link to='/myPurchases'>История покупок</Link>
							<Link to='/editProfile'>Редактировать профиль</Link>
							<Link to='/basket'>Корзина</Link>
						</div>
					</div>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default PersonalArea
