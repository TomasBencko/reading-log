export default function BookItem({ bookData }) {

	// Computed variables
	const sessions = bookData.sessions
	const numberOfSessions = sessions.length
	const authors = bookData.authors.join(', ')

	// Sessions
	const sessionItems = sessions.map(session => (
    <div key={session.date} className="mt-3">
			<p><strong>{session.date}</strong></p>
			<p>Pages read: {session.pagesRead}</p>
			<p>Read time: {session.readTime}</p>
    </div>
  ))

	return (
		<div className="bg-white drop-shadow-md rounded-md p-4">
			<h2 className="text-xl font-bold text-center mb-2">{bookData.title} ({bookData.yearPublished})</h2>
			<p className="text-center">{authors}</p>
			<hr className="my-3" />

			<h3 className="text-lg text-center font-semibold">Reading sessions ({numberOfSessions})</h3>
			{sessionItems}

		</div>
	)
}
