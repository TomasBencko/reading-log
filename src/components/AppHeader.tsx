
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './appHeader.scss'

export default function AppHeader() {

  let navigate = useNavigate()
  function navigateHome() { navigate('/') }
  function navigateAdd() { navigate('/add') }

	return (
		<div id="AppHeader">
      <div id="toolbar">
        <h1 onClick={navigateHome}>
          <span>Reading Log</span>
        </h1>
        <FontAwesomeIcon className="faIcon" icon={faPlus} 
          onClick={navigateAdd}
        />
      </div>
		</div>
	)
}
