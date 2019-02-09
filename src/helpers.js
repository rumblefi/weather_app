export const getDayName = (dateStr) => {
    dateStr = dateStr || new Date()
        .toISOString()
        .slice(0, 10);
    const date = new Date(Date.parse(dateStr));
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];
    return days[date.getDay()];
}

export const getMonthName = (dateStr) => {
    dateStr = dateStr || new Date()
        .toISOString()
        .slice(0, 10);
    const date = new Date(Date.parse(dateStr));
    const months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ]
    return months[date.getMonth()]
}

export const getDate = (dateStr) => {
    dateStr = dateStr || new Date()
    .toISOString()
    .slice(0, 10);
    const date = new Date(Date.parse(dateStr));     
    return date.getDate()
}