import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import BookListPage from './routes/BookListPage'
import BookEditPage from './routes/BookEditPage'
import BookPage from './routes/BookPage'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<BookListPage />} />
          <Route path='/add' element={<BookEditPage />} />
          <Route path='/book/:urlSlug' element={<BookPage />} />
          <Route path='*' element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
