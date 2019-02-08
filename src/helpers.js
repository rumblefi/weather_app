export const getDayName = (date) => {
	const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
	return days[date.getDay()]
}

export const getMonthName = (date) => {
	const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
	return months[date.getMonth()]
}

export const getDate = (date) => date.getDate()