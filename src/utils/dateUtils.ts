/* External dependencies */
import moment from 'moment'
import 'moment/locale/ko'
import 'moment-timezone'

moment.tz.setDefault('Asia/Seoul')

export const getDate = (date: Date): string => {
  return moment(date).format('M월 D일')
}

export const getTime = (date: Date): any => {
  const newDate = moment(date)

  if (newDate.minute() === 0) {
    return newDate.format('A h시')
  }

  return newDate.format('A h시 mm분')
}
