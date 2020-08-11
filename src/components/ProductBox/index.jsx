import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

import { Link } from "react-router-dom"

const ProductBox = ({
	sale,
	title,
	price_one,
	price_three,
	company,
	country,
	article,
	image,
	_id,
}) => {
	return (
		<div className='mcp_box'>
			<img src={image[0]} alt='Коляска' />

			<hr />

			<div className='mcp_box_text'>
				<p className='title'>&#171;{title}&#187;</p>
				<div className='mcpbt_text'>
					<div className='mcpbt_descript'>
						<ul>
							<li>{article}</li>
							<li>Коляски и автокресла</li>
							<li>
								{company} ({country})
							</li>
						</ul>
					</div>
					<div className='mcpbt_price'>
						<p className='old_price'>{price_one}р.</p>
						<p className='price'>{price_three}р.</p>
						<p className='price_title_off'>Под заказ</p>
					</div>
				</div>
				<div className='rating-area'>
					<input type='radio' id='star-5' name='rating' value='5' />
					<label htmlFor='star-5' title='Оценка «5»'></label>
					<input type='radio' id='star-4' name='rating' value='4' />
					<label htmlFor='star-4' title='Оценка «4»'></label>
					<input type='radio' id='star-3' name='rating' value='3' />
					<label htmlFor='star-3' title='Оценка «3»'></label>
					<input type='radio' id='star-2' name='rating' value='2' />
					<label htmlFor='star-2' title='Оценка «2»'></label>
					<input type='radio' id='star-1' name='rating' value='1' />
					<label htmlFor='star-1' title='Оценка «1»'></label>
				</div>
				<div className='rating-result'>
					<span className='active'></span>
					<span className='active'></span>
					<span className='active'></span>
					<span></span>
					<span></span>
				</div>
				<div className='mcp_box_btn'>
					<Link to={`productPage/${_id}`}>ПОДРОБНЕЕ</Link>
					<form action='' method='POST'>
						<button type='submit'>Добавить в корзину</button>
					</form>
				</div>
				{sale && (
					<div className='mcpbt_stock'>
						<p>Акция</p>
					</div>
				)}
			</div>
		</div>
	)
}

ProductBox.propTypes = {
	sale: PropTypes.bool,
}
ProductBox.defaultProps = {
	sale: false,
}

export default ProductBox
