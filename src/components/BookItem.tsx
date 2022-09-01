
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faBookOpen, faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'

import { decimalToHours } from '../common/formatingHelpers'

import moment from 'moment'

import StarRating from './StarRating'
import ProgressCricle from './ProgressCricle'

import './bookItem.scss'


export default function BookItem({ bookData }) {

	// Computed variables
	const sessions = bookData.sessions
	const numberOfSessions = sessions.length
	const authors = bookData.authors.join(', ')

	const pageCount = bookData.pageCount
	const pagesRead = sessions.reduce((a, b) => a + b.pagesRead, 0)
	const pagesLeft = pageCount - pagesRead
	const completion = Math.round(pagesRead / pageCount * 100)

	const readTime = Math.round(sessions.reduce((a, b) => a + b.readTime, 0) * 10) / 10
	const remainingTime = readTime / completion * 100
  const remainingTimeFormated = decimalToHours(remainingTime)
	const remainingPages = pageCount - pagesRead
  const averageSessionLengths = readTime / sessions.length
  const remainingSessions = Math.ceil(remainingTime / averageSessionLengths)

  const finishedOn = bookData.isFinished ? moment(sessions[0].date).format('MMMM D, YYYY') : false //  TODO  Make more robust (in a case sessions order is mixed)
  

  // Book flags
  let bookFlag, titleClass = null
  if (bookData.isFinished) {
    bookFlag = <FontAwesomeIcon className="icon--flag" icon={faCheckCircle} />
    titleClass = 'finished'
  } else if (bookData.priority >= 1) {
    bookFlag = <FontAwesomeIcon className="icon--flag" icon={faCircleExclamation} />
    titleClass = `priority_${bookData.priority}`
  } else if (bookData.priority === -1) {
    bookFlag = <FontAwesomeIcon className="icon--flag" icon={faCircleQuestion} />
    titleClass = 'unimportant'
  }


  // Tags
  const tagsJSX = bookData.tags.map((tag, index) => 
    <div className="tag" key={index}>{tag}</div>
  )





	// Sessions
	// const sessionItems = sessions.map(session => (
  //   <div key={session.date} className="mt-3">
	// 		<p><strong>{session.date}</strong></p>
	// 		<p>Pages read: {session.pagesRead}</p>
	// 		<p>Read time: {session.readTime}</p>
  //   </div>
  // ))

  
  


	return (
		<div className="BookItem">

      {/* Book thumbnail */}
      {bookData.thumbnail ? (
			  <img className='bookItem--thumbnail' src={bookData.thumbnail}/>
      ) : (
        <div className='bookItem--thumbnail bookItem--thumbnail-missing'>
          <FontAwesomeIcon className="icon__book-thumbnail" icon={faBookOpen} />
        </div>
      )}

      {/* Book details */}
			<div className='bookItem--details'>

        <div className='bookItem--title'>
          
          {/* Flag + book name */}
          <h4 className={`bookItem--title-text flag__${titleClass}`}>
            {bookFlag}{bookData.title}
          </h4>

          {/* User rating */}
          <StarRating rating={bookData.userRating} />
        </div>

        {/* Time to finish / completion date */}
        {bookData.isFinished ? (
          <p className="bookItem--progress-text">Finished on {finishedOn}</p>
          ) : (
          <p className="bookItem--progress-text"><strong>{remainingTimeFormated}</strong> remains ({remainingSessions} sessions)</p>
        )}

        {/* List of tags */}
        <div className="bookItem--tags">{tagsJSX}</div>


        {/* Book progress */}
        <div className="bookItem--progress">
          <div className="progress--bar">
            <div className="progress--bar-fill" style={{ width: `${completion}%` }}></div>
          </div>
          <p>{completion}%</p>
        </div>

        {/* Progress circle */}
        {/* <div className="progress--circle">
          <ProgressCricle completion={completion} />
          <span>{completion}%</span>
        </div> */}


			</div>





      {/* Sessions */}
			{/* <hr className="my-4" />
			<h3 className="text-lg text-center font-semibold">Reading sessions ({numberOfSessions})</h3>
			{sessionItems} */}

		</div>
	)
}
