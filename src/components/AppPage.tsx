
import { Routes, Route } from 'react-router-dom'

import BookList from './BookList'
import BookEdit from '../routes/BookEdit'

export default function AppPage() {

	return (
		<div className="PageWrapper">
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/add' element={<BookEdit />} />
      </Routes>
		</div>
	)
}
