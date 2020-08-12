import React from "react"

import {
	Form,
	Input,
	DatePicker,
} from "antd"

import "./style.scss"

const Forms = () => {
	const config = {
		rules: [{ type: "object", required: true, message: "Please select time!" }],
	}
	
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 8 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 },
		},
	}
	
	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log("Received values of form: ", values)
	}

	
	return (
		<>
			<Form
				{...formItemLayout}
				form={form}
				name='register'
				onFinish={onFinish}
				initialValues={{
					residence: ["zhejiang", "hangzhou", "xihu"],
					prefix: "86",
				}}
				scrollToFirstError
			>
				<Form.Item
					name='name'
					className='inp_low'
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите смоё имя",
							whitespace: true,
						},
					]}
				>
					<Input placeholder='Имя' />
				</Form.Item>

				<Form.Item
					name='surName'
					className='inp_low'
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите свою фамилию",
							whitespace: true,
						},
					]}
				>
					<Input placeholder='Фамилия' />
				</Form.Item>

				<Form.Item
					name='secondName'
					className='inp_low'
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите своё отчество",
							whitespace: true,
						},
					]}
				>
					<Input placeholder='Отчество' />
				</Form.Item>

				<Form.Item name='date-picker' className='inp_low' {...config}>
					<DatePicker placeholder='Дата рождения' />
				</Form.Item>

				<Form.Item
					name='email'
					className='inp_normal'
					rules={[
						{
							type: "email",
							message: "Неправильно введен E-mail!",
						},
						{
							required: true,
							message: "Вы не ввели E-mail!",
						},
					]}
				>
					<Input placeholder='Почта' />
				</Form.Item>

				<Form.Item
					name='password'
					className='inp_normal'
					rules={[
						{
							required: true,
							message: "Пожалуйста введите пароль",
						},
					]}
					hasFeedback
				>
					<Input.Password placeholder='Пароль' />
				</Form.Item>

				<Form.Item
					name='confirm'
					className='inp_normal'
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Подтвердите пароль",
						},
						({ getFieldValue }) => ({
							validator(rule, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve()
								}
								return Promise.reject("Пароли не совпадают")
							},
						}),
					]}
				>
					<Input.Password placeholder='Подтвердите пароль' />
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
			</Form>
		</>
	)
}

export default Forms
