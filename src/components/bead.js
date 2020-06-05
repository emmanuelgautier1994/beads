import React from 'react'

class Bead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fill: "white"}
  }

  shouldComponentUpdate = (_, nextState) => {
    return nextState.fill !== this.state.fill
  }

  color = () => this.setState({fill: this.props.currentColor})

  render(){
    const { x, y } = this.props
    return (
      <rect
        x={2*x} y={x % 2 ? 2*y + 1.25 : 2*y + 0.25} width="2" height="2"
        fill={this.state.fill} stroke="black" strokeWidth="0.1"
        onClick={this.color}
        onTouchStart={this.color}
      />
    )
  }
}

export default Bead
