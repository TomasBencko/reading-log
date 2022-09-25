
import { useParams } from 'react-router-dom'
import placeholderData from '../services/placeholderData'
import { getCompletion, getDateStartedFormated, getDateAddedFormated, getPagesRead, getReadTimeFormated, getRemainingSessions, getRemainingTimeFormated, getDateFinishedFormated, getAverageEnergyFormated, getAverageEnjoymentFormated, getPagesPerHour, getMinutesPerPage, getNumberOfSessions, getPageCount, getAuthors } from '../common/formatingHelpers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBookOpen, faStar, faCheckCircle, faCircleExclamation, faCircleQuestion, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus, faPenToSquare, faFlag, faCircleCheck, faNoteSticky, faClock } from '@fortawesome/free-regular-svg-icons'



import BookProgress from '../components/bookPage/BookProgress'
import BookTags from '../components/bookPage/BookTags'
import BookThumbnail from '../components/bookPage/BookThumbnail'
import StarRating from '../components/bookPage/StarRating'
import SessionItem from '../components/bookPage/SessionItem'
import InfoCapsule from '../components/common/InfoCapsule'

import './BookPage.scss'
import ProgressCricle from '../components/bookPage/ProgressCricle'




export default function BookPage() {

  // Load the book data
  const urlParams = useParams()
  const bookData = placeholderData.find(book => book.urlSlug === urlParams.urlSlug) //  TODO  Move this to store

  // Fallback if the book doesn't exist
  if (!bookData) return (<p>Book '{urlParams.urlSlug}' not found</p>)


  // Computed data
    //  WARNING  Will be computed on every re-render
    //  CONSIDER  To put this inside useMemo, or inside the bookData object as getters, or as a new Book class methods...
  const authors = getAuthors(bookData)
  const pageCount = getPageCount(bookData)
	const pagesRead = getPagesRead(bookData)
	const completion = getCompletion(bookData)
  const readTime = getReadTimeFormated(bookData)
  const remainingTime = getRemainingTimeFormated(bookData)
  const remainingSessions = getRemainingSessions(bookData)
  const dateAdded = getDateAddedFormated(bookData)
  const dateFinished = getDateFinishedFormated(bookData)
  const dateStarted = getDateStartedFormated(bookData)
  const numberOfSessions = getNumberOfSessions(bookData)
  const pagesPerHour = getPagesPerHour(bookData)
  const minutesPerPage = getMinutesPerPage(bookData)
  const averageEnergy = getAverageEnergyFormated(bookData)
  const averageEnjoyment = getAverageEnjoymentFormated(bookData)
  const ratingsCount = bookData.ratingsCount.toLocaleString('en-US')


  //  TODO  Scroll to the top on init


  return (
    <>

      <h1 className='BookPage__title'>
        {bookData.title} ({bookData.yearPublished})
      </h1>

      <div className='BookPage__cover'>
        <BookThumbnail thumbnail={bookData.thumbnail} />

        <div className="cover__details">
          <p className='cover__authors'>by {authors}</p>
          <p className='cover__bookRating'>
            <FontAwesomeIcon className='bookRating__icon' icon={faStar} />
            {bookData.averageRating}
            <span className='bookRating__reviews'> ({ratingsCount} reviews)</span>
          </p>

          <BookTags tagList={bookData.tags} editable={true} />
        </div>
      </div>


      {!bookData.isFinished && 
        <div className="continue-reading-2">
          <div className='butttton'>
            <FontAwesomeIcon className='Button__icon' icon={faBookOpen} />
            Continue reading
          </div>
        </div>
      }

      <div className='CapsuleWrapper'>
        <InfoCapsule
          icon={<ProgressCricle completion={completion} />}
          content={`${pagesRead} / ${pageCount}`}
          caption='Pages read'
          capsulesPerRow={1/2}
        />
        <InfoCapsule
          icon={<FontAwesomeIcon className='readTime_icon' icon={faClock} />}
          content={readTime}
          caption='Read time'
          capsulesPerRow={1/2}
        />
      </div>
      



      {bookData.isFinished ? (
        <p className='bookItem--progress-text remaining-time'>Finished on {dateFinished}</p>
      ) : (
        <p className="remaining-time"><strong>{remainingTime}</strong> remains ({remainingSessions} sessions)</p>
      )}



      <h3 className='bookStats'>Book stats</h3>

      
      <div className='CapsuleWrapper'>
        <InfoCapsule
          caption='Click to add a quick note'
          capsulesPerRow={5/6}
        />
        <InfoCapsule
          icon={<FontAwesomeIcon className='add_note' icon={faFileAlt} />}
          capsulesPerRow={1/6}
        />
        <InfoCapsule
          content={<>
            <FontAwesomeIcon className="icon__flag flag__finished" icon={faCheckCircle} />
            <FontAwesomeIcon className="icon__flag flag__priority_3" icon={faCircleExclamation} />
            <FontAwesomeIcon className="icon__flag flag__priority_2" icon={faCircleExclamation} />
            <FontAwesomeIcon className="icon__flag flag__priority_1" icon={faCircleExclamation} />
            <FontAwesomeIcon className="icon__flag flag__unimportant" icon={faCircleQuestion} />
          </>}
        />
        <InfoCapsule
          content={<StarRating rating={bookData.userRating} />}
        />
        <InfoCapsule
          content={`${Math.round(completion * 100)}%`}
          caption='Completed'
          capsulesPerRow={1/3}
        />
        <InfoCapsule
          content={numberOfSessions}
          caption='Sessions'
          capsulesPerRow={1/3}
        />
        <InfoCapsule
          content={averageEnjoyment}
          caption='Enjoyment'
          capsulesPerRow={1/3}
        />
        <InfoCapsule
          content={`${pagesPerHour} p.`}
          caption='Per hour'
          capsulesPerRow={1/3}
        />
        <InfoCapsule
          content={`${minutesPerPage} min`}
          caption='Per page'
          capsulesPerRow={1/3}
        />
        <InfoCapsule
          content={averageEnergy}
          caption='Energy'
          capsulesPerRow={1/3}
        />
      </div>
      


      <p className="BookPage__info omg">Book added on {dateAdded}</p>
      <p className="BookPage__info">Started reading on {dateStarted}</p>
      <div className="BookPage__edit-book">
        <FontAwesomeIcon className='title__icon' icon={faPenToSquare} /> Edit book
      </div>


			<h4 className='sessions__title'>
        <span>Reading sessions ({numberOfSessions})</span>
        <FontAwesomeIcon className='title__icon' icon={faPlus} />
      </h4>
      {bookData.sessions.map(session => (
        <SessionItem sessionData={session} key={session.date} />
      ))}
    </>
  )
}
