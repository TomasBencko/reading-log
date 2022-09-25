
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { getSessionDate, getSessionMinutesPerPage, getSessionPagesPerHour, getSessionReadTime } from '../../common/formatingHelpers'

import './SessionItem.scss'

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
      <div className='SessionItem__header'>
        <h5>{date}</h5>
        <FontAwesomeIcon className='header__add-button' icon={faPenToSquare} />
      </div>
      <div className='SessionItem__stats'>
        <div>
					<h5>{readTime}</h5>
					<p className='caption'>Read time</p>
				</div>
        <div>
					<h5>{pagesRead}</h5>
					<p className='caption'>Pages read</p>
				</div>
        <div>
					<h5>{sessionEnjoyment}</h5>
					<p className='caption'>Enjoyment</p>
				</div>
        <div>
					<h5>{pagesPerHour} p.</h5>
					<p className='caption'>Per hour</p>
				</div>
        <div>
					<h5>{minutesPerPage} min</h5>
					<p className='caption'>Per page</p>
				</div>
        <div>
					<h5>{sessionEnergy}</h5>
					<p className='caption'>Energy</p>
				</div>
      </div>
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
