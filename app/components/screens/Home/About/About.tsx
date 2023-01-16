import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import { Line } from '@/assets/images/svg'

import { mentors } from './About.data'
import styles from './About.module.scss'

const About: FC = () => {
	return (
		<section className={styles.about}>
			<Heading title="About Us" isBig />
			<div>
				<div>
					<Heading title="Mentors" />
					<div className={styles.mentors}>
						<Image src={Line} width={394} height={156} alt="Line" />
						{mentors.map((mentor, i) => (
							<div key={i}>
								<Image
									src={mentor.photo}
									width={184}
									height={184}
									alt="Photo a person"
									draggable={false}
								/>
								<Heading title={mentor.title} isSmall />
								<p>{mentor.text}</p>
							</div>
						))}
					</div>
				</div>
				<p>
					Front-end engineers work closely with designers to make websites
					beautiful, functional, and fast. This Career Path will teach you not
					only the necessary languages and technologies, but how to think like a
					front-end engineer, too.
				</p>
			</div>
		</section>
	)
}
export default About
