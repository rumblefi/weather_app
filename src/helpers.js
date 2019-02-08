export const getDayName = (date) => {
	const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
	return days[date.getDay()]
}

export const getMonthName = (date) => {
	const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
	return months[date.getMonth()]
}

export const getDate = (date) => date.getDate()