import React from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from './components/grid'
import SizePicker from './components/size-picker'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gridSize: 0 }
  }

  render(){
    const gridSize = this.state.gridSize
    return (
      <div className="App" style={{height: '100%'}}>
        {gridSize > 0 ?
        <Grid gridSize={gridSize} goHome={() => { this.setState({gridSize: 0}) }} /> :
        <SizePicker submitSliderValue={(v) => { this.setState({gridSize: v})} } />}
      </div>
    )
  }
}

export default App
