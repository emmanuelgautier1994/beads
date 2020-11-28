import React from 'react'
import Canvas from './canvas'
import ColorPicker from './color-picker'
import UndoRedo from './undo-redo'
import { canvasesAreTheSame } from '../utils/objects'
import { Color } from '../utils/color'

class Workspace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColor: new Color(190, 80, 60),
      currentColorHistory: [],
      paintBuffer: [],
      canvasHistory: [{}],
      canvasHistoryCursor: 0
    }
  }

  setCurrentColor = (color) => {this.setState({currentColor: color})}

  setOneColorParam = (param, newValue) => {
    this.setState((prevState) => {
      const newColor = prevState.currentColor.slide(param, newValue)
      return !!newColor ? {currentColor: newColor} : {}
    })
  }

  updateCurrentColorHistory = () => {
    this.setState((prevState) => {
      if(prevState.currentColorHistory.some(x => x.equals(prevState.currentColor)))
        return {}
      
      return {
        currentColorHistory: [prevState.currentColor].concat(prevState.currentColorHistory).slice(0,12)
      }
    })
  }

  paint = (n) => {
    if(this.state.paintBuffer.includes(n)) return
    this.setState((prevState) => ({
      paintBuffer: prevState.paintBuffer.concat([n]),
      [`colorOfBead${n}`]: prevState.currentColor
    }))
  }

  stopPainting = () => {
    this.setState(
      {paintBuffer: []},
      () => {this.commitCanvas(this.getColorState(this.state))}
    )
  }

  getColorState = (fullState) => this.getColoredBeadsKeys(fullState)
    .reduce((obj, key) => {
      obj[key] = fullState[key]
      return obj
    }, {})

  getColoredBeadsKeys = (fullState) => Object.keys(fullState)
    .filter(key => key.slice(0,11) === 'colorOfBead')

  commitCanvas = (canvas) => {
    this.setState((prevState) => {
      if(canvasesAreTheSame(prevState.canvasHistory[prevState.canvasHistoryCursor], canvas))
        return {}
      
      return {
        canvasHistoryCursor: prevState.canvasHistoryCursor + 1,
        canvasHistory: prevState.canvasHistory.slice(0, prevState.canvasHistoryCursor+1).concat([canvas])
      }
    })
  }

  newColorState = (canvas, prevState) => Object.assign(
    this.getColoredBeadsKeys(prevState)
      .reduce((obj, key) => {
        obj[key] = null
        return obj
      }, {}),
    canvas
  )

  canUndo = () => (this.state.canvasHistoryCursor > 0)
  canRedo = () => (this.state.canvasHistoryCursor < this.state.canvasHistory.length - 1)

  undo = () => this.setState((prevState) => ({
    canvasHistoryCursor: prevState.canvasHistoryCursor - 1,
    ...this.newColorState(prevState.canvasHistory[prevState.canvasHistoryCursor - 1], prevState)
  }))
  redo = () => this.setState((prevState) => ({
    canvasHistoryCursor: prevState.canvasHistoryCursor + 1,
    ...this.newColorState(prevState.canvasHistory[prevState.canvasHistoryCursor + 1], prevState)
  }))


  render(){
    const { currentColorHistory, currentColor } = this.state
    const beadColors = this.getColorState(this.state)

    return (
      <div className="grid-y grid-frame">
        <div className="cell small-2 header text-center">
          <div className="grid-x align-center-middle" style={{height: '100%'}}>
            <div className="cell small-1">
              <button type="button" className="alert button" onClick={this.props.goHome}>
                <i className="fi-home"></i>
              </button>
            </div>
            <div className="cell small-11">
              <div className="grid-x grid-padding-x align-center-middle" style={{height: '100%'}}>
                <div className="cell small-6">
                  <ColorPicker
                    currentColor={currentColor}
                    currentColorHistory={currentColorHistory}
                    setOneColorParam={this.setOneColorParam}
                    setCurrentColor={this.setCurrentColor}
                  />
                </div>
                <div className="cell small-2">
                  <UndoRedo canUndo={this.canUndo()} canRedo={this.canRedo()} undo={this.undo} redo={this.redo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell small-10 align-center-middle">
          <Canvas
            size={this.props.gridSize}
            verticalLayout={this.props.verticalLayout}
            beadColors={beadColors}
            onClickBead={this.updateCurrentColorHistory}
            paint={this.paint}
            stopPainting={this.stopPainting}
          />
        </div>
      </div>
    )
  }
}

export default Workspace
