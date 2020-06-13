import React from 'react'
import './color-picker.css'
import HSLSliders from './hsl-sliders'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render(){
    const { currentColor, currentColorHistory, setCurrentColor, setOneColorParam } = this.props
    const currentColorStyle = {
      borderRadius: '100%',
      height: '5em',
      width: '5em'
    }

    return (
      <div className="grid-x grid-margin-x grid-margin-y align-center-middle" style={{height: '100%'}}>
        <div className="cell small-5">
          <HSLSliders
            color={currentColor}
            setOneColorParam={setOneColorParam}
          />
        </div>
        <div className="cell small-1 text-center text-middle" style={{height: '100%'}}>
          <svg style={currentColorStyle} viewBox='0 0 1 1'>
            <rect x='0' y='0' width='1' height='1' fill={currentColor.CSS} />
          </svg>
        </div>
        <div className="cell small-6">
          <div className="grid-x grid-margin-y">
            {currentColorHistory.map((c, i) => (
              <div
                key={`currentColorHistory-${i}`}
                className='cell small-1'
                style={{background: c.CSS, width: '2em', height: '2em', cursor: 'pointer', borderRadius:'0.2em', margin: '0 0.5em'}}
                onClick={() => {setCurrentColor(c)}}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker
