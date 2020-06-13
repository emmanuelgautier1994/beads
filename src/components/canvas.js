import React from 'react'
import Bead from './bead'
import { Color } from '../utils/color'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { paintBuffer: [] }
  }

  paint = (n) => {
    if(this.state.paintBuffer.includes(n)) return
    this.setState((prevState) => ({
      paintBuffer: prevState.paintBuffer.concat([n]),
      [`color${n}`]: this.props.currentColor
    }))
  }

  stopPainting = () => {
    this.setState(
      {paintBuffer: []},
      () => {this.props.commitCanvas(this.getColorState())}
    )
  }

  getColorState = () => Object.keys(this.state)
    .filter(key => key.slice(0,5) === 'color')
    .reduce((obj, key) => {
      obj[key] = this.state[key]
      return obj
    }, {})

  getFillColor = (beadIndex) => this.state[`color${beadIndex}`] || new Color(0, 0, 100)

  range = (s) => [...Array(s).keys()]

  render(){
    const handleClickOrTouch = this.props.onClickBead
    const size = this.props.size
    const viewBox = `0 0 ${2*size} ${2*(size+1)}`

    return (
      <svg 
        height="95%" viewBox={viewBox}
        style={{touchAction: "none"}}
        onClick={handleClickOrTouch} onTouchStart={handleClickOrTouch}
      >
        {this.range(size).flatMap(x => this.range(size).map(y => {
          const beadIndex = size * x + y
          return(
            <Bead
              key={`bead-${beadIndex}`}
              number={beadIndex}
              x={x}
              y={y}
              color={this.getFillColor(beadIndex).CSS}
              paint={this.paint}
              stopPainting={this.stopPainting}
            />
          )
        }
        ))}
      </svg>
    )
  }
}

export default Canvas
