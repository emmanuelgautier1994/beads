import React from 'react'

class HSVSliders extends React.Component{
  constructor(props) {
    super(props)
    this.state = { }
  }

  handleChange = (e) => {
    this.props.setHSorV(e.target.name, parseFloat(e.target.value))
  }

  render(){
    const HSV = this.props.color
    return(
      <div className='grid-y align-center-middle text-center'>
        {/* <span>Hex : {HSVToHex(HSV.h, HSV.s, HSV.v)}</span> */}
        <div className="cell small-4">
          {/* <span>H : {HSV.h.toFixed(3)}</span> */}
          <input
            className="slider"
            name="H"
            type="range" min="0" max="1" step="0.01"
            value={HSV.H}
            onChange={this.handleChange}
          />
        </div>
        <div className="cell small-4">
          {/* <span>S : {HSV.s.toFixed(3)}</span> */}
          <input
            className="slider"
            name="S"
            type="range" min="0" max="1" step="0.01"
            value={HSV.S}
            onChange={this.handleChange}
          />
        </div>
        <div className="cell small-4">
          {/* <span>V : {HSV.v.toFixed(3)}</span> */}
          <input
            className="slider"
            name="V"
            type="range" min="0" max="1" step="0.01"
            value={HSV.V}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

// = ({ submitSliderValue }) => {
//   const [sizeValue, setSizeValue] = React.useState(20)

//   return (
//     <div className="grid-y grid-padding-y align-center-middle text-center" style={{height: '100%'}}>
//       <div className="cell small-1">
//         <p>Pick grid size</p>
//       </div>
//       <div className="cell small-2">
//         <input
//         id="grid-size-picker" className="slider"
//         type="range" min="5" max="50" step="1"
//         value={sizeValue}
//         onChange={(e) => {setSizeValue(e.target.value)}}
//         />
//         <br />
//         {sizeValue} x {sizeValue}
//       </div>
//       <div className="cell small-1">
//       <button
//         type="button" className="success button"
//         onClick={(e)=>{
//           e.stopPropagation()
//           submitSliderValue(sizeValue)}
//         }
//       >
//         Let's go!
//       </button>
//       </div>
//     </div>
//   )
// }

export default HSVSliders