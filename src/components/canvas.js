import React from 'react'
import { CurrentColorContext } from './current-color-context'
import Bead from './bead'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  currentColor = () => this.context
  range = (s) => [...Array(s).keys()]

  handleClickOrTouch = () => {this.props.onClickBead(this.currentColor())}

  render(){
    const size = this.props.size
    const viewBox = `0 0 ${2*size} ${2*(size+1)}`
    return (
      <svg width="100%" height="100%" viewBox={viewBox} onClick={this.handleClickOrTouch}
      onTouchStart={this.handleClickOrTouch}>
        {this.range(size).flatMap(x => this.range(size).map(y => 
          <Bead key={size*x + y} x={x} y={y} />
        ))}
      </svg>
    )
  }
}

Canvas.contextType = CurrentColorContext

export default Canvas
