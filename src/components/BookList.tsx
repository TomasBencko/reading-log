import BookItem from './BookItem'
import placeholderData from '../services/placeholderData'
import './bookList.scss'

const bookData = placeholderData

const bookItems = bookData.map(book => (
	<BookItem bookData={book} />
))

export default function BookList() {
	return (
		<div className="BookList">
			{bookItems}
			{bookItems}
		</div>
	)
}
