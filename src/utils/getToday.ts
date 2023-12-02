const date = new Date()
const year = date.getFullYear()
const month = ("0" + (date.getMonth() + 1)).slice(-2)
const day = ("0" + date.getDate()).slice(-2)
const hour = ("0" + date.getHours()).slice(-2)
const minutes = ("0" + date.getMinutes()).slice(-2)
const nextDay = ("0" + (date.getDate() + 1)).slice(-2)
export const getToday = `${day}-${month}-${year}`
export const getNextDay = `${nextDay}-${month}-${year}`
export const getCheckInDay = `${year}-${month}-${day}T${hour}:${minutes}`
export const getCheckOutDay = `${year}-${month}-${nextDay}T${hour}:${minutes}`
