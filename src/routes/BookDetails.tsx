
import { useParams } from 'react-router-dom'
import placeholderData from '../services/placeholderData'

export default function BookDetails() {

  const params = useParams()
  const bookData = placeholderData.find(book => book.urlSlug === params.urlSlug) // Move this to store

  if (!bookData) return (<p>Book '{params.urlSlug}' not found</p>)

  return (
    <>
      Book: {bookData.title}
    </>
  )
}
