import React from "react"
import PropTypes from "prop-types"
import { Pagination as PaginationBase } from "antd"

import "./style.scss"

const Pagination = ({ length, pages, setPages }) => {
	const handleChange = (e) => {
		const newIndex = (e - 1) * pages.pages
		const end = Math.min(newIndex + pages.pages)
		setPages({ ...pages, current: e, startIndex: newIndex, endIndex: end })
	}
	return (
		<div className='next_page'>
			<PaginationBase
				current={pages.current}
				pageSize={pages.pages}
				total={length}
				onChange={handleChange}
				showSizeChanger={false}
			/>
		</div>
	)
}

Pagination.propTypes = {
	length: PropTypes.number.isRequired,
	pages: PropTypes.object.isRequired,
	setPages: PropTypes.func.isRequired,
}

export default Pagination
