import React from "react"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"

import { actFilters } from "../../redux/actions"

import "./style.scss"

const MainFilter = ({ filter }) => {
	const dispatch = useDispatch()
	const [filtered, setFiltered] = React.useState("")
	const [sorted, setSorted] = React.useState("")
	const filterType = [
		"Гигиена и уход",
		"Питание и кормление",
		"Прогулка и путишествие",
		"Детская комната",
		"Одежда и обувь",
		"Игрушки и игры",
		"Школа и констовары",
		"Книги",
		"Спорт и отдых",
	]
	const sortBy = [
		{ value: "popular", label: "По Популярности", order: "desc" },
		{ value: "price_one", label: "От дешевого к дорогому", order: "asc" },
		{ value: "price_one", label: "От дорогого к дешевому", order: "desc" },
	]
	const filter_out = (e, i) => {
		setFiltered(e)
		dispatch(actFilters.setCat(i))
	}
	const sorted_out = (e, v, o) => {
		setSorted(e)
		dispatch(actFilters.setSort(v, o))
	}
	const filterSort = (
		<Menu>
			{sortBy &&
				sortBy.map((item, index) => (
					<Menu.Item
						key={index}
						onClick={() =>
							sorted_out("По популярности", item.value, item.order)
						}
					>
						{item.label}
					</Menu.Item>
				))}
		</Menu>
	)

	const filterFilter = (
		<Menu>
			<Menu.Item onClick={() => filter_out("Фильтр", null)}>Все</Menu.Item>
			{filterType &&
				filterType.map((item, index) => (
					<Menu.Item key={index} onClick={() => filter_out(item, index)}>
						{item}
					</Menu.Item>
				))}
		</Menu>
	)
	const activ = sortBy.find((obj) => obj.value === filter.type)
	return (
		<div className="mc_sort">
			<Dropdown overlay={filterSort} trigger={["click"]}>
				<button
					className="ant-dropdown-link"
					onClick={(e) => e.preventDefault()}
				>
					{sorted ? sorted : "Сортировка"} <DownOutlined />
				</button>
			</Dropdown>

			<Dropdown overlay={filterFilter} trigger={["click"]}>
				<button
					className="ant-dropdown-link"
					onClick={(e) => e.preventDefault()}
				>
					{filtered ? filtered : "Фильтр"} <DownOutlined />
				</button>
			</Dropdown>

			<div className="mcs_bg">
				<div className="for_boy">
					<input type="checkbox" id="boy" />
					<label htmlFor="boy">Мальчик</label>
				</div>

				<div className="for_girl">
					<input type="checkbox" id="girl" className="ch_girl" />
					<label htmlFor="girl" className="label_girl">
						Девочка
					</label>
				</div>
			</div>
		</div>
	)
}

export default MainFilter
