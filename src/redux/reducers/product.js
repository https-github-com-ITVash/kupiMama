const initialState = {
	items: [],
	isLoading: true,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "PRODUCT:SET_LIST":
			return {
				...state,
				items: payload,
				isLoading: false,
			}

		default:
			return state
	}
}
