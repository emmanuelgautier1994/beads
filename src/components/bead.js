import React from 'react'
import { CSSHSL } from '../utils/color-utils'

class Bead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fill: "white"}
  }

  // shouldComponentUpdate = (_, nextState) => {
  //   return nextState.fill !== this.state.fill
  // }

  render(){
    const { x, y, currentColor } = this.props
    const color = () => this.setState({fill: CSSHSL(currentColor)})

    return (
      <rect
        x={2*x} y={x % 2 ? 2*y + 1.25 : 2*y + 0.25} width="2" height="2"
        fill={this.state.fill} stroke="black" strokeWidth="0.1"
        onClick={color}
        onTouchStart={color}
      />
    )
  }
}

export default Bead
