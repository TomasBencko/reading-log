
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

import './BookTags.scss'

export default function BookTags({ tagList = [], editable = false }: Props) {

  const tagsJSX = tagList.map((tag, index) =>
    <div className="BookTags__tag" key={index}>
      <span>{tag}</span>
      {editable && 
        <div className='BookTags__delete'>
          <FontAwesomeIcon className='delete__icon' icon={faXmark} />
        </div>
      }
    </div>
  )

  return (
    <div className='BookTags'>
      {tagsJSX}

      {editable && 
      <div className="BookTags__tag">
        <div className='BookTags__add'>
          <FontAwesomeIcon className='delete__icon' icon={faPlus} />
        </div>
      </div>
      }
    </div>
  )
}

interface Props {
  tagList: string[],
  editable?: boolean
}
