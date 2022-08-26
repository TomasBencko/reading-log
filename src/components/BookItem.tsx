export default function BookItem({ bookData }) {

	// Computed variables
	const sessions = bookData.sessions
	const numberOfSessions = sessions.length
	const authors = bookData.authors.join(', ')

	// Sessions
	const sessionItems = sessions.map(session =>
    <div key={session.date}>
			<p><strong>{session.date}</strong></p>
			<p>Pages read: {session.pagesRead}</p>
			<p>Read time: {session.readTime}</p>
    </div>
  )

	return (
		<div className="bookWrapper">
			<h2>{bookData.title} ({bookData.yearPublished})</h2>
			<p>{authors}</p>
			<hr />

			<h3>Reading sessions ({numberOfSessions})</h3>
			{sessionItems}

		</div>
	)
}
