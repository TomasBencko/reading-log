const books = [
	{
		googleID: 'FmyBAwAAQBAJ',
    urlSlug: 'sapiens',

		// Google API
		title: 'Sapiens', 
		authors: [ 'Yuval Noah Harari' ],
		pageCount: 464,
		language: 'sk',
		yearPublished: 2015,
		thumbnail: "http://books.google.com/books/content?id=FmyBAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",

		// GoodReads API
		averageRating: 3.87,
		ratingsCount: 15782,

		// User defined
		categories: [],
		tags: [ 'World', 'Science' ],
		boughtForPrice: '',
		startsOnPage: 0,
		endsOnPage: 281,
		isFinished: true,
		userRating: 5,
    priority: 0,

		/* SESSIONS */
		sessions: [
			{
				date: '2022-08-26',
				pagesRead: 164,
				readTime: 0.78,
				energy: .65,
				enjoyment: .8,
			},
			{
				date: '2022-08-25',
				pagesRead: 150,
				readTime: 0.56,
				energy: .6,
				enjoyment: .7,
			},
			{
				date: '2022-08-22',
				pagesRead: 150,
				readTime: 1.07,
				energy: .73,
				enjoyment: .92,
			},
		],
	},
	{
		googleID: 'ICSpCwAAQBAJ',
    urlSlug: 'sprint',

		// Google API
		title: 'Sprint', 
		authors: [ 'Jake Knapp', 'John Zeratsky', 'Braden Kowitz' ],
		pageCount: 288,
		language: 'en',
		yearPublished: 2016,
		thumbnail: "http://books.google.com/books/content?id=ICSpCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",

		// GoodReads API
		averageRating: 3.87,
		ratingsCount: 15782,

		// User defined
		categories: [],
		tags: [ 'Productivity' ],
		boughtForPrice: '',
		startsOnPage: 0,
		endsOnPage: 281,
		isFinished: false,
		userRating: 3.5,
    priority: 3,

		/* SESSIONS */
		sessions: [
			{
				date: '2022-08-26',
				pagesRead: 70,
				readTime: 0.78,
				energy: .65,
				enjoyment: .8,
			},
			{
				date: '2022-08-25',
				pagesRead: 45,
				readTime: 0.56,
				energy: .6,
				enjoyment: .7,
			},
			{
				date: '2022-08-22',
				pagesRead: 68,
				readTime: 1.07,
				energy: .73,
				enjoyment: .92,
			},
		],
	},
	{
		googleID: 'aci_Ea4c6woC',
    urlSlug: 'creativity',

		// Google API
		title: 'Creativity', 
		authors: [ 'Mihaly Csikszentmihalyi' ],
		pageCount: 480,
		language: 'en',
		yearPublished: 2009,
		thumbnail: "http://books.google.com/books/content?id=aci_Ea4c6woC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",

		// GoodReads API
		averageRating: 3.87,
		ratingsCount: 15782,

		// User defined
		categories: [],
		tags: [ 'Psychology' ],
		boughtForPrice: '',
		startsOnPage: 0,
		endsOnPage: 281,
		isFinished: false,
		userRating: 3,
    priority: 2,

		/* SESSIONS */
		sessions: [
			{
				date: '2022-08-26',
				pagesRead: 20,
				readTime: 0.78,
				energy: .65,
				enjoyment: .8,
			},
			{
				date: '2022-08-25',
				pagesRead: 18,
				readTime: 0.56,
				energy: .6,
				enjoyment: .7,
			},
			{
				date: '2022-08-22',
				pagesRead: 27,
				readTime: 1.07,
				energy: .73,
				enjoyment: .92,
			},
		],
	},
	{
		googleID: 'qNNmDwAAQBAJ',
    urlSlug: 'principles',

		// Google API
		title: 'Principles', 
		authors: [ 'Ray Dalio' ],
		pageCount: 592,
		language: 'en',
		yearPublished: 2018,
		thumbnail: '',

		// GoodReads API
		averageRating: 3.87,
		ratingsCount: 15782,

		// User defined
		categories: [],
		tags: [ 'Productivity', 'Biography' ],
		boughtForPrice: '',
		startsOnPage: 0,
		endsOnPage: 281,
		isFinished: false,
		userRating: 2.5,
    priority: 1,

		/* SESSIONS */
		sessions: [
			{
				date: '2022-08-26',
				pagesRead: 80,
				readTime: 0.78,
				energy: .65,
				enjoyment: .8,
			},
			{
				date: '2022-08-25',
				pagesRead: 150,
				readTime: 0.56,
				energy: .6,
				enjoyment: .7,
			},
			{
				date: '2022-08-22',
				pagesRead: 70,
				readTime: 1.07,
				energy: .73,
				enjoyment: .92,
			},
		],
	},
	{
		googleID: '_LFSBgAAQBAJ',
    urlSlug: 'elon-musk',

		// Google API
		title: 'Elon Musk', 
		authors: [ 'Ashlee Vance' ],
		pageCount: 281,
		language: 'en',
		yearPublished: 2015,
		thumbnail: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7535/9780753557525.jpg",

		// GoodReads API
		averageRating: 3.87,
		ratingsCount: 15782,

		// User defined
		categories: [],
		tags: [ 'Biography' ],
		boughtForPrice: '',
		startsOnPage: 0,
		endsOnPage: 281,
		isFinished: false,
		userRating: 0,
    priority: -1,

		/* SESSIONS */
		sessions: [
			{
				date: '2022-08-26',
				pagesRead: 20,
				readTime: 0.78,
				energy: .65,
				enjoyment: .8,
			},
			{
				date: '2022-08-25',
				pagesRead: 18,
				readTime: 0.56,
				energy: .6,
				enjoyment: .7,
			},
			{
				date: '2022-08-22',
				pagesRead: 27,
				readTime: 1.07,
				energy: .73,
				enjoyment: .92,
			},
		],
	},
]


export default books
