import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, ...rest }, ref) => {
		return (
			<div className={styles.wrapper}>
				<div className={styles.field}>
					<input
						ref={ref}
						type="text"
						placeholder={placeholder}
						autoComplete="off"
						{...rest}
						className={cn({ [styles.fieldError]: error?.message })}
					/>
				</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)
export default Field
