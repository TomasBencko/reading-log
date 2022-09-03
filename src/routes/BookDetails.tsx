
import { useParams } from 'react-router-dom'
import placeholderData from '../services/placeholderData'
import { getCompletionFormated, getPagesRead, getReadTimeFormated, getRemainingSessions, getRemainingPages, getRemainingTimeFormated, getDateFinishedFormated, getAverageEnergyFormated, getAverageEnjoymentFormated, getPagesPerHour, getMinutesPerPage, getNumberOfSessions, getPageCount, getAuthors } from '../common/formatingHelpers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faPenToSquare, faFlag, faStar, faCircleCheck, faNoteSticky } from '@fortawesome/free-regular-svg-icons'

import BookProgress from '../components/bookDetails/BookProgress'
import BookTags from '../components/bookDetails/BookTags'
import BookThumbnail from '../components/bookDetails/BookThumbnail'
import StarRating from '../components/bookDetails/StarRating'
import SessionItem from '../components/bookDetails/SessionItem'

export default function BookDetails() {

  const params = useParams()
  const bookData = placeholderData.find(book => book.urlSlug === params.urlSlug) // Move this to store

  if (!bookData) return (<p>Book '{params.urlSlug}' not found</p>)



  // Computed
  const authors = getAuthors(bookData)
  const pageCount = getPageCount(bookData)
	const pagesRead = getPagesRead(bookData)
	const completion = getCompletionFormated(bookData)
  const readTime = getReadTimeFormated(bookData)
  const remainingTime = getRemainingTimeFormated(bookData)
  const remainingSessions = getRemainingSessions(bookData)
  const dateFinished = getDateFinishedFormated(bookData)
	const remainingPages = getRemainingPages(bookData)
  const numberOfSessions = getNumberOfSessions(bookData)
  const pagesPerHour = getPagesPerHour(bookData)
  const minutesPerPage = getMinutesPerPage(bookData)
  const averageEnergy = getAverageEnergyFormated(bookData)
  const averageEnjoyment = getAverageEnjoymentFormated(bookData)


  //  TODO  Scroll to the top on init


  return (
    <>
      <h2>{bookData.title}</h2>
      <p>by {authors} ({bookData.yearPublished})</p>
      <p>{bookData.pageCount} pages</p>
      {/* <p>Language: {bookData.language}</p> */}

      <p>Rating: {bookData.averageRating} ({bookData.ratingsCount})</p>
      <BookTags tagList={bookData.tags} />

      <br />
      <FontAwesomeIcon className='' icon={faPenToSquare} />
      <FontAwesomeIcon className='' icon={faFlag} />
      <FontAwesomeIcon className='' icon={faStar} />
      <FontAwesomeIcon className='' icon={faCircleCheck} />
      <FontAwesomeIcon className='' icon={faNoteSticky} />
      
      
      <br />
      <br />
      <BookThumbnail thumbnail={bookData.thumbnail} />


      <br /><br />
      {/* <h4>User data</h4> */}
      {/* <p>Bought for: {bookData.boughtForPrice}</p> */}
      {/* <p>Starts on page: {bookData.startsOnPage}</p> */}
      {/* <p>Ends on page: {bookData.endsOnPage}</p> */}

      <BookProgress completion={completion} />

      {bookData.isFinished ? (
        <p className="bookItem--progress-text">Finished on {dateFinished}</p>
      ) : (
        <p className="bookItem--progress-text"><strong>{remainingTime}</strong> remains ({remainingSessions} sessions)</p>
      )}
      
      <StarRating rating={bookData.userRating} />


      <br />
      <h4>Book stats</h4>
      <p>Completion: {completion}</p>
      <p>Pages read: {pagesRead} / {pageCount} ({remainingPages} pages left)</p>
      <p>Read time: {readTime}</p>
      <p>{pagesPerHour} pages per hour</p>
      <p>{minutesPerPage} minutes per page</p>
      <p>Average energy: {averageEnergy}</p>
      <p>Average enjoyment: {averageEnjoyment}</p>


      <br />
			<h4 className=''>
        Reading sessions ({numberOfSessions})
        <FontAwesomeIcon className='sessions__add' icon={faPlus} />
      </h4>
      {bookData.sessions.map(session => (
        <SessionItem sessionData={session} key={session.date} />
      ))}
    </>
  )
}
