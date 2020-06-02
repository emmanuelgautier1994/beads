import React from 'react'
import { CurrentColorContext } from './current-color-context'
import './color-picker.css'
import { SliderPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render(){
    return (
      <div className="grid-x grid-padding-x grid-padding-y align-center-middle" style={{height: '100%'}}>
        <div className="cell small-5">
          <SliderPicker
            color={this.props.current}
            onChange={(c) => {this.props.setCurrentColor(c.hex)}}
          />
        </div>
        <div className="cell small-1 align-center-middle text-center" style={{background: this.props.current, color: "white"}}>
              {this.props.current}
          {/* <svg height="100%"><rect x="0" y="0" width="1" height="1" fill={this.props.current}></rect></svg> */}
        </div>
      </div>
    )
  }
}

ColorPicker.contextType = CurrentColorContext


export default ColorPicker
