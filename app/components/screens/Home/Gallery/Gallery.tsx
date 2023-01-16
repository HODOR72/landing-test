import Image from 'next/image'
import { FC } from 'react'

import { Heading } from '@/components/ui'

import { Gallery1, Gallery2, Gallery3, Gallery4 } from '@/assets/images'

import styles from './Gallery.module.scss'

const Gallery: FC = () => {
	return (
		<section className={styles.gallery}>
			<Heading title="Gallery" isBig />
			<div>
				<div>
					<p>
						By the end of this course, you will be able to develop and publish
						your very own Google Chrome extension! In this course we will focus
						on coding exercises and projects.
					</p>
					<Image
						src={Gallery4}
						width={288}
						height={434}
						alt="Gallery photo"
						draggable={false}
					/>
				</div>
				<div>
					<div>
						<Image
							src={Gallery1}
							width={600}
							height={434}
							alt="Gallery photo"
							draggable={false}
						/>
						<Image
							src={Gallery2}
							width={288}
							height={209}
							alt="Gallery photo"
							draggable={false}
						/>
						<Image
							src={Gallery3}
							width={288}
							height={209}
							alt="Gallery photo"
							draggable={false}
						/>
					</div>
					<p>
						If you would like to learn web development and get a job in the tech
						industry, you are going to LOVE this course! Learn HTML, CSS,
						JavaScript, Bootstrap and more with over 15 hours of HD video
						tutorials! This course was designed to be extremely beginner
						friendly. We will begin with the very basics of HTML and build a
						simple web page.
					</p>
				</div>
			</div>
		</section>
	)
}
export default Gallery
