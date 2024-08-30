import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { TextField } from '@mui/material'
import { useInputField } from 'src/hooks/components/useInputField'

const InputField = ({ label, placeholder, id, name, error, helperText, size, register, type, typeTextField, defaultValue, setValue, ...rest }) => {
	const { typeInput } = useInputField()

	useEffect(() => {
		if (!defaultValue) return
		setValue(name, defaultValue)
		return () => { }
	}, [])

	return (
		<TextField
			autoComplete='nope'
			label={label}
			margin='normal'
			placeholder={placeholder}
			id={id}
			name={name}
			size={size}
			error={error}
			helperText={helperText}
			onInput={({ target }) => target.value = typeInput[type](target.value)}
			fullWidth
			type={typeTextField}
			{...register(name)}
			{...rest}
		/>
	)
}

InputField.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	error: PropTypes.bool,
	helperText: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	register: PropTypes.func.isRequired,
	type: PropTypes.string,
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	setValue: PropTypes.func
}

InputField.defaultProps = {
	error: false,
	size: 'small',
	type: 'default',
	setValue: () => { }
}

export default InputField