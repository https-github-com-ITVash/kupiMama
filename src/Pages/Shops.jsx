import React from "react"
import { Headers, Footer, SectionWrap } from "../components"
import { YMaps, Map, Placemark } from "react-yandex-maps"

const DonMap = { center: [47.986444, 37.7858], zoom: 17 }
const MacMap = { center: [48.040607, 37.966891], zoom: 17 }
const Shops = () => {
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className='contacts_content'>
					<p className='title'>Контакты</p>

					<div className='cc_box'>
						<div className='ccb_left'>
							<p>Магазин в Донецке:</p>
							<ul>
								<li>
									Адресс: г.Донецк, пр. Ленинский,11б. ТЦ "Обжора", 3 этаж.
								</li>
								<li>Горячая гиния: +380713080200</li>
								<li>Email: info@kupimama.com</li>
								<li>График работы: 9:00 - 19:00 Пн-Вс</li>
							</ul>
						</div>

						<div className='ccb_right'>
							<YMaps>
								<Map state={DonMap} width='100%' height='100%'>
									<Placemark
										geometry={[47.986444, 37.7858]}
										modules={["geoObject.addon.hint"]}
										properties={{
											hintContent: "пр. Ленинский,11б. ТЦ Обжора, 3 этаж.",
											balloonContent: "Это красивая метка",
										}}
										options={{
											iconLayout: "default#image",
											iconImageHref: "/img/8168.png",
											iconImageSize: [30, 30],
											iconImageOffset: [-15, -30],
										}}
									/>
								</Map>
							</YMaps>
						</div>
					</div>

					<div className='cc_box'>
						<div className='ccb_left'>
							<p>Магазин в Макеевке:</p>
							<ul>
								<li>Адресс: г.Макеевка, ТЦ "Прага", бул. Горбачева 5б.</li>
								<li>Горячая гиния: +380713080100</li>
								<li>Email: info@kupimama.com</li>
								<li>График работы: 9:00 - 18:00 Пн-Вс</li>
							</ul>
						</div>

						<div className='ccb_right'>
							<YMaps>
								<Map state={MacMap} width='100%' height='100%'>
									<Placemark
										geometry={[48.040607, 37.966891]}
										modules={["geoObject.addon.hint"]}
										properties={{
											hintContent: "ТЦ Прага, бул. Горбачева 5б",
											balloonContent: "Это красивая метка",
										}}
										options={{
											iconLayout: "default#image",
											iconImageHref: "/img/8168.png",
											iconImageSize: [30, 30],
											iconImageOffset: [-15, -30],
										}}
									/>
								</Map>
							</YMaps>
						</div>
					</div>

					<button className='cc_btn'>Форма обратной связи</button>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default Shops
