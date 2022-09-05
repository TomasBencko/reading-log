
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

import './BookThumbnail.scss'

export default function BookThumbnail({ thumbnail }: Props) {

  return (
    <>
      <div className='BookThumbnail BookThumbnail--missing'>
        {thumbnail ? (
          <img className='BookThumbnail__image' src={thumbnail}/>
        ) : (
          <FontAwesomeIcon className='BookThumbnail--missing-icon' icon={faBookOpen} />
        )}
      </div>
    </>
  )
}

interface Props {
  thumbnail: string,
  height?: number
}
