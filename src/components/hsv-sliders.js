import React from 'react'
import './hsv-sliders.css'

class HSVSliders extends React.Component{
  constructor(props) {
    super(props)
    this.state = { }
  }

  
  
  handleChange = (e) => {
    this.props.setHSorV(e.target.name, parseFloat(e.target.value))
  }
  
  render(){
    const HSV = this.props.color

    return(
      <div className='grid-y align-center-middle text-center'>
        <div className="cell small-4">
          <input
            className="hsv-slider hue-gradient"
            name="H"
            type="range" min="0" max="1" step="0.01"
            value={HSV.H}
            onChange={this.handleChange}
          />
        </div>
        <div className="cell small-4">
          <input
            className="hsv-slider"
            name="S"
            type="range" min="0" max="1" step="0.01"
            value={HSV.S}
            onChange={this.handleChange}
          />
        </div>
        <div className="cell small-4">
          <input
            className="hsv-slider"
            name="V"
            type="range" min="0" max="1" step="0.01"
            value={HSV.V}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default HSVSliders