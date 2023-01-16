import axios from 'api/interceptors'
import { getFormUrl } from 'config/api.config'

import { IContactInput } from '@/shared/types'

export const FormService = {
	async create(data: IContactInput) {
		return axios.post<string>(getFormUrl(''), data)
	},
}
