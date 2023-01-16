import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Heading } from '@/components/ui'

import { IContactInput } from '@/shared/types'

import { FormService } from '@/services/form.service'

import styles from './Contact.module.scss'
import ContactFields from './ContactFields'

const Contact: FC = () => {
	const { register, handleSubmit, formState, reset } = useForm<IContactInput>({
		mode: 'onSubmit',
	})

	const onSubmit: SubmitHandler<IContactInput> = (data) => {
		FormService.create(data)
		reset()
	}

	return (
		<section className={styles.contact}>
			<Heading
				title="Contact us"
				isBig
				subTitle="Do you have any kind of help please contact with us."
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ContactFields register={register} formState={formState} />
				<Button text="Send" />
			</form>
		</section>
	)
}
export default Contact
