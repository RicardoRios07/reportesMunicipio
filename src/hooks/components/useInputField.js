import { helpInputField } from "src/helpers/components/helpInputField"

export const useInputField = () => {

	const { forceLowerCase, forceName, forceNumber, forceTextSpace, forceIp, forceTextWhitOutSpace } = helpInputField()

	const typeInput = {
		textWhitOutSpace: (value) => forceTextWhitOutSpace(value),
		textWithSpace: (value) => forceTextSpace(value),
		email: (value) => forceLowerCase(value),
		number: (value) => forceNumber(value),
		name: (value) => forceName(value),
		ip: (value) => forceIp(value),
		default: (value) => value,
	}


	return {
		typeInput
	}
}
