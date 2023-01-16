import { Button } from '@/components/ui'

import styles from './Header.module.scss'
import Navigation from './Navigation/Navigation'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<Navigation />
				<div>
					<h1>Front-End</h1>
					<p>
						Make UIs and websites beautiful, functional, and fast. Cover all the
						topics that expensive bootcamps teach (and more).
					</p>
				</div>
				<div>
					<Button text="Start my career change" />
					<h2>Developer</h2>
				</div>
				<p>Courses</p>
			</div>
		</header>
	)
}
export default Header
