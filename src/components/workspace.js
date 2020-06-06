import React from 'react'
import Canvas from './canvas'
import ColorPicker from './color-picker'
// import { CurrentColorContext } from './current-color-context'
// import { HSVToHex } from '../utils/color-utils'

class Workspace extends React.Component {
  constructor(props) {
    super(props)
    this.state = { H: 190, S: 80, L: 60, history: [] }
  }

  setCurrentColor = ({H, S, L}) => {this.setState({H, S, L})}

  setOneColorParam = (param, newValue) => {
    if(!(['H', 'S', 'L'].includes(param))) return
    this.setState({[param]: newValue})
  }

  updateHistory = () => {
    this.setState((prevState) => {
      if(prevState.history.some(x => x.H === prevState.H && x.S === prevState.S && x.L === prevState.L)) return {}
      return {history: [{H: prevState.H, S: prevState.S, L: prevState.L}].concat(prevState.history)}
    })
  }


  render(){
    const { history, H, S, L } = this.state
    const currentColor = { H, S, L}

    return (
      <div className="grid-y align-center-middle" style={{width: '100%', height: '100%'}}>
        <div className="cell small-2 text-center">
          <div className="grid-x grid-padding-x align-center-middle" style={{height: '100%'}}>
            <div className="cell small-1">
              <button type="button" className="alert button" onClick={this.props.goHome}>
                <i className="fi-home"></i>
              </button>
            </div>
            <div className="cell small-11">
              <ColorPicker
                current={currentColor}
                history={history}
                setOneColorParam={this.setOneColorParam}
                setCurrentColor={this.setCurrentColor}
              />
            </div>
          </div>
        </div>
        <div className="cell small-10 align-center-middle">
          <Canvas size={this.props.gridSize} currentColor={currentColor} onClickBead={this.updateHistory} />
        </div>
      </div>
    )
  }
}

export default Workspace
