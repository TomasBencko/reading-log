
import { useParams } from 'react-router-dom'
import placeholderData from '../services/placeholderData'
import { getCompletion, getDateStartedFormated, getDateAddedFormated, getPagesRead, getReadTimeFormated, getRemainingSessions, getRemainingTimeFormated, getDateFinishedFormated, getAverageEnergyFormated, getAverageEnjoymentFormated, getPagesPerHour, getMinutesPerPage, getNumberOfSessions, getPageCount, getAuthors } from '../common/formatingHelpers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBookOpen, faStar, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare, faClock } from '@fortawesome/free-regular-svg-icons'

import BookTags from '../components/bookPage/BookTags'
import BookThumbnail from '../components/bookPage/BookThumbnail'
import StarRating from '../components/bookPage/StarRating'
import PrioritySetting from '../components/bookPage/PrioritySetting'
import SessionItem from '../components/bookPage/SessionItem'
import ProgressCricle from '../components/bookPage/ProgressCricle'
import InfoCapsule from '../components/common/InfoCapsule'
import ButtonBase from '../components/common/ButtonBase'

import './BookPage.scss'


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


  return (
    <>

      {/* HEADING */}
      <h1 className='BookPage__title'>
        {bookData.title} ({bookData.yearPublished})
      </h1>


      {/* BOOK DETAILS */}
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


      {/* CONTINUE READING BUTTON */}
      {!bookData.isFinished && 
        <ButtonBase icon={faBookOpen} label='Continue reading' />
      }


      {/* READING PROGRESS */}
      <div className='CapsuleWrapper'>
        <InfoCapsule
          icon={<ProgressCricle completion={completion} />}
          content={`${pagesRead} / ${pageCount}`} caption='Pages read' width={1/2}
        />
        <InfoCapsule
          icon={<FontAwesomeIcon className='readTime_icon' icon={faClock} />}
          content={readTime} caption='Read time' width={1/2}
        />
      </div>
      
      {bookData.isFinished ? (
        <p className='bookItem--progress-text remaining-time'>Finished on {dateFinished}</p>
      ) : (
        <p className="remaining-time"><strong>{remainingTime}</strong> remains ({remainingSessions} sessions)</p>
      )}


      {/* BOOK STATS */}
      <h3 className='bookStats'>Book stats</h3>

      <div className='CapsuleWrapper'>
        <InfoCapsule caption='Click to add a quick note' width={5/6}         />
        <InfoCapsule icon={<FontAwesomeIcon className='add_note' icon={faFileAlt} />} width={1/6} />
        <InfoCapsule content={<PrioritySetting priority={bookData.priority} isFinished={bookData.isFinished} />} width={1/2} />
        <InfoCapsule content={<StarRating rating={bookData.userRating} />} width={1/2} />
        <InfoCapsule content={`${Math.round(completion * 100)}%`} caption='Completed' width={1/3} />
        <InfoCapsule content={numberOfSessions} caption='Sessions' width={1/3} />
        <InfoCapsule content={averageEnjoyment} caption='Enjoyment' width={1/3} />
        <InfoCapsule content={`${pagesPerHour} p.`} caption='Per hour' width={1/3} />
        <InfoCapsule content={`${minutesPerPage} min`} caption='Per page' width={1/3} />
        <InfoCapsule content={averageEnergy} caption='Energy' width={1/3} />
      </div>
      
      <p className="BookPage__info omg">Book added on {dateAdded}</p>
      <p className="BookPage__info">Started reading on {dateStarted}</p>


      {/* EDIT BOOK */}
      <div className="BookPage__edit-book">
        <FontAwesomeIcon className='title__icon' icon={faPenToSquare} /> Edit book
      </div>


      {/* READING SESSIONS */}
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
