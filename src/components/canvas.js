import React from 'react'
import Bead from './bead'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  range = (s) => [...Array(s).keys()]

  
  render(){
    const handleClickOrTouch = this.props.onClickBead
    const size = this.props.size
    const viewBox = `0 0 ${2*size} ${2*(size+1)}`
    return (
      <svg 
        width="100%" height="100%" viewBox={viewBox}
        onClick={handleClickOrTouch} onTouchStart={handleClickOrTouch}
      >
        {this.range(size).flatMap(x => this.range(size).map(y => 
          <Bead key={size*x + y} x={x} y={y} currentColor={this.props.currentColor} />
        ))}
      </svg>
    )
  }
}

export default Canvas
