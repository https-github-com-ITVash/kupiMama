export const Types = {
	ADD_TO_CART: "ADD_TO_CART",
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
}
export default actions
