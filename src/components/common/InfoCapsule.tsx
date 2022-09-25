
import './InfoCapsule.scss'

export default function InfoCapsule({ icon = null, content = null, caption = null, width = 1 }: Props) {


  return (
    <div className='InfoCapsule capsule-3'
      style={{flexBasis: 
        `calc(${width * 100}% - var(--margin-inner))`
      }}
    >
      {icon && <div className='InfoCapsule__icon'>{icon}</div>}
      {(content || caption) &&
        <div className='InfoCapsule__content'>
          <h5>{content}</h5>
          <p className='caption'>{caption}</p>
        </div>
      }
    </div>
  )
}

interface Props {
  icon?: any,
  content?: any,
  caption?: string | null,
  width?: number
}
