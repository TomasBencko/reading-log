
import moment from 'moment'

export function decimalToHours(hoursInDecimal: number) {

  const duration = moment.duration(hoursInDecimal, 'hours')
  const remainingTimeFormated = `${duration.hours()}h ${duration.minutes()}m`
  return remainingTimeFormated
}
