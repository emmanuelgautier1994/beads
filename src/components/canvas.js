import React from 'react'
import Bead from './bead'
import { CSSHSL } from '../utils/color-utils'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { buffer: [] }
  }

  paint = (n) => {
    if(this.state.buffer.includes(n)) return
    this.setState((prevState) => ({
      buffer: prevState.buffer.concat([n]),
      [`color${n}`]: this.props.currentColor
    }))
  }

  stopPainting = () => {
    this.setState({buffer: []})
  }

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
          const bead_index = size * x + y
          return(
            <Bead
              key={`bead-${bead_index}`}
              number={bead_index}
              x={x}
              y={y}
              color={CSSHSL(this.state[`color${bead_index}`] || {H:0, S: 0, L: 100})}
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
