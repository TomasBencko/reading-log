
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { getSessionDate, getSessionMinutesPerPage, getSessionPagesPerHour, getSessionReadTime } from '../../common/formatingHelpers'

export default function SessionItem({ sessionData }: Props) {


  const date = getSessionDate(sessionData)
  const pagesRead = sessionData.pagesRead
  const readTime = getSessionReadTime(sessionData)
  const pagesPerHour = getSessionPagesPerHour(sessionData)
  const minutesPerPage = getSessionMinutesPerPage(sessionData)
  const sessionEnergy = `${sessionData.energy * 100}%`
  const sessionEnjoyment = `${sessionData.enjoyment * 100}%`


  return (
    <div className='SessionItem'>
      <h6>
        {date}
        <FontAwesomeIcon className='sessions__add' icon={faPenToSquare} />
      </h6>
      <p>Pages read: {pagesRead}</p>
      <p>Read time: {readTime}</p>
      <p>Pages / hour: {pagesPerHour}</p>
      <p>Minutes / page: {minutesPerPage}</p>
      <p>Energy: {sessionEnergy}</p>
      <p>Enjoyment: {sessionEnjoyment}</p>
      <br />
    </div>
  )
}

interface Props {
  sessionData: {
    date: string,
    pagesRead: number,
    energy: number,
    enjoyment: number,
    readTime: number,
  }
}
