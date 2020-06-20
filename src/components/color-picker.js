import React from 'react'
import './color-picker.css'
import HSLSliders from './hsl-sliders'
import ColorHistory from './color-history'

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
        <div className="cell small-3 text-center text-middle" style={{height: '100%'}}>
          <svg style={currentColorStyle} width='100%' viewBox='0 0 1 1'>
            <rect x='0' y='0' width='1' height='1' fill={currentColor.CSS} />
          </svg>
        </div>
        <div className="cell small-3">
            <ColorHistory currentColorHistory={currentColorHistory} setCurrentColor={setCurrentColor} />
        </div>
      </div>
    )
  }
}

export default ColorPicker
