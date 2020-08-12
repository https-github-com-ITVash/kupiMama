const actions = {
	setSort: (type, order) => ({
		type: "SET_SORT",
		payload: { type, order },
	}),
	setCat: (id) => ({
		type: "SET_CATEGORY",
		payload: id,
	}),
}
export default actions
