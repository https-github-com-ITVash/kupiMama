import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Menu } from "antd"
import { MenuOutlined } from "@ant-design/icons"

import { MainNav } from "../../components"

import "./style.scss"

const { SubMenu } = Menu

const Header = () => {
	const totalPrice = useSelector(({ cart }) => cart.totalPrice)
	React.useEffect(() => {
		window.scrollTo(0, 0)
		console.log("Хедер смонтировался")
		return () => {
			window.scrollTo(0, 0)
			console.log("Компонент будет размантирован")
		}
	}, [])

	const [mobil, setMobil] = React.useState(1)
	const [mobileVisible, setMobileVisible] = React.useState(false)
	const handleClick = (e) => {
		setMobil(e.key)
	}
	return (
		<header>
			<div className='topNav'>
				<Link to='/sale'>Распродажа</Link>
				<Link to='/delivery'>Доставка и оплата</Link>
				<Link to='/warranty'>Гарантии</Link>
				<Link to='/contacts'>Контакты</Link>
				<Link to='/shops'>Магазины</Link>
			</div>
			<div className='nav_wrap_mobil'>
				<span className='mobilTrigger'>
					<label
						onClick={() => {
							setMobileVisible((prev) => !prev)
						}}
					>
						<MenuOutlined />
						Меню
					</label>
				</span>
				{mobileVisible && (
					<Menu
						theme={"light"}
						onClick={handleClick}
						style={{ width: 256 }}
						defaultOpenKeys={[""]}
						selectedKeys={[mobil]}
						mode='inline'
					>
						<SubMenu key='sub1' title='Гигиена и уход'>
							<Menu.Item key='1'>
								<img src='img/logo.png' alt='' /> Asasd qwe
							</Menu.Item>
							<Menu.Item key='2'>
								<img src='img/post.png' alt='' /> Dsdwdwd sas
							</Menu.Item>
							<Menu.Item key='3'>
								<img src='img/post.png' alt='' /> Rewefd sdfs
							</Menu.Item>
							<Menu.Item key='4'>
								<img src='img/award1.png' alt='' /> Fsdfsd sd sd ds
							</Menu.Item>
						</SubMenu>
						<SubMenu key='sub2' title='Питание и кормление'>
							<Menu.Item key='5'>Option 5</Menu.Item>
							<Menu.Item key='6'>Option 6</Menu.Item>
						</SubMenu>
						<SubMenu key='sub3' title='Прогулка и путишествие'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub4' title='Детская комната'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub5' title='Одежда и обувь'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub6' title='Игрушки и игры'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub7' title='Школа и констовары'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub8' title='Книги'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub9' title='Спорт и отдых'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
						<SubMenu key='sub10' title='Ещё'>
							<Menu.Item key='9'>Option 9</Menu.Item>
							<Menu.Item key='10'>Option 10</Menu.Item>
							<Menu.Item key='11'>Option 11</Menu.Item>
							<Menu.Item key='12'>Option 12</Menu.Item>
						</SubMenu>
					</Menu>
				)}
			</div>
			<div className='headers'>
				<div className='headers_logo'>
					<Link to='/'>
						<img src='../img/logo.jpg' alt='Логотип' />
						<p>МИР ДЕТСТВА!</p>
					</Link>
				</div>

				<div className='headers_contacts'>
					<p>г.Донецк, Артема 159</p>
					<p>+380713360357</p>
					<p>11:00 - 19:00 Пн-Пт</p>
				</div>

				<div className='headers_search'>
					<form action=''>
						<input type='search' placeholder='Поиск по сайту' />
						<button type='submit'>
							<i className='fa fa-search' aria-hidden='true'></i>
						</button>
					</form>
				</div>

				<div className='headers_input'>
					<Link to='input'>Войти</Link>
					<Link to='registration'>Регистрация</Link>
				</div>

				<div className='headers_account'>
					<Link to='basket' className={"basket"}>
						<i className='fa fa-shopping-basket' aria-hidden='true'></i>
						<p>{totalPrice}p.</p>
					</Link>
					<Link to='personalArea'>Иванченко Григорий</Link>
				</div>
			</div>

			<MainNav />
		</header>
	)
}
export default Header
