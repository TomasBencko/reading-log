import BookItem from './BookItem'

const bookData = {
	id: '213132112231321321',
	googleID: 'RJxWIQOvoZUC',
	goodReadsID: 'sdfsdfsdf',

	// Google API
	title: 'The Google Story', 
	authors: [ 'David A. Vise', 'Mark Malseed' ],
	pageCount: 281,
	language: 'en',
	yearPublished: 2005,
	dimensions: { height: '', width: '', thick: '' },
	coverImage: '', //  TODO  Download the image for offline use?

	// GoodReads API
	averageRating: 3.87,
	ratingsCount: 15782,

	// User defined
	type: 'Book', // Scientific Article, Book Chapter, Web Article
	categories: [ 'Biography', 'Business' ],
	tags: [ 'Want to read' ],
	boughtForPrice: '12.28',
	format: 'Hardback', // 'Paperback'
	form: 'physical', // 'digital', 'audio'
	startsOnPage: 10, // If first pages are blank
	endsOnPage: 281,

	isCompleted: false,
	userRating: 4.5,
	shortNote: 'A book I received as a gift from Alfonz',
	bookNotes: '# The Google Story\n- A book about Google',


	/* SESSIONS */
	sessions: [
		{
			date: '2022-08-26', // Timestamp
			pagesRead: 20,
			readTime: '48m 54s',
			energy: .65,
			enjoyment: .8,
		},
		{
			date: '2022-08-25', // Timestamp
			pagesRead: 18,
			readTime: '41m 27s',
			energy: .6,
			enjoyment: .7,
		},
		{
			date: '2022-08-22', // Timestamp
			pagesRead: 27,
			readTime: '59m 7s',
			energy: .73,
			enjoyment: .92,
		},
	],



	/* COMPUTED STATS */
	// readTime: '10h 47m',
	// pagesRead: 281, // Sum of `pagesRead` minus `startsOnPage`
	// pagesPerHour: 26.1,
	// minutesPerPage: 2.3,
	// numebrOfSessions: 11,
	// remainingPages: 23,
	// remainingTime: '1h 2m',
	// remainingSessions: 2,
	// completion: 0.75,
	// averageEnergy: .7,
	// averageEnjoyment: .8,
}

export default function BookList() {
	return <BookItem bookData={bookData} />
}
