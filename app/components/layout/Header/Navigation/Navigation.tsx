import { FC } from 'react'

import LogoWrapper from '../../Logo/Logo'

import { links } from './Navigation.data'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<LogoWrapper />
			<nav>
				{links.map((link, i) => (
					<a href="#" key={i}>
						{link}
					</a>
				))}
			</nav>
		</div>
	)
}
export default Navigation
