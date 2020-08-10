import React from "react"

import { Headers, Footer, SectionWrap, TwiceSlider } from "../components"
import { Button } from "antd"

const ProductPage = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0)
		return () => window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className='productPage_content'>
					<div className='ppc_product'>
						<TwiceSlider />

						<div className='pp_inf'>
							<div className='ppi_text'>
								<p className='ppit_title'>Коляска</p>
								<p>
									<span>Артикул:</span> H-P555R
								</p>
								<p>
									<span>Код товара:</span> 105000
								</p>
								<p>
									<span>Фирма производитель:</span> Phoenix
								</p>
								<p>
									<span>Страна производитель:</span> Англия
								</p>
								<p>
									<span>Рекомендумый возраст:</span> 0,1 год
								</p>
								<p>
									<span>Раздел:</span> Коляски и автокресла
								</p>
							</div>

							<div className='ppi_btn'>
								<div className='ppib_price'>
									<p className='old_price'>25000р.</p>
									<p className='price'>15000р.</p>
								</div>

								<div className='ppib_btn'>
									<form action='' method='POST'>
										<button type='submit'>Добавить в корзину</button>
									</form>

									<p className='price_title_on'>В наличии</p>
								</div>
							</div>

							<div className='rating-result'>
								<span className='active'></span>
								<span className='active'></span>
								<span className='active'></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>

					<div className='ppc_about'>
						<p className='ppca_title'>О товаре</p>

						<hr />

						<p>
							Вашему вниманию мы предлагаем лучшую коляску этого года. Она имеет
							такие преимущества:
						</p>
						<ul>
							<li>Комфорт</li>
							<li>Устойчивость</li>
							<li>Качество</li>
						</ul>
						<p>
							Товар произведен из лучших деталей. Имеет хорошие крепления, что
							позволяет коляске служить долго.
						</p>
						<p className='ppca_spec'>Характеристики:</p>
						<ul>
							<li>Колеса: PU</li>
							<li>Подщибники: ABEC-7</li>
							<li>Диаметр колес: 12/8см</li>
							<li>Дека: 37х11см</li>
							<li>Максимальный вес ребенка: 40 кг</li>
						</ul>
					</div>

					<div className='ppc_reviews'>
						<p className='ppcr_title'>Отзывы</p>

						<hr />

						<div className='review'>
							<p className='r_title'>Ирина Боровинкова (25лет)</p>
							<p>
								Купила недавно коляску этого производителя. Ребенку нравится.
								Очень удобная.
							</p>
							<p className='r_title'>21 июня 2019год</p>
							<hr />
							<div className='rating-result'>
								<span className='active'></span>
								<span className='active'></span>
								<span className='active'></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<div className='review'>
							<p className='r_title'>Ирина Боровинкова (25лет)</p>
							<p>
								Купила недавно коляску этого производителя. Ребенку нравится.
								Очень удобная.
							</p>
							<p className='r_title'>21 июня 2019год</p>
							<hr />
							<div className='rating-result'>
								<span className='active'></span>
								<span className='active'></span>
								<span className='active'></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<div className='review'>
							<p className='r_title'>Ирина Боровинкова (25лет)</p>
							<p>
								Купила недавно коляску этого производителя. Ребенку нравится.
								Очень удобная.
							</p>
							<p className='r_title'>21 июня 2019год</p>
							<hr />
							<div className='rating-result'>
								<span className='active'></span>
								<span className='active'></span>
								<span className='active'></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<Button type='link'>Больше отывов</Button>

						<div className='ppcr_feedback'>
							<form action=''>
								<textarea
									name=''
									id=''
									cols='30'
									rows='10'
									placeholder='Введите текст...'
								></textarea>
								<button type='submit'>Оставить отзыв</button>
							</form>
						</div>
					</div>

					<div className='ppc_contactUs'>
						<p>
							Если у Вас возник вопрос, вы можете написать нам или связаться с
							оптовиком
						</p>
						<a href='feedbackForm.html'>Связаться</a>
					</div>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default ProductPage
