import React from 'react'

class Bead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fill: "white"}
  }

  // shouldComponentUpdate = (_, nextState) => {
  //   return nextState.fill !== this.state.fill
  // }

  render(){
    const { x, y, number, color, paint, stopPainting } = this.props
    const paintOnce = () => {
      paint(number)
      stopPainting()
    }
    // const color = () => this.setState({fill: CSSHSL(currentColor)})

    return (
      <rect
        id={this.props.number}
        x={2*x} y={x % 2 ? 2*y + 1.25 : 2*y + 0.25} width="2" height="2"
        fill={color} stroke="black" strokeWidth="0.1"
        style={{touchAction: 'none'}}
        // onPointerDown={(e) => {
        //   console.log('releasing...')
        //   this.releastPointerCapture(e.pointerId)
        // }}
        // onTouchEnter={(e) => {
        //   console.log("⛰")
        // }}
        onTouchMove={(e) => {
          paint(document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY).id)
        }}
        onTouchEnd={stopPainting}
        onClick={paintOnce}
        // onTouchStart={color}
        onMouseEnter={(e) => {
          if(e.buttons === 1) paintOnce()
        }}
        onMouseDown={paintOnce}
        // onMouseLeave={(e) => {
        //   if(e.buttons === 1) color()
        // }}
      />
    )
  }
}

export default Bead
