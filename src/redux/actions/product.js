import { products } from "../../api"

const actions = {
	_getAll: (data) => ({
		type: "PRODUCT:SET_LIST",
		payload: data,
	}),

	getAll: () => (dispatch) => {
		products
			.getAll()
			.then(({ data }) => dispatch(actions._getAll(data)))
			.catch((err) => console.log("Ошибка при загрузки данных!!!", err))
	},
}

export default actions
