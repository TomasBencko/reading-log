export default function BookItem({ bookData }) {

	// Computed variables
	const sessions = bookData.sessions
	const numberOfSessions = sessions.length
	const authors = bookData.authors.join(', ')

	const pageCount = bookData.pageCount
	const pagesRead = sessions.reduce((prev, cur) => prev + cur.pagesRead, 0)
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
		<div className="bg-white pb-3 border-b rounded-md flex overflow-hidden mb-5 last:mb-0 last:border-b-0">
			<img src={bookData.thumbnail} className="object-cover w-16 h-24 object-top shrink-0"/>
			<div className="pl-3 overflow-hidden">
				<h2 className="text-xl font-bold">{bookData.title}</h2>
				<p className="whitespace-nowrap overflow-hidden text-ellipsis">{authors}</p>
				{/* <p>Read time: <strong>{readTime}</strong>, remaining: <strong>{remainingTime}</strong></p> */}
				{/* <p><strong>{remainingPages}</strong> pages remains ({remainingTime}h)</p> */}
				{/* <p><strong>{completion}%</strong> done</p> */}
				{/* <p>Read time: <strong>{readTime}h</strong> (<strong>{remainingTime}h</strong> remaining)</p> */}
				<p><strong>{completion}%</strong> done; <strong>{remainingTime}h</strong>  remaining</p>
				<p><span className="rounded bg-slate-200 py-0.5 px-1 text-xs">{bookData.tags}</span></p>
			</div>

			{/* <hr className="my-3" />

			<h3 className="text-lg text-center font-semibold">Reading sessions ({numberOfSessions})</h3>
			{sessionItems} */}

		</div>
	)
}
