import { FC } from 'react'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'

import { Field } from '@/components/ui'

import { validEmail, validPhone } from '@/shared/regex'

interface IContactFields {
	register: UseFormRegister<any>
	formState: FormState<FieldValues>
}

const ContactFields: FC<IContactFields> = ({
	register,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				{...register('name', {
					required: true,
				})}
				placeholder="Enter a name"
				error={errors.name}
			/>
			<Field
				{...register('phone', {
					required: true,
					pattern: {
						value: validPhone,
						message: 'Please enter your phone',
					},
				})}
				placeholder="Enter your phone"
				error={errors.phone}
			/>
			<Field
				{...register('email', {
					required: true,
					pattern: {
						value: validEmail,
						message: 'Please enter your email address',
					},
				})}
				placeholder="Enter your email address"
				error={errors.email}
			/>
		</>
	)
}
export default ContactFields
