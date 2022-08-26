import { useState } from 'react'
import BookList from './components/BookList'
import './assets/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1><img src="/appIcon.svg" className="logo" />Reading Log</h1>
			<BookList />
    </div>
  )
}
