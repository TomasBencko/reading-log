
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons'




export default function BookItem({ bookData }) {

	// Computed variables
	const sessions = bookData.sessions
	const numberOfSessions = sessions.length
	const authors = bookData.authors.join(', ')

	const pageCount = bookData.pageCount
	const pagesRead = sessions.reduce((prev, cur) => prev + cur.pagesRead, 0)
	const pagesLeft = pageCount - pagesRead
	const completion = Math.round(pagesRead / pageCount * 100)

	const readTime = Math.round(sessions.reduce((prev, cur) => prev + cur.readTime, 0) * 10) / 10
	const remainingTime = Math.round(readTime / completion * 1000) / 10
	const remainingPages = pageCount - pagesRead

	// Sessions
	const sessionItems = sessions.map(session => (
    <div key={session.date} className="mt-3">
			<p><strong>{session.date}</strong></p>
			<p>Pages read: {session.pagesRead}</p>
			<p>Read time: {session.readTime}</p>
    </div>
  ))

	return (
		<div className="BookItem">
			<img src={bookData.thumbnail}/>
			<div className='bookItem--info'>

        <div className='bookItem--title'>
          
				  <h4 className='bookItem--title-text'>
            <FontAwesomeIcon className="faIcon icon__flag" icon={faCheckCircle} />
            {bookData.title}
          </h4>
          <span className='bookItem--title-rating'>
            4/5
            <FontAwesomeIcon className="faIcon icon__star" icon={faStar} />
          </span>
        </div>

				{/* <p>{authors}</p> */}

				{/* <p>Read time: <strong>{readTime}</strong>, remaining: <strong>{remainingTime}</strong></p> */}
				{/* <p>Read time: <strong>{readTime}h</strong> (<strong>{remainingTime}h</strong> remaining)</p> */}
				{/* <p><strong>{remainingPages}</strong> pages remains ({remainingTime}h)</p> */}
				{/* <p><strong>{completion}%</strong> done</p> */}
				{/* <p><strong>{completion}%</strong> done; <strong>{remainingTime}</strong> h / <strong>{pagesLeft}</strong> p remains</p> */}
				{/* <p><strong>{completion}%</strong> completed</p> */}
				{/* <p><strong>{readTime}h</strong> read, <strong>{remainingTime}h</strong> remains</p> */}
				{/* <p><strong>{completion}%</strong> done; <strong>{pagesRead}/{pageCount}</strong> pages read</p> */}
				{/* <p><strong>{pagesLeft}</strong> pages / <strong>{remainingTime}</strong> h remains</p> */}
				{/* <p><strong>{remainingTime}</strong> h remains ({pagesLeft} / {pageCount} pages)</p> */}
				<p><strong>{remainingTime}</strong> hours remains</p>
				{/* <p><strong>{completion}%</strong> done; <strong>{remainingTime}h</strong> remaining</p> */}

				<div className="tag">{bookData.tags}</div>
			</div>

			{/* <hr className="my-4" />

			<h3 className="text-lg text-center font-semibold">Reading sessions ({numberOfSessions})</h3>
			{sessionItems} */}

		</div>
	)
}
