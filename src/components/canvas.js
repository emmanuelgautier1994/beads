import React from 'react'
import Bead from './bead'
import { Color } from '../utils/color'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  getFillColor = (beadIndex) => this.props.beadColors[`colorOfBead${beadIndex}`] || new Color(0, 0, 100)

  range = (s) => [...Array(s).keys()]

  render(){
    const handleClickOrTouch = this.props.onClickBead
    const { size, verticalLayout, paint, stopPainting } = this.props
    
    const viewBoxWidth = verticalLayout ? 2*size : 2*(size+1)
    const viewBoxHeight = verticalLayout ? 2*(size+1) : 2*size
    const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`

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
              verticalLayout={verticalLayout}
              viewBoxWidth={viewBoxWidth}
              color={this.getFillColor(beadIndex).CSS}
              paint={paint}
              stopPainting={stopPainting}
            />
          )
        }
        ))}
      </svg>
    )
  }
}

export default Canvas
