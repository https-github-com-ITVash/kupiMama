import axios from "axios"

const products = {
	getAll: () => axios.get("product"),
	sorted: (category, sortBy) =>
		axios.get(
			`product?${category !== null ? `categoryID=${category}` : ""}&_sort=${
				sortBy.type
			}&_order=${sortBy.order}`,
		),
}

export default products
