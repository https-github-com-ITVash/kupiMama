// eslint-disable-next-line react-hooks/exhaustive-deps
import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import "./index.scss"
import "antd/dist/antd.css"

import store from "./redux/store"
import App from "./App"

window.axios = axios
window.store = store

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root"),
)
