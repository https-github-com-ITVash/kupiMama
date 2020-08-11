const initialState = {
	category: null,
	sorted: {
		type: "popular",
		order: "desc",
	},
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_SORT":
			return {
				...state,
				sorted: payload,
			}
		case "SET_CATEGORY":
			return {
				...state,
				category: payload,
			}
		default:
			return state
	}
}
