export const getDayName = (date = new Date()) => {
	const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
	return days[date.getDay()]
}

export const getMonthName = (date = new Date()) => {
	const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
	return months[date.getMonth()]
}

export const getDate = (date = new Date()) => date.getDate()