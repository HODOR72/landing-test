import { FC, useState } from 'react'

import { Heading } from '@/components/ui'

import styles from './Review.module.scss'
import Slider from './Slider/Slider'
import SliderControls from './Slider/SliderControls'

const Review: FC = () => {
	const [activeSlide, setActiveSlide] = useState(0)

	return (
		<section className={styles.review}>
			<Heading title="Review" isBig />
			<SliderControls
				setActiveSlide={setActiveSlide}
				activeSlide={activeSlide}
			/>
			<Slider activeSlide={activeSlide} />
		</section>
	)
}
export default Review
