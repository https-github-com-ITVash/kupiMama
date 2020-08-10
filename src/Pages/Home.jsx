import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"

import {
	Headers,
	Footer,
	SectionWrap,
	Slider,
	MainFilter,
	ProductBox,
	Pagination,
} from "../components"

const Home = () => {
	const [pages, setPages] = React.useState({
		current: 1,
		pages: 15,
		startIndex: 0,
		endIndex: 15,
	})
	const { product, isLoading } = useSelector(({ products }) => ({
		product: products.items,
		isLoading: products.isLoading,
	}))
	return (
		<>
			<Helmet>
				<title>Главная КупиМаМа</title>
			</Helmet>
			<Headers />

			<SectionWrap>
				<Slider />

				<div className='main_content'>
					<MainFilter />

					<div className='mc_products'>
						{isLoading ? (
							<center>
								<h4>Загрузка</h4>
							</center>
						) : (
							product &&
							product
								.slice(pages.startIndex, pages.endIndex)
								.map((item, index) => (
									<ProductBox
										key={index}
										{...item}
										sale={item.price_three < item.price_one}
									/>
								))
						)}
					</div>

					<Pagination
						length={product.length}
						pages={pages}
						setPages={setPages}
					/>
				</div>
			</SectionWrap>

			<Footer />
		</>
	)
}

export default Home
