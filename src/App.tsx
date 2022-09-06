
import { Outlet } from 'react-router-dom'

import AppHeader from './components/AppHeader'
// import AppPage from './components/AppPage'

export default function App() {

  return (
    <>
			{/* <AppPage /> */}
			<AppHeader />
      <div className="PageWrapper">
        <Outlet />
      </div>
    </>
  )
}
