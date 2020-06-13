import React from 'react'

class Bead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fill: "white"}
  }

  render(){
    const { x, y, number, color, paint, stopPainting } = this.props
    const paintOnce = () => paint(number)

    return (
      <rect
        id={this.props.number}
        x={2*x} y={x % 2 ? 2*y + 1.25 : 2*y + 0.25} width="2" height="2"
        fill={color} stroke="black" strokeWidth="0.1"
        style={{touchAction: 'none'}}
        onMouseDown={paintOnce}
        onMouseEnter={(e) => {if(e.buttons === 1) paintOnce()}}
        onTouchMove={(e) => {
          paint(document.elementFromPoint(e.touches[0].pageX, e.touches[0].pageY).id)
        }}
        onTouchEnd={stopPainting}
        onMouseUp={stopPainting}
      />
    )
  }
}

export default Bead
