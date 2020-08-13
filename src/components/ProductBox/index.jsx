import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Rate } from "antd"
//import { useDispatch } from "react-redux"

//import { actCart } from "../../redux/actions"

import "./style.scss"

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
	onAdd,
}) => {
	//const dispatch = useDispatch()
	const handleAddCart = () => {
		const obj = {
			_id: _id,
			types: "серый",
		}
		if (onAdd) {
			onAdd(obj)
		}
	}
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
					<Rate />
				</div>
				<div className='rating-result'>
					<Rate disabled defaultValue={2} />
				</div>
				<div className='mcp_box_btn'>
					<Link to={`productPage/${_id}`}>ПОДРОБНЕЕ</Link>
					<form>
						<button type='button' onClick={handleAddCart}>
							Добавить в корзину
						</button>
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
