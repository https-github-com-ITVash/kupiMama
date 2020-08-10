import axios from "axios"

const products = {
	getAll: () => axios.get("product"),
	sorted: (sort, filt) =>
		axios.get(`product?price_one=${sort}&categoryID=${filt}`),
}

export default products
