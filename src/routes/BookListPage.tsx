
import BookItem from '../components/BookItem'
import placeholderData from '../services/placeholderData'

const bookData = placeholderData

const bookItems = bookData.map(book => (
  <BookItem bookData={book} key={book.googleID} />
))

export default function BookListPage() {
	return (
		<div className="BookListPage">
			{bookItems}
			{bookItems}
		</div>
	)
}
