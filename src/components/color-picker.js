import React from 'react'
import './color-picker.css'
import { HSVToHex } from '../utils/color-utils'
import HSVSliders from './hsv-sliders'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render(){
    const hexCurrent = HSVToHex(...Object.values(this.props.current))
    const currentColorStyle = {
      background: hexCurrent,
      color: "white",
      borderRadius: '0.5em',
    }

    return (
      <div className="grid-y grid-padding-x grid-margin-y align-center-middle" style={{height: '100%'}}>
        <div className="cell small-6">
          <HSVSliders
            color={this.props.current}
            setHSorV={this.props.setHSorV}
          />
        </div>
        <div className="cell small-1 text-center" style={currentColorStyle}>
              <b>{hexCurrent.toUpperCase()}</b>
        </div>
        <div className="cell small-5">
          <div className="grid-x grid-margin-y">
            {this.props.history.slice(0,12).map((c, i) => (
              <div
                key={`history-${i}`}
                className='cell small-1'
                style={{background: HSVToHex(...Object.values(c)), width: '2em', height: '2em', cursor: 'pointer', borderRadius:'2em', margin: '0 0.5em'}}
                onClick={() => {this.props.setHSV(c)}}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker
