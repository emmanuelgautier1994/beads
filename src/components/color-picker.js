import React from 'react'
import './color-picker.css'
// import { HSVToHex } from '../utils/color-utils'
import HSLSliders from './hsl-sliders'
import { CSSHSL } from '../utils/color-utils'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render(){
    // const hexCurrent = HSVToHex(...Object.values(this.props.current))
    const { current, history, setCurrentColor, setOneColorParam } = this.props
    const currentColorStyle = {
      borderRadius: '100%',
      height: '5em',
      width: '5em'
    }

    return (
      <div className="grid-x grid-padding-x grid-margin-y align-center-middle" style={{height: '100%'}}>
        <div className="cell small-2">
          <HSLSliders
            color={current}
            setOneColorParam={setOneColorParam}
          />
        </div>
        <div className="cell small-1 text-center text-middle" style={{height: '100%'}}>
          <svg style={currentColorStyle} viewBox='0 0 1 1'>
            <rect x='0' y='0' width='1' height='1' fill={CSSHSL(current)} />
          </svg>
        </div>
        <div className="cell small-5">
          <div className="grid-x grid-margin-y">
            {history.map((c, i) => (
              <div
                key={`history-${i}`}
                className='cell small-1'
                style={{background: CSSHSL(c), width: '2em', height: '2em', cursor: 'pointer', borderRadius:'0.2em', margin: '0 0.5em'}}
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
