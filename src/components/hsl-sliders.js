import React from 'react'
import './hsl-sliders.css'
import { SatGradient, LightGradient } from '../utils/color'

class HSLSliders extends React.Component{
  constructor(props) {
    super(props)
    this.state = { }
  }
  
  handleChange = (e) => {
    this.props.setOneColorParam(e.target.name, parseFloat(e.target.value))
  }
  
  render(){
    const {H, S, L} = this.props.color

    const satSliderStyle = {background : SatGradient(H, L)}
    const lightSliderStyle = {background : LightGradient(H, S)}

    return(
      <div className='grid-y align-center-middle text-center'>
        <div className="cell small-4">
          <input
            className="hsl-slider hue-gradient"
            name="H"
            type="range" min="0" max="360" step="1"
            value={H}
            onChange={this.handleChange}
          />
        </div>
        <div className="cell small-4">
          <input
            className="hsl-slider"
            style={satSliderStyle}
            name="S"
            type="range" min="0" max="100" step="1"
            value={S}
            onChange={this.handleChange}
          />
        </div>
        <div className="cell small-4">
          <input
            className="hsl-slider"
            style={lightSliderStyle}
            name="L"
            type="range" min="0" max="100" step="1"
            value={L}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default HSLSliders