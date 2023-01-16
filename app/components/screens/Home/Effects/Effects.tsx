import Image from 'next/image'

import { blobs, stars } from './Effects.dats'
import styles from './Effects.module.scss'

const Effects = () => {
	return (
		<>
			{blobs.map((blob, i) => (
				<div
					className={styles.blob}
					style={{ left: blob.x, top: blob.y }}
					key={i}
				/>
			))}
			{stars.map((star, i) => (
				<Image
					src={star.photo}
					className={styles.star}
					style={{ left: star.x, top: star.y }}
					key={i}
					alt="star"
				/>
			))}
		</>
	)
}
export default Effects
