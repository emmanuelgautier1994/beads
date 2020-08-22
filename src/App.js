import React from 'react'
import './App.css'
import Workspace from './components/workspace'
import HomeScreen from './components/home-screen'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gridSize: 0 }
  }

  render(){
    const gridSize = this.state.gridSize
    return (
      <div className="App" style={{height: '100%', width: '100%', touchAction: 'none'}}>
        {gridSize > 0 ?
        <Workspace gridSize={gridSize} goHome={() => { this.setState({gridSize: 0}) }} /> :
        <HomeScreen submitWorkspaceSettings={(v) => { this.setState({gridSize: parseInt(v)})} } />}
      </div>
    )
  }
}

export default App
