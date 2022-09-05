
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './StarRating.scss'

export default function StarRating({ rating }: Props) {

  let ratingStarsJSX = []

  for (let i = 0; i < Math.floor(rating); i++) {
    ratingStarsJSX.push(
      <div className="StarRating--star" key={i}>
        <FontAwesomeIcon className="StarRating--star__full" icon={faStar} />
      </div>
    )
  }
  if (rating % 1) {
    ratingStarsJSX.push(
      <div className="StarRating--star" key={.5}>
        <FontAwesomeIcon className="StarRating--star__half-right" icon={faStar} />
        <FontAwesomeIcon className="StarRating--star__half-left" icon={faStar} />
      </div>
    )
  }
  for (let i = 0; i < 5 - Math.ceil(rating); i++) {
    ratingStarsJSX.push(
      <div className="StarRating--star" key={5-i}>
        <FontAwesomeIcon className="StarRating--star__empty" icon={faStar} />
      </div>
    )
  }
  
  return <div className="StarRating">{ratingStarsJSX}</div>
}

interface Props {
  rating: number
}


//  DEPRECIATED  Using empty and half icons
/*
import { faStarHalfStroke, faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'

let ratingStarsJSX = []
for (let i = 0; i < Math.floor(bookData.userRating); i++) {
  ratingStarsJSX.push(<FontAwesomeIcon className="icon__star" icon={faStar} key={i} />)
}
if (bookData.userRating % 1) {
  ratingStarsJSX.push(<FontAwesomeIcon className="icon__star" icon={faStarHalfStroke} key='half' />)
}
for (let i = 0; i < 5 - Math.ceil(bookData.userRating); i++) {
  ratingStarsJSX.push(<FontAwesomeIcon className="icon__star" icon={faStarEmpty} key={5-i} />)
}
*/
