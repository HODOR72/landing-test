import Image from 'next/image'
import { FC, Fragment } from 'react'

import { Heading } from '@/components/ui'

import { slides, slidesText } from './Slider.data'
import styles from './Slider.module.scss'

interface ISlider {
	activeSlide: number
}

const Slider: FC<ISlider> = ({ activeSlide }) => {
	return (
		<div className={styles.slider}>
			<div className={styles.info}>
				{slidesText[activeSlide].map((slide, i) => (
					<Fragment key={i}>
						<Heading title={slide.title} isSmall />
						<p>{slide.text}</p>
					</Fragment>
				))}
			</div>
			<div className={styles.gallery}>
				{slides[activeSlide].map((slide, i) => (
					<Image
						src={slide}
						width={i === 0 ? 392 : 184}
						height={422}
						alt="Human photo"
						key={i}
					/>
				))}
			</div>
		</div>
	)
}
export default Slider
