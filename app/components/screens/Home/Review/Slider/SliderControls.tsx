import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import { SlideArrow, SlideArrowL } from '@/assets/images/svg'

import { slides } from './Slider.data'
import styles from './Slider.module.scss'

interface ISliderControls {
	setActiveSlide: (arg: number) => void
	activeSlide: number
}

const SliderControls: FC<ISliderControls> = ({
	setActiveSlide,
	activeSlide,
}) => {
	return (
		<div className={styles.controls}>
			<div>
				<Heading title={`${activeSlide + 1}/`} isSmall />
				<sup>3</sup>
			</div>
			<div>
				<button
					onClick={() =>
						setActiveSlide(
							activeSlide === 0 ? slides.length - 1 : activeSlide - 1
						)
					}
				>
					<Image src={SlideArrowL} width={40} height={40} alt="prev" />
				</button>
				<button
					onClick={() =>
						setActiveSlide(
							activeSlide === slides.length - 1 ? 0 : activeSlide + 1
						)
					}
				>
					<Image src={SlideArrow} width={40} height={40} alt="next" />
				</button>
			</div>
		</div>
	)
}
export default SliderControls
