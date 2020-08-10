import React from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"

import {
	Home,
	Sale,
	Delivery,
	Warranty,
	Contacts,
	Shops,
	Input,
	Registration,
	PersonalArea,
	MyPurchases,
	Basket,
	EditProfile,
	FeedbackForm,
	ProductPage,
	FeedbackOpt,
} from "./Pages"

import { actProduct } from "./redux/actions"

function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(actProduct.getAll())
	}, [dispatch])
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/sale' component={Sale} />
				<Route exact path='/delivery' component={Delivery} />
				<Route exact path='/warranty' component={Warranty} />
				<Route exact path='/shops' component={Shops} />
				<Route exact path='/contacts' component={Contacts} />
				<Route exact path='/input' component={Input} />
				<Route exact path='/registration' component={Registration} />
				<Route exact path='/personalArea' component={PersonalArea} />
				<Route exact path='/myPurchases' component={MyPurchases} />
				<Route exact path='/basket' component={Basket} />
				<Route exact path='/editProfile' component={EditProfile} />
				<Route exact path='/feedbackForm' component={FeedbackForm} />
				<Route exact path='/productPage/:id' component={ProductPage} />
				<Route exact path='/feedbackOpt' component={FeedbackOpt} />
			</Switch>
		</>
	)
}

export default App
