import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import { technologies } from './Technologies.data'
import styles from './Technologies.module.scss'

const Technologies: FC = () => {
	return (
		<section className={styles.technologies}>
			<Heading
				title="Programming technologies"
				isBig
				subTitle="By the end, you’ll have the portfolio and interview skills you need to start your new career."
			/>
			<div>
				{technologies.map((technology, i) => (
					<div className={styles.technology} key={i}>
						<Image
							src={technology.photo}
							width="162"
							height="136"
							alt="technology"
							draggable={false}
						/>
						<p>{technology.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}
export default Technologies
