import React from "react"
import { Form, Input, Button } from "antd"
import { Headers, Footer, SectionWrap } from "../components"

const input = () => {
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	}
	const tailLayout = {
		wrapperCol: { offset: 8, span: 16 },
	}
	const onFinish = (values) => {
		console.log("Success:", values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo)
	}
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className='input_content'>
					<p className='title'>Вход</p>
					<Form
						{...layout}
						name='basic'
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							label='Логин'
							name='username'
							required='true'
							rules={[{ required: true, message: "Пожалуйста, введите логин" }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label='Пароль'
							required='true'
							name='password'
							rules={[
								{ required: true, message: "Пожаулйста, введите пароль" },
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type='primary' htmlType='submit'>
								Войти
							</Button>
						</Form.Item>
					</Form>
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default input
