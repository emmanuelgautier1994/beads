import React from 'react'
import './App.css'
import Workspace from './components/workspace'
import HomeScreen from './components/home-screen'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gridSize: 20,
      verticalLayout: true,
      showCanvas: false,
    }
  }

  onClickGoButton = () => this.setState({ showCanvas: true })

  setGridSize = (gridSize) => this.setState({gridSize})
  setVerticalLayout = (verticalLayout) => this.setState({verticalLayout})

  render() {
    const { gridSize, verticalLayout, showCanvas } = this.state
    const { setGridSize, setVerticalLayout, onClickGoButton } = this

    return (
      <div className="App" style={{height: '100%', width: '100%', touchAction: 'none'}}>
        {showCanvas > 0 ?
        <Workspace gridSize={gridSize} verticalLayout={verticalLayout} goHome={() => { this.setState({showCanvas: false}) }} /> :
        <HomeScreen {...{gridSize, setGridSize, verticalLayout, setVerticalLayout, onClickGoButton}} />}
      </div>
    )
  }
}

export default App
