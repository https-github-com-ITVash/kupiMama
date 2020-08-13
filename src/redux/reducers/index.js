import { combineReducers } from "redux"

import products from "./product"
import filters from "./filters"
import cart from "./cart"

export default combineReducers({ products, filters, cart })
