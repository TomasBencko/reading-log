
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonBase.scss'

export default function ButtonBase({ icon, label }: props) {
  
  return (
    <div className='ButtonBase'>
      <FontAwesomeIcon className='Button__icon' icon={icon} />
      {label}
    </div>
  )
}

interface props {
  icon: any,
  label: string
}
