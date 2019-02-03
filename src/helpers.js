export const getDayName = () => {
	const now = new Date()
	const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	return days[now.getDay()]
}

export const getMonthName = () => {
	const now = new Date()
	const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
	return months[now.getMonth()]
}

export const getCurrentDate = () => new Date().getDate()