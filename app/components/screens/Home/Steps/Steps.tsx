import { FC } from 'react'

import { Heading } from '@/components/ui'

import StepItem from './StepItem'
import styles from './Steps.module.scss'
import { steps } from './steps.data'

const Steps: FC = () => {
	return (
		<section className={styles.steps}>
			<Heading title="Steps" isBig />
			<div>
				{steps.map((step, i) => (
					<StepItem {...step} index={i} key={i} />
				))}
				<span className={styles.line} />
			</div>
		</section>
	)
}
export default Steps
