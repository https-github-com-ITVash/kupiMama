import React from "react"

import { Headers, Footer, SectionWrap } from "../components"

import { Link } from "react-router-dom"

const Contacts = () => {
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className="contacts_content">
					<p className="title">Контакты</p>
					<div className="cc_text">
						<p>
							<span>Время работы колл-центра:</span>9:00 - 19:00 Пн-Пт
						</p>
						<p>
							<span>Номер телефона:</span>+380715050555
						</p>
						<p>
							<span>Почта:</span>info@kupimama.com
						</p>
					</div>

					<Link to="feedbackForm" className="cc_btn">
						Форма обратной связи
					</Link>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default Contacts
