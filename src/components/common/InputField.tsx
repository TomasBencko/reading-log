
import './InputField.scss'

export default function InputField({ label, width = 1, type = 'text' }: props) {

  return (
    <input id="search" name="search" placeholder={label}
      className="InputField" type={type} autoComplete="off"
      style={{flexBasis: 
        `calc(${width * 100}% - var(--margin-inner))`
      }}
    />
  )
}

interface props {
  label: string,
  width?: number,
  type?: string
}
