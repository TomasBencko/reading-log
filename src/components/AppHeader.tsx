
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faGear } from '@fortawesome/free-solid-svg-icons'
import './appHeader.scss'

export default function AppHeader() {

	return (
		<div id="AppHeader">
      <div id="toolbar">
        <h1>
          {/* <img src="/appIcon.svg" className="w-6 inline-block mr-2" /> */}
          {/* <FontAwesomeIcon className="faIcon" icon={faBookOpenReader} /> */}
          <span>Reading Log</span>
        </h1>
        <FontAwesomeIcon className="faIcon" icon={faGear} />
      </div>
		</div>
	)
}
