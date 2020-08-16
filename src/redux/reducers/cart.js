import produce from "immer"
import { reduce, map } from "lodash"

import { Types } from "../actions/cart"

const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

export default (state = initialState, { type, payload }) => {
	return produce(state, (draft) => {
		switch (type) {
			case Types.ADD_TO_CART:
				if (!draft.items[payload._id]) {
					draft.items[payload._id] = []
				}
				draft.items[payload._id].push(payload)
				break
			case Types.PLUS_CART:
				draft.items[payload].push(draft.items[payload][0])
				break
			case Types.MINUS_CART:
				if (draft.items[payload].length > 1) {
					draft.items[payload].shift()
				}
				break
			case Types.REMOVE_PRODUCT:
				delete draft.items[payload]
				break
			default:
		}
		const result = reduce(map(draft.items), (prev, cal) => prev.concat(cal), [])
		draft.totalPrice = result.reduce((sum, obj) => obj.price_one + sum, 0)
		draft.totalCount = result.length
	})
}
