
import './BookProgress.scss'

export default function BookProgress({ completion }: Props) {

  return (
    <div className="BookProgress">
      <div className="BookProgress__bar">
        <div className="BookProgress__bar-fill" style={{ width: `${completion}` }}></div>
      </div>
      <p>{completion}</p>
    </div>
  )
}

interface Props {
  completion: string
}
