import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import { Question } from '@/assets/images'

import QuestionItem from './QuestionItem'
import { questions } from './Questions.data'
import styles from './Questions.module.scss'

const Questions: FC = () => {
	return (
		<section className={styles.questions}>
			<Heading title="Frequently Asked Questions" isBig />
			<div>
				<div>
					<p>Do you have any kind of questions? We are here to help.</p>
					<Image
						src={Question}
						width={688}
						height={810}
						alt="Question"
						draggable={false}
					/>
				</div>
				<div>
					{questions.map((question, i) => (
						<QuestionItem {...question} key={i} />
					))}
				</div>
			</div>
		</section>
	)
}
export default Questions
