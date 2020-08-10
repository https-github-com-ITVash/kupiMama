import React from "react"

import { Headers, Footer, SectionWrap, FeedBackForm } from "../components"

const FeedbackForm = () => {
	return (
		<>
			<Headers />
			<SectionWrap>
				<p className='title'>Форма обратной связи</p>
				<FeedBackForm />
			</SectionWrap>
			<Footer />
		</>
	)
}

export default FeedbackForm
