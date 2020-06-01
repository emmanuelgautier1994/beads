import React from 'react'
import { CurrentColorContext } from './current-color-context'

class Bead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fill: "white"}
  }

  currentColor = () => this.context

  color = () => this.setState({fill: this.currentColor()})
  // handleTouch = (e) => {
  //   if(this.state.fill === "red"){
  //     console.log(":(")
  //     return
  //   }
  //   console.log(new Date())
  //   this.color("red")
  // }

  render(){
    const { x, y } = this.props
    return (
      <rect
        x={2*x} y={x % 2 ? 2*y + 1.25 : 2*y + 0.25} width="2" height="2"
        fill={this.state.fill} stroke="black" strokeWidth="0.1"
        onClick={this.color}
        onTouchStart={this.color}
        // onTouchMove={this.handleTouch}
      />
    )
  }
}

Bead.contextType = CurrentColorContext

export default Bead
