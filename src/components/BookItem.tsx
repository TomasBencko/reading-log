
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { getCompletionFormated, getDateFinishedFormated, getRemainingTimeFormated, getRemainingSessions } from '../common/formatingHelpers'
import { BookData } from '../common/types'
import './BookItem.scss'

import StarRating from './bookDetails/StarRating'
import BookThumbnail from './bookDetails/BookThumbnail'
import BookTags from './bookDetails/BookTags'
import BookProgress from './bookDetails/BookProgress'


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
    titleClass = 'finished'
  } else if (bookData.priority >= 1) {
    bookFlag = <FontAwesomeIcon className="icon__flag" icon={faCircleExclamation} />
    titleClass = `priority_${bookData.priority}`
  } else if (bookData.priority === -1) {
    bookFlag = <FontAwesomeIcon className="icon__flag" icon={faCircleQuestion} />
    titleClass = 'unimportant'
  }






	return (
		<div className="BookItem" onClick={navigateBook}>

      {/* Book thumbnail */}
      <BookThumbnail thumbnail={bookData.thumbnail} />

      {/* Book details */}
			<div className='BookItem__details'>

        <div className='BookItem__title'>
          
          {/* Flag + book name */}
          <h4 className={`BookItem__title-text flag__${titleClass}`}>
            {bookFlag}{bookData.title}
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
