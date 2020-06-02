import React from 'react'
import Canvas from './canvas'
import ColorPicker from './color-picker'
import { CurrentColorContext } from './current-color-context'

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentColor: "#ed281a", history: [] }
  }

  pickNewColor = (c) => {this.setState({currentColor: c})}


  updateHistory = (c) => {this.setState((prevState) => ({
    history: [...new Set(prevState.history.concat([c]))]
  }))}


  render(){
    console.log(this.state)
    return (
      <div className="grid-y grid-padding-y grid-padding-x align-center-middle" style={{height: '100%'}}>
        <div className="cell small-1 text-left">
          <div className="grid-x">
            <div className="cell small-1">
              <button type="button" className="alert button" onClick={this.props.goHome}>
                <i className="fi-home"></i>
              </button>
            </div>
            <div className="cell small-11">
              <ColorPicker current={this.state.currentColor} setCurrentColor={this.pickNewColor} />
            </div>
          </div>
        </div>
        <div className="cell small-11">
          <CurrentColorContext.Provider value={this.state.currentColor}>
                <Canvas size={this.props.gridSize} onClickBead={() => this.updateHistory(this.state.currentColor)} />
          </CurrentColorContext.Provider>
        </div>
      </div>
    )
  }
}

export default Grid
