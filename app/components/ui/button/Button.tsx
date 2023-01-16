import { FC } from 'react'

import styles from './Button.module.scss'

interface IButton {
	text: string
	isDisabled?: boolean
}

const Button: FC<IButton> = ({ text, isDisabled = false }) => {
	return (
		<button className={styles.button} disabled={isDisabled}>
			{text}
		</button>
	)
}
export default Button
