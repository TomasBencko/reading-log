
export type BookList = BookData[]

export interface BookData {
  googleID: string,
  urlSlug: string,

  title: string,
  authors: string[],
  pageCount: number,
  language: string,
  yearPublished: number,
  thumbnail: string,

  averageRating: number,
  ratingsCount: number,

  categories: string[],
  tags: string[],
  boughtForPrice: number,
  pageStarts: number,
  pageEnds: number,
  isFinished: boolean,
  userRating: number,
  priority: number,

  sessions: SessionData[]
}

export interface SessionData {
  date: string,
  pagesRead: number,
  readTime: number,
  energy: number,
  enjoyment: number
}

