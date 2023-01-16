import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import { Arrow, StepLine } from '@/assets/images/svg'

import styles from './Steps.module.scss'

interface IStepItem {
	title: string
	text: string
	index: number
}

const StepItem: FC<IStepItem> = ({ title, text, index }) => {
	return (
		<div className={styles.step}>
			<Heading title={`Step ${index + 1}`} isSmall />
			<Heading title={title} />
			<p>{text}</p>
			<Image
				draggable={false}
				src={StepLine}
				width={148}
				height={228}
				alt=""
				className={cn({ [styles.stepLeft]: index % 2 !== 0 })}
			/>
			<Image
				draggable={false}
				src={Arrow}
				width={80}
				height={24}
				alt=""
				className={cn(styles.arrow, {
					[styles.arrowLeft]: index % 2 !== 0,
				})}
			/>
		</div>
	)
}
export default StepItem
