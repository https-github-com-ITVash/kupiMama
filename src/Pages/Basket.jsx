import React from "react"
import { Link } from "react-router-dom"
import { Table, Space, Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"
import { map } from "lodash"

import { Headers, Footer, SectionWrap } from "../components"

import { actCart } from "../redux/actions"

const Basket = () => {
	const dispatch = useDispatch()
	const cart = useSelector(({ cart }) => cart.items)
	console.log("dispatch", dispatch)
	console.log("cart", cart)
	const columns = [
		{
			title: "№",
			dataIndex: "number",
			key: "number",
			align: "center",
		},
		{
			title: "Фото",
			dataIndex: "photo",
			key: "photo",
			align: "center",
		},
		{
			title: "Количество",
			dataIndex: "quantity",
			key: "quantity",
			align: "center",
		},
		{
			title: "Цена за шт.",
			dataIndex: "price",
			key: "price",
			align: "center",
		},
		{
			title: "Название товара",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "Суммарная стоимость",
			dataIndex: "sumPrice",
			key: "sumPrice",
			align: "center",
		},
		{
			title: "",
			dataIndex: "btn",
			key: "btn",
			align: "right",
		},
	]
	const datas = []
	let index = 1
	map(cart, ([item]) => {
		datas.push({
			key: index,
			number: index,
			photo: <img src={item.image} alt={item.title} />,
			quantity: (
				<Space>
					<div className="input-number">
						<button className="minus" onClick={() => onMinus(item._id)}>
							-
						</button>
						<span>{cart[item._id].length}</span>
						<button className="plus" onClick={() => onPlus(item._id)}>
							+
						</button>
					</div>
				</Space>
			),
			price: `${item.price_one} р.`,
			name: item.title,
			sumPrice: `${cart[item._id].length * item.price_one} р.`,
			btn: (
				<Space size="middle">
					<button onClick={() => onRemove(item._id)}>Отмена</button>
				</Space>
			),
		})
		index++
	})

	const onPlus = (id) => {
		dispatch(actCart.plusProduct(id))
	}
	const onMinus = (id) => {
		dispatch(actCart.minusProduct(id))
	}
	const onRemove = (id) => {
		if (window.confirm("Вы действительно хотите удалить товар?")) {
			dispatch(actCart.removeProduct(id))
		}
	}

	const [sorted, setSorted] = React.useState("Доставка")

	const sorted_out = (e) => {
		setSorted(e)
	}

	const filterSort = (
		<Menu>
			<Menu.Item key="0" onClick={() => sorted_out("Доставка")}>
				Доставка
			</Menu.Item>
			<Menu.Item key="1" onClick={() => sorted_out("Самовывоз")}>
				Самовывоз
			</Menu.Item>
		</Menu>
	)

	return (
		<>
			<Headers />
			<SectionWrap>
				<div className="myPurch_content">
					<p className="title">Корзина</p>
					<Table
						columns={columns}
						dataSource={datas}
						bordered={true}
						pagination={false}
						scroll={{ x: datas.length < 1 ? null : 900 }}
					/>

					<div className="pc_deliver">
						<div className="pcd_box">
							<div className="pcd_left">
								<p>
									Доставка по городу - <span>500р.</span>
								</p>
								<p>
									Бесплатная доставка по городу - при заказе от{" "}
									<span>10 000р.</span>
								</p>
							</div>

							<div className="pcd_right">
								<p>Способ доставки</p>

								<Dropdown overlay={filterSort} trigger={["click"]}>
									<button
										className="ant-dropdown-link"
										onClick={(e) => e.preventDefault()}
									>
										{sorted ? sorted : "Доставка"} <DownOutlined />
									</button>
								</Dropdown>

								{sorted === "Доставка" && (
									<>
										<label htmlFor="adress">Адресс доставки:</label>
										<input
											type="text"
											id="adress"
											placeholder="Адресс"
											className="inpAdress"
										/>
									</>
								)}
							</div>
						</div>

						<button type="button">Оплатить</button>

						<div className="pcd_opt">
							<Link to="feedbackOpt">Для оптовых закупок</Link>
							<Link to="feedbackForm">Возникли вопросы?</Link>
						</div>
					</div>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default Basket
