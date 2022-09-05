
import moment from 'moment'
import type { BookData, SessionData } from './types'



export function decimalToHours(hoursInDecimal: number) {

  const duration = moment.duration(hoursInDecimal, 'hours')
  const remainingTimeFormated = `${duration.hours()}h ${duration.minutes()}m`
  return remainingTimeFormated
}

export function decimalToMinutes(minutesInDecimal: number) {

  const duration = moment.duration(minutesInDecimal, 'minutes')
  const remainingTimeFormated = `${duration.minutes()}m ${duration.seconds()}s`
  return remainingTimeFormated
}





// GETTERS FOR BOOK DATA

export function getPageCount(bookData: BookData) {
  return bookData.pageEnds - bookData.pageStarts
}

export function getAuthors(bookData: BookData) {
  return bookData.authors.join(', ')
}


export function getPagesRead(bookData: BookData) {
  return bookData.sessions.reduce((a, b) => a + b.pagesRead, 0)
}

export function getCompletion(bookData: BookData) {
  const pagesRead = getPagesRead(bookData)
  return pagesRead / bookData.pageCount
}
export function getCompletionFormated(bookData: BookData) {
  return `${Math.round(getCompletion(bookData) * 100)}%`
}

export function getReadTime(bookData: BookData) {
  return bookData.sessions.reduce((a ,b) => a + b.readTime, 0)
}
export function getReadTimeFormated(bookData: BookData) {
  return decimalToHours(Math.round(getReadTime(bookData) * 10) / 10)
}

export function getRemainingTime(bookData: BookData) {
  const readTime = getReadTime(bookData)
  const completion = getCompletion(bookData)
  return readTime / completion
}
export function getRemainingTimeFormated(bookData: BookData) {
  return decimalToHours(getRemainingTime(bookData))
}

export function getRemainingSessions(bookData: BookData) {
  const readTime = getReadTime(bookData)
  const remainingTime = getRemainingTime(bookData)
  const numberOfSessions = bookData.sessions.length
  const averageSessionLengths = readTime / numberOfSessions
  return Math.ceil(remainingTime / averageSessionLengths)
}

export function getAverageEnergy(bookData: BookData) {
  const sessions = bookData.sessions
  return sessions.reduce((a, b) => a + b.energy, 0) / sessions.length
}
export function getAverageEnergyFormated(bookData: BookData) {
  return `${Math.round(getAverageEnergy(bookData) * 100)}%`
}

export function getAverageEnjoyment(bookData: BookData) {
  const sessions = bookData.sessions
  return sessions.reduce((a, b) => a + b.enjoyment, 0) / sessions.length
}
export function getAverageEnjoymentFormated(bookData: BookData) {
  return `${Math.round(getAverageEnjoyment(bookData) * 100)}%`
}

export function getNumberOfSessions(bookData: BookData) {
  return bookData.sessions.length
}

export function getPagesPerHour(bookData: BookData) {
  const pagesRead = getPagesRead(bookData)
  const readTime = getReadTime(bookData)
  return Math.round(pagesRead / readTime * 10) / 10
}

export function getMinutesPerPage(bookData: BookData) {
  const pagesPerHour = getPagesPerHour(bookData)
  return Math.round(60 / pagesPerHour * 10) / 10
}

export function getDateFinishedFormated(bookData: BookData) {
  //  TODO  Make more robust (in a case sessions order is mixed)
  if (bookData.isFinished) {
    const dateFinished = bookData.sessions[0].date
    return moment(dateFinished).format('MMMM D, YYYY')
  } else { return false }
}

export function getDateStartedFormated(bookData: BookData) {
  //  TODO  Make more robust (in a case sessions order is mixed)
  const numberOfSessions = getNumberOfSessions(bookData)
  if (numberOfSessions > 0) {
    const dateStarted = bookData.sessions[numberOfSessions - 1].date
    return moment(dateStarted).format('MMMM D, YYYY')
  } else { return false }
}

export function getDateAddedFormated(bookData: BookData) {
  const dateAdded = bookData.dateAdded
  return dateAdded
    ? moment(dateAdded).format('MMMM D, YYYY')
    : false
}






// GETTERS FOR SESSION DATA
export function getSessionDate(sessionData: SessionData) {
  return moment(sessionData.date).format('MMMM D, YYYY')
}

export function getSessionPagesPerHour(sessionData: SessionData) {
  const pagesRead = sessionData.pagesRead
  const readTime = sessionData.readTime
  return Math.round(pagesRead / readTime * 10) / 10
}

export function getSessionMinutesPerPage(sessionData: SessionData) {
  const pagesPerHour = getSessionPagesPerHour(sessionData)
  return Math.round(pagesPerHour / 60 * 10) / 10
}

export function getSessionReadTime(sessionData: SessionData) {
  return decimalToHours(sessionData.readTime)
}














