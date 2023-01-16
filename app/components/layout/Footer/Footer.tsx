import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import LogoWrapper from '../Logo/Logo'

import { socialLinks } from './Footer.data'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.wrapper)}>
				<div>
					<LogoWrapper />
					<p className={styles.text}>
						Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
					</p>
				</div>
				<div>
					<h3 className={styles.title}>Company</h3>
					<div className={styles.linksWrapper}>
						<div className={styles.links}>
							<a href="#">About Us</a>
							<a href="#">Steps</a>
							<a href="#">FAQs</a>
						</div>
						<div className={styles.links}>
							<a href="#">Review</a>
							<a href="#">Gallery</a>
						</div>
					</div>
				</div>
				<div>
					<h3 className={styles.title}>Social media</h3>
					<div className={styles.soical}>
						{socialLinks.map((link, i) => (
							<a href="#" key={i}>
								<Image src={link} width={12} height={22} alt="Soical link" />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
