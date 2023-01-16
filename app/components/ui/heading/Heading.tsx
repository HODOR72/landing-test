import cn from 'clsx'
import { FC } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
	title: string
	isBig?: boolean
	isSmall?: boolean
	subTitle?: string
}

const Heading: FC<IHeading> = ({
	title,
	isBig = false,
	isSmall = false,
	subTitle,
}) => {
	return (
		<>
			<p
				className={cn(
					styles.title,
					{ [styles.smallTitle]: isSmall },
					{ [styles.bigTitle]: isBig },
					{ [styles.margin]: subTitle }
				)}
			>
				{title}
			</p>
			{subTitle && <p className={styles.subTitle}>{subTitle}</p>}
		</>
	)
}
export default Heading
