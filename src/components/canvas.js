import React from 'react'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  range = (s) => [...Array(s).keys()]

  render(){
    const size = this.props.size
    const viewBox = `0 0 ${2*size} ${2*size+1}`
    return (
      <svg width="100%" height="100%" viewBox={viewBox}>
        {this.range(size).flatMap(x => this.range(size).map(y => 
          <rect
            key={size*x + y} x={2*x} y={x % 2 ? 2*y + 1 : 2*y} width="2" height="2"
            fill="white" stroke="black" strokeWidth="0.1"
          />
        ))}
      </svg>
    )
  }
}

export default Canvas
