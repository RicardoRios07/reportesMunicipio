import { string } from "yup"

export const formValidations = {
	username: ({ }) => string('').required('Este campo es requerido').email('Ingresa un email valido'),
	email: ({ }) => string('').required('Este campo es requerido').email('Ingresa un email valido'),
	password: ({ }) => string('').required('Este campo es requerido'),
	required: ({ min = 5, max = 100 }) => string('')
		.required('Este campo es requerido')
		.min(min, `Número mínimo de caracteres ${min}`)
		.max(max, `Número máximo de caracteres ${max}`),
	select: ({ }) => string().required('Este campo es requerido')

}
