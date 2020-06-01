import React from 'react'
import './size-picker.css'

const SizePicker = ({ submitSliderValue }) => {
  const [sizeValue, setSizeValue] = React.useState(20)

  return (
    <div className="grid-y grid-padding-y align-center-middle text-center" style={{height: '100%'}}>
      <div className="cell small-1">
        <p>Pick grid size</p>
      </div>
      <div className="cell small-2">
        <input
        id="grid-size-picker" className="slider"
        type="range" min="5" max="50" step="1"
        value={sizeValue}
        onChange={(e) => {setSizeValue(e.target.value)}}
        />
        <br />
        {sizeValue} x {sizeValue}
      </div>
      <div className="cell small-1">
      <button
        type="button" className="success button"
        onClick={(e)=>{
          e.stopPropagation()
          submitSliderValue(sizeValue)}
        }
      >
        Let's go!
      </button>
      </div>
    </div>
  )
}

export default SizePicker