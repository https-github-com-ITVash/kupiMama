import React from "react"

import "./style.scss"

import PropTypes from "prop-types"

import { Form, Input, Button } from "antd"

const FeedBackForm = ({ children }) => {
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	}

	const validateMessages = {
		required: "label is required!",
		types: {
			email: "label is not validate email!",
			number: "label is not a validate number!",
		},
		number: {
			range: "label must be between min and max",
		},
	}

	const onFinish = (values) => {
		console.log("Received values of form: ", values)
	}
	return (
		<>
			<div className='feedbackForm_content'>
				<Form
					{...layout}
					name='nest-messages'
					onFinish={onFinish}
					validateMessages={validateMessages}
					initialValues={{
						prefix: "380",
					}}
					scrollToFirstError
				>
					<Form.Item
						name='email'
						rules={[
							{
								type: "email",
								message: "Email введен неверно",
							},
							{
								required: true,
								message: "Пожалуйста введите Email",
							},
						]}
					>
						<Input placeholder='Email' />
					</Form.Item>

					<Form.Item
						name='phone'
						className='inp_normal'
						rules={[
							{
								required: true,
								message: "Пожалуйста, введите свой номер телефона",
							},
						]}
					>
						<Input placeholder='Телефон' />
					</Form.Item>

					<Form.Item name={["user", "name"]} rules={[{ required: true }]}>
						<Input placeholder='Имя' />
					</Form.Item>

					<Form.Item name={["user", "introduction"]}>
						<Input.TextArea placeholder='Текст сообщения' />
					</Form.Item>

					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type='primary' htmlType='submit'>
							Отправить
						</Button>
					</Form.Item>
				</Form>
				{children}
			</div>
		</>
	)
}

FeedBackForm.propTypes = {
	children: PropTypes.any.isRequired,
}

export default FeedBackForm
