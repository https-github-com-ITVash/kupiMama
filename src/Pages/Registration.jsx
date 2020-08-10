import React from "react"
import { Form, Button } from "antd"
import { Headers, Footer, SectionWrap, Forms } from "../components"

const Registration = () => {
	/* const { Option } = Select
	const TimeRelatedForm = () => {
		const onFinish = (fieldsValue) => {
			// Should format date value before submit.
			const rangeValue = fieldsValue["range-picker"]
			const rangeTimeValue = fieldsValue["range-time-picker"]
			const values = {
				...fieldsValue,
				"date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
				"date-time-picker": fieldsValue["date-time-picker"].format(
					"YYYY-MM-DD HH:mm:ss",
				),
				"month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
				"range-picker": [
					rangeValue[0].format("YYYY-MM-DD"),
					rangeValue[1].format("YYYY-MM-DD"),
				],
				"range-time-picker": [
					rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
					rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
				],
				"time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
			}
			console.log("Received values of form: ", values)
		}
	}

	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log("Received values of form: ", values)
	} */
	return (
		<>
			<Headers />
			<SectionWrap>
				<div className='registration_content'>
					<p className='title'>Регистрация</p>
					{/* <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              className="inp_low"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите смоё имя",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Имя" />
            </Form.Item>

            <Form.Item
              name="surName"
              className="inp_low"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите свою фамилию",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Фамилия" />
            </Form.Item>

            <Form.Item
              name="secondName"
              className="inp_low"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите своё отчество",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Отчество" />
            </Form.Item>

            <Form.Item name="date-picker" className="inp_low" {...config}>
              <DatePicker placeholder="Дата рождения" />
            </Form.Item>

            <Form.Item
              name="email"
              className="inp_normal"
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
              <Input placeholder="Почта" />
            </Form.Item>

            <Form.Item
              name="password"
              className="inp_normal"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите пароль",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Пароль" />
            </Form.Item>

            <Form.Item
              name="confirm"
              className="inp_normal"
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
                      return Promise.resolve();
                    }
                    return Promise.reject("Пароли не совпадают");
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Подтвердите пароль" />
            </Form.Item>

            <Form.Item
              name="phone"
              className="inp_normal"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите свой номер телефона",
                },
              ]}
            >
              <Input placeholder="Телефон" />
            </Form.Item> */}

					<Forms />

					<div className='reg_inf'>
						<p className='reg_title'>Соглашение на обработку личных данных!</p>
						<br />
						<p>
							Статья́ — это жанр журналистики, в котором автор ставит задачу
							проанализировать общественные ситуации, процессы, явления, прежде
							всего с точки зрения закономерностей, лежащих в их основе.
							<br />
							<br />
							Такому жанру как статья присуща ширина практических обобщений,
							глубокий анализ фактов и явлений, четкая социальная
							направленность[источник не указан 3543 дня]. В статье автор
							рассматривает отдельные ситуации как часть более широкого явления.
							Автор аргументированно пишет о своей точке зрения.
							<br />
							<br />В статье выражается развернутая обстоятельная
							аргументированная концепция автора или редакции по поводу
							актуальной социологической проблемы. Также в статье журналист
							обязательно должен интерпретировать факты (это могут быть цифры,
							дополнительная информация, которая будет правильно расставлять
							акценты и ярко раскрывать суть вопроса).
						</p>
					</div>

					<div className='reg_check'>
						<input type='checkbox' id='reg_check' />
						<label for='reg_check'>Я согласен на обаботку личных данных!</label>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'
								className='login-form-button'
							>
								<p>Зарегистрироваться</p>
							</Button>
						</Form.Item>
					</div>
					{/* </Form> */}
				</div>
			</SectionWrap>
			<Footer />
		</>
	)
}

export default Registration
