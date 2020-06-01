import React from 'react'

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render(){
  return (
    <div class="grid-y grid-padding-y grid-padding-x align-center-middle" style={{height: '100%'}}>
      <div class="cell small-1 text-left">
        <button type="button" class="alert button" onClick={this.props.goHome}>
          <i className="fi-home"></i>
        </button>
      </div>
      <div class="cell auto">
        {this.props.gridSize}
      </div>
    </div>
  )
  }
}

export default Grid
