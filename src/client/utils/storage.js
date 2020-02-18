export const get = (key) => {
	if (window && window.localStorage) {
		const valString = window.localStorage.getItem(key);

		try {
			return JSON.parse(valString)
		} catch (error) {
			console.error(error);
		}
	}

	return null;
}

export const set = (key, val) => {
	if (window && window.localStorage) {
		window.localStorage.setItem(key, JSON.stringify(val))

		return true
	}

	return false
}
