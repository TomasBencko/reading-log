
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle as faCheck, faCircleUp as faUp, faCircleDown as faDown } from '@fortawesome/free-regular-svg-icons'

import './PrioritySetting.scss'


export default function PrioritySetting({ priority, isFinished }: Props) {

  console.log(isFinished);
  console.log(priority === 3);
  
  return (
    <div className='PrioritySetting'>
      <FontAwesomeIcon
        className={`color_finished ${isFinished ? 'selected' : ''}`}
        icon={isFinished ? faCheckCircle : faCheck}
      />
      <FontAwesomeIcon
        className={`color_priority_3 ${priority === 3 ? 'selected' : ''}`}
        icon={priority === 3 ? faCircleUp : faUp}
      />
      <FontAwesomeIcon
        className={`color_priority_2 ${priority === 2 ? 'selected' : ''}`}
        icon={priority === 2 ? faCircleUp : faUp}
      />
      <FontAwesomeIcon
        className={`color_priority_1 ${priority === 1 ? 'selected' : ''}`}
        icon={priority === 1 ? faCircleUp : faUp}
      />
      <FontAwesomeIcon
        className={`color_unimportant ${priority === -1 ? 'selected' : ''}`}
        icon={priority === -1 ? faCircleDown : faDown}
      />
    </div>
  )
}

interface Props {
  priority: number,
  isFinished: boolean
}
