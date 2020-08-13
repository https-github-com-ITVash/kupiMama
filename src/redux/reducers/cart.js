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

			default:
		}
		const result = reduce(map(draft.items), (prev, cal) => prev.concat(cal), [])
		draft.totalPrice = result.reduce((sum, obj) => obj.price_one + sum, 0)
		draft.totalCount = result.length
	})
}
