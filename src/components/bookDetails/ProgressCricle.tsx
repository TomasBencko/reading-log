
/* Usage:
<div className="ProgressCircle">
  <ProgressCricle completion={completion} />
  <span>{completion}%</span>
</div>
*/


import './ProgressCircle.scss'

export default function ProgressCricle({ completion }) {

/*
  <ActionProgress 
			class="actionProgressIcon flexCenterBoth"
			:width="36"
			:percentageProgress="percentageProgress"
			:isPaused="!isActive"
		/>
*/

  const width = 32
  const progressColor = "#34C759"
  const bgColor = "#F2F2F7"
  const innerRadius = .4
  const circleDiameter = 100

  const αGoal = 360 * completion

  let innerCircleJSX

    // Redraw the circle that is being animated, if not full circle yet
    // if α >= 360, different element will be rendered in svg
    // if (αGoal < 360) {
    
      const radius = circleDiameter / 2
      let r = (αGoal * Math.PI / 180)
      let x = Math.sin(r) * radius
      let y = Math.cos(r) * -radius
      let mid = (αGoal > 180) ? 1 : 0
      let shape = `M 0 0 v -${radius} A ${radius} ${radius} 1 ${mid} 1 ${x} ${y} z`

      innerCircleJSX = <path className="innerCircle" 
        // ref="innerCircle"
        transform={`translate(${circleDiameter / 2}, ${circleDiameter / 2})`}
        fill={progressColor}
        d={shape}
      />
    // }


  return (
  
    <div className='ProgressCircle'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        width={width}
        height={width}
      >
        <g>
          {/* Background circle */}
          <circle cx="50" cy="50" r="50" fill="#E5E5EA"/>

          {/* Finished state */}
          {αGoal >= 359 && (
          <g>
            <circle cx="50" cy="50" r="50"
              fill="#34C759"
            />

          </g>
          )}
          
          <g >
            {innerCircleJSX}

            {/* Foreground circle */}
            <circle cx="50" cy="50" r={100 * innerRadius} fill={bgColor} />

          </g>
          {/* <path d="M75.77,31.84a6.8,6.8,0,0,0-9.61,0L37.46,60.53,27,50.11a6.8,6.8,0,0,0-9.61,9.62L32.66,75a6.8,6.8,0,0,0,9.61,0l33.5-33.5A6.8,6.8,0,0,0,75.77,31.84Z" fill="#34C759"/> */}
          {/* <path d="M77.77,31.84a6.8,6.8,0,0,0-9.61,0L39.46,60.53,29,50.11a6.8,6.8,0,0,0-9.61,9.62L34.66,75a6.8,6.8,0,0,0,9.61,0l33.5-33.5A6.8,6.8,0,0,0,77.77,31.84Z" fill="#34C759"/> */}
        </g>
      </svg>

      <div className='ProgressCircle__slot'>%</div>
    </div>
  )
}
