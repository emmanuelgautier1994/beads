import React from 'react'
import Canvas from './canvas'

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render(){
    return (
      <div className="grid-y grid-padding-y grid-padding-x align-center-middle" style={{height: '100%'}}>
        <div className="cell small-1 text-left">
          <button type="button" className="alert button" onClick={this.props.goHome}>
            <i className="fi-home"></i>
          </button>
        </div>
        <div className="cell auto">
          <Canvas size={this.props.gridSize} />
        </div>
      </div>
    )
  }
}

export default Grid
