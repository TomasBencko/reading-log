
import './BookTags.scss'

export default function BookTags({ tagList = [] }: Props) {

  const tagsJSX = tagList.map((tag, index) => 
    <div className="BookTags__tag" key={index}>{tag}</div>
  )

  return <div className='BookTags'>{tagsJSX}</div>

}

interface Props {
  tagList: string[]
}
