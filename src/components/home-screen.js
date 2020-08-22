import React from 'react'
import './home-screen.css'

const HomeScreen = ({ submitWorkspaceSettings }) => {
  const [sizeValue, setSizeValue] = React.useState(20)

  return (
    <div className="grid-y align-center-middle" style={{height: '100%'}}>
      <div className="cell small-2">
        <div className="title">
          <span className='letter-b'>B</span>
          <span className='letter-e'>e</span>
          <span className='letter-a'>a</span>
          <span className='letter-d'>d</span>
          <span className='letter-s'>s</span>
        </div>
      </div>
      <div className="cell small-2" />
      <div className="cell small-3">
        <div className='grid-x grid-padding-x align-center-middle'>
          <div className='cell small-2 text-center'>
            <div className='slider-value'><span>{sizeValue} x {sizeValue}</span></div>
            <input
            id="grid-size-picker" className="slider"
            type="range" min="5" max="50" step="1"
            value={sizeValue}
            onChange={(e) => {setSizeValue(e.target.value)}}
            />
          </div>
          <div className='cell small-1' />
          <div className='cell small-1'>
            <button
              type="button"
              className="go-button"
              onClick={(e)=>{
                e.stopPropagation()
                submitWorkspaceSettings(sizeValue)}
              }
            >
              Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen