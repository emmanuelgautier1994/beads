import React from 'react'

class UndoRedo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  
  render(){
    const buttonStyle = {
      // borderRadius: '2em',
      padding: '0 0.2em',
      fontSize: '3em',
      color: 'grey',
      background: 'none'
    }

    return (
      <div className="grid-x align-center-middle">
        <div className="cell small-6">
          <button
            type="button" className="button" style={buttonStyle}
            disabled={!this.props.canUndo} onClick={this.props.undo}
          >
            <i className="fi-arrow-left"></i>
          </button>
        </div>
        <div className="cell small-6">
          <button
            type="button" className="button" style={buttonStyle}
            disabled={!this.props.canRedo} onClick={this.props.redo}
          >
            <i className="fi-arrow-right"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default UndoRedo
