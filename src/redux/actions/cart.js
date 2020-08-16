export const Types = {
	ADD_TO_CART: "ADD_TO_CART",
	MINUS_CART: "MINUS_CART",
	PLUS_CART: "PLUS_CART",
	REMOVE_PRODUCT: "REMOVE_PRODUCT",
	CLEAR_CART: "CLEAR_CART",
}

const actions = {
	addToCart: ({ _id, types }) => (dispatch, getState) => {
		const product = getState().products.items
		const productObj = product.find((obj) => obj._id === _id)
		dispatch({
			type: Types.ADD_TO_CART,
			payload: {
				_id: productObj._id,
				title: productObj.title,
				article: productObj.article,
				image: productObj.image[0],
				price_one: productObj.price_one,
				types,
			},
		})
	},
	plusProduct: (id) => ({
		type: Types.PLUS_CART,
		payload: id,
	}),
	minusProduct: (id) => ({
		type: Types.MINUS_CART,
		payload: id,
	}),
	removeProduct: (id) => ({
		type: Types.REMOVE_PRODUCT,
		payload: id,
	}),
	clearCart: {
		type: Types.CLEAR_CART,
	},
}
export default actions
