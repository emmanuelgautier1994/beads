import React from 'react'
import Canvas from './canvas'
import ColorPicker from './color-picker'
// import { CurrentColorContext } from './current-color-context'
import { HSVToHex } from '../utils/color-utils'

class Workspace extends React.Component {
  constructor(props) {
    super(props)
    this.state = { H: 0.5, S: 0.8, V: 0.6, history: [] }
  }

  setH = (newH) => {this.setState({h: newH})}
  setS = (newS) => {this.setState({s: newS})}
  setV = (newV) => {this.setState({v: newV})}

  setHSV = ({H, S, V}) => {this.setState({H, S, V})}
  setHSorV = (letter, newValue) => {
    if(!(['H', 'S', 'V'].includes(letter))) return
    this.setState({[letter]: newValue})
  }

  updateHistory = () => {
    this.setState((prevState) => {
      if(prevState.history.some(x => x.H === prevState.H && x.S === prevState.S && x.V === prevState.V)) return {}
      return {history: [{H: prevState.H, S: prevState.S, V: prevState.V}].concat(prevState.history)}
    })
  }


  render(){
    const { H, S, V , history } = this.state

    return (
      <div className="grid-x grid-margin-x align-center-middle" style={{width: '100%', height: '100%'}}>
        <div className="cell small-2 text-center">
          <div className="grid-y grid-padding-y">
            <div className="cell small-1">
              <button type="button" className="alert button" onClick={this.props.goHome}>
                <i className="fi-home"></i>
              </button>
            </div>
            <div className="cell small-11">
              <ColorPicker current={{H, S, V}} history={history} setHSorV={this.setHSorV} setHSV={this.setHSV} />
            </div>
          </div>
        </div>
        <div className="cell small-9 align-center-middle">
          <Canvas size={this.props.gridSize} currentColor={HSVToHex(H, S, V)} onClickBead={this.updateHistory} />
        </div>
      </div>
    )
  }
}

export default Workspace
