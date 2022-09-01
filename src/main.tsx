import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import BookList from './components/BookList'
import BookEdit from './routes/BookEdit'
import BookDetails from './routes/BookDetails'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<BookList />} />
          <Route path='/add' element={<BookEdit />} />
          <Route path='/book/:urlSlug' element={<BookDetails />} />
          <Route path='*' element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
