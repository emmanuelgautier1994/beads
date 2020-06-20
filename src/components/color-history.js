import React from 'react'

class ColorHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }


  render(){
    const { currentColorHistory, setCurrentColor } = this.props

    return (
      <div className="grid-x grid-padding-x">
        {currentColorHistory.map((c, i) => (
          <div
            key={`currentColorHistory-${i}`}
            className='cell small-1'
            style={{background: c.CSS, color: c.CSS, cursor: 'pointer'}}
            onClick={() => {setCurrentColor(c)}}
          >c</div>
        ))}
      </div>
    )
  }
}

export default ColorHistory
