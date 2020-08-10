import React from "react"

import Slider from "react-slick"

const TwiceSlider = () => {
	const [navs1, setNavs1] = React.useState(null)
	const [navs2, setNavs2] = React.useState(null)

	const nav1 = React.useRef(null)
	const nav2 = React.useRef(null)
	const updSlider = React.useCallback(() => {
		setNavs1(nav1.current)
		setNavs2(nav2.current)
	}, [])
	React.useEffect(() => {
		updSlider()
	}, [updSlider])
	return (
		<>
			<div className='pp_slider'>
				<Slider asNavFor={navs2} ref={nav1}>
					<div>
						<img src='../img/stroller.jpg' alt='' />
					</div>
					<div>
						<img src='../img/post.png' alt='' />
					</div>
					<div>
						<img src='../img/logo.png' alt='' />
					</div>
					<div>
						<img src='../img/p1.jpg' alt='' />
					</div>
					<div>
						<img src='../img/photo.png' alt='' />
					</div>
				</Slider>
				<Slider
					asNavFor={navs1}
					ref={nav2}
					slidesToShow={3}
					swipeToSlide={true}
					focusOnSelect={true}
				>
					<div>
						<img src='../img/stroller.jpg' alt='' />
					</div>
					<div>
						<img src='../img/post.png' alt='' />
					</div>
					<div>
						<img src='../img/logo.png' alt='' />
					</div>
					<div>
						<img src='../img/p1.jpg' alt='' />
					</div>
					<div>
						<img src='../img/photo.png' alt='' />
					</div>
				</Slider>
			</div>
		</>
	)
}

export default TwiceSlider
