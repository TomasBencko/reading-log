
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { getCompletionFormated, getDateFinishedFormated, getRemainingTimeFormated, getRemainingSessions } from '../common/formatingHelpers'
import { BookData } from '../common/types'
import './BookItem.scss'

import StarRating from './bookPage/StarRating'
import BookThumbnail from './bookPage/BookThumbnail'
import BookTags from './bookPage/BookTags'
import BookProgress from './bookPage/BookProgress'


export default function BookItem({ bookData }: Props) {

  // Opening a book
  let navigate = useNavigate()
  function navigateBook() { navigate(`/book/${bookData.urlSlug}`) }


	// Computed variables
	const completion = getCompletionFormated(bookData)
  const remainingTime = getRemainingTimeFormated(bookData)
  const remainingSessions = getRemainingSessions(bookData)
  const dateFinished = getDateFinishedFormated(bookData)
  

  // Book flags  TODO  decide how to separate this to a component
  let bookFlag, titleClass = null
  if (bookData.isFinished) {
    bookFlag = <FontAwesomeIcon className="icon__flag" icon={faCheckCircle} />
    titleClass = 'color_finished'
  } else if (bookData.priority >= 1) {
    bookFlag = <FontAwesomeIcon className="icon__flag" icon={faCircleUp} />
    titleClass = `color_priority_${bookData.priority}`
  } else if (bookData.priority === -1) {
    bookFlag = <FontAwesomeIcon className="icon__flag" icon={faCircleDown} />
    titleClass = 'color_unimportant'
  }






	return (
		<div className="BookItem" onClick={navigateBook}>

      {/* Book thumbnail */}
      <BookThumbnail thumbnail={bookData.thumbnail} />

      {/* Book details */}
			<div className='BookItem__details'>

        <div className='BookItem__title'>
          
          {/* Flag + book name */}
          <h4 className={`BookItem__title-text ${titleClass}`}>
            {bookFlag}<span>{bookData.title}</span>
          </h4>

          {/* User rating */}
          <StarRating rating={bookData.userRating} />
        </div>

        {/* Time to finish / completion date */}
        {bookData.isFinished ? (
          <p className="BookItem__progress-text">Finished on {dateFinished}</p>
          ) : (
          <p className="BookItem__progress-text"><strong>{remainingTime}</strong> remains ({remainingSessions} sessions)</p>
        )}

        {/* List of tags */}
        <BookTags tagList={bookData.tags} />

        {/* Book progress */}
        <BookProgress completion={completion} />

			</div>
		</div>
	)
}

interface Props {
  bookData: BookData
}
