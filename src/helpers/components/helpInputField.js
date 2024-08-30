import {
	REGEX_CLEAR_SPACE,
	REGEX_NUMBER_DIGITS,
	REGEX_NUMBER_SPECIAL,
	REGEX_SPACE,
	REGEX_TEXT,
	REGEX_IP
} from "src/utils/regex"

export const helpInputField = () => {

	const forceLowerCase = (value) => value.replace(REGEX_CLEAR_SPACE, '').toLowerCase()
	const forceName = (value) => value.replace(REGEX_NUMBER_SPECIAL, '').replace(REGEX_NUMBER_DIGITS, '').replace(REGEX_SPACE, ' ').toUpperCase()
	const forceNumber = value => value.replace(REGEX_TEXT, '')
	const forceTextSpace = value => value.replace(REGEX_SPACE, ' ')
	const forceTextWhitOutSpace = value => value.replace(REGEX_SPACE, '')
	const forceIp = value => value.replace(!REGEX_IP, '')
	return {
		forceTextWhitOutSpace,
		forceLowerCase,
		forceTextSpace,
		forceNumber,
		forceName,
		forceIp
	}
}
