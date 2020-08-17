import React from "react"

import { Table, Space } from "antd"

import { Link } from "react-router-dom"

import { Headers, Footer, SectionWrap /* , Pagination */ } from "../components"

const MyPurshaases = () => {
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
			render: () => (
				<Space>
					<img src="img/stroller.jpg" alt="" />
				</Space>
			),
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
			render: () => (
				<Space size="middle">
					<Link to="Basket">В магазин</Link>
				</Space>
			),
		},
	]

	const data = [
		{
			number: "1",

			quantity: "12 шт.",
			price: "12000 р.",
			name: "Коляска",
			sumPrice: "50000 р.",
		},
		{
			number: "2",

			quantity: "12 шт.",
			price: "12000 р.",
			name: "Коляска",
			sumPrice: "50000 р.",
		},
		{
			number: "3",

			quantity: "12 шт.",
			price: "12000 р.",
			name: "Коляска",
			sumPrice: "50000 р.",
		},
	]
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className="myPurch_content">
					<p className="title">Мои покупки</p>

					<Table
						columns={columns}
						dataSource={data}
						bordered={true}
						pagination={false}
						scroll={{ x: 900 }}
					/>

					<div className="next_page">{/* <Pagination /> */}</div>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default MyPurshaases
