import React from 'react'
import { CurrentColorContext } from './current-color-context'
import { SliderPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render(){
    return (
      <div className="grid-x grid-padding-x align-right" style={{height: '100%'}}>
        <div className="cell small-12">
          <SliderPicker
            color={this.props.current}
            onChangeComplete={(c) => {this.props.setCurrentColor(c.hex)}}
          />
        </div>
      </div>
    )
  }
}

ColorPicker.contextType = CurrentColorContext


export default ColorPicker
