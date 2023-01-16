import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import { Heading } from '@/components/ui'

import { Minus, Plus } from '@/assets/images/svg'

import styles from './Questions.module.scss'

interface IQuestionItem {
	title: string
	text: string
}

const QuestionItem: FC<IQuestionItem> = ({ title, text }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.block} onClick={() => setIsOpen(!isOpen)}>
			<div>
				<Heading title={title} isSmall />
				{isOpen ? (
					<Image
						src={Plus}
						width={15}
						height={15}
						alt="Open"
						draggable={false}
					/>
				) : (
					<Image
						src={Minus}
						width={15}
						height={3}
						alt="Close"
						draggable={false}
					/>
				)}
			</div>
			<p className={cn({ [styles.hidden]: !isOpen })}>{text}</p>
		</div>
	)
}
export default QuestionItem
