import BookItem from './BookItem'
import placeholderData from '../services/placeholderData'

const bookData = placeholderData

const bookItems = bookData.map(book => (
	<BookItem bookData={book} />
))

export default function BookList() {
	return (
		<div className="">
			{bookItems}
		</div>
	)
}
